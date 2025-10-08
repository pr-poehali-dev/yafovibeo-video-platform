import { useState } from 'react';
import VideoCard from '@/components/VideoCard';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
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
}

const myVideos: Video[] = [
  {
    id: 'my1',
    title: 'Мой первый влог | Начало пути',
    channel: 'Ваш канал',
    views: '1234',
    thumbnail: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=400&h=300&fit=crop',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=user',
    likes: 156,
    comments: 23,
    isLiked: false,
  },
  {
    id: 'my2',
    title: 'Обзор моей студии',
    channel: 'Ваш канал',
    views: '3456',
    thumbnail: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=400&h=300&fit=crop',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=user',
    likes: 289,
    comments: 45,
    isLiked: false,
  },
];

export default function Profile() {
  const [videos, setVideos] = useState(myVideos);

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
        <div className="relative h-48 gradient-primary rounded-xl mb-6"></div>
        
        <div className="flex items-start gap-6 -mt-20 px-6">
          <Avatar className="w-32 h-32 border-4 border-white shadow-lg">
            <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=user" />
            <AvatarFallback>YF</AvatarFallback>
          </Avatar>
          
          <div className="flex-1 mt-20">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-3xl font-bold mb-1">Ваш канал</h2>
                <p className="text-muted-foreground">@yourchannel</p>
              </div>
              <Button className="gradient-primary text-white">
                <Icon name="Settings" size={18} className="mr-2" />
                Редактировать профиль
              </Button>
            </div>
            
            <div className="flex gap-6 mb-6">
              <div>
                <p className="text-2xl font-bold">1.2K</p>
                <p className="text-sm text-muted-foreground">Подписчиков</p>
              </div>
              <div>
                <p className="text-2xl font-bold">234</p>
                <p className="text-sm text-muted-foreground">Подписки</p>
              </div>
              <div>
                <p className="text-2xl font-bold">{videos.length}</p>
                <p className="text-sm text-muted-foreground">Видео</p>
              </div>
            </div>
            
            <p className="text-muted-foreground mb-4">
              Добро пожаловать на мой канал! Здесь я делюсь своими мыслями, идеями и проектами.
            </p>
          </div>
        </div>
      </div>

      <Tabs defaultValue="videos" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="videos">
            <Icon name="Video" size={16} className="mr-2" />
            Видео
          </TabsTrigger>
          <TabsTrigger value="about">
            <Icon name="Info" size={16} className="mr-2" />
            О канале
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="videos">
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
        
        <TabsContent value="about">
          <div className="max-w-2xl">
            <h3 className="text-xl font-semibold mb-4">Описание</h3>
            <p className="text-muted-foreground mb-6">
              Добро пожаловать на мой канал! Я создаю контент о веб-разработке, дизайне и технологиях.
              Подписывайтесь, чтобы не пропустить новые видео!
            </p>
            
            <h3 className="text-xl font-semibold mb-4">Контакты</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>📧 Email: contact@yourchannel.com</p>
              <p>🌐 Сайт: yourchannel.com</p>
              <p>📱 Telegram: @yourchannel</p>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
