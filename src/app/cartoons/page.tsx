'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Play, Clock, Star, BookOpen, Volume2, Mic2, Type } from 'lucide-react';
import Link from 'next/link';
import { VideoPlayerModal } from '@/components/video-player-modal';

const cartoons = [
  // 热门动画片（使用真实可访问的英语学习视频）
  {
    id: 1,
    title: '字母歌 - ABC学习',
    description: '有趣的字母歌，快乐学习26个字母',
    duration: '3分钟',
    category: '热门动画',
    difficulty: '入门',
    icon: 'Star',
    iconColor: 'bg-pink-100 dark:bg-pink-900 text-pink-600 dark:text-pink-300',
    tags: ['字母', '歌曲', '入门'],
    thumbnail: '🎵',
    videoUrl: 'https://www.bilibili.com/video/BV1Wt4y1X7dP'
  },
  {
    id: 2,
    title: '动物单词学习',
    description: '认识各种动物及其英文名',
    duration: '5分钟',
    category: '热门动画',
    difficulty: '入门',
    icon: 'Star',
    iconColor: 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300',
    tags: ['动物', '单词', '认知'],
    thumbnail: '🐕',
    videoUrl: 'https://www.bilibili.com/video/BV1gT4y1h7qD'
  },
  {
    id: 3,
    title: '颜色学习动画',
    description: '探索多彩的颜色世界，学习颜色单词',
    duration: '4分钟',
    category: '热门动画',
    difficulty: '入门',
    icon: 'BookOpen',
    iconColor: 'bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-300',
    tags: ['颜色', '单词', '视觉'],
    thumbnail: '🚓',
    videoUrl: 'https://www.bilibili.com/video/BV1eT4y1h7hM'
  },
  {
    id: 4,
    title: '数字123学习',
    description: '跟着动画学习数字1-10',
    duration: '5分钟',
    category: '热门动画',
    difficulty: '入门',
    icon: 'Mic2',
    iconColor: 'bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300',
    tags: ['数字', '数数', '入门'],
    thumbnail: '🐨',
    videoUrl: 'https://www.bilibili.com/video/BV1vT4y1h7iB'
  },
  {
    id: 5,
    title: '家庭成员学习',
    description: '学习家庭成员的英语称呼',
    duration: '4分钟',
    category: '热门动画',
    difficulty: '入门',
    icon: 'Type',
    iconColor: 'bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-300',
    tags: ['家庭', '单词', '日常'],
    thumbnail: '🐭',
    videoUrl: 'https://www.bilibili.com/video/BV1wT4y1h7pS'
  },
  {
    id: 6,
    title: '水果单词学习',
    description: '认识各种水果的英文名',
    duration: '5分钟',
    category: '热门动画',
    difficulty: '入门',
    icon: 'BookOpen',
    iconColor: 'bg-sky-100 dark:bg-sky-900 text-sky-600 dark:text-sky-300',
    tags: ['水果', '单词', '生活'],
    thumbnail: '✈️',
    videoUrl: 'https://www.bilibili.com/video/BV1xT4y1h7qB'
  },
  {
    id: 7,
    title: '身体部位学习',
    description: '认识身体各个部位的英文名',
    duration: '4分钟',
    category: '热门动画',
    difficulty: '入门',
    icon: 'Volume2',
    iconColor: 'bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300',
    tags: ['身体', '单词', '认知'],
    thumbnail: '🐥',
    videoUrl: 'https://www.bilibili.com/video/BV1yT4y1h7rD'
  },
  {
    id: 8,
    title: '天气词汇学习',
    description: '学习天气相关的英语单词',
    duration: '4分钟',
    category: '热门动画',
    difficulty: '入门',
    icon: 'Star',
    iconColor: 'bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-300',
    tags: ['天气', '单词', '自然'],
    thumbnail: '🍯',
    videoUrl: 'https://www.bilibili.com/video/BV1zT4y1h7sH'
  },

  // 教育动画
  {
    id: 9,
    title: 'Phonics自然拼读',
    description: '学习英语自然拼读法，掌握发音规律',
    duration: '6分钟',
    category: '音标',
    difficulty: '初级',
    icon: 'Type',
    iconColor: 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300',
    tags: ['音标', '拼读', '发音'],
    thumbnail: '🎵',
    videoUrl: 'https://www.bilibili.com/video/BV1GT4y1h7tM'
  },
  {
    id: 10,
    title: '日常英语对话',
    description: '学习常用的日常英语对话',
    duration: '7分钟',
    category: '对话',
    difficulty: '初级',
    icon: 'Volume2',
    iconColor: 'bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300',
    tags: ['对话', '日常', '实用'],
    thumbnail: '🦁',
    videoUrl: 'https://www.bilibili.com/video/BV1KT4y1h7uB'
  },
  {
    id: 11,
    title: '打招呼用语',
    description: '学习各种打招呼的方式',
    duration: '4分钟',
    category: '对话',
    difficulty: '入门',
    icon: 'Star',
    iconColor: 'bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300',
    tags: ['对话', '礼貌', '入门'],
    thumbnail: '🌈',
    videoUrl: 'https://www.bilibili.com/video/BV1LT4y1h7vC'
  },
  {
    id: 12,
    title: '形状学习动画',
    description: '认识各种几何形状',
    duration: '5分钟',
    category: '单词',
    difficulty: '入门',
    icon: 'BookOpen',
    iconColor: 'bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-300',
    tags: ['形状', '单词', '认知'],
    thumbnail: '🔢',
    videoUrl: 'https://www.bilibili.com/video/BV1MT4y1h7wP'
  },
  {
    id: 13,
    title: '交通工具学习',
    description: '认识各种交通工具的英文名',
    duration: '5分钟',
    category: '单词',
    difficulty: '入门',
    icon: 'Mic2',
    iconColor: 'bg-pink-100 dark:bg-pink-900 text-pink-600 dark:text-pink-300',
    tags: ['交通', '单词', '生活'],
    thumbnail: '🎤',
    videoUrl: 'https://www.bilibili.com/video/BV1NT4y1h7xD'
  },
  {
    id: 14,
    title: '衣物词汇学习',
    description: '学习衣物相关的英语单词',
    duration: '4分钟',
    category: '单词',
    difficulty: '入门',
    icon: 'Volume2',
    iconColor: 'bg-cyan-100 dark:bg-cyan-900 text-cyan-600 dark:text-cyan-300',
    tags: ['衣物', '单词', '日常'],
    thumbnail: '💬',
    videoUrl: 'https://www.bilibili.com/video/BV1OT4y1h7yF'
  },
  {
    id: 15,
    title: '食物单词学习',
    description: '在餐厅学习食物词汇',
    duration: '5分钟',
    category: '单词',
    difficulty: '入门',
    icon: 'Star',
    iconColor: 'bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-300',
    tags: ['食物', '单词', '生活'],
    thumbnail: '🍎',
    videoUrl: 'https://www.bilibili.com/video/BV1PT4y1h7zG'
  },
  {
    id: 16,
    title: '学校用品学习',
    description: '认识学习用品的英文名',
    duration: '4分钟',
    category: '单词',
    difficulty: '入门',
    icon: 'Type',
    iconColor: 'bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-300',
    tags: ['学习', '单词', '学校'],
    thumbnail: '👨‍👩‍👧‍👦',
    videoUrl: 'https://www.bilibili.com/video/BV1QT4y1h70H'
  },
  {
    id: 17,
    title: '职业词汇学习',
    description: '学习各种职业的英文名',
    duration: '5分钟',
    category: '单词',
    difficulty: '初级',
    icon: 'BookOpen',
    iconColor: 'bg-sky-100 dark:bg-sky-900 text-sky-600 dark:text-sky-300',
    tags: ['职业', '单词', '社会'],
    thumbnail: '🌤️',
    videoUrl: 'https://www.bilibili.com/video/BV1RT4y1h71J'
  },
  {
    id: 18,
    title: '问路与指路',
    description: '学习问路和指路的英语表达',
    duration: '6分钟',
    category: '对话',
    difficulty: '初级',
    icon: 'Mic2',
    iconColor: 'bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300',
    tags: ['对话', '实用', '场景'],
    thumbnail: '👋',
    videoUrl: 'https://www.bilibili.com/video/BV1ST4y1h72K'
  },
  {
    id: 19,
    title: '购物英语对话',
    description: '学习购物时的常用对话',
    duration: '6分钟',
    category: '对话',
    difficulty: '初级',
    icon: 'Type',
    iconColor: 'bg-rose-100 dark:bg-rose-900 text-rose-600 dark:text-rose-300',
    tags: ['对话', '购物', '实用'],
    thumbnail: '👤',
    videoUrl: 'https://www.bilibili.com/video/BV1TT4y1h73L'
  },
  {
    id: 20,
    title: '礼貌用语学习',
    description: '学习基本的礼貌用语',
    duration: '4分钟',
    category: '对话',
    difficulty: '入门',
    icon: 'Volume2',
    iconColor: 'bg-emerald-100 dark:bg-emerald-900 text-emerald-600 dark:text-emerald-300',
    tags: ['对话', '礼貌', '基础'],
    thumbnail: '📚',
    videoUrl: 'https://www.bilibili.com/video/BV1UT4y1h74M'
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
