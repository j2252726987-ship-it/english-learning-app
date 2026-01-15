'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Volume2, CheckCircle, XCircle } from 'lucide-react';
import Link from 'next/link';
import { GameProgressBar } from '@/components/game-progress-bar';
import { GameResultModal } from '@/components/game-result-modal';

const lettersData = [
  { char: 'A', sound: 'ay', example: 'Apple' },
  { char: 'B', sound: 'bee', example: 'Ball' },
  { char: 'C', sound: 'see', example: 'Cat' },
  { char: 'D', sound: 'dee', example: 'Dog' },
  { char: 'E', sound: 'ee', example: 'Egg' },
  { char: 'F', sound: 'ef', example: 'Fish' },
  { char: 'G', sound: 'jee', example: 'Goat' },
  { char: 'H', sound: 'aych', example: 'Hat' },
  { char: 'I', sound: 'eye', example: 'Ice' },
  { char: 'J', sound: 'jay', example: 'Juice' },
  { char: 'K', sound: 'kay', example: 'Key' },
  { char: 'L', sound: 'el', example: 'Lion' },
  { char: 'M', sound: 'em', example: 'Moon' },
  { char: 'N', sound: 'en', example: 'Nose' },
  { char: 'O', sound: 'oh', example: 'Orange' },
  { char: 'P', sound: 'pee', example: 'Pig' },
  { char: 'Q', sound: 'cue', example: 'Queen' },
  { char: 'R', sound: 'ar', example: 'Rabbit' },
  { char: 'S', sound: 'ess', example: 'Sun' },
  { char: 'T', sound: 'tee', example: 'Tree' },
  { char: 'U', sound: 'you', example: 'Umbrella' },
  { char: 'V', sound: 'vee', example: 'Violin' },
  { char: 'W', sound: 'double-u', example: 'Water' },
  { char: 'X', sound: 'ex', example: 'X-ray' },
  { char: 'Y', sound: 'why', example: 'Yellow' },
  { char: 'Z', sound: 'zee', example: 'Zebra' },
];

const sounds = lettersData.map(l => l.sound);

export default function LettersGamePage() {
  const [level, setLevel] = useState(1);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questions, setQuestions] = useState<typeof lettersData[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const totalLevels = 5;
  const questionsPerLevel = 5;

  useEffect(() => {
    generateQuestions();
  }, [level]);

  const generateQuestions = () => {
    const shuffled = [...lettersData].sort(() => Math.random() - 0.5);
    const levelQuestions = shuffled.slice(0, questionsPerLevel);
    setQuestions(levelQuestions);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setIsCorrect(null);
  };

  const getOptions = (correctSound: string) => {
    const otherSounds = sounds.filter(s => s !== correctSound);
    const wrongOptions = otherSounds
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);
    const options = [...wrongOptions, correctSound].sort(() => Math.random() - 0.5);
    return options;
  };

  const speakLetter = async (char: string) => {
    try {
      const response = await fetch('/api/tts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text: char,
          speaker: 'zh_female_vv_uranus_bigtts',
          speechRate: -10,
          loudnessRate: 10
        }),
      });

      const data = await response.json();
      const audio = new Audio(data.audioUri);
      audio.play();
    } catch (error) {
      console.error('Speech error:', error);
    }
  };

  const handleAnswer = (answer: string) => {
    if (selectedAnswer !== null) return;

    const currentLetter = questions[currentQuestion];
    const correct = answer === currentLetter.sound;

    setSelectedAnswer(answer);
    setIsCorrect(correct);

    if (correct) {
      setScore(prev => prev + 20);
    } else {
      setLives(prev => prev - 1);
    }

    setTimeout(() => {
      if (lives - (correct ? 0 : 1) === 0) {
        setGameOver(true);
        setShowResult(true);
        return;
      }

      if (currentQuestion + 1 >= questionsPerLevel) {
        if (level >= totalLevels) {
          setGameOver(true);
          setShowResult(true);
        } else {
          setLevel(prev => prev + 1);
        }
      } else {
        setCurrentQuestion(prev => prev + 1);
        setSelectedAnswer(null);
        setIsCorrect(null);
      }
    }, 1500);
  };

  const handleRestart = () => {
    setLevel(1);
    setScore(0);
    setLives(3);
    setCurrentQuestion(0);
    setGameOver(false);
    setShowResult(false);
    generateQuestions();
  };

  const handleNextLevel = () => {
    setShowResult(false);
    generateQuestions();
  };

  const handleHome = () => {
    window.location.href = '/letters';
  };

  const currentLetter = questions[currentQuestion];
  const options = currentLetter ? getOptions(currentLetter.sound) : [];
  const correctAnswers = Math.floor(score / 20);
  const totalQuestionsAnswered = (level - 1) * questionsPerLevel + currentQuestion + (selectedAnswer ? 1 : 0);

  if (!currentLetter) {
    return <div className="text-center p-8">加载中...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <Link href="/letters">
            <Button variant="outline" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              返回学习
            </Button>
          </Link>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            字母闯关游戏
          </h1>
          <div className="w-24" />
        </div>

        {/* 游戏进度 */}
        <GameProgressBar
          currentLevel={level}
          totalLevels={totalLevels}
          score={score}
          lives={lives}
        />

        {/* 游戏卡片 */}
        <Card className="mb-6 shadow-2xl border-2">
          <CardHeader className="text-center">
            <CardTitle className="text-8xl md:text-9xl font-bold text-primary mb-4">
              {currentLetter.char}
            </CardTitle>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full mb-2"
              onClick={() => speakLetter(currentLetter.char)}
            >
              <Volume2 className="h-6 w-6 mr-2" />
              听字母发音
            </Button>
            <p className="text-muted-foreground text-sm">
              点击喇叭听发音，然后选择正确的读音
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              {options.map((option, index) => {
                const isSelected = selectedAnswer === option;
                const showResultIcon = selectedAnswer !== null;

                return (
                  <Button
                    key={index}
                    size="lg"
                    variant={isSelected ? (isCorrect ? 'default' : 'destructive') : 'outline'}
                    className={`h-20 text-xl font-semibold transition-all ${
                      isSelected && isCorrect
                        ? 'bg-green-500 hover:bg-green-600 scale-105'
                        : isSelected && !isCorrect
                        ? 'bg-red-500 hover:bg-red-600 scale-95'
                        : 'hover:scale-105'
                    }`}
                    onClick={() => handleAnswer(option)}
                    disabled={selectedAnswer !== null}
                  >
                    {showResultIcon && isSelected && (
                      isCorrect ? (
                        <CheckCircle className="h-5 w-5 mr-2" />
                      ) : (
                        <XCircle className="h-5 w-5 mr-2" />
                      )
                    )}
                    {option}
                  </Button>
                );
              })}
            </div>

            {/* 提示 */}
            {selectedAnswer !== null && (
              <div className="text-center p-4 rounded-lg bg-blue-50 dark:bg-blue-900/30">
                <p className="text-lg font-semibold">
                  正确答案是: {currentLetter.sound} ({currentLetter.example})
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* 结果弹窗 */}
        <GameResultModal
          isOpen={showResult}
          onClose={() => setShowResult(false)}
          score={score}
          totalQuestions={questionsPerLevel * level}
          correctAnswers={correctAnswers}
          level={level}
          onRestart={handleRestart}
          onNextLevel={level < totalLevels && !gameOver ? handleNextLevel : undefined}
          onHome={handleHome}
        />
      </div>
    </div>
  );
}
