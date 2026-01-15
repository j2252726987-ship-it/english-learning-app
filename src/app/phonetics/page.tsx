'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Volume2 } from 'lucide-react';
import Link from 'next/link';

const vowels = {
  monophthongs: [
    { symbol: '/iː/', example: 'see', exampleCn: '看见', description: '长元音，像微笑' },
    { symbol: '/ɪ/', example: 'sit', exampleCn: '坐', description: '短元音，紧张有力' },
    { symbol: '/e/', example: 'ten', exampleCn: '十', description: '短元音，扁嘴形' },
    { symbol: '/æ/', example: 'cat', exampleCn: '猫', description: '短元音，大口型' },
    { symbol: '/ɜː/', example: 'bird', exampleCn: '鸟', description: '长元音，中口型' },
    { symbol: '/ə/', example: 'about', exampleCn: '关于', description: '弱读音，中性口型' },
    { symbol: '/ʌ/', example: 'cup', exampleCn: '杯子', description: '短元音，开口笑' },
    { symbol: '/uː/', example: 'too', exampleCn: '也', description: '长元音，圆唇' },
    { symbol: '/ʊ/', example: 'put', exampleCn: '放', description: '短元音，短圆唇' },
    { symbol: '/ɔː/', example: 'door', exampleCn: '门', description: '长元音，大圆唇' },
    { symbol: '/ɒ/', example: 'hot', exampleCn: '热', description: '短元音，开口大' },
    { symbol: '/ɑː/', example: 'car', exampleCn: '汽车', description: '长元音，大口型' },
  ],
  diphthongs: [
    { symbol: '/eɪ/', example: 'face', exampleCn: '脸', description: '双元音，从e到i' },
    { symbol: '/aɪ/', example: 'like', exampleCn: '喜欢', description: '双元音，从a到i' },
    { symbol: '/ɔɪ/', example: 'boy', exampleCn: '男孩', description: '双元音，从o到i' },
    { symbol: '/aʊ/', example: 'mouse', exampleCn: '老鼠', description: '双元音，从a到u' },
    { symbol: '/əʊ/', example: 'go', exampleCn: '去', description: '双元音，从o到u' },
    { symbol: '/ɪə/', example: 'ear', exampleCn: '耳朵', description: '双元音，从i到e' },
    { symbol: '/eə/', example: 'air', exampleCn: '空气', description: '双元音，从e到e' },
    { symbol: '/ʊə/', example: 'pure', exampleCn: '纯粹的', description: '双元音，从u到e' },
  ]
};

const consonants = {
  voiceless: [
    { symbol: '/p/', example: 'pen', exampleCn: '钢笔', description: '清辅音，送气强' },
    { symbol: '/t/', example: 'tea', exampleCn: '茶', description: '清辅音，舌尖抵齿龈' },
    { symbol: '/k/', example: 'key', exampleCn: '钥匙', description: '清辅音，后舌抬起' },
    { symbol: '/f/', example: 'fish', exampleCn: '鱼', description: '清辅音，上齿咬下唇' },
    { symbol: '/θ/', example: 'think', exampleCn: '思考', description: '清辅音，舌尖轻触齿' },
    { symbol: '/s/', example: 'sun', exampleCn: '太阳', description: '清辅音，舌端靠近齿龈' },
    { symbol: '/ʃ/', example: 'she', exampleCn: '她', description: '清辅音，双唇突出' },
    { symbol: '/h/', example: 'hot', exampleCn: '热', description: '清辅音，声门摩擦' },
    { symbol: '/tʃ/', example: 'chair', exampleCn: '椅子', description: '清辅音，舌尖卷起' },
    { symbol: '/ts/', example: 'cats', exampleCn: '猫们', description: '清辅音，齿龈破擦音' },
    { symbol: '/tr/', example: 'tree', exampleCn: '树', description: '清辅音，齿龈后塞擦' },
  ],
  voiced: [
    { symbol: '/b/', example: 'book', exampleCn: '书', description: '浊辅音，双唇闭' },
    { symbol: '/d/', example: 'dog', exampleCn: '狗', description: '浊辅音，舌尖抵齿龈' },
    { symbol: '/g/', example: 'girl', exampleCn: '女孩', description: '浊辅音，后舌抬起' },
    { symbol: '/v/', example: 'very', exampleCn: '非常', description: '浊辅音，上齿咬下唇' },
    { symbol: '/ð/', example: 'this', exampleCn: '这个', description: '浊辅音，舌尖轻触齿' },
    { symbol: '/z/', example: 'zoo', exampleCn: '动物园', description: '浊辅音，舌端靠近齿龈' },
    { symbol: '/ʒ/', example: 'measure', exampleCn: '测量', description: '浊辅音，双唇突出' },
    { symbol: '/r/', example: 'red', exampleCn: '红色', description: '浊辅音，舌尖卷起' },
    { symbol: '/dʒ/', example: 'jam', exampleCn: '果酱', description: '浊辅音，舌尖卷起' },
    { symbol: '/dz/', example: 'beds', exampleCn: '床们', description: '浊辅音，齿龈破擦音' },
    { symbol: '/dr/', example: 'drive', exampleCn: '驾驶', description: '浊辅音，齿龈后塞擦' },
    { symbol: '/m/', example: 'mother', exampleCn: '母亲', description: '浊辅音，双唇闭' },
    { symbol: '/n/', example: 'name', exampleCn: '名字', description: '浊辅音，舌尖抵齿龈' },
    { symbol: '/ŋ/', example: 'sing', exampleCn: '唱歌', description: '浊辅音，舌后抵软腭' },
    { symbol: '/l/', example: 'love', exampleCn: '爱', description: '浊辅音，舌尖抵齿龈' },
    { symbol: '/w/', example: 'water', exampleCn: '水', description: '浊辅音，双唇圆' },
    { symbol: '/j/', example: 'yes', exampleCn: '是', description: '浊辅音，舌前部抬起' },
  ]
};

export default function PhoneticsPage() {
  const [isSpeaking, setIsSpeaking] = useState(false);

  const speakPhonetic = (word: string) => {
    if ('speechSynthesis' in window) {
      setIsSpeaking(true);

      // 播放示例单词两次，使用较慢的语速确保音标发音清晰
      const utterance1 = new SpeechSynthesisUtterance(word);
      utterance1.lang = 'en-US';
      utterance1.rate = 0.6; // 更慢的语速，方便听清音标
      utterance1.pitch = 1.0;

      const utterance2 = new SpeechSynthesisUtterance(word);
      utterance2.lang = 'en-US';
      utterance2.rate = 0.6;
      utterance2.pitch = 1.0;

      let count = 0;
      const checkEnd = () => {
        count++;
        if (count >= 2) {
          setIsSpeaking(false);
        }
      };

      utterance1.onend = checkEnd;
      utterance1.onerror = checkEnd;
      utterance2.onend = checkEnd;
      utterance2.onerror = checkEnd;

      window.speechSynthesis.speak(utterance1);
      setTimeout(() => {
        window.speechSynthesis.speak(utterance2);
      }, 1000); // 间隔1秒播放第二次
    }
  };

  const speak = (text: string) => {
    speakPhonetic(text);
  };

  const renderPhoneticCard = (item: any, index: number) => (
    <Card key={index} className="hover:shadow-xl transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-center gap-3">
          <CardTitle className="text-3xl font-bold text-primary">
            {item.symbol}
          </CardTitle>
          <Button
            size="sm"
            variant="ghost"
            onClick={() => speak(item.example)}
            disabled={isSpeaking}
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
          <p className="text-muted-foreground">48个国际音标，点击喇叭听示例单词的标准发音</p>
          <p className="text-sm text-muted-foreground mt-2">💡 音标发音通过示例单词体现，请仔细聆听</p>
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
