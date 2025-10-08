import { useState } from 'react';
import VideoCard from '@/components/VideoCard';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface Video {
  id: string;
  title: string;
  channel: string;
  views: string;
  thumbnail: string;
  avatar: string;
  likes: number;
  comments: number;
  isLiked: boolean;
  watchedAt: string;
}

const historyVideos: Video[] = [
  {
    id: 'h1',
    title: 'React хуки: полное руководство',
    channel: 'Code Master',
    views: '1606k',
    thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=2',
    likes: 8932,
    comments: 234,
    isLiked: true,
    watchedAt: 'Сегодня в 14:30',
  },
  {
    id: 'h2',
    title: 'Топ-10 трендов веб-дизайна 2024',
    channel: 'Web Trends',
    views: '453k',
    thumbnail: 'https://images.unsplash.com/photo-1634942537034-2531766767d1?w=400&h=300&fit=crop',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=3',
    likes: 3421,
    comments: 156,
    isLiked: false,
    watchedAt: 'Вчера в 19:15',
  },
  {
    id: 'h3',
    title: 'TypeScript для начинающих',
    channel: 'TS Academy',
    views: '892k',
    thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=5',
    likes: 6782,
    comments: 312,
    isLiked: true,
    watchedAt: '2 дня назад',
  },
  {
    id: 'h4',
    title: 'Анимации в CSS: от простого к сложному',
    channel: 'CSS Wizard',
    views: '234k',
    thumbnail: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=300&fit=crop',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=4',
    likes: 2134,
    comments: 98,
    isLiked: false,
    watchedAt: 'Неделю назад',
  },
];

export default function History() {
  const [videos, setVideos] = useState(historyVideos);

  const handleLike = (videoId: string) => {
    setVideos(videos.map(video => 
      video.id === videoId 
        ? { ...video, isLiked: !video.isLiked, likes: video.isLiked ? video.likes - 1 : video.likes + 1 }
        : video
    ));
  };

  const handleClearHistory = () => {
    setVideos([]);
  };

  return (
    <div className="p-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold mb-2">История просмотров</h2>
          <p className="text-muted-foreground">Ваши недавно просмотренные видео</p>
        </div>
        <Button 
          variant="outline" 
          onClick={handleClearHistory}
          disabled={videos.length === 0}
        >
          <Icon name="Trash2" size={18} className="mr-2" />
          Очистить историю
        </Button>
      </div>

      {videos.length === 0 ? (
        <div className="text-center py-20">
          <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
            <Icon name="Clock" size={48} className="text-muted-foreground" />
          </div>
          <h3 className="text-xl font-semibold mb-2">История пуста</h3>
          <p className="text-muted-foreground">Смотрите видео, и они появятся здесь</p>
        </div>
      ) : (
        <div className="space-y-6">
          {videos.map(video => (
            <div key={video.id}>
              <p className="text-sm text-muted-foreground mb-3 font-medium">{video.watchedAt}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <VideoCard
                  {...video}
                  onLike={handleLike}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
