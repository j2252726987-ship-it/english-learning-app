'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Volume2, ArrowLeft, ArrowRight, Search, BookOpen, Gamepad2 } from 'lucide-react';
import Link from 'next/link';
import { categories as wordCategories } from '@/lib/words-data';

export default function WordsPage() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [activeWordIndex, setActiveWordIndex] = useState(0);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [showPhonetic, setShowPhonetic] = useState(true);

  const currentCategory = wordCategories[activeCategory];
  const currentWord = currentCategory.words[activeWordIndex];

  // Filter categories based on search
  const filteredCategories = wordCategories.filter(category =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    category.words.some(word =>
      word.word.toLowerCase().includes(searchTerm.toLowerCase()) ||
      word.cn.includes(searchTerm)
    )
  );

  // Calculate total words
  const totalWords = wordCategories.reduce((sum, cat) => sum + cat.words.length, 0);

  const speak = (text: string) => {
    if ('speechSynthesis' in window) {
      setIsSpeaking(true);
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-GB';
      utterance.rate = 0.8;
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
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            单词学习
          </h1>
          <p className="text-muted-foreground mb-4">
            超过{totalWords}个单词，{wordCategories.length}个分类
          </p>
          <Link href="/words/game">
            <Button size="lg" className="gap-2 bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600">
              <Gamepad2 className="h-5 w-5" />
              开始闯关游戏
            </Button>
          </Link>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <input
              type="text"
              placeholder="搜索单词或分类..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg border-2 border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>

        {/* Category Tabs - Scrollable */}
        <ScrollArea className="mb-8 w-full">
          <div className="flex gap-2 pb-2 px-2">
            {wordCategories.map((category, index) => (
              <Button
                key={index}
                variant={activeCategory === index ? 'default' : 'outline'}
                size="sm"
                onClick={() => {
                  setActiveCategory(index);
                  setActiveWordIndex(0);
                }}
                className="gap-2 flex-shrink-0"
              >
                <span className="text-lg">{category.icon}</span>
                <span className="hidden md:inline">{category.name}</span>
                <span className="text-xs opacity-60">({category.words.length})</span>
              </Button>
            ))}
          </div>
        </ScrollArea>

        {/* Word Display Card */}
        <Card className="mb-6 shadow-2xl border-2 max-w-2xl mx-auto">
          <CardHeader className="text-center">
            <div className={`inline-block ${currentCategory.color} rounded-full p-6 mb-4`}>
              <span className="text-8xl">{currentWord.emoji}</span>
            </div>
            <CardTitle className="text-5xl font-bold text-primary mb-2">
              {currentWord.word}
            </CardTitle>
            {showPhonetic && currentWord.ipa && (
              <p className="text-xl text-muted-foreground font-mono mb-2">
                {currentWord.ipa}
              </p>
            )}
            <p className={`text-2xl text-muted-foreground ${!showPhonetic || !currentWord.ipa ? '' : 'mb-2'}`}>
              {currentWord.cn}
            </p>
            <p className="text-sm text-muted-foreground">
              {activeWordIndex + 1} / {currentCategory.words.length}
            </p>
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
              <div className="flex items-center gap-2 max-w-xs overflow-hidden px-2">
                {currentCategory.words.slice(Math.max(0, activeWordIndex - 4), activeWordIndex + 5).map((_, idx) => {
                  const actualIndex = Math.max(0, activeWordIndex - 4) + idx;
                  return (
                    <button
                      key={actualIndex}
                      onClick={() => setActiveWordIndex(actualIndex)}
                      className={`w-3 h-3 rounded-full transition-all flex-shrink-0 ${
                        actualIndex === activeWordIndex
                          ? 'bg-gradient-to-r from-green-500 to-blue-500 w-6'
                          : 'bg-muted'
                      }`}
                    />
                  );
                })}
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

        {/* Words Grid - Scrollable */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-2xl">{currentCategory.icon}</span>
                <span>{currentCategory.name} - 所有单词 ({currentCategory.words.length})</span>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant={showPhonetic ? "default" : "outline"}
                  size="sm"
                  onClick={() => setShowPhonetic(!showPhonetic)}
                >
                  {showPhonetic ? "隐藏音标" : "显示音标"}
                </Button>
                <Button variant="outline" size="sm" className="gap-2">
                  <BookOpen className="h-4 w-4" />
                  学习进度
                </Button>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[400px] w-full">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 pr-4">
                {currentCategory.words.map((word, index) => (
                  <Card
                    key={index}
                    className={`cursor-pointer transition-all hover:shadow-lg hover:scale-105 ${
                      index === activeWordIndex ? 'ring-2 ring-primary' : ''
                    }`}
                    onClick={() => setActiveWordIndex(index)}
                  >
                    <CardContent className="p-4 text-center">
                      <div className="text-3xl mb-2">{word.emoji}</div>
                      <div className="font-bold text-sm mb-1">{word.word}</div>
                      {showPhonetic && word.ipa && (
                        <div className="text-xs text-muted-foreground font-mono mb-1">
                          {word.ipa}
                        </div>
                      )}
                      <div className="text-xs text-muted-foreground">{word.cn}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>

        {/* Stats */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="text-center">
            <CardContent className="pt-6">
              <p className="text-4xl font-bold text-primary mb-2">{totalWords}</p>
              <p className="text-sm text-muted-foreground">总词汇量</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <p className="text-4xl font-bold text-primary mb-2">{wordCategories.length}</p>
              <p className="text-sm text-muted-foreground">分类数量</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <p className="text-4xl font-bold text-primary mb-2">{currentCategory.words.length}</p>
              <p className="text-sm text-muted-foreground">当前分类</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <p className="text-4xl font-bold text-primary mb-2">{currentCategory.name}</p>
              <p className="text-sm text-muted-foreground">当前学习分类</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <p className="text-4xl font-bold text-primary mb-2">{activeWordIndex + 1}</p>
              <p className="text-sm text-muted-foreground">当前单词序号</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <p className="text-4xl font-bold text-primary mb-2">
                {Math.round(((activeWordIndex + 1) / currentCategory.words.length) * 100)}%
              </p>
              <p className="text-sm text-muted-foreground">当前分类进度</p>
            </CardContent>
          </Card>
        </div>

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
