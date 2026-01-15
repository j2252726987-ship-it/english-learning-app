import { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Trophy, Star, RotateCcw, Home, ArrowRight } from 'lucide-react';

interface GameResultModalProps {
  isOpen: boolean;
  onClose: () => void;
  score: number;
  totalQuestions: number;
  correctAnswers: number;
  level: number;
  onRestart: () => void;
  onNextLevel?: () => void;
  onHome?: () => void;
}

export function GameResultModal({
  isOpen,
  onClose,
  score,
  totalQuestions,
  correctAnswers,
  level,
  onRestart,
  onNextLevel,
  onHome,
}: GameResultModalProps) {
  const [stars, setStars] = useState(0);

  useEffect(() => {
    if (isOpen) {
      // 根据正确率计算星级
      const accuracy = correctAnswers / totalQuestions;
      if (accuracy >= 0.9) {
        setStars(3);
      } else if (accuracy >= 0.7) {
        setStars(2);
      } else if (accuracy >= 0.5) {
        setStars(1);
      } else {
        setStars(0);
      }
    }
  }, [isOpen, correctAnswers, totalQuestions]);

  const accuracy = Math.round((correctAnswers / totalQuestions) * 100);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="text-center">
          <DialogTitle className="text-3xl font-bold mb-2">
            {accuracy >= 60 ? '🎉 恭喜过关！' : '💪 继续努力！'}
          </DialogTitle>
          <DialogDescription className="text-base">
            关卡 {level} 完成
          </DialogDescription>
        </DialogHeader>

        <div className="py-6 space-y-4">
          {/* 星级评价 */}
          <div className="flex justify-center gap-2">
            {Array.from({ length: 3 }).map((_, i) => (
              <Star
                key={i}
                className={`h-12 w-12 transition-all ${
                  i < stars
                    ? 'text-yellow-500 fill-yellow-500 scale-110'
                    : 'text-gray-300 dark:text-gray-600'
                }`}
              />
            ))}
          </div>

          {/* 统计信息 */}
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="space-y-1">
              <div className="text-2xl font-bold text-primary">{score}</div>
              <div className="text-xs text-muted-foreground">得分</div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl font-bold text-green-600">{correctAnswers}</div>
              <div className="text-xs text-muted-foreground">正确</div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl font-bold text-blue-600">{accuracy}%</div>
              <div className="text-xs text-muted-foreground">正确率</div>
            </div>
          </div>

          {/* 结果评价 */}
          <div className="text-center">
            <Badge
              variant={accuracy >= 60 ? 'default' : 'secondary'}
              className="text-sm px-4 py-1"
            >
              {accuracy >= 90
                ? '太棒了！你是英语小天才！'
                : accuracy >= 70
                ? '很棒！继续加油！'
                : accuracy >= 60
                ? '不错！再接再厉！'
                : '别灰心，再试一次！'}
            </Badge>
          </div>
        </div>

        {/* 操作按钮 */}
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <Button onClick={onRestart} variant="outline" className="flex-1">
              <RotateCcw className="h-4 w-4 mr-2" />
              重新挑战
            </Button>
            {onNextLevel && accuracy >= 60 && (
              <Button onClick={onNextLevel} className="flex-1">
                下一关
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            )}
          </div>
          {onHome && (
            <Button onClick={onHome} variant="ghost" className="w-full">
              <Home className="h-4 w-4 mr-2" />
              返回首页
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
