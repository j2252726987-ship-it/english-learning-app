'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Volume2, ArrowLeft, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const letters = [
  { char: 'A', phonetic: '/eɪ/', example: 'Apple', exampleCn: '苹果', exampleWord: 'apple', letterSound: 'A' },
  { char: 'B', phonetic: '/biː/', example: 'Ball', exampleCn: '球', exampleWord: 'ball', letterSound: 'B' },
  { char: 'C', phonetic: '/siː/', example: 'Cat', exampleCn: '猫', exampleWord: 'cat', letterSound: 'C' },
  { char: 'D', phonetic: '/diː/', example: 'Dog', exampleCn: '狗', exampleWord: 'dog', letterSound: 'D' },
  { char: 'E', phonetic: '/iː/', example: 'Egg', exampleCn: '鸡蛋', exampleWord: 'egg', letterSound: 'E' },
  { char: 'F', phonetic: '/ef/', example: 'Fish', exampleCn: '鱼', exampleWord: 'fish', letterSound: 'F' },
  { char: 'G', phonetic: '/dʒiː/', example: 'Goat', exampleCn: '山羊', exampleWord: 'goat', letterSound: 'G' },
  { char: 'H', phonetic: '/eɪtʃ/', example: 'Hat', exampleCn: '帽子', exampleWord: 'hat', letterSound: 'H' },
  { char: 'I', phonetic: '/aɪ/', example: 'Ice', exampleCn: '冰', exampleWord: 'ice', letterSound: 'I' },
  { char: 'J', phonetic: '/dʒeɪ/', example: 'Juice', exampleCn: '果汁', exampleWord: 'juice', letterSound: 'J' },
  { char: 'K', phonetic: '/keɪ/', example: 'Key', exampleCn: '钥匙', exampleWord: 'key', letterSound: 'K' },
  { char: 'L', phonetic: '/el/', example: 'Lion', exampleCn: '狮子', exampleWord: 'lion', letterSound: 'L' },
  { char: 'M', phonetic: '/em/', example: 'Moon', exampleCn: '月亮', exampleWord: 'moon', letterSound: 'M' },
  { char: 'N', phonetic: '/en/', example: 'Nose', exampleCn: '鼻子', exampleWord: 'nose', letterSound: 'N' },
  { char: 'O', phonetic: '/əʊ/', example: 'Orange', exampleCn: '橙子', exampleWord: 'orange', letterSound: 'O' },
  { char: 'P', phonetic: '/piː/', example: 'Pig', exampleCn: '猪', exampleWord: 'pig', letterSound: 'P' },
  { char: 'Q', phonetic: '/kjuː/', example: 'Queen', exampleCn: '女王', exampleWord: 'queen', letterSound: 'Q' },
  { char: 'R', phonetic: '/ɑːr/', example: 'Rabbit', exampleCn: '兔子', exampleWord: 'rabbit', letterSound: 'R' },
  { char: 'S', phonetic: '/es/', example: 'Sun', exampleCn: '太阳', exampleWord: 'sun', letterSound: 'S' },
  { char: 'T', phonetic: '/tiː/', example: 'Tree', exampleCn: '树', exampleWord: 'tree', letterSound: 'T' },
  { char: 'U', phonetic: '/juː/', example: 'Umbrella', exampleCn: '雨伞', exampleWord: 'umbrella', letterSound: 'U' },
  { char: 'V', phonetic: '/viː/', example: 'Violin', exampleCn: '小提琴', exampleWord: 'violin', letterSound: 'V' },
  { char: 'W', phonetic: '/ˈdʌbəl.juː/', example: 'Water', exampleCn: '水', exampleWord: 'water', letterSound: 'W' },
  { char: 'X', phonetic: '/eks/', example: 'X-ray', exampleCn: 'X光', exampleWord: 'x-ray', letterSound: 'X' },
  { char: 'Y', phonetic: '/waɪ/', example: 'Yellow', exampleCn: '黄色', exampleWord: 'yellow', letterSound: 'Y' },
  { char: 'Z', phonetic: '/ziː/', example: 'Zebra', exampleCn: '斑马', exampleWord: 'zebra', letterSound: 'Z' },
];

export default function LettersPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const currentLetter = letters[currentIndex];

  const speakLetter = (text: string) => {
    if ('speechSynthesis' in window) {
      setIsSpeaking(true);
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = 0.8;
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);
      window.speechSynthesis.speak(utterance);
    }
  };

  const speakAlphabet = (char: string) => {
    if ('speechSynthesis' in window) {
      setIsSpeaking(true);

      const utterance = new SpeechSynthesisUtterance(char);
      utterance.lang = 'en-US';
      utterance.rate = 0.7;
      utterance.pitch = 1.0;

      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);

      window.speechSynthesis.speak(utterance);
    }
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? letters.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === letters.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            字母学习
          </h1>
          <p className="text-muted-foreground">点击喇叭图标听发音</p>
        </div>

        {/* Letter Card */}
        <Card className="mb-6 shadow-2xl border-2">
          <CardHeader className="text-center">
            <div className="flex items-center justify-center gap-6 mb-4">
              <CardTitle className="text-8xl md:text-9xl font-bold text-primary">
                {currentLetter.char}
              </CardTitle>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full"
                onClick={() => speakAlphabet(currentLetter.char)}
                disabled={isSpeaking}
              >
                <Volume2 className="h-8 w-8" />
              </Button>
            </div>
            <div className="flex items-center justify-center gap-4 mb-2">
              <div className="text-3xl font-semibold text-muted-foreground">
                {currentLetter.phonetic}
              </div>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => speakLetter(currentLetter.exampleWord)}
                disabled={isSpeaking}
              >
                <Volume2 className="h-5 w-5" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Example Word */}
            <div className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-xl p-6">
              <p className="text-center text-sm text-muted-foreground mb-2">示例单词</p>
              <div className="flex items-center justify-center gap-4">
                <div className="text-center">
                  <p className="text-4xl font-bold mb-1">{currentLetter.example}</p>
                  <p className="text-xl text-muted-foreground">{currentLetter.exampleCn}</p>
                </div>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full"
                  onClick={() => speakLetter(currentLetter.exampleWord)}
                  disabled={isSpeaking}
                >
                  <Volume2 className="h-6 w-6" />
                </Button>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4">
              <Button
                size="lg"
                variant="outline"
                onClick={goToPrevious}
                className="gap-2"
              >
                <ArrowLeft className="h-5 w-5" />
                上一个
              </Button>
              <div className="flex items-center gap-2">
                {letters.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentIndex
                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 w-8'
                        : 'bg-muted'
                    }`}
                  />
                ))}
              </div>
              <Button
                size="lg"
                variant="outline"
                onClick={goToNext}
                className="gap-2"
              >
                下一个
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Quick Access */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">快速跳转</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-6 sm:grid-cols-9 gap-2">
              {letters.map((letter, index) => (
                <Button
                  key={index}
                  variant={index === currentIndex ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setCurrentIndex(index)}
                  className="font-bold"
                >
                  {letter.char}
                </Button>
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
