'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Volume2, Trophy, Star, ArrowRight, Home, RotateCcw } from 'lucide-react';
import Link from 'next/link';

// 关卡类型
type QuestionType = 'letter' | 'phonetic' | 'word' | 'dialogue';

// 题目接口
interface Question {
  id: number;
  type: QuestionType;
  question: string;
  options: string[];
  correctAnswer: number;
  hint?: string;
}

// 字母数据
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

// 音标数据
const phonetics = [
  { symbol: '/iː/', sound: 'eee' },
  { symbol: '/ɪ/', sound: 'ih' },
  { symbol: '/e/', sound: 'eh' },
  { symbol: '/æ/', sound: 'ae' },
  { symbol: '/ɑː/', sound: 'ah' },
  { symbol: '/ɒ/', sound: 'o' },
  { symbol: '/ɔː/', sound: 'or' },
  { symbol: '/ʊ/', sound: 'oo' },
  { symbol: '/uː/', sound: 'ooo' },
  { symbol: '/ʌ/', sound: 'u' },
  { symbol: '/ə/', sound: 'uh' },
  { symbol: '/eɪ/', sound: 'ay' },
  { symbol: '/aɪ/', sound: 'eye' },
  { symbol: '/ɔɪ/', sound: 'oy' },
  { symbol: '/əʊ/', sound: 'oh' },
  { symbol: '/aʊ/', sound: 'ow' },
];

// 单词数据
const words = [
  { word: 'apple', cn: '苹果', phonetic: '/ˈæpl/' },
  { word: 'banana', cn: '香蕉', phonetic: '/bəˈnɑːnə/' },
  { word: 'cat', cn: '猫', phonetic: '/kæt/' },
  { word: 'dog', cn: '狗', phonetic: '/dɒɡ/' },
  { word: 'elephant', cn: '大象', phonetic: '/ˈelɪfənt/' },
  { word: 'fish', cn: '鱼', phonetic: '/fɪʃ/' },
  { word: 'giraffe', cn: '长颈鹿', phonetic: '/dʒəˈrɑːf/' },
  { word: 'horse', cn: '马', phonetic: '/hɔːs/' },
  { word: 'ice', cn: '冰', phonetic: '/aɪs/' },
  { word: 'juice', cn: '果汁', phonetic: '/dʒuːs/' },
  { word: 'kite', cn: '风筝', phonetic: '/kaɪt/' },
  { word: 'lion', cn: '狮子', phonetic: '/ˈlaɪən/' },
  { word: 'monkey', cn: '猴子', phonetic: '/ˈmʌŋki/' },
  { word: 'nose', cn: '鼻子', phonetic: '/nəʊz/' },
  { word: 'orange', cn: '橙子', phonetic: '/ˈɒrɪndʒ/' },
  { word: 'penguin', cn: '企鹅', phonetic: '/ˈpeŋɡwɪn/' },
  { word: 'queen', cn: '女王', phonetic: '/kwiːn/' },
  { word: 'rabbit', cn: '兔子', phonetic: '/ˈræbɪt/' },
  { word: 'snake', cn: '蛇', phonetic: '/sneɪk/' },
  { word: 'tiger', cn: '老虎', phonetic: '/ˈtaɪɡə/' },
];

// 对话语句
const dialogues = [
  { text: 'Hello!', cn: '你好！' },
  { text: 'How are you?', cn: '你好吗？' },
  { text: 'Good morning!', cn: '早上好！' },
  { text: 'Thank you!', cn: '谢谢你！' },
  { text: 'Nice to meet you!', cn: '很高兴见到你！' },
  { text: 'What is your name?', cn: '你叫什么名字？' },
  { text: 'Goodbye!', cn: '再见！' },
  { text: 'See you later!', cn: '回头见！' },
  { text: 'I am fine!', cn: '我很好！' },
  { text: 'You are welcome!', cn: '不客气！' },
];

// 生成随机字母题目
function generateLetterQuestion(level: number): Question {
  const correctLetter = letters[Math.floor(Math.random() * letters.length)];
  let options = [correctLetter];

  // 生成干扰项
  while (options.length < 4) {
    const randomLetter = letters[Math.floor(Math.random() * letters.length)];
    if (!options.includes(randomLetter)) {
      options.push(randomLetter);
    }
  }

  // 打乱选项顺序
  options = options.sort(() => Math.random() - 0.5);

  return {
    id: Date.now(),
    type: 'letter',
    question: `选择字母: ${correctLetter}`,
    options,
    correctAnswer: options.indexOf(correctLetter),
    hint: '根据字母形状判断'
  };
}

// 生成音标题目
function generatePhoneticQuestion(level: number): Question {
  const correctPhonetic = phonetics[Math.floor(Math.random() * phonetics.length)];
  let options = [correctPhonetic.symbol];

  // 生成干扰项
  while (options.length < 4) {
    const randomPhonetic = phonetics[Math.floor(Math.random() * phonetics.length)];
    if (!options.includes(randomPhonetic.symbol)) {
      options.push(randomPhonetic.symbol);
    }
  }

  // 打乱选项顺序
  options = options.sort(() => Math.random() - 0.5);

  return {
    id: Date.now(),
    type: 'phonetic',
    question: `音标发音: ${correctPhonetic.symbol}`,
    options,
    correctAnswer: options.indexOf(correctPhonetic.symbol),
    hint: '听音标发音'
  };
}

// 生成单词题目
function generateWordQuestion(level: number): Question {
  const correctWord = words[Math.floor(Math.random() * words.length)];
  let options = [correctWord.word];

  // 生成干扰项
  while (options.length < 4) {
    const randomWord = words[Math.floor(Math.random() * words.length)];
    if (!options.includes(randomWord.word)) {
      options.push(randomWord.word);
    }
  }

  // 打乱选项顺序
  options = options.sort(() => Math.random() - 0.5);

  return {
    id: Date.now(),
    type: 'word',
    question: `${correctWord.cn} 的英文是？`,
    options,
    correctAnswer: options.indexOf(correctWord.word),
    hint: `音标: ${correctWord.phonetic}`
  };
}

// 生成对话题目
function generateDialogueQuestion(level: number): Question {
  const correctDialogue = dialogues[Math.floor(Math.random() * dialogues.length)];
  let options = [correctDialogue.text];

  // 生成干扰项
  while (options.length < 4) {
    const randomDialogue = dialogues[Math.floor(Math.random() * dialogues.length)];
    if (!options.includes(randomDialogue.text)) {
      options.push(randomDialogue.text);
    }
  }

  // 打乱选项顺序
  options = options.sort(() => Math.random() - 0.5);

  return {
    id: Date.now(),
    type: 'dialogue',
    question: `"${correctDialogue.cn}" 用英语怎么说？`,
    options,
    correctAnswer: options.indexOf(correctDialogue.text),
    hint: '这是日常对话'
  };
}

// 根据关卡生成题目
function generateQuestion(level: number): Question {
  const questionTypes: QuestionType[] = ['letter', 'phonetic', 'word', 'dialogue'];

  // 随着关卡增加，题目难度递增
  const difficulty = Math.floor(level / 5) + 1;

  // 根据关卡选择题目类型
  const typeIndex = level % 4;
  const type = questionTypes[typeIndex];

  switch (type) {
    case 'letter':
      return generateLetterQuestion(difficulty);
    case 'phonetic':
      return generatePhoneticQuestion(difficulty);
    case 'word':
      return generateWordQuestion(difficulty);
    case 'dialogue':
      return generateDialogueQuestion(difficulty);
    default:
      return generateWordQuestion(difficulty);
  }
}

export default function GamesPage() {
  const [level, setLevel] = useState(1);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [answered, setAnswered] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [streak, setStreak] = useState(0);

  // 初始化第一题
  useEffect(() => {
    setCurrentQuestion(generateQuestion(level));
  }, [level]);

  // 播放语音
  const speak = async (text: string) => {
    try {
      const response = await fetch('/api/tts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text,
          speaker: 'zh_female_vv_uranus_bigtts',
          speechRate: -10,
          loudnessRate: 10
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const audio = new Audio(data.audioUri);
        audio.play();
      }
    } catch (error) {
      console.error('Speech error:', error);
    }
  };

  // 处理答案选择
  const handleAnswer = (answerIndex: number) => {
    if (answered) return;

    setSelectedAnswer(answerIndex);
    setAnswered(true);

    if (answerIndex === currentQuestion!.correctAnswer) {
      setCorrectAnswers(correctAnswers + 1);
      setScore(score + 10 + streak * 2); // 连对加分
      setStreak(streak + 1);

      // 播放正确音效
      setTimeout(() => {
        nextLevel();
      }, 1500);
    } else {
      setStreak(0);
      setTimeout(() => {
        setShowResult(true);
      }, 1500);
    }
  };

  // 下一关
  const nextLevel = () => {
    setLevel(level + 1);
    setAnswered(false);
    setSelectedAnswer(null);
    setShowResult(false);
    setCurrentQuestion(generateQuestion(level + 1));
  };

  // 重新开始
  const restart = () => {
    setLevel(1);
    setScore(0);
    setCorrectAnswers(0);
    setAnswered(false);
    setSelectedAnswer(null);
    setShowResult(false);
    setStreak(0);
    setCurrentQuestion(generateQuestion(1));
  };

  // 获取题目类型标签
  const getTypeLabel = (type: QuestionType) => {
    const labels = {
      letter: '字母识别',
      phonetic: '音标匹配',
      word: '单词拼写',
      dialogue: '对话练习'
    };
    return labels[type];
  };

  // 获取题目类型颜色
  const getTypeColor = (type: QuestionType) => {
    const colors = {
      letter: 'bg-blue-500',
      phonetic: 'bg-green-500',
      word: 'bg-purple-500',
      dialogue: 'bg-orange-500'
    };
    return colors[type];
  };

  if (showResult) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-red-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-8 flex items-center justify-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <Card className="shadow-2xl border-2">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <Trophy className="h-20 w-20 text-yellow-500" />
              </div>
              <CardTitle className="text-3xl font-bold">游戏结束</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center space-y-4">
                <div className="text-6xl font-bold text-primary">{score}</div>
                <p className="text-xl text-muted-foreground">总分</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-xl text-center">
                  <div className="text-3xl font-bold text-blue-600">{level}</div>
                  <div className="text-sm text-muted-foreground">到达关卡</div>
                </div>
                <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-xl text-center">
                  <div className="text-3xl font-bold text-green-600">{correctAnswers}</div>
                  <div className="text-sm text-muted-foreground">正确数</div>
                </div>
              </div>

              <div className="flex gap-3">
                <Button onClick={restart} className="flex-1" size="lg">
                  <RotateCcw className="h-5 w-5 mr-2" />
                  重新开始
                </Button>
                <Button variant="outline" className="flex-1" size="lg" asChild>
                  <Link href="/">
                    <Home className="h-5 w-5 mr-2" />
                    返回首页
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  if (!currentQuestion) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">加载中...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-red-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-8">
      <div className="container mx-auto px-4 max-w-3xl">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <Link href="/">
            <Button variant="ghost" size="icon">
              <Home className="h-5 w-5" />
            </Button>
          </Link>
          <div className="text-center">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              闯关游戏
            </h1>
            <p className="text-sm text-muted-foreground">无限挑战，越玩越有趣！</p>
          </div>
          <Button variant="ghost" size="icon" onClick={restart}>
            <RotateCcw className="h-5 w-5" />
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <Card className="border-2">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-purple-600">{level}</div>
              <div className="text-xs text-muted-foreground">关卡</div>
            </CardContent>
          </Card>
          <Card className="border-2">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-pink-600">{score}</div>
              <div className="text-xs text-muted-foreground">分数</div>
            </CardContent>
          </Card>
          <Card className="border-2">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-orange-600 flex items-center justify-center gap-1">
                {streak}
                {streak >= 3 && <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />}
              </div>
              <div className="text-xs text-muted-foreground">连对</div>
            </CardContent>
          </Card>
        </div>

        {/* Question Card */}
        <Card className="mb-6 shadow-2xl border-2">
          <CardHeader>
            <div className="flex items-center justify-between mb-2">
              <Badge className={getTypeColor(currentQuestion.type)}>
                {getTypeLabel(currentQuestion.type)}
              </Badge>
              {currentQuestion.type !== 'letter' && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => speak(currentQuestion.question)}
                >
                  <Volume2 className="h-4 w-4" />
                </Button>
              )}
            </div>
            <CardTitle className="text-2xl text-center">
              {currentQuestion.question}
            </CardTitle>
            {currentQuestion.hint && (
              <p className="text-sm text-muted-foreground text-center mt-2">
                💡 {currentQuestion.hint}
              </p>
            )}
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentQuestion.options.map((option, index) => {
                let variant: 'default' | 'outline' | 'destructive' = 'outline';

                if (answered) {
                  if (index === currentQuestion.correctAnswer) {
                    variant = 'default';
                  } else if (index === selectedAnswer) {
                    variant = 'destructive';
                  }
                }

                return (
                  <Button
                    key={index}
                    variant={variant}
                    size="lg"
                    className="h-16 text-xl font-semibold"
                    onClick={() => handleAnswer(index)}
                    disabled={answered}
                  >
                    {option}
                  </Button>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Progress */}
        <Card className="border-2">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">完成进度</span>
              <span className="text-sm font-semibold">{correctAnswers}/{correctAnswers + (answered && selectedAnswer !== currentQuestion.correctAnswer ? 1 : 0)}</span>
            </div>
            <Progress value={(correctAnswers / (correctAnswers + (answered && selectedAnswer !== currentQuestion.correctAnswer ? 1 : 0) || 1)) * 100} />
          </CardContent>
        </Card>

        {/* Level Badge */}
        <div className="fixed bottom-6 right-6">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full shadow-2xl">
            <div className="flex items-center gap-2">
              <Trophy className="h-5 w-5" />
              <span className="font-bold">Level {level}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
