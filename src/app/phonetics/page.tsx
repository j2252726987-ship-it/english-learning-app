'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Volume2 } from 'lucide-react';
import Link from 'next/link';

// 音标发音映射表 - 使用英语发音表示模拟音标发音
const phoneticSoundMap: { [key: string]: string } = {
  // 单元音
  '/iː/': 'eee',
  '/ɪ/': 'ih',
  '/e/': 'eh',
  '/æ/': 'ae',
  '/ɜː/': 'er',
  '/ə/': 'uh',
  '/ʌ/': 'u',
  '/uː/': 'ooo',
  '/ʊ/': 'oo',
  '/ɔː/': 'or',
  '/ɒ/': 'o',
  '/ɑː/': 'ah',
  // 双元音
  '/eɪ/': 'ay',
  '/aɪ/': 'eye',
  '/ɔɪ/': 'oy',
  '/aʊ/': 'ow',
  '/əʊ/': 'oh',
  '/ɪə/': 'ear',
  '/eə/': 'air',
  '/ʊə/': 'ure',
  // 清辅音
  '/p/': 'p',
  '/t/': 't',
  '/k/': 'k',
  '/f/': 'f',
  '/θ/': 'th',
  '/s/': 's',
  '/ʃ/': 'sh',
  '/h/': 'h',
  '/tʃ/': 'ch',
  '/ts/': 'ts',
  '/tr/': 'tr',
  // 浊辅音
  '/b/': 'b',
  '/d/': 'd',
  '/g/': 'g',
  '/v/': 'v',
  '/ð/': 'the',
  '/z/': 'z',
  '/ʒ/': 'si',
  '/r/': 'r',
  '/dʒ/': 'j',
  '/dz/': 'dz',
  '/dr/': 'dr',
  '/m/': 'm',
  '/n/': 'n',
  '/ŋ/': 'ng',
  '/l/': 'l',
  '/w/': 'w',
  '/j/': 'y',
};

const vowels = {
  monophthongs: [
    { symbol: '/iː/', example: 'see', exampleCn: '看见', description: '长元音，像微笑', sound: phoneticSoundMap['/iː/'] },
    { symbol: '/ɪ/', example: 'sit', exampleCn: '坐', description: '短元音，紧张有力', sound: phoneticSoundMap['/ɪ/'] },
    { symbol: '/e/', example: 'ten', exampleCn: '十', description: '短元音，扁嘴形', sound: phoneticSoundMap['/e/'] },
    { symbol: '/æ/', example: 'cat', exampleCn: '猫', description: '短元音，大口型', sound: phoneticSoundMap['/æ/'] },
    { symbol: '/ɜː/', example: 'bird', exampleCn: '鸟', description: '长元音，中口型', sound: phoneticSoundMap['/ɜː/'] },
    { symbol: '/ə/', example: 'about', exampleCn: '关于', description: '弱读音，中性口型', sound: phoneticSoundMap['/ə/'] },
    { symbol: '/ʌ/', example: 'cup', exampleCn: '杯子', description: '短元音，开口笑', sound: phoneticSoundMap['/ʌ/'] },
    { symbol: '/uː/', example: 'too', exampleCn: '也', description: '长元音，圆唇', sound: phoneticSoundMap['/uː/'] },
    { symbol: '/ʊ/', example: 'put', exampleCn: '放', description: '短元音，短圆唇', sound: phoneticSoundMap['/ʊ/'] },
    { symbol: '/ɔː/', example: 'door', exampleCn: '门', description: '长元音，大圆唇', sound: phoneticSoundMap['/ɔː/'] },
    { symbol: '/ɒ/', example: 'hot', exampleCn: '热', description: '短元音，开口大', sound: phoneticSoundMap['/ɒ/'] },
    { symbol: '/ɑː/', example: 'car', exampleCn: '汽车', description: '长元音，大口型', sound: phoneticSoundMap['/ɑː/'] },
  ],
  diphthongs: [
    { symbol: '/eɪ/', example: 'face', exampleCn: '脸', description: '双元音，从e到i', sound: phoneticSoundMap['/eɪ/'] },
    { symbol: '/aɪ/', example: 'like', exampleCn: '喜欢', description: '双元音，从a到i', sound: phoneticSoundMap['/aɪ/'] },
    { symbol: '/ɔɪ/', example: 'boy', exampleCn: '男孩', description: '双元音，从o到i', sound: phoneticSoundMap['/ɔɪ/'] },
    { symbol: '/aʊ/', example: 'mouse', exampleCn: '老鼠', description: '双元音，从a到u', sound: phoneticSoundMap['/aʊ/'] },
    { symbol: '/əʊ/', example: 'go', exampleCn: '去', description: '双元音，从o到u', sound: phoneticSoundMap['/əʊ/'] },
    { symbol: '/ɪə/', example: 'ear', exampleCn: '耳朵', description: '双元音，从i到e', sound: phoneticSoundMap['/ɪə/'] },
    { symbol: '/eə/', example: 'air', exampleCn: '空气', description: '双元音，从e到e', sound: phoneticSoundMap['/eə/'] },
    { symbol: '/ʊə/', example: 'pure', exampleCn: '纯粹的', description: '双元音，从u到e', sound: phoneticSoundMap['/ʊə/'] },
  ]
};

const consonants = {
  voiceless: [
    { symbol: '/p/', example: 'pen', exampleCn: '钢笔', description: '清辅音，送气强', sound: phoneticSoundMap['/p/'] },
    { symbol: '/t/', example: 'tea', exampleCn: '茶', description: '清辅音，舌尖抵齿龈', sound: phoneticSoundMap['/t/'] },
    { symbol: '/k/', example: 'key', exampleCn: '钥匙', description: '清辅音，后舌抬起', sound: phoneticSoundMap['/k/'] },
    { symbol: '/f/', example: 'fish', exampleCn: '鱼', description: '清辅音，上齿咬下唇', sound: phoneticSoundMap['/f/'] },
    { symbol: '/θ/', example: 'think', exampleCn: '思考', description: '清辅音，舌尖轻触齿', sound: phoneticSoundMap['/θ/'] },
    { symbol: '/s/', example: 'sun', exampleCn: '太阳', description: '清辅音，舌端靠近齿龈', sound: phoneticSoundMap['/s/'] },
    { symbol: '/ʃ/', example: 'she', exampleCn: '她', description: '清辅音，双唇突出', sound: phoneticSoundMap['/ʃ/'] },
    { symbol: '/h/', example: 'hot', exampleCn: '热', description: '清辅音，声门摩擦', sound: phoneticSoundMap['/h/'] },
    { symbol: '/tʃ/', example: 'chair', exampleCn: '椅子', description: '清辅音，舌尖卷起', sound: phoneticSoundMap['/tʃ/'] },
    { symbol: '/ts/', example: 'cats', exampleCn: '猫们', description: '清辅音，齿龈破擦音', sound: phoneticSoundMap['/ts/'] },
    { symbol: '/tr/', example: 'tree', exampleCn: '树', description: '清辅音，齿龈后塞擦', sound: phoneticSoundMap['/tr/'] },
  ],
  voiced: [
    { symbol: '/b/', example: 'book', exampleCn: '书', description: '浊辅音，双唇闭', sound: phoneticSoundMap['/b/'] },
    { symbol: '/d/', example: 'dog', exampleCn: '狗', description: '浊辅音，舌尖抵齿龈', sound: phoneticSoundMap['/d/'] },
    { symbol: '/g/', example: 'girl', exampleCn: '女孩', description: '浊辅音，后舌抬起', sound: phoneticSoundMap['/g/'] },
    { symbol: '/v/', example: 'very', exampleCn: '非常', description: '浊辅音，上齿咬下唇', sound: phoneticSoundMap['/v/'] },
    { symbol: '/ð/', example: 'this', exampleCn: '这个', description: '浊辅音，舌尖轻触齿', sound: phoneticSoundMap['/ð/'] },
    { symbol: '/z/', example: 'zoo', exampleCn: '动物园', description: '浊辅音，舌端靠近齿龈', sound: phoneticSoundMap['/z/'] },
    { symbol: '/ʒ/', example: 'measure', exampleCn: '测量', description: '浊辅音，双唇突出', sound: phoneticSoundMap['/ʒ/'] },
    { symbol: '/r/', example: 'red', exampleCn: '红色', description: '浊辅音，舌尖卷起', sound: phoneticSoundMap['/r/'] },
    { symbol: '/dʒ/', example: 'jam', exampleCn: '果酱', description: '浊辅音，舌尖卷起', sound: phoneticSoundMap['/dʒ/'] },
    { symbol: '/dz/', example: 'beds', exampleCn: '床们', description: '浊辅音，齿龈破擦音', sound: phoneticSoundMap['/dz/'] },
    { symbol: '/dr/', example: 'drive', exampleCn: '驾驶', description: '浊辅音，齿龈后塞擦', sound: phoneticSoundMap['/dr/'] },
    { symbol: '/m/', example: 'mother', exampleCn: '母亲', description: '浊辅音，双唇闭', sound: phoneticSoundMap['/m/'] },
    { symbol: '/n/', example: 'name', exampleCn: '名字', description: '浊辅音，舌尖抵齿龈', sound: phoneticSoundMap['/n/'] },
    { symbol: '/ŋ/', example: 'sing', exampleCn: '唱歌', description: '浊辅音，舌后抵软腭', sound: phoneticSoundMap['/ŋ/'] },
    { symbol: '/l/', example: 'love', exampleCn: '爱', description: '浊辅音，舌尖抵齿龈', sound: phoneticSoundMap['/l/'] },
    { symbol: '/w/', example: 'water', exampleCn: '水', description: '浊辅音，双唇圆', sound: phoneticSoundMap['/w/'] },
    { symbol: '/j/', example: 'yes', exampleCn: '是', description: '浊辅音，舌前部抬起', sound: phoneticSoundMap['/j/'] },
  ]
};

export default function PhoneticsPage() {
  const [isSpeaking, setIsSpeaking] = useState(false);

  // 使用豆包语音合成服务
  const speakText = async (text: string, speaker?: string) => {
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
          speaker: speaker || 'zh_female_mizai_saturn_bigtts', // 米才女声 - 专业播音员级别
          speechRate: -10, // 稍微慢一点，适合儿童学习
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

  const speakPhoneticSound = (sound: string) => {
    speakText(sound, 'zh_female_mizai_saturn_bigtts'); // 米才女声 - 专业播音员级别，清晰主播级
  };

  const speakPhonetic = (word: string) => {
    speakText(word, 'zh_female_mizai_saturn_bigtts'); // 米才女声 - 专业播音员级别，清晰主播级
  };

  const speak = (text: string) => {
    speakPhonetic(text);
  };

  const renderPhoneticCard = (item: any, index: number) => (
    <Card key={index} className="hover:shadow-xl transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-center gap-2">
          <CardTitle className="text-3xl font-bold text-primary">
            {item.symbol}
          </CardTitle>
          <Button
            size="sm"
            variant="ghost"
            onClick={() => speakPhoneticSound(item.sound)}
            disabled={isSpeaking}
            title="播放音标发音"
          >
            <Volume2 className="h-4 w-4" />
          </Button>
        </div>
        <CardDescription className="text-center text-sm">
          {item.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold text-lg">{item.example}</p>
              <p className="text-sm text-muted-foreground">{item.exampleCn}</p>
            </div>
            <Button
              size="sm"
              variant="outline"
              onClick={() => speak(item.example)}
              disabled={isSpeaking}
            >
              <Volume2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            音标学习
          </h1>
          <p className="text-muted-foreground">48个国际音标，双喇叭系统</p>
          <p className="text-sm text-muted-foreground mt-2">
            🔵 音标旁喇叭：播放音标本身的发音 | 🔵 示例词旁喇叭：播放完整单词发音
          </p>
        </div>

        {/* Content */}
        <Tabs defaultValue="vowels" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="vowels">元音 (20个)</TabsTrigger>
            <TabsTrigger value="consonants">辅音 (28个)</TabsTrigger>
          </TabsList>

          {/* Vowels Tab */}
          <TabsContent value="vowels" className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-purple-600 dark:text-purple-400">单元音 (12个)</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {vowels.monophthongs.map((item, index) => renderPhoneticCard(item, index))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-pink-600 dark:text-pink-400">双元音 (8个)</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {vowels.diphthongs.map((item, index) => renderPhoneticCard(item, index))}
              </div>
            </div>
          </TabsContent>

          {/* Consonants Tab */}
          <TabsContent value="consonants" className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">清辅音 (11个)</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {consonants.voiceless.map((item, index) => renderPhoneticCard(item, index))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-green-600 dark:text-green-400">浊辅音 (17个)</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {consonants.voiced.map((item, index) => renderPhoneticCard(item, index))}
              </div>
            </div>
          </TabsContent>
        </Tabs>

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
