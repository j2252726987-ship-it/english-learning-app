'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Volume2, User, Bot, ArrowLeft, ArrowRight, Gamepad2 } from 'lucide-react';
import Link from 'next/link';
import { dialogues, dialoguesByLevel, getLevelDescription } from '@/lib/dialogues-data';

export default function DialoguesPage() {
  const [activeDialogue, setActiveDialogue] = useState(0);
  const [selectedLevel, setSelectedLevel] = useState<number | null>(null);
  const [isSpeaking, setIsSpeaking] = useState(false);

  // 根据选择的难度筛选对话
  const filteredDialogues = selectedLevel
    ? dialogues.filter(d => d.level === selectedLevel)
    : dialogues;

  const currentDialogue = filteredDialogues[activeDialogue];

  // 使用浏览器语音合成服务（美式英语）
  const speakText = async (text: string, speaker: 'A' | 'B') => {
    if (isSpeaking || !('speechSynthesis' in window)) return;

    try {
      setIsSpeaking(true);

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = 0.7;

      // 获取可用的语音列表
      const voices = window.speechSynthesis.getVoices();

      // 尝试找到美式英语的语音，并区分男女声
      const englishVoices = voices.filter(voice => voice.lang === 'en-US');

      if (englishVoices.length > 0) {
        // 尝试区分性别（根据语音名称判断）
        if (speaker === 'A') {
          // 男声：尝试找包含 "Male" 或 "Daniel" 的语音
          const maleVoice = englishVoices.find(v =>
            v.name.toLowerCase().includes('male') ||
            v.name.toLowerCase().includes('daniel') ||
            v.name.toLowerCase().includes('george')
          );
          if (maleVoice) utterance.voice = maleVoice;
        } else {
          // 女声：尝试找包含 "Female" 或 "Victoria" 的语音
          const femaleVoice = englishVoices.find(v =>
            v.name.toLowerCase().includes('female') ||
            v.name.toLowerCase().includes('victoria') ||
            v.name.toLowerCase().includes('serena') ||
            v.name.toLowerCase().includes('karen')
          );
          if (femaleVoice) utterance.voice = femaleVoice;
        }

        // 如果没找到特定的性别语音，使用第一个美式语音
        if (!utterance.voice) {
          utterance.voice = englishVoices[0];
        }
      }

      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);
      window.speechSynthesis.speak(utterance);
    } catch (error) {
      console.error('Speech error:', error);
      setIsSpeaking(false);
    }
  };

  const speak = (text: string, speaker: 'A' | 'B') => {
    speakText(text, speaker);
  };

  const goToPrevious = () => {
    setActiveDialogue((prev) => (prev === 0 ? filteredDialogues.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setActiveDialogue((prev) => (prev === filteredDialogues.length - 1 ? 0 : prev + 1));
  };

  const handleLevelChange = (level: number | null) => {
    setSelectedLevel(level);
    setActiveDialogue(0);
  };

  // 使用豆包语音合成服务

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-8">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            对话练习
          </h1>
          <p className="text-muted-foreground mb-4">情景对话练习（男女语音）</p>
          <Link href="/dialogues/game">
            <Button size="lg" className="gap-2 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
              <Gamepad2 className="h-5 w-5" />
              开始闯关游戏
            </Button>
          </Link>
        </div>

        {/* Level Filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-6">
          <Button
            variant={selectedLevel === null ? 'default' : 'outline'}
            size="sm"
            onClick={() => handleLevelChange(null)}
          >
            全部 ({dialogues.length})
          </Button>
          {[1, 2, 3, 4, 5].map((level) => (
            <Button
              key={level}
              variant={selectedLevel === level ? 'default' : 'outline'}
              size="sm"
              onClick={() => handleLevelChange(level)}
            >
              Level {level} ({dialoguesByLevel[level as keyof typeof dialoguesByLevel]?.length || 0})
            </Button>
          ))}
        </div>

        {/* Dialogue Selector */}
        <div className="max-h-60 overflow-y-auto mb-6 p-2 bg-white/50 dark:bg-gray-800/50 rounded-xl">
          <div className="flex flex-wrap gap-2 justify-center">
            {filteredDialogues.map((dialogue, index) => (
              <Button
                key={index}
                variant={activeDialogue === index ? 'default' : 'outline'}
                size="sm"
                onClick={() => setActiveDialogue(index)}
                className="gap-2"
              >
                <span className="text-lg">{dialogue.icon}</span>
                <span className="hidden sm:inline">{dialogue.title}</span>
                <Badge variant={dialogue.level >= 4 ? 'destructive' : dialogue.level >= 2 ? 'default' : 'secondary'} className="ml-1">
                  L{dialogue.level}
                </Badge>
              </Button>
            ))}
          </div>
        </div>

        {/* Dialogue Card */}
        <Card className="mb-6 shadow-2xl border-2">
          <CardHeader>
            <CardTitle className="flex items-center justify-center gap-3 text-2xl">
              <span className="text-4xl">{currentDialogue.icon}</span>
              <span>{currentDialogue.title}</span>
              <Badge variant="outline" className="ml-2">
                {getLevelDescription(currentDialogue.level)}
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {currentDialogue.scenario.map((line, index) => (
              <div
                key={index}
                className={`flex items-start gap-4 p-4 rounded-xl ${
                  line.speaker === 'A'
                    ? 'bg-blue-50 dark:bg-blue-900/30 ml-8'
                    : 'bg-pink-50 dark:bg-pink-900/30 mr-8'
                }`}
              >
                <div
                  className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                    line.speaker === 'A'
                      ? 'bg-blue-500 text-white'
                      : 'bg-pink-500 text-white'
                  }`}
                >
                  <User className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <Badge variant="outline" className="text-xs">
                      {line.speaker === 'A' ? '男声' : '女声'}
                    </Badge>
                    <p className="font-semibold text-lg">{line.text}</p>
                  </div>
                  <p className="text-muted-foreground">{line.cn}</p>
                </div>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => speak(line.text, line.speaker)}
                  disabled={isSpeaking}
                  className="flex-shrink-0"
                  title={line.speaker === 'A' ? '播放男声' : '播放女声'}
                >
                  <Volume2 className="h-5 w-5" />
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-center gap-4 mb-6">
          <Button onClick={goToPrevious} size="lg" className="gap-2">
            <ArrowLeft className="h-5 w-5" />
            上一个
          </Button>
          <Button onClick={goToNext} size="lg" className="gap-2">
            下一个
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>

        {/* Progress */}
        <div className="text-center text-sm text-muted-foreground mb-6">
          {activeDialogue + 1} / {filteredDialogues.length} {selectedLevel && `(Level ${selectedLevel})`}
        </div>

        {/* Tips Card */}
        <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20">
          <CardHeader>
            <CardTitle className="text-xl">练习提示</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <p>• 每个对话至少5个来回（10句），充分练习口语</p>
            <p>• 点击喇叭图标听发音，A为男声，B为女声</p>
            <p>• 先阅读中文意思，理解对话内容</p>
            <p>• 和朋友一起练习，一人扮演A（男），一人扮演B（女）</p>
            <p>• 从 Level 1 开始，逐步提升到更高级别</p>
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
