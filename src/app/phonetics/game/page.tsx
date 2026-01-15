'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Volume2, CheckCircle, XCircle } from 'lucide-react';
import Link from 'next/link';
import { GameProgressBar } from '@/components/game-progress-bar';
import { GameResultModal } from '@/components/game-result-modal';

const phoneticsData = [
  { symbol: '/iː/', example: 'see', sound: 'eee', cn: '看见' },
  { symbol: '/ɪ/', example: 'sit', sound: 'ih', cn: '坐' },
  { symbol: '/e/', example: 'ten', sound: 'eh', cn: '十' },
  { symbol: '/æ/', example: 'cat', sound: 'ae', cn: '猫' },
  { symbol: '/ɜː/', example: 'bird', sound: 'er', cn: '鸟' },
  { symbol: '/ə/', example: 'about', sound: 'uh', cn: '关于' },
  { symbol: '/ʌ/', example: 'cup', sound: 'u', cn: '杯子' },
  { symbol: '/uː/', example: 'too', sound: 'ooo', cn: '也' },
  { symbol: '/ʊ/', example: 'put', sound: 'oo', cn: '放' },
  { symbol: '/ɔː/', example: 'door', sound: 'or', cn: '门' },
  { symbol: '/ɒ/', example: 'hot', sound: 'o', cn: '热' },
  { symbol: '/ɑː/', example: 'car', sound: 'ah', cn: '汽车' },
  { symbol: '/eɪ/', example: 'face', sound: 'ay', cn: '脸' },
  { symbol: '/aɪ/', example: 'like', sound: 'eye', cn: '喜欢' },
  { symbol: '/ɔɪ/', example: 'boy', sound: 'oy', cn: '男孩' },
  { symbol: '/aʊ/', example: 'mouse', sound: 'ow', cn: '老鼠' },
  { symbol: '/əʊ/', example: 'go', sound: 'oh', cn: '去' },
  { symbol: '/ɪə/', example: 'ear', sound: 'ear', cn: '耳朵' },
  { symbol: '/eə/', example: 'air', sound: 'air', cn: '空气' },
  { symbol: '/ʊə/', example: 'pure', sound: 'ure', cn: '纯粹的' },
  { symbol: '/p/', example: 'pen', sound: 'p', cn: '钢笔' },
  { symbol: '/t/', example: 'tea', sound: 't', cn: '茶' },
  { symbol: '/k/', example: 'key', sound: 'k', cn: '钥匙' },
  { symbol: '/b/', example: 'book', sound: 'b', cn: '书' },
  { symbol: '/d/', example: 'dog', sound: 'd', cn: '狗' },
  { symbol: '/g/', example: 'girl', sound: 'g', cn: '女孩' },
];

export default function PhoneticsGamePage() {
  const [level, setLevel] = useState(1);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questions, setQuestions] = useState<typeof phoneticsData[]>([]);
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
    const shuffled = [...phoneticsData].sort(() => Math.random() - 0.5);
    const levelQuestions = shuffled.slice(0, questionsPerLevel);
    setQuestions(levelQuestions);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setIsCorrect(null);
  };

  const getOptions = (correctWord: string) => {
    const otherWords = phoneticsData.filter(p => p.example !== correctWord);
    const wrongOptions = otherWords
      .sort(() => Math.random() - 0.5)
      .slice(0, 3)
      .map(p => p.example);
    const options = [...wrongOptions, correctWord].sort(() => Math.random() - 0.5);
    return options;
  };

  const speakWord = async (word: string) => {
    try {
      const response = await fetch('/api/tts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text: word,
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

    const currentPhonetic = questions[currentQuestion];
    const correct = answer === currentPhonetic.example;

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
    window.location.href = '/phonetics';
  };

  const currentPhonetic = questions[currentQuestion];
  const options = currentPhonetic ? getOptions(currentPhonetic.example) : [];
  const correctAnswers = Math.floor(score / 20);
  const totalQuestionsAnswered = (level - 1) * questionsPerLevel + currentQuestion + (selectedAnswer ? 1 : 0);

  if (!currentPhonetic) {
    return <div className="text-center p-8">加载中...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <Link href="/phonetics">
            <Button variant="outline" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              返回学习
            </Button>
          </Link>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            音标闯关游戏
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
            <CardTitle className="text-6xl md:text-7xl font-bold text-primary mb-4">
              {currentPhonetic.symbol}
            </CardTitle>
            <CardDescription className="text-lg mb-2">
              找出包含这个音标的单词
            </CardDescription>
            <p className="text-muted-foreground text-sm">
              音标发音: {currentPhonetic.sound}
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              {options.map((option, index) => {
                const optionData = phoneticsData.find(p => p.example === option);
                const isSelected = selectedAnswer === option;
                const showResultIcon = selectedAnswer !== null;

                return (
                  <div key={index} className="flex gap-2">
                    <Button
                      size="lg"
                      variant={isSelected ? (isCorrect ? 'default' : 'destructive') : 'outline'}
                      className={`flex-1 h-24 text-xl font-semibold transition-all ${
                        isSelected && isCorrect
                          ? 'bg-green-500 hover:bg-green-600 scale-105'
                          : isSelected && !isCorrect
                          ? 'bg-red-500 hover:bg-red-600 scale-95'
                          : 'hover:scale-105'
                      }`}
                      onClick={() => handleAnswer(option)}
                      disabled={selectedAnswer !== null}
                    >
                      <div className="flex flex-col items-center gap-1">
                        {showResultIcon && isSelected && (
                          isCorrect ? (
                            <CheckCircle className="h-5 w-5" />
                          ) : (
                            <XCircle className="h-5 w-5" />
                          )
                        )}
                        <span className="font-bold">{option}</span>
                        <span className="text-sm opacity-70">{optionData?.cn}</span>
                      </div>
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => speakWord(option)}
                      disabled={selectedAnswer !== null}
                      className="self-center"
                    >
                      <Volume2 className="h-4 w-4" />
                    </Button>
                  </div>
                );
              })}
            </div>

            {/* 提示 */}
            {selectedAnswer !== null && (
              <div className="text-center p-4 rounded-lg bg-purple-50 dark:bg-purple-900/30">
                <p className="text-lg font-semibold">
                  正确答案是: {currentPhonetic.example} ({currentPhonetic.cn})
                </p>
                <p className="text-sm text-muted-foreground">
                  音标发音: {currentPhonetic.sound}
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
