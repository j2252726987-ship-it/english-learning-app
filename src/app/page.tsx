'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  BookOpen,
  Mic2,
  MessageSquare,
  Type,
  Sparkles,
  Trophy,
  Scroll,
  Star,
  Heart
} from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const modules = [
    {
      title: '字母学习',
      description: '认识26个英文字母，学习发音和书写',
      icon: <Type className="h-12 w-12" />,
      href: '/letters',
      color: 'bg-gradient-to-r from-blue-500 to-blue-600',
      iconBg: 'bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800',
      iconColor: 'text-blue-600 dark:text-blue-300'
    },
    {
      title: '音标学习',
      description: '掌握48个国际音标，提高发音准确性',
      icon: <Mic2 className="h-12 w-12" />,
      href: '/phonetics',
      color: 'bg-gradient-to-r from-purple-500 to-purple-600',
      iconBg: 'bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900 dark:to-purple-800',
      iconColor: 'text-purple-600 dark:text-purple-300'
    },
    {
      title: '单词学习',
      description: '分类记忆单词，扩展词汇量',
      icon: <BookOpen className="h-12 w-12" />,
      href: '/words',
      color: 'bg-gradient-to-r from-green-500 to-green-600',
      iconBg: 'bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900 dark:to-green-800',
      iconColor: 'text-green-600 dark:text-green-300'
    },
    {
      title: '对话练习',
      description: '情景对话练习，提升口语表达能力',
      icon: <MessageSquare className="h-12 w-12" />,
      href: '/dialogues',
      color: 'bg-gradient-to-r from-orange-500 to-orange-600',
      iconBg: 'bg-gradient-to-br from-orange-100 to-orange-200 dark:from-orange-900 dark:to-orange-800',
      iconColor: 'text-orange-600 dark:text-orange-300'
    },
    {
      title: '闯关游戏',
      description: '无限关卡挑战，在游戏中巩固知识',
      icon: <Trophy className="h-12 w-12" />,
      href: '/games',
      color: 'bg-gradient-to-r from-pink-500 to-pink-600',
      iconBg: 'bg-gradient-to-br from-pink-100 to-pink-200 dark:from-pink-900 dark:to-pink-800',
      iconColor: 'text-pink-600 dark:text-pink-300'
    },
    {
      title: '美文阅读',
      description: '优美的诗歌故事，在阅读中感受英语魅力',
      icon: <Scroll className="h-12 w-12" />,
      href: '/poems',
      color: 'bg-gradient-to-r from-indigo-500 to-indigo-600',
      iconBg: 'bg-gradient-to-br from-indigo-100 to-indigo-200 dark:from-indigo-900 dark:to-indigo-800',
      iconColor: 'text-indigo-600 dark:text-indigo-300'
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
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Sparkles className="h-10 w-10 text-purple-500 animate-pulse" />
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              开启英语学习之旅
            </h2>
            <Sparkles className="h-10 w-10 text-pink-500 animate-pulse" />
          </div>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            从字母到对话，在快乐中掌握英语 🎉
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <div className="flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 px-4 py-2 rounded-full">
              <Star className="h-5 w-5 text-blue-500" />
              <span className="text-sm font-semibold">专业语音</span>
            </div>
            <div className="flex items-center gap-2 bg-purple-100 dark:bg-purple-900/30 px-4 py-2 rounded-full">
              <Heart className="h-5 w-5 text-purple-500" />
              <span className="text-sm font-semibold">趣味互动</span>
            </div>
            <div className="flex items-center gap-2 bg-pink-100 dark:bg-pink-900/30 px-4 py-2 rounded-full">
              <Trophy className="h-5 w-5 text-pink-500" />
              <span className="text-sm font-semibold">游戏闯关</span>
            </div>
          </div>
        </div>
      </section>

      {/* Module Cards */}
      <section className="container mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {modules.map((module, index) => (
            <Link key={module.href} href={module.href}>
              <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer border-2 hover:border-primary/50 overflow-hidden relative">
                <div className={`absolute top-0 right-0 w-24 h-24 ${module.color} opacity-5 rounded-full -mr-8 -mt-8 group-hover:scale-150 transition-transform duration-500`} />
                <CardHeader>
                  <div className={`${module.iconBg} rounded-2xl p-4 w-fit mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <div className={module.iconColor}>
                      {module.icon}
                    </div>
                  </div>
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors">{module.title}</CardTitle>
                  <CardDescription className="text-base">{module.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    className={`w-full ${module.color} hover:opacity-90 shadow-md hover:shadow-lg transition-all duration-300`}
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
      <section className="container mx-auto px-4 py-20 bg-gradient-to-br from-white/70 to-white/30 dark:from-gray-800/70 dark:to-gray-800/30 backdrop-blur-sm rounded-3xl mb-16">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            为什么选择我们
          </h3>
          <p className="text-center text-muted-foreground mb-12">让每个孩子都能快乐学英语</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group hover:-translate-y-1 transition-transform duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow">
                <BookOpen className="h-10 w-10 text-blue-600 dark:text-blue-300" />
              </div>
              <h4 className="font-semibold mb-2 text-lg">系统化学习</h4>
              <p className="text-sm text-muted-foreground">从字母到对话，循序渐进</p>
            </div>
            <div className="text-center group hover:-translate-y-1 transition-transform duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900 dark:to-purple-800 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow">
                <Mic2 className="h-10 w-10 text-purple-600 dark:text-purple-300" />
              </div>
              <h4 className="font-semibold mb-2 text-lg">发音准确</h4>
              <p className="text-sm text-muted-foreground">专业音标教学，标准发音</p>
            </div>
            <div className="text-center group hover:-translate-y-1 transition-transform duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-pink-100 to-pink-200 dark:from-pink-900 dark:to-pink-800 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow">
                <Sparkles className="h-10 w-10 text-pink-600 dark:text-pink-300" />
              </div>
              <h4 className="font-semibold mb-2 text-lg">趣味互动</h4>
              <p className="text-sm text-muted-foreground">游戏闯关，快乐学习</p>
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
