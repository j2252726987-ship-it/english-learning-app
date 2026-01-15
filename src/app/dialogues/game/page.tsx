'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Volume2, CheckCircle, XCircle, User } from 'lucide-react';
import Link from 'next/link';
import { GameProgressBar } from '@/components/game-progress-bar';
import { GameResultModal } from '@/components/game-result-modal';
import { dialogues } from '@/lib/dialogues-data';

// 获取较短的对话用于游戏
const shortDialogues = dialogues
  .filter(d => d.scenario.length <= 4)
  .slice(0, 30);

export default function DialoguesGamePage() {
  const [level, setLevel] = useState(1);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questions, setQuestions] = useState<typeof shortDialogues>([]);
  const [availableLines, setAvailableLines] = useState<typeof dialogues[0]['scenario']>([]);
  const [orderedLines, setOrderedLines] = useState<typeof dialogues[0]['scenario']>([]);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const totalLevels = 5;
  const questionsPerLevel = 5;

  useEffect(() => {
    generateQuestions();
  }, [level]);

  const generateQuestions = () => {
    const shuffled = [...shortDialogues].sort(() => Math.random() - 0.5);
    const levelQuestions = shuffled.slice(0, questionsPerLevel);
    setQuestions(levelQuestions);
    setCurrentQuestion(0);
    setOrderedLines([]);
    setIsCorrect(null);
    shuffleDialogue(levelQuestions[0]);
  };

  const shuffleDialogue = (dialogue: typeof shortDialogues[0]) => {
    const shuffled = [...dialogue.scenario].sort(() => Math.random() - 0.5);
    setAvailableLines(shuffled);
  };

  const speakLine = async (text: string, speaker: 'A' | 'B') => {
    if (isPlaying) return;

    try {
      setIsPlaying(true);

      const speakerId = speaker === 'A'
        ? 'zh_male_m191_uranus_bigtts'
        : 'zh_female_vv_uranus_bigtts';

      const response = await fetch('/api/tts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text,
          speaker: speakerId,
          speechRate: -5,
          loudnessRate: 10
        }),
      });

      const data = await response.json();
      const audio = new Audio(data.audioUri);
      audio.onended = () => setIsPlaying(false);
      audio.onerror = () => setIsPlaying(false);
      audio.play();
    } catch (error) {
      console.error('Speech error:', error);
      setIsPlaying(false);
    }
  };

  const handleLineClick = (line: typeof dialogues[0]['scenario'][0], index: number) => {
    if (isCorrect !== null || isPlaying) return;

    const newAvailable = [...availableLines];
    newAvailable.splice(index, 1);
    setAvailableLines(newAvailable);

    setOrderedLines([...orderedLines, line]);

    // 自动播放新添加的句子
    speakLine(line.text, line.speaker);
  };

  const handleReset = () => {
    if (isCorrect !== null) return;

    const currentDialogue = questions[currentQuestion];
    setOrderedLines([]);
    shuffleDialogue(currentDialogue);
  };

  const handleSubmit = () => {
    if (isCorrect !== null) return;

    const currentDialogue = questions[currentQuestion];
    const userOrder = orderedLines.map(l => l.text);
    const correctOrder = currentDialogue.scenario.map(l => l.text);

    const correct = userOrder.join('|') === correctOrder.join('|');

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
        setOrderedLines([]);
        setIsCorrect(null);
        shuffleDialogue(nextQuestion);
      }
    }, 2500);
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
    window.location.href = '/dialogues';
  };

  const currentDialogue = questions[currentQuestion];
  const correctAnswers = Math.floor(score / 20);
  const totalQuestionsAnswered = (level - 1) * questionsPerLevel + currentQuestion + (isCorrect !== null ? 1 : 0);

  if (!currentDialogue) {
    return <div className="text-center p-8">加载中...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-8">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <Link href="/dialogues">
            <Button variant="outline" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              返回学习
            </Button>
          </Link>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            对话排序游戏
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

        {/* 对话标题 */}
        <Card className="mb-6 shadow-2xl border-2">
          <CardHeader className="text-center">
            <div className="text-5xl mb-2">{currentDialogue.icon}</div>
            <CardTitle className="text-3xl font-bold">{currentDialogue.title}</CardTitle>
            <p className="text-muted-foreground">将对话按正确顺序排列</p>
          </CardHeader>
        </Card>

        {/* 排序区域 */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* 待选句子 */}
          <Card className="shadow-xl border-2">
            <CardHeader>
              <CardTitle className="text-xl">待选句子</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {availableLines.map((line, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className={`w-full text-left justify-start h-auto py-4 px-4 hover:scale-105 transition-transform ${
                    line.speaker === 'A'
                      ? 'border-blue-300 dark:border-blue-700'
                      : 'border-pink-300 dark:border-pink-700'
                  }`}
                  onClick={() => handleLineClick(line, index)}
                  disabled={isCorrect !== null || isPlaying}
                >
                  <div className="flex items-start gap-3">
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                      line.speaker === 'A' ? 'bg-blue-500 text-white' : 'bg-pink-500 text-white'
                    }`}>
                      <User className="h-4 w-4" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-lg">{line.text}</p>
                      <p className="text-sm text-muted-foreground">{line.cn}</p>
                    </div>
                  </div>
                </Button>
              ))}
              {availableLines.length === 0 && isCorrect === null && (
                <p className="text-center text-muted-foreground">所有句子已选择</p>
              )}
            </CardContent>
          </Card>

          {/* 已排序句子 */}
          <Card className="shadow-xl border-2">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl">对话顺序</CardTitle>
                {orderedLines.length > 0 && isCorrect === null && (
                  <Button size="sm" variant="outline" onClick={handleReset}>
                    重置
                  </Button>
                )}
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              {orderedLines.map((line, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-xl border-2 transition-all ${
                    line.speaker === 'A'
                      ? 'bg-blue-50 dark:bg-blue-900/30 border-blue-200 dark:border-blue-800'
                      : 'bg-pink-50 dark:bg-pink-900/30 border-pink-200 dark:border-pink-800'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                      line.speaker === 'A' ? 'bg-blue-500 text-white' : 'bg-pink-500 text-white'
                    }`}>
                      <User className="h-4 w-4" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start gap-2">
                        <span className="text-sm text-muted-foreground mt-1">{index + 1}.</span>
                        <div>
                          <p className="font-semibold text-lg">{line.text}</p>
                          <p className="text-sm text-muted-foreground">{line.cn}</p>
                        </div>
                      </div>
                    </div>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => speakLine(line.text, line.speaker)}
                      disabled={isPlaying}
                    >
                      <Volume2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
              {orderedLines.length === 0 && (
                <p className="text-center text-muted-foreground py-8">
                  点击左侧句子添加到对话顺序中
                </p>
              )}
            </CardContent>
          </Card>
        </div>

        {/* 提交按钮 */}
        {orderedLines.length > 0 && isCorrect === null && (
          <div className="flex justify-center mb-6">
            <Button
              size="lg"
              onClick={handleSubmit}
              disabled={orderedLines.length !== currentDialogue.scenario.length}
              className="w-full md:w-auto"
            >
              确认排序
            </Button>
          </div>
        )}

        {/* 结果提示 */}
        {isCorrect !== null && (
          <Card className={`shadow-xl border-2 ${
            isCorrect ? 'border-green-500 bg-green-50 dark:bg-green-900/30' : 'border-red-500 bg-red-50 dark:bg-red-900/30'
          }`}>
            <CardContent className="py-6">
              <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-4">
                  {isCorrect ? (
                    <>
                      <CheckCircle className="h-10 w-10 text-green-600" />
                      <span className="text-3xl font-bold text-green-600">正确！</span>
                    </>
                  ) : (
                    <>
                      <XCircle className="h-10 w-10 text-red-600" />
                      <span className="text-3xl font-bold text-red-600">顺序错误！</span>
                    </>
                  )}
                </div>
                {!isCorrect && (
                  <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded-xl">
                    <p className="text-lg font-semibold mb-3">正确顺序：</p>
                    {currentDialogue.scenario.map((line, index) => (
                      <div key={index} className="flex items-start gap-2 mb-2">
                        <span className="text-sm text-muted-foreground mt-1">{index + 1}.</span>
                        <p className="font-medium">{line.text}</p>
                        <span className="text-sm text-muted-foreground">({line.cn})</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        )}

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
