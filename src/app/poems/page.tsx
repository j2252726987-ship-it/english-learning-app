'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Volume2, ArrowLeft, Home, BookOpen, Sparkles, Search, Filter, Music, Book } from 'lucide-react';
import Link from 'next/link';
import { allContent, getContentByCategory, getLevelDescription, getCategoryDescription, type ContentItem } from '@/lib/poems-data';

export default function PoemsPage() {
  const [selectedLevel, setSelectedLevel] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // 根据选择筛选内容
  const filteredContent = (() => {
    let content = allContent;

    // 搜索筛选
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      content = content.filter(item =>
        item.title.toLowerCase().includes(query) ||
        item.titleCn.includes(query) ||
        item.tags.some(tag => tag.includes(query))
      );
    }

    // 分类筛选
    if (selectedCategory !== 'all') {
      content = content.filter(item => item.category === selectedCategory);
    }

    // 难度筛选
    if (selectedLevel) {
      content = content.filter(item => item.level === selectedLevel);
    }

    return content;
  })();

  const currentItem = allContent.find(item => item.id === selectedItem);

  // 播放语音
  const speak = async (text: string) => {
    if (isSpeaking) return;

    try {
      setIsSpeaking(true);

      const response = await fetch('/api/tts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text,
          speaker: 'zh_female_vv_uranus_bigtts',
          speechRate: -15,
          loudnessRate: 10
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate speech');
      }

      const data = await response.json();

      // 创建 Audio 对象播放音频
      const audio = new Audio(data.audioUri);
      audio.onended = () => setIsSpeaking(false);
      audio.onerror = () => setIsSpeaking(false);
      audio.play();
    } catch (error) {
      console.error('Speech error:', error);
      setIsSpeaking(false);
    }
  };

  const speakContent = () => {
    if (currentItem) {
      const text = currentItem.content.join(' ');
      speak(text);
    }
  };

  const handleLevelChange = (level: number | null) => {
    setSelectedLevel(level);
    setSelectedItem(null);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setSelectedItem(null);
  };

  if (selectedItem && currentItem) {
    return (
      <div className={`min-h-screen bg-gradient-to-br ${currentItem.bgGradient} dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-8`}>
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setSelectedItem(null)}
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div className="text-center flex-1">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                美文阅读
              </h1>
            </div>
            <Link href="/">
              <Button variant="outline" size="icon">
                <Home className="h-5 w-5" />
              </Button>
            </Link>
          </div>

          {/* Content Card */}
          <Card className="shadow-2xl border-2 backdrop-blur-sm bg-white/80 dark:bg-gray-800/80">
            <CardHeader className="text-center pb-4">
              <div className="text-6xl mb-4 animate-bounce">
                {currentItem.icon}
              </div>
              <CardTitle className="text-3xl mb-2">{currentItem.title}</CardTitle>
              <p className="text-xl text-muted-foreground">{currentItem.titleCn}</p>
              <div className="flex items-center justify-center gap-2 mt-3 flex-wrap">
                <Badge variant="outline" className="text-xs">
                  {getLevelDescription(currentItem.level)}
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  {getCategoryDescription(currentItem.category)}
                </Badge>
                {currentItem.tags.map((tag, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Content */}
              <div className="bg-gradient-to-br from-white/50 to-white/30 dark:from-gray-800/50 dark:to-gray-800/30 rounded-xl p-8">
                <div className="space-y-4 text-center">
                  {currentItem.content.map((line, index) => (
                    line === '' ? (
                      <div key={index} className="h-4" />
                    ) : (
                      <p key={index} className="text-xl md:text-2xl font-serif leading-relaxed text-gray-800 dark:text-gray-200">
                        {line}
                      </p>
                    )
                  ))}
                </div>
              </div>

              {/* Audio Button */}
              <div className="flex justify-center">
                <Button
                  size="lg"
                  variant="outline"
                  className="gap-2 rounded-full px-8"
                  onClick={speakContent}
                  disabled={isSpeaking}
                >
                  <Volume2 className={`h-6 w-6 ${isSpeaking ? 'animate-pulse' : ''}`} />
                  {isSpeaking ? '播放中...' : '朗读全文'}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link href="/">
            <Button variant="ghost" size="icon">
              <Home className="h-5 w-5" />
            </Button>
          </Link>
          <div className="text-center flex-1">
            <div className="flex items-center justify-center gap-2 mb-2">
              <BookOpen className="h-8 w-8 text-purple-600" />
              <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                美文阅读
              </h1>
              <Sparkles className="h-8 w-8 text-pink-600" />
            </div>
            <p className="text-muted-foreground">优美的诗歌、动听的儿歌、精彩的故事</p>
            <Badge variant="secondary" className="mt-2">
              共 {allContent.length} 篇内容
            </Badge>
          </div>
          <div className="w-10" />
        </div>

        {/* Search and Filter Section */}
        <Card className="mb-8 shadow-lg">
          <CardContent className="pt-6">
            {/* Search Bar */}
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="搜索标题、中文或标签..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12 text-base"
              />
            </div>

            {/* Category Filter */}
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-3">
                <Filter className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm font-medium">分类筛选</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <Button
                  variant={selectedCategory === 'all' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => handleCategoryChange('all')}
                  className="gap-2"
                >
                  <span>📚</span>
                  全部 ({allContent.length})
                </Button>
                <Button
                  variant={selectedCategory === 'poem' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => handleCategoryChange('poem')}
                  className="gap-2"
                >
                  <span>📜</span>
                  诗歌 ({getContentByCategory('poem').length})
                </Button>
                <Button
                  variant={selectedCategory === 'song' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => handleCategoryChange('song')}
                  className="gap-2"
                >
                  <Music className="h-4 w-4" />
                  儿歌 ({getContentByCategory('song').length})
                </Button>
                <Button
                  variant={selectedCategory === 'story' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => handleCategoryChange('story')}
                  className="gap-2"
                >
                  <Book className="h-4 w-4" />
                  故事 ({getContentByCategory('story').length})
                </Button>
              </div>
            </div>

            {/* Level Filter */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Filter className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm font-medium">难度筛选</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <Button
                  variant={selectedLevel === null ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => handleLevelChange(null)}
                  className="gap-2"
                >
                  <span>📊</span>
                  全部
                </Button>
                {[1, 2, 3, 4, 5].map((level) => (
                  <Button
                    key={level}
                    variant={selectedLevel === level ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => handleLevelChange(level)}
                    className="gap-2"
                  >
                    <span>
                      {level === 1 && '🌱'}
                      {level === 2 && '🌿'}
                      {level === 3 && '🌳'}
                      {level === 4 && '🌲'}
                      {level === 5 && '🏔️'}
                    </span>
                    {getLevelDescription(level)}
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Content Grid */}
        {filteredContent.length === 0 ? (
          <Card className="text-center py-12">
            <CardContent>
              <p className="text-xl text-muted-foreground">没有找到相关内容</p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                  setSelectedLevel(null);
                }}
                className="mt-4"
              >
                清除筛选
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredContent.map((item) => (
              <Card
                key={item.id}
                className="hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105 overflow-hidden"
                onClick={() => setSelectedItem(item.id)}
              >
                <CardHeader className={`bg-gradient-to-br ${item.bgGradient} pb-3`}>
                  <div className="text-5xl mb-2">{item.icon}</div>
                  <CardTitle className="text-xl line-clamp-1">{item.title}</CardTitle>
                  <p className="text-sm text-muted-foreground line-clamp-1">{item.titleCn}</p>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="flex flex-wrap gap-1 mb-3">
                    <Badge variant="outline" className="text-xs">
                      {getLevelDescription(item.level)}
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      {getCategoryDescription(item.category)}
                    </Badge>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {item.tags.slice(0, 2).map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {item.tags.length > 2 && (
                      <Badge variant="outline" className="text-xs">
                        +{item.tags.length - 2}
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
