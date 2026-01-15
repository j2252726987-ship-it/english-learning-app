'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Volume2, User, Bot, ArrowLeft, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const dialogues = [
  {
    title: '打招呼',
    icon: '👋',
    color: 'bg-blue-100 dark:bg-blue-900',
    scenario: [
      { speaker: 'A', text: 'Hello! Nice to meet you!', cn: '你好！很高兴见到你！' },
      { speaker: 'B', text: 'Hello! Nice to meet you, too!', cn: '你好！我也很高兴见到你！' },
      { speaker: 'A', text: 'How are you today?', cn: '你今天怎么样？' },
      { speaker: 'B', text: 'I am fine, thank you. And you?', cn: '我很好，谢谢。你呢？' },
      { speaker: 'A', text: 'I am fine too. Goodbye!', cn: '我也很好。再见！' },
      { speaker: 'B', text: 'Goodbye!', cn: '再见！' },
    ]
  },
  {
    title: '自我介绍',
    icon: '🤝',
    color: 'bg-green-100 dark:bg-green-900',
    scenario: [
      { speaker: 'A', text: 'Hi, what is your name?', cn: '嗨，你叫什么名字？' },
      { speaker: 'B', text: 'My name is Tom. What about you?', cn: '我叫汤姆。你呢？' },
      { speaker: 'A', text: 'I am Amy. How old are you?', cn: '我是艾米。你多大了？' },
      { speaker: 'B', text: 'I am 10 years old. And you?', cn: '我10岁了。你呢？' },
      { speaker: 'A', text: 'I am 9 years old. Nice to meet you!', cn: '我9岁了。很高兴认识你！' },
      { speaker: 'B', text: 'Nice to meet you too!', cn: '我也很高兴认识你！' },
    ]
  },
  {
    title: '问路',
    icon: '🗺️',
    color: 'bg-purple-100 dark:bg-purple-900',
    scenario: [
      { speaker: 'A', text: 'Excuse me, where is the library?', cn: '打扰一下，图书馆在哪里？' },
      { speaker: 'B', text: 'Go straight and turn left. You can see it.', cn: '直走然后左转，你就能看到了。' },
      { speaker: 'A', text: 'Thank you very much!', cn: '非常感谢！' },
      { speaker: 'B', text: 'You are welcome!', cn: '不客气！' },
    ]
  },
  {
    title: '购物',
    icon: '🛒',
    color: 'bg-orange-100 dark:bg-orange-900',
    scenario: [
      { speaker: 'A', text: 'How much is this apple?', cn: '这个苹果多少钱？' },
      { speaker: 'B', text: 'It is two yuan.', cn: '两块钱。' },
      { speaker: 'A', text: 'I will take two, please.', cn: '我要两个，谢谢。' },
      { speaker: 'B', text: 'Here you are. Four yuan, please.', cn: '给你。四块钱。' },
      { speaker: 'A', text: 'Here is the money. Thank you!', cn: '这是钱。谢谢！' },
      { speaker: 'B', text: 'Thank you! Have a nice day!', cn: '谢谢！祝你有美好的一天！' },
    ]
  },
  {
    title: '点餐',
    icon: '🍽️',
    color: 'bg-red-100 dark:bg-red-900',
    scenario: [
      { speaker: 'A', text: 'Good morning! Can I help you?', cn: '早上好！我能帮你吗？' },
      { speaker: 'B', text: 'Yes, please. I would like a hamburger.', cn: '是的，请给我一个汉堡。' },
      { speaker: 'A', text: 'What would you like to drink?', cn: '你想喝点什么？' },
      { speaker: 'B', text: 'A glass of orange juice, please.', cn: '一杯橙汁，谢谢。' },
      { speaker: 'A', text: 'Anything else?', cn: '还要别的吗？' },
      { speaker: 'B', text: 'No, that is all. Thank you.', cn: '不要了，就这些。谢谢。' },
    ]
  },
  {
    title: '在课堂上',
    icon: '📚',
    color: 'bg-cyan-100 dark:bg-cyan-900',
    scenario: [
      { speaker: 'A', text: 'Good morning, teacher!', cn: '早上好，老师！' },
      { speaker: 'B', text: 'Good morning, class!', cn: '早上好，同学们！' },
      { speaker: 'A', text: 'Can I go to the bathroom?', cn: '我可以去洗手间吗？' },
      { speaker: 'B', text: 'Yes, you can. But be quick.', cn: '可以，但要快点。' },
      { speaker: 'A', text: 'Thank you!', cn: '谢谢！' },
    ]
  },
  {
    title: '打电话',
    icon: '📞',
    color: 'bg-pink-100 dark:bg-pink-900',
    scenario: [
      { speaker: 'A', text: 'Hello, this is Tom. May I speak to Amy?', cn: '你好，我是汤姆。我可以找艾米吗？' },
      { speaker: 'B', text: 'This is Amy. How are you?', cn: '我是艾米。你好吗？' },
      { speaker: 'A', text: 'I am fine. Do you want to play together?', cn: '我很好。你想一起玩吗？' },
      { speaker: 'B', text: 'Sure! What time?', cn: '当然！什么时间？' },
      { speaker: 'A', text: 'How about 3 o\'clock this afternoon?', cn: '今天下午3点怎么样？' },
      { speaker: 'B', text: 'Perfect! See you then!', cn: '太好了！到时候见！' },
    ]
  },
  {
    title: '谈论天气',
    icon: '🌤️',
    color: 'bg-yellow-100 dark:bg-yellow-900',
    scenario: [
      { speaker: 'A', text: 'What is the weather like today?', cn: '今天天气怎么样？' },
      { speaker: 'B', text: 'It is sunny and warm.', cn: '今天很晴朗温暖。' },
      { speaker: 'A', text: 'That is great! Let us go to the park.', cn: '太棒了！我们去公园吧。' },
      { speaker: 'B', text: 'Good idea!', cn: '好主意！' },
    ]
  },
];

export default function DialoguesPage() {
  const [activeDialogue, setActiveDialogue] = useState(0);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const currentDialogue = dialogues[activeDialogue];

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

  const goToPrevious = () => {
    setActiveDialogue((prev) => (prev === 0 ? dialogues.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setActiveDialogue((prev) => (prev === dialogues.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            对话练习
          </h1>
          <p className="text-muted-foreground">情景对话，提升口语</p>
        </div>

        {/* Dialogue Selector */}
        <div className="flex flex-wrap gap-2 justify-center mb-6">
          {dialogues.map((dialogue, index) => (
            <Button
              key={index}
              variant={activeDialogue === index ? 'default' : 'outline'}
              size="sm"
              onClick={() => setActiveDialogue(index)}
              className="gap-2"
            >
              <span className="text-lg">{dialogue.icon}</span>
              <span className="hidden sm:inline">{dialogue.title}</span>
            </Button>
          ))}
        </div>

        {/* Dialogue Card */}
        <Card className="mb-6 shadow-2xl border-2">
          <CardHeader>
            <CardTitle className="flex items-center justify-center gap-3 text-2xl">
              <span className="text-4xl">{currentDialogue.icon}</span>
              <span>{currentDialogue.title}</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {currentDialogue.scenario.map((line, index) => (
              <div
                key={index}
                className={`flex items-start gap-4 p-4 rounded-xl ${
                  line.speaker === 'A'
                    ? 'bg-blue-50 dark:bg-blue-900/30 ml-8'
                    : 'bg-green-50 dark:bg-green-900/30 mr-8'
                }`}
              >
                <div
                  className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                    line.speaker === 'A'
                      ? 'bg-blue-500 text-white'
                      : 'bg-green-500 text-white'
                  }`}
                >
                  {line.speaker === 'A' ? <User className="h-5 w-5" /> : <Bot className="h-5 w-5" />}
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-lg mb-1">{line.text}</p>
                  <p className="text-muted-foreground">{line.cn}</p>
                </div>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => speak(line.text)}
                  disabled={isSpeaking}
                  className="flex-shrink-0"
                >
                  <Volume2 className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <Button
            size="lg"
            variant="outline"
            onClick={goToPrevious}
            className="gap-2"
          >
            <ArrowLeft className="h-5 w-5" />
            上一个对话
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={goToNext}
            className="gap-2"
          >
            下一个对话
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>

        {/* Tips Card */}
        <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20">
          <CardHeader>
            <CardTitle className="text-xl">练习提示</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <p>• 先阅读中文意思，理解对话内容</p>
            <p>• 点击喇叭图标听发音，模仿语调</p>
            <p>• 和朋友一起练习，一人扮演A，一人扮演B</p>
            <p>• 多次练习，直到能流利地说出整个对话</p>
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
