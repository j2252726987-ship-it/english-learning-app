'use client';

import { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

interface VideoPlayerModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  videoUrl: string;
  description?: string;
}

export function VideoPlayerModal({
  isOpen,
  onClose,
  title,
  videoUrl,
  description,
}: VideoPlayerModalProps) {
  const [videoType, setVideoType] = useState<'youtube' | 'bilibili' | 'direct'>('direct');
  const [videoId, setVideoId] = useState('');

  useEffect(() => {
    // 检查视频类型并提取视频ID
    if (videoUrl.includes('bilibili.com')) {
      setVideoType('bilibili');
      // 提取B站BV号
      const match = videoUrl.match(/(BV\w+)/);
      if (match) {
        setVideoId(match[1]);
      }
    } else if (videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be')) {
      setVideoType('youtube');
      // 提取YouTube视频ID
      const match = videoUrl.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/);
      if (match) {
        setVideoId(match[1]);
      }
    } else {
      setVideoType('direct');
    }
  }, [videoUrl]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl p-0 overflow-hidden">
        <DialogHeader className="p-6 pb-0">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <DialogTitle className="text-2xl mb-2">{title}</DialogTitle>
              {description && (
                <DialogDescription>{description}</DialogDescription>
              )}
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="shrink-0"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>

        <div className="relative w-full aspect-video bg-black">
          {videoType === 'bilibili' ? (
            <iframe
              className="w-full h-full"
              src={`https://player.bilibili.com/player.html?bvid=${videoId}&page=1&high_quality=1&danmaku=0&autoplay=1`}
              title={title}
              allowFullScreen
              scrolling="no"
              style={{ border: 'none' }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
          ) : videoType === 'youtube' ? (
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <video
              className="w-full h-full"
              controls
              autoPlay
              src={videoUrl}
            >
              您的浏览器不支持视频播放
            </video>
          )}
        </div>

        <div className="p-6 pt-4">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <p>💡 点击全屏按钮获得最佳观看体验</p>
            <Button variant="outline" size="sm" onClick={onClose}>
              关闭播放器
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
