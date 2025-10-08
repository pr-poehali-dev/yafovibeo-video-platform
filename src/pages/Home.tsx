import { useState } from 'react';
import VideoCard from '@/components/VideoCard';

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
}

const mockVideos: Video[] = [
  {
    id: '1',
    title: 'Как создать крутой дизайн за 10 минут',
    channel: 'Design Pro',
    views: '20944',
    thumbnail: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=300&fit=crop',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=1',
    likes: 1204,
    comments: 89,
    isLiked: false,
  },
  {
    id: '2',
    title: 'React хуки: полное руководство',
    channel: 'Code Master',
    views: '1606k',
    thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=2',
    likes: 8932,
    comments: 234,
    isLiked: true,
  },
  {
    id: '3',
    title: 'Топ-10 трендов веб-дизайна 2024',
    channel: 'Web Trends',
    views: '453k',
    thumbnail: 'https://images.unsplash.com/photo-1634942537034-2531766767d1?w=400&h=300&fit=crop',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=3',
    likes: 3421,
    comments: 156,
    isLiked: false,
  },
  {
    id: '4',
    title: 'Анимации в CSS: от простого к сложному',
    channel: 'CSS Wizard',
    views: '234k',
    thumbnail: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=300&fit=crop',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=4',
    likes: 2134,
    comments: 98,
    isLiked: false,
  },
  {
    id: '5',
    title: 'TypeScript для начинающих',
    channel: 'TS Academy',
    views: '892k',
    thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=5',
    likes: 6782,
    comments: 312,
    isLiked: true,
  },
  {
    id: '6',
    title: 'UI/UX дизайн: секреты профессионалов',
    channel: 'UX Masters',
    views: '567k',
    thumbnail: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400&h=300&fit=crop',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=6',
    likes: 4521,
    comments: 189,
    isLiked: false,
  },
];

export default function Home() {
  const [videos, setVideos] = useState(mockVideos);

  const handleLike = (videoId: string) => {
    setVideos(videos.map(video => 
      video.id === videoId 
        ? { ...video, isLiked: !video.isLiked, likes: video.isLiked ? video.likes - 1 : video.likes + 1 }
        : video
    ));
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2">Главная</h2>
        <p className="text-muted-foreground">Смотрите популярные видео от топовых авторов</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map(video => (
          <VideoCard
            key={video.id}
            {...video}
            onLike={handleLike}
          />
        ))}
      </div>
    </div>
  );
}
