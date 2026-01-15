import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Trophy, Star } from 'lucide-react';

interface GameProgressBarProps {
  currentLevel: number;
  totalLevels: number;
  score: number;
  lives?: number;
}

export function GameProgressBar({
  currentLevel,
  totalLevels,
  score,
  lives
}: GameProgressBarProps) {
  const progress = (currentLevel / totalLevels) * 100;

  return (
    <Card className="mb-4 p-4 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20">
      <div className="flex items-center justify-between gap-4">
        {/* 关卡进度 */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Trophy className="h-5 w-5 text-yellow-500" />
              <span className="font-semibold">
                关卡 {currentLevel}/{totalLevels}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
              <span className="font-bold text-lg">{score} 分</span>
            </div>
          </div>
          <Progress value={progress} className="h-3" />
        </div>

        {/* 生命值 */}
        {lives !== undefined && (
          <div className="flex items-center gap-1 ml-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className={`w-4 h-4 rounded-full transition-all ${
                  i < lives ? 'bg-red-500' : 'bg-gray-300 dark:bg-gray-600'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </Card>
  );
}
