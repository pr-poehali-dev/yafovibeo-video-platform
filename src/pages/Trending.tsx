import { useState } from 'react';
import VideoCard from '@/components/VideoCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

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

const trendingVideos: Video[] = [
  {
    id: 't1',
    title: 'ВЗРЫВ МОЗГА: Новая технология AI 2024',
    channel: 'Tech Explainer',
    views: '2.3M',
    thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=tech',
    likes: 125000,
    comments: 4532,
    isLiked: false,
  },
  {
    id: 't2',
    title: 'Топ-5 лайфхаков для программистов',
    channel: 'CodeLife',
    views: '1.8M',
    thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=code',
    likes: 98000,
    comments: 2341,
    isLiked: true,
  },
  {
    id: 't3',
    title: 'Обзор нового MacBook Pro M4',
    channel: 'Gadget Review',
    views: '3.1M',
    thumbnail: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=gadget',
    likes: 156000,
    comments: 5678,
    isLiked: false,
  },
  {
    id: 't4',
    title: 'Как я заработал $10000 за месяц на фрилансе',
    channel: 'Freelance Tips',
    views: '4.2M',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=freelance',
    likes: 234000,
    comments: 8934,
    isLiked: true,
  },
];

const musicVideos: Video[] = [
  {
    id: 'm1',
    title: 'Лучшие хиты 2024 | Топ 50',
    channel: 'Music Charts',
    views: '5.6M',
    thumbnail: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=300&fit=crop',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=music',
    likes: 345000,
    comments: 12000,
    isLiked: false,
  },
  {
    id: 'm2',
    title: 'Концерт года: полная версия',
    channel: 'Live Music',
    views: '7.2M',
    thumbnail: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=live',
    likes: 456000,
    comments: 15000,
    isLiked: true,
  },
];

export default function Trending() {
  const [videos, setVideos] = useState(trendingVideos);
  const [music, setMusic] = useState(musicVideos);

  const handleLike = (videoId: string) => {
    setVideos(videos.map(video => 
      video.id === videoId 
        ? { ...video, isLiked: !video.isLiked, likes: video.isLiked ? video.likes - 1 : video.likes + 1 }
        : video
    ));
  };

  const handleMusicLike = (videoId: string) => {
    setMusic(music.map(video => 
      video.id === videoId 
        ? { ...video, isLiked: !video.isLiked, likes: video.isLiked ? video.likes - 1 : video.likes + 1 }
        : video
    ));
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2">Тренды</h2>
        <p className="text-muted-foreground">Самые популярные видео прямо сейчас</p>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="all">Все</TabsTrigger>
          <TabsTrigger value="music">Музыка</TabsTrigger>
          <TabsTrigger value="gaming">Игры</TabsTrigger>
          <TabsTrigger value="news">Новости</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map(video => (
              <VideoCard
                key={video.id}
                {...video}
                onLike={handleLike}
              />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="music">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {music.map(video => (
              <VideoCard
                key={video.id}
                {...video}
                onLike={handleMusicLike}
              />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="gaming">
          <div className="text-center py-12 text-muted-foreground">
            Игровой контент скоро появится
          </div>
        </TabsContent>
        
        <TabsContent value="news">
          <div className="text-center py-12 text-muted-foreground">
            Новостной контент скоро появится
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
