'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Volume2, ArrowLeft, ArrowRight, Home, BookOpen, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { poems, poemsByLevel, getLevelDescription } from '@/lib/poems-data';

export default function PoemsPage() {
  const [selectedLevel, setSelectedLevel] = useState<number | null>(null);
  const [selectedPoem, setSelectedPoem] = useState<string | null>(null);
  const [isSpeaking, setIsSpeaking] = useState(false);

  // 根据选择的难度筛选诗歌
  const filteredPoems = selectedLevel
    ? poems.filter(p => p.level === selectedLevel)
    : poems;

  const currentPoem = poems.find(p => p.id === selectedPoem);

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
          speechRate: -15, // 诗歌语速更慢
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

  const speakPoem = () => {
    if (currentPoem) {
      const text = currentPoem.content.join(' ');
      speak(text);
    }
  };

  const handleLevelChange = (level: number | null) => {
    setSelectedLevel(level);
    setSelectedPoem(null);
  };

  if (selectedPoem && currentPoem) {
    return (
      <div className={`min-h-screen bg-gradient-to-br ${currentPoem.bgGradient} dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-8`}>
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setSelectedPoem(null)}
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

          {/* Poem Card */}
          <Card className="shadow-2xl border-2 backdrop-blur-sm bg-white/80 dark:bg-gray-800/80">
            <CardHeader className="text-center pb-4">
              <div className="text-6xl mb-4 animate-bounce">
                {currentPoem.icon}
              </div>
              <CardTitle className="text-3xl mb-2">{currentPoem.title}</CardTitle>
              <p className="text-xl text-muted-foreground">{currentPoem.titleCn}</p>
              <div className="flex items-center justify-center gap-2 mt-3">
                <Badge variant="outline" className="text-xs">
                  {getLevelDescription(currentPoem.level)}
                </Badge>
                {currentPoem.tags.map((tag, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Poem Content */}
              <div className="bg-gradient-to-br from-white/50 to-white/30 dark:from-gray-800/50 dark:to-gray-800/30 rounded-xl p-8">
                <div className="space-y-4 text-center">
                  {currentPoem.content.map((line, index) => (
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
                  onClick={speakPoem}
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
            <p className="text-muted-foreground">优美的诗歌，快乐的阅读</p>
          </div>
          <div className="w-10" />
        </div>

        {/* Level Filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          <Button
            variant={selectedLevel === null ? 'default' : 'outline'}
            size="sm"
            onClick={() => handleLevelChange(null)}
            className="gap-2"
          >
            <span>📚</span>
            全部 ({poems.length})
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
              {getLevelDescription(level)} ({poemsByLevel[level as keyof typeof poemsByLevel]?.length || 0})
            </Button>
          ))}
        </div>

        {/* Poems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPoems.map((poem) => (
            <Card
              key={poem.id}
              className={`group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-2 hover:border-primary/50 bg-gradient-to-br ${poem.bgGradient}`}
              onClick={() => setSelectedPoem(poem.id)}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-5xl group-hover:scale-110 transition-transform">
                    {poem.icon}
                  </div>
                  <Badge variant="outline" className="text-xs bg-white/50">
                    {getLevelDescription(poem.level)}
                  </Badge>
                </div>
                <CardTitle className="text-xl mb-1">{poem.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{poem.titleCn}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="bg-white/50 dark:bg-gray-800/50 rounded-lg p-3 max-h-32 overflow-hidden">
                    <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-3">
                      {poem.content.slice(0, 3).join(' ')}...
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {poem.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-xs bg-white/50">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700" variant="default">
                    阅读全文
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredPoems.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">📭</div>
            <p className="text-xl text-muted-foreground">暂无该难度的美文</p>
          </div>
        )}
      </div>
    </div>
  );
}
