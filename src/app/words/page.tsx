'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Volume2, ArrowLeft, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const categories = [
  {
    name: '动物',
    icon: '🐾',
    color: 'bg-amber-100 dark:bg-amber-900',
    words: [
      { word: 'cat', cn: '猫', emoji: '🐱' },
      { word: 'dog', cn: '狗', emoji: '🐕' },
      { word: 'bird', cn: '鸟', emoji: '🐦' },
      { word: 'fish', cn: '鱼', emoji: '🐟' },
      { word: 'rabbit', cn: '兔子', emoji: '🐰' },
      { word: 'elephant', cn: '大象', emoji: '🐘' },
      { word: 'lion', cn: '狮子', emoji: '🦁' },
      { word: 'monkey', cn: '猴子', emoji: '🐒' },
      { word: 'panda', cn: '熊猫', emoji: '🐼' },
      { word: 'tiger', cn: '老虎', emoji: '🐯' },
    ]
  },
  {
    name: '水果',
    icon: '🍎',
    color: 'bg-red-100 dark:bg-red-900',
    words: [
      { word: 'apple', cn: '苹果', emoji: '🍎' },
      { word: 'banana', cn: '香蕉', emoji: '🍌' },
      { word: 'orange', cn: '橙子', emoji: '🍊' },
      { word: 'grape', cn: '葡萄', emoji: '🍇' },
      { word: 'strawberry', cn: '草莓', emoji: '🍓' },
      { word: 'watermelon', cn: '西瓜', emoji: '🍉' },
      { word: 'peach', cn: '桃子', emoji: '🍑' },
      { word: 'pear', cn: '梨', emoji: '🍐' },
      { word: 'cherry', cn: '樱桃', emoji: '🍒' },
      { word: 'mango', cn: '芒果', emoji: '🥭' },
    ]
  },
  {
    name: '颜色',
    icon: '🎨',
    color: 'bg-purple-100 dark:bg-purple-900',
    words: [
      { word: 'red', cn: '红色', emoji: '🔴' },
      { word: 'blue', cn: '蓝色', emoji: '🔵' },
      { word: 'green', cn: '绿色', emoji: '🟢' },
      { word: 'yellow', cn: '黄色', emoji: '🟡' },
      { word: 'orange', cn: '橙色', emoji: '🟠' },
      { word: 'purple', cn: '紫色', emoji: '🟣' },
      { word: 'pink', cn: '粉色', emoji: '🩷' },
      { word: 'black', cn: '黑色', emoji: '⚫' },
      { word: 'white', cn: '白色', emoji: '⚪' },
      { word: 'brown', cn: '棕色', emoji: '🟤' },
    ]
  },
  {
    name: '数字',
    icon: '🔢',
    color: 'bg-blue-100 dark:bg-blue-900',
    words: [
      { word: 'one', cn: '一', emoji: '1️⃣' },
      { word: 'two', cn: '二', emoji: '2️⃣' },
      { word: 'three', cn: '三', emoji: '3️⃣' },
      { word: 'four', cn: '四', emoji: '4️⃣' },
      { word: 'five', cn: '五', emoji: '5️⃣' },
      { word: 'six', cn: '六', emoji: '6️⃣' },
      { word: 'seven', cn: '七', emoji: '7️⃣' },
      { word: 'eight', cn: '八', emoji: '8️⃣' },
      { word: 'nine', cn: '九', emoji: '9️⃣' },
      { word: 'ten', cn: '十', emoji: '🔟' },
    ]
  },
  {
    name: '食物',
    icon: '🍔',
    color: 'bg-yellow-100 dark:bg-yellow-900',
    words: [
      { word: 'bread', cn: '面包', emoji: '🍞' },
      { word: 'rice', cn: '米饭', emoji: '🍚' },
      { word: 'noodle', cn: '面条', emoji: '🍜' },
      { word: 'cake', cn: '蛋糕', emoji: '🎂' },
      { word: 'milk', cn: '牛奶', emoji: '🥛' },
      { word: 'egg', cn: '鸡蛋', emoji: '🥚' },
      { word: 'cookie', cn: '饼干', emoji: '🍪' },
      { word: 'pizza', cn: '披萨', emoji: '🍕' },
      { word: 'hamburger', cn: '汉堡', emoji: '🍔' },
      { word: 'ice cream', cn: '冰淇淋', emoji: '🍦' },
    ]
  },
  {
    name: '身体部位',
    icon: '👤',
    color: 'bg-green-100 dark:bg-green-900',
    words: [
      { word: 'head', cn: '头', emoji: '🗣️' },
      { word: 'eye', cn: '眼睛', emoji: '👁️' },
      { word: 'nose', cn: '鼻子', emoji: '👃' },
      { word: 'mouth', cn: '嘴巴', emoji: '👄' },
      { word: 'ear', cn: '耳朵', emoji: '👂' },
      { word: 'hand', cn: '手', emoji: '🤚' },
      { word: 'foot', cn: '脚', emoji: '🦶' },
      { word: 'arm', cn: '手臂', emoji: '💪' },
      { word: 'leg', cn: '腿', emoji: '🦵' },
      { word: 'heart', cn: '心脏', emoji: '❤️' },
    ]
  },
  {
    name: '家庭',
    icon: '👨‍👩‍👧‍👦',
    color: 'bg-pink-100 dark:bg-pink-900',
    words: [
      { word: 'father', cn: '爸爸', emoji: '👨' },
      { word: 'mother', cn: '妈妈', emoji: '👩' },
      { word: 'brother', cn: '兄弟', emoji: '👦' },
      { word: 'sister', cn: '姐妹', emoji: '👧' },
      { word: 'grandpa', cn: '爷爷', emoji: '👴' },
      { word: 'grandma', cn: '奶奶', emoji: '👵' },
      { word: 'uncle', cn: '叔叔', emoji: '👨' },
      { word: 'aunt', cn: '阿姨', emoji: '👩' },
      { word: 'baby', cn: '宝宝', emoji: '👶' },
      { word: 'family', cn: '家庭', emoji: '👨‍👩‍👧‍👦' },
    ]
  },
  {
    name: '天气',
    icon: '🌤️',
    color: 'bg-sky-100 dark:bg-sky-900',
    words: [
      { word: 'sunny', cn: '晴天', emoji: '☀️' },
      { word: 'rainy', cn: '下雨', emoji: '🌧️' },
      { word: 'cloudy', cn: '多云', emoji: '☁️' },
      { word: 'windy', cn: '有风', emoji: '💨' },
      { word: 'snowy', cn: '下雪', emoji: '❄️' },
      { word: 'hot', cn: '热', emoji: '🌡️' },
      { word: 'cold', cn: '冷', emoji: '🥶' },
      { word: 'warm', cn: '温暖', emoji: '🌡️' },
      { word: 'storm', cn: '暴风雨', emoji: '⛈️' },
      { word: 'rainbow', cn: '彩虹', emoji: '🌈' },
    ]
  },
];

export default function WordsPage() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [activeWordIndex, setActiveWordIndex] = useState(0);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const currentCategory = categories[activeCategory];
  const currentWord = currentCategory.words[activeWordIndex];

  const speak = (text: string) => {
    if ('speechSynthesis' in window) {
      setIsSpeaking(true);
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = 0.7;
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);
      window.speechSynthesis.speak(utterance);
    }
  };

  const goToPreviousWord = () => {
    setActiveWordIndex((prev) => 
      prev === 0 ? currentCategory.words.length - 1 : prev - 1
    );
  };

  const goToNextWord = () => {
    setActiveWordIndex((prev) => 
      prev === currentCategory.words.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            单词学习
          </h1>
          <p className="text-muted-foreground">分类词汇，快速记忆</p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={activeCategory === index ? 'default' : 'outline'}
              onClick={() => {
                setActiveCategory(index);
                setActiveWordIndex(0);
              }}
              className="gap-2"
            >
              <span className="text-lg">{category.icon}</span>
              <span>{category.name}</span>
            </Button>
          ))}
        </div>

        {/* Word Display Card */}
        <Card className="mb-6 shadow-2xl border-2 max-w-2xl mx-auto">
          <CardHeader className="text-center">
            <div className={`inline-block ${currentCategory.color} rounded-full p-6 mb-4`}>
              <span className="text-8xl">{currentWord.emoji}</span>
            </div>
            <CardTitle className="text-5xl font-bold text-primary mb-2">
              {currentWord.word}
            </CardTitle>
            <p className="text-2xl text-muted-foreground">{currentWord.cn}</p>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Audio Button */}
            <div className="flex justify-center">
              <Button
                size="lg"
                variant="outline"
                className="gap-2 rounded-full px-8"
                onClick={() => speak(currentWord.word)}
                disabled={isSpeaking}
              >
                <Volume2 className="h-6 w-6" />
                播放发音
              </Button>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4">
              <Button
                size="lg"
                variant="outline"
                onClick={goToPreviousWord}
                className="gap-2"
              >
                <ArrowLeft className="h-5 w-5" />
                上一个
              </Button>
              <div className="flex items-center gap-2">
                {currentCategory.words.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveWordIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === activeWordIndex
                        ? 'bg-gradient-to-r from-green-500 to-blue-500 w-8'
                        : 'bg-muted'
                    }`}
                  />
                ))}
              </div>
              <Button
                size="lg"
                variant="outline"
                onClick={goToNextWord}
                className="gap-2"
              >
                下一个
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Word Grid */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <span className="text-2xl">{currentCategory.icon}</span>
              <span>{currentCategory.name} - 所有单词</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {currentCategory.words.map((word, index) => (
                <Card
                  key={index}
                  className={`cursor-pointer transition-all hover:shadow-lg ${
                    index === activeWordIndex ? 'ring-2 ring-primary' : ''
                  }`}
                  onClick={() => setActiveWordIndex(index)}
                >
                  <CardContent className="p-4 text-center">
                    <div className="text-3xl mb-2">{word.emoji}</div>
                    <p className="font-semibold text-sm">{word.word}</p>
                    <p className="text-xs text-muted-foreground">{word.cn}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Back to Home */}
        <div className="mt-8 text-center">
          <Link href="/">
            <Button variant="ghost">
              返回首页
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
