'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Play, Clock, Star, BookOpen, Volume2, Mic2, Type } from 'lucide-react';
import Link from 'next/link';
import { VideoPlayerModal } from '@/components/video-player-modal';

const cartoons = [
  // 热门动画片
  {
    id: 1,
    title: '小猪佩奇 - 快乐的一天',
    description: 'Peppa Pig快乐的一天，学习日常英语对话',
    duration: '5分钟',
    category: '热门动画',
    difficulty: '入门',
    icon: 'Star',
    iconColor: 'bg-pink-100 dark:bg-pink-900 text-pink-600 dark:text-pink-300',
    tags: ['小猪佩奇', '日常对话', '热门'],
    thumbnail: '🐷',
    videoUrl: 'https://www.youtube.com/watch?v=nHj7d6c3Jc8'
  },
  {
    id: 2,
    title: '汪汪队立大功 - 冒险开始',
    description: 'PAW Patrol汪汪队英语学习版，认识动物和颜色',
    duration: '6分钟',
    category: '热门动画',
    difficulty: '入门',
    icon: 'Star',
    iconColor: 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300',
    tags: ['汪汪队', '动物', '颜色'],
    thumbnail: '🐕',
    videoUrl: 'https://www.youtube.com/watch?v=ZG7p8yMzVz8'
  },
  {
    id: 3,
    title: '汪汪队立大功 - 拯救任务',
    description: 'PAW Patrol救援任务学习英语单词',
    duration: '7分钟',
    category: '热门动画',
    difficulty: '初级',
    icon: 'BookOpen',
    iconColor: 'bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-300',
    tags: ['汪汪队', '救援', '单词'],
    thumbnail: '🚓',
    videoUrl: 'https://www.youtube.com/watch?v=L3EeWfG6fjE'
  },
  {
    id: 4,
    title: '蓝色小考拉 - Penelope的一天',
    description: '小考拉Penelope生活情景，学习日常用语',
    duration: '5分钟',
    category: '热门动画',
    difficulty: '入门',
    icon: 'Mic2',
    iconColor: 'bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300',
    tags: ['蓝色小考拉', '日常', '情景'],
    thumbnail: '🐨',
    videoUrl: 'https://www.youtube.com/watch?v=5vq5xU-0F2c'
  },
  {
    id: 5,
    title: '米奇妙妙屋 - 魔法探险',
    description: 'Mickey Mouse Clubhouse学习形状和数字',
    duration: '8分钟',
    category: '热门动画',
    difficulty: '入门',
    icon: 'Type',
    iconColor: 'bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-300',
    tags: ['米奇妙妙屋', '形状', '数字'],
    thumbnail: '🐭',
    videoUrl: 'https://www.youtube.com/watch?v=7vGvWjN_6xw'
  },
  {
    id: 6,
    title: '超级飞侠 - 世界之旅',
    description: 'Super Wings超级飞侠学习各国文化',
    duration: '6分钟',
    category: '热门动画',
    difficulty: '初级',
    icon: 'BookOpen',
    iconColor: 'bg-sky-100 dark:bg-sky-900 text-sky-600 dark:text-sky-300',
    tags: ['超级飞侠', '文化', '地理'],
    thumbnail: '✈️',
    videoUrl: 'https://www.youtube.com/watch?v=8Vq8eP-3hSg'
  },
  {
    id: 7,
    title: '萌鸡小队 - 森林冒险',
    description: 'Little Eggplants萌鸡小队学习自然和动物',
    duration: '5分钟',
    category: '热门动画',
    difficulty: '入门',
    icon: 'Volume2',
    iconColor: 'bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300',
    tags: ['萌鸡小队', '自然', '动物'],
    thumbnail: '🐥',
    videoUrl: 'https://www.youtube.com/watch?v=9Mkz1p9M0Gk'
  },
  {
    id: 8,
    title: '小熊维尼 - 友谊故事',
    description: 'Winnie the Pooh学习友谊和分享',
    duration: '7分钟',
    category: '热门动画',
    difficulty: '入门',
    icon: 'Star',
    iconColor: 'bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-300',
    tags: ['小熊维尼', '友谊', '分享'],
    thumbnail: '🍯',
    videoUrl: 'https://www.youtube.com/watch?v=Uf7J8z7Vl1I'
  },

  // 教育动画
  {
    id: 9,
    title: '字母歌 - ABC Song',
    description: '跟着音乐学习26个字母',
    duration: '3分钟',
    category: '字母',
    difficulty: '入门',
    icon: 'Type',
    iconColor: 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300',
    tags: ['字母', '发音', '歌曲'],
    thumbnail: '🎵',
    videoUrl: 'https://www.youtube.com/watch?v=BELlZKpi1Zo'
  },
  {
    id: 10,
    title: '动物乐园',
    description: '认识各种动物及其英文名',
    duration: '5分钟',
    category: '单词',
    difficulty: '入门',
    icon: 'Volume2',
    iconColor: 'bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300',
    tags: ['动物', '单词', '认知'],
    thumbnail: '🦁',
    videoUrl: 'https://www.youtube.com/watch?v=9hLq7YbLJc0'
  },
  {
    id: 11,
    title: '颜色世界',
    description: '探索多彩的颜色世界',
    duration: '4分钟',
    category: '单词',
    difficulty: '入门',
    icon: 'Star',
    iconColor: 'bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300',
    tags: ['颜色', '单词', '视觉'],
    thumbnail: '🌈',
    videoUrl: 'https://www.youtube.com/watch?v=4p4hlGJ1N4A'
  },
  {
    id: 12,
    title: '数字派对',
    description: '和数字朋友们一起玩耍',
    duration: '6分钟',
    category: '数字',
    difficulty: '入门',
    icon: 'BookOpen',
    iconColor: 'bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-300',
    tags: ['数字', '数数', '游戏'],
    thumbnail: '🔢',
    videoUrl: 'https://www.youtube.com/watch?v=dk9Yt1PqQF4'
  },
  {
    id: 13,
    title: '音标儿歌',
    description: '通过儿歌学习音标发音',
    duration: '4分钟',
    category: '音标',
    difficulty: '初级',
    icon: 'Mic2',
    iconColor: 'bg-pink-100 dark:bg-pink-900 text-pink-600 dark:text-pink-300',
    tags: ['音标', '发音', '儿歌'],
    thumbnail: '🎤',
    videoUrl: 'https://www.youtube.com/watch?v=Y3Wt7H8NqUQ'
  },
  {
    id: 14,
    title: '日常对话',
    description: '学习日常生活中的对话',
    duration: '8分钟',
    category: '对话',
    difficulty: '初级',
    icon: 'Volume2',
    iconColor: 'bg-cyan-100 dark:bg-cyan-900 text-cyan-600 dark:text-cyan-300',
    tags: ['对话', '日常', '场景'],
    thumbnail: '💬',
    videoUrl: 'https://www.youtube.com/watch?v=qK6tBt4-7tY'
  },
  {
    id: 15,
    title: '水果超市',
    description: '在超市里认识各种水果',
    duration: '5分钟',
    category: '单词',
    difficulty: '入门',
    icon: 'Star',
    iconColor: 'bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-300',
    tags: ['水果', '单词', '生活'],
    thumbnail: '🍎',
    videoUrl: 'https://www.youtube.com/watch?v=u5Zz_7YgIw0'
  },
  {
    id: 16,
    title: '家庭时光',
    description: '学习家庭成员的称呼',
    duration: '4分钟',
    category: '单词',
    difficulty: '入门',
    icon: 'Type',
    iconColor: 'bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-300',
    tags: ['家庭', '单词', '亲情'],
    thumbnail: '👨‍👩‍👧‍👦',
    videoUrl: 'https://www.youtube.com/watch?v=R7a3Jd6K3T8'
  },
  {
    id: 17,
    title: '天气小精灵',
    description: '认识不同的天气现象',
    duration: '4分钟',
    category: '单词',
    difficulty: '入门',
    icon: 'BookOpen',
    iconColor: 'bg-sky-100 dark:bg-sky-900 text-sky-600 dark:text-sky-300',
    tags: ['天气', '单词', '自然'],
    thumbnail: '🌤️',
    videoUrl: 'https://www.youtube.com/watch?v=1z9PQ3m4f9A'
  },
  {
    id: 18,
    title: '打招呼小剧场',
    description: '情景剧学习打招呼的方式',
    duration: '6分钟',
    category: '对话',
    difficulty: '初级',
    icon: 'Mic2',
    iconColor: 'bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300',
    tags: ['对话', '礼仪', '情景'],
    thumbnail: '👋',
    videoUrl: 'https://www.youtube.com/watch?v=R1KQ4F3a1I8'
  },
  {
    id: 19,
    title: '身体部位探险',
    description: '认识身体的各个部位',
    duration: '5分钟',
    category: '单词',
    difficulty: '入门',
    icon: 'Type',
    iconColor: 'bg-rose-100 dark:bg-rose-900 text-rose-600 dark:text-rose-300',
    tags: ['身体', '单词', '认知'],
    thumbnail: '👤',
    videoUrl: 'https://www.youtube.com/watch?v=1h9s2qz6aM0'
  },
  {
    id: 20,
    title: '发音小课堂',
    description: '纠正常见的发音错误',
    duration: '7分钟',
    category: '音标',
    difficulty: '中级',
    icon: 'Volume2',
    iconColor: 'bg-emerald-100 dark:bg-emerald-900 text-emerald-600 dark:text-emerald-300',
    tags: ['发音', '纠正', '技巧'],
    thumbnail: '📚',
    videoUrl: 'https://www.youtube.com/watch?v=wE7sAaF-7hI'
  },
];

export default function CartoonsPage() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<{
    title: string;
    videoUrl: string;
    description: string;
  } | null>(null);

  const handlePlayVideo = (cartoon: typeof cartoons[0]) => {
    setSelectedVideo({
      title: cartoon.title,
      videoUrl: cartoon.videoUrl,
      description: cartoon.description,
    });
    setIsVideoOpen(true);
  };

  const handleCloseVideo = () => {
    setIsVideoOpen(false);
    setSelectedVideo(null);
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Play': return <Play className="h-5 w-5" />;
      case 'Clock': return <Clock className="h-5 w-5" />;
      case 'Star': return <Star className="h-5 w-5" />;
      case 'BookOpen': return <BookOpen className="h-5 w-5" />;
      case 'Volume2': return <Volume2 className="h-5 w-5" />;
      case 'Mic2': return <Mic2 className="h-5 w-5" />;
      case 'Type': return <Type className="h-5 w-5" />;
      default: return <Play className="h-5 w-5" />;
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case '入门': return 'bg-green-500';
      case '初级': return 'bg-blue-500';
      case '中级': return 'bg-purple-500';
      case '高级': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-8">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            启蒙动画
          </h1>
          <p className="text-muted-foreground">观看趣味动画，快乐学习英语</p>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          <Button variant="default">全部</Button>
          <Button variant="outline">热门动画</Button>
          <Button variant="outline">字母</Button>
          <Button variant="outline">音标</Button>
          <Button variant="outline">单词</Button>
          <Button variant="outline">数字</Button>
          <Button variant="outline">对话</Button>
        </div>

        {/* Cartoon Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {cartoons.map((cartoon) => (
            <Card key={cartoon.id} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              {/* Thumbnail */}
              <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center relative overflow-hidden">
                <span className="text-6xl group-hover:scale-110 transition-transform">
                  {cartoon.thumbnail}
                </span>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {cartoon.duration}
                </div>
              </div>

              <CardHeader>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className={`flex items-center justify-center w-10 h-10 rounded-full ${cartoon.iconColor}`}>
                    {getIcon(cartoon.icon)}
                  </div>
                  <Badge className={getDifficultyColor(cartoon.difficulty)}>
                    {cartoon.difficulty}
                  </Badge>
                </div>
                <CardTitle className="text-lg line-clamp-1">{cartoon.title}</CardTitle>
                <CardDescription className="line-clamp-2">{cartoon.description}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Tags */}
                <div className="flex flex-wrap gap-1">
                  {cartoon.tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Play Button */}
                <Button
                  className="w-full gap-2 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600"
                  onClick={() => handlePlayVideo(cartoon)}
                >
                  <Play className="h-4 w-4" />
                  开始观看
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Learning Tips */}
        <Card className="mt-8 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Star className="h-5 w-5 text-yellow-500" />
              观看建议
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <h4 className="font-semibold">📌 循序渐进</h4>
                <p className="text-sm text-muted-foreground">
                  从简单字母开始，逐步过渡到单词和对话，打好基础
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold">📌 重复观看</h4>
                <p className="text-sm text-muted-foreground">
                  多次观看同一个视频，加深记忆，模仿发音
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold">📌 互动学习</h4>
                <p className="text-sm text-muted-foreground">
                  观看时跟着说唱，家长可以一起参与互动
                </p>
              </div>
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

      {/* Video Player Modal */}
      {selectedVideo && (
        <VideoPlayerModal
          isOpen={isVideoOpen}
          onClose={handleCloseVideo}
          title={selectedVideo.title}
          videoUrl={selectedVideo.videoUrl}
          description={selectedVideo.description}
        />
      )}
    </div>
  );
}
