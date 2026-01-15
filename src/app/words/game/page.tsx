'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Volume2, RefreshCw, CheckCircle, XCircle, Backspace } from 'lucide-react';
import Link from 'next/link';
import { GameProgressBar } from '@/components/game-progress-bar';
import { GameResultModal } from '@/components/game-result-modal';
import { wordsData } from '@/lib/words-data';

// 获取所有单词
const allWords = wordsData.flatMap(category => category.words).slice(0, 100);

export default function WordsGamePage() {
  const [level, setLevel] = useState(1);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questions, setQuestions] = useState<typeof allWords>([]);
  const [scrambledLetters, setScrambledLetters] = useState<string[]>([]);
  const [userAnswer, setUserAnswer] = useState<string[]>([]);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const totalLevels = 5;
  const questionsPerLevel = 5;

  useEffect(() => {
    generateQuestions();
  }, [level]);

  const generateQuestions = () => {
    const shuffled = [...allWords].sort(() => Math.random() - 0.5);
    const levelQuestions = shuffled.slice(0, questionsPerLevel);
    setQuestions(levelQuestions);
    setCurrentQuestion(0);
    setUserAnswer([]);
    setIsCorrect(null);
    generateScrambledLetters(levelQuestions[0]);
  };

  const generateScrambledLetters = (word: typeof allWords[0]) => {
    const letters = word.word.split('');
    const shuffled = letters.sort(() => Math.random() - 0.5);
    setScrambledLetters(shuffled);
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

  const handleLetterClick = (letter: string, index: number) => {
    if (isCorrect !== null) return;

    const newScrambled = [...scrambledLetters];
    newScrambled.splice(index, 1);
    setScrambledLetters(newScrambled);

    setUserAnswer([...userAnswer, letter]);
  };

  const handleBackspace = () => {
    if (isCorrect !== null || userAnswer.length === 0) return;

    const removedLetter = userAnswer[userAnswer.length - 1];
    setUserAnswer(userAnswer.slice(0, -1));

    // 将字母放回打乱字母列表
    const insertIndex = Math.floor(Math.random() * (scrambledLetters.length + 1));
    const newScrambled = [...scrambledLetters];
    newScrambled.splice(insertIndex, 0, removedLetter);
    setScrambledLetters(newScrambled);
  };

  const handleSubmit = () => {
    if (isCorrect !== null) return;

    const currentWord = questions[currentQuestion];
    const userSpelling = userAnswer.join('');
    const correct = userSpelling.toLowerCase() === currentWord.word.toLowerCase();

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
        const nextQuestion = questions[currentQuestion + 1];
        setCurrentQuestion(prev => prev + 1);
        setUserAnswer([]);
        setIsCorrect(null);
        generateScrambledLetters(nextQuestion);
      }
    }, 2000);
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
    window.location.href = '/words';
  };

  const currentWord = questions[currentQuestion];
  const correctAnswers = Math.floor(score / 20);
  const totalQuestionsAnswered = (level - 1) * questionsPerLevel + currentQuestion + (isCorrect !== null ? 1 : 0);

  if (!currentWord) {
    return <div className="text-center p-8">加载中...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <Link href="/words">
            <Button variant="outline" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              返回学习
            </Button>
          </Link>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            单词拼写游戏
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
            <div className="text-7xl mb-4">{currentWord.emoji}</div>
            <CardTitle className="text-4xl font-bold mb-2">{currentWord.cn}</CardTitle>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full"
              onClick={() => speakWord(currentWord.word)}
            >
              <Volume2 className="h-5 w-5 mr-2" />
              听单词发音
            </Button>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* 答案显示区 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 min-h-[80px] border-2 border-dashed border-gray-300 dark:border-gray-600">
              <div className="flex justify-center items-center gap-2 flex-wrap">
                {userAnswer.length === 0 ? (
                  <p className="text-muted-foreground text-lg">点击下方字母拼写单词</p>
                ) : (
                  userAnswer.map((letter, index) => (
                    <div
                      key={index}
                      className={`w-12 h-12 flex items-center justify-center text-2xl font-bold rounded-lg transition-all ${
                        isCorrect
                          ? 'bg-green-500 text-white'
                          : isCorrect === false && index >= userAnswer.length - (currentWord.word.length - userAnswer.length)
                          ? 'bg-red-500 text-white'
                          : 'bg-primary text-white'
                      }`}
                    >
                      {letter}
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* 操作按钮 */}
            {userAnswer.length > 0 && isCorrect === null && (
              <div className="flex justify-center gap-4">
                <Button
                  size="lg"
                  variant="outline"
                  onClick={handleBackspace}
                  className="gap-2"
                >
                  <Backspace className="h-5 w-5" />
                  删除
                </Button>
                <Button
                  size="lg"
                  onClick={handleSubmit}
                  className="gap-2"
                >
                  确认
                </Button>
              </div>
            )}

            {/* 字母选择区 */}
            <div className="flex flex-wrap justify-center gap-3">
              {scrambledLetters.map((letter, index) => (
                <Button
                  key={`${letter}-${index}`}
                  size="lg"
                  variant="outline"
                  className="w-14 h-14 text-2xl font-bold rounded-xl hover:scale-110 transition-transform"
                  onClick={() => handleLetterClick(letter, index)}
                  disabled={isCorrect !== null}
                >
                  {letter}
                </Button>
              ))}
              {scrambledLetters.length === 0 && isCorrect === null && (
                <Button
                  size="lg"
                  variant="ghost"
                  onClick={() => {
                    setUserAnswer([]);
                    generateScrambledLetters(currentWord);
                  }}
                  className="w-14 h-14 rounded-xl"
                >
                  <RefreshCw className="h-6 w-6" />
                </Button>
              )}
            </div>

            {/* 结果提示 */}
            {isCorrect !== null && (
              <div className={`text-center p-6 rounded-xl ${
                isCorrect ? 'bg-green-50 dark:bg-green-900/30' : 'bg-red-50 dark:bg-red-900/30'
              }`}>
                <div className="flex items-center justify-center gap-2 mb-2">
                  {isCorrect ? (
                    <>
                      <CheckCircle className="h-8 w-8 text-green-600" />
                      <span className="text-2xl font-bold text-green-600">正确！</span>
                    </>
                  ) : (
                    <>
                      <XCircle className="h-8 w-8 text-red-600" />
                      <span className="text-2xl font-bold text-red-600">错误！</span>
                    </>
                  )}
                </div>
                {!isCorrect && (
                  <p className="text-lg font-semibold">
                    正确答案是: {currentWord.word}
                  </p>
                )}
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
