'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  BookOpen, 
  Mic2, 
  MessageSquare, 
  Type,
  Sparkles,
  Trophy
} from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const modules = [
    {
      title: '字母学习',
      description: '认识26个英文字母，学习发音和书写',
      icon: <Type className="h-12 w-12" />,
      href: '/letters',
      color: 'bg-blue-500',
      iconBg: 'bg-blue-100 dark:bg-blue-900',
      iconColor: 'text-blue-600 dark:text-blue-300'
    },
    {
      title: '音标学习',
      description: '掌握48个国际音标，提高发音准确性',
      icon: <Mic2 className="h-12 w-12" />,
      href: '/phonetics',
      color: 'bg-purple-500',
      iconBg: 'bg-purple-100 dark:bg-purple-900',
      iconColor: 'text-purple-600 dark:text-purple-300'
    },
    {
      title: '单词学习',
      description: '分类记忆单词，扩展词汇量',
      icon: <BookOpen className="h-12 w-12" />,
      href: '/words',
      color: 'bg-green-500',
      iconBg: 'bg-green-100 dark:bg-green-900',
      iconColor: 'text-green-600 dark:text-green-300'
    },
    {
      title: '对话练习',
      description: '情景对话练习，提升口语表达能力',
      icon: <MessageSquare className="h-12 w-12" />,
      href: '/dialogues',
      color: 'bg-orange-500',
      iconBg: 'bg-orange-100 dark:bg-orange-900',
      iconColor: 'text-orange-600 dark:text-orange-300'
    },
    {
      title: '闯关游戏',
      description: '无限关卡挑战，在游戏中巩固知识',
      icon: <Trophy className="h-12 w-12" />,
      href: '/games',
      color: 'bg-pink-500',
      iconBg: 'bg-pink-100 dark:bg-pink-900',
      iconColor: 'text-pink-600 dark:text-pink-300'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Header */}
      <header className="border-b bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  English Kids
                </h1>
                <p className="text-xs text-muted-foreground">快乐英语启蒙</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            开启英语学习之旅
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            从字母到对话，在快乐中掌握英语
          </p>
        </div>
      </section>

      {/* Module Cards */}
      <section className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {modules.map((module) => (
            <Link key={module.href} href={module.href}>
              <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border-2 hover:border-primary/50">
                <CardHeader>
                  <div className={`${module.iconBg} rounded-2xl p-4 w-fit mb-4 group-hover:scale-110 transition-transform`}>
                    <div className={module.iconColor}>
                      {module.icon}
                    </div>
                  </div>
                  <CardTitle className="text-2xl">{module.title}</CardTitle>
                  <CardDescription className="text-base">{module.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    className={`w-full ${module.color} hover:opacity-90`}
                  >
                    开始学习
                  </Button>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16 bg-white/50 dark:bg-gray-800/50">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">为什么选择我们</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-blue-600 dark:text-blue-300" />
              </div>
              <h4 className="font-semibold mb-2">系统化学习</h4>
              <p className="text-sm text-muted-foreground">从字母到对话，循序渐进</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mic2 className="h-8 w-8 text-purple-600 dark:text-purple-300" />
              </div>
              <h4 className="font-semibold mb-2">发音准确</h4>
              <p className="text-sm text-muted-foreground">专业音标教学，标准发音</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 dark:bg-pink-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-8 w-8 text-pink-600 dark:text-pink-300" />
              </div>
              <h4 className="font-semibold mb-2">趣味互动</h4>
              <p className="text-sm text-muted-foreground">动画游戏，快乐学习</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 mt-16">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2024 English Kids. 快乐学习英语每一天</p>
        </div>
      </footer>
    </div>
  );
}
