import { useState } from 'react';
import VideoCard from '@/components/VideoCard';
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

const likedVideos: Video[] = [
  {
    id: 'l1',
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
    id: 'l2',
    title: 'TypeScript для начинающих',
    channel: 'TS Academy',
    views: '892k',
    thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=5',
    likes: 6782,
    comments: 312,
    isLiked: true,
  },
];

const savedVideos: Video[] = [
  {
    id: 'sv1',
    title: 'Как создать крутой дизайн за 10 минут',
    channel: 'Design Pro',
    views: '20944',
    thumbnail: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=300&fit=crop',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=1',
    likes: 1204,
    comments: 89,
    isLiked: false,
  },
];

export default function Library() {
  const [liked, setLiked] = useState(likedVideos);
  const [saved, setSaved] = useState(savedVideos);

  const handleLikedLike = (videoId: string) => {
    setLiked(liked.map(video => 
      video.id === videoId 
        ? { ...video, isLiked: !video.isLiked, likes: video.isLiked ? video.likes - 1 : video.likes + 1 }
        : video
    ));
  };

  const handleSavedLike = (videoId: string) => {
    setSaved(saved.map(video => 
      video.id === videoId 
        ? { ...video, isLiked: !video.isLiked, likes: video.isLiked ? video.likes - 1 : video.likes + 1 }
        : video
    ));
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2">Библиотека</h2>
        <p className="text-muted-foreground">Ваши сохраненные видео и плейлисты</p>
      </div>

      <Tabs defaultValue="liked" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="liked">
            <Icon name="Heart" size={16} className="mr-2" />
            Понравившиеся
          </TabsTrigger>
          <TabsTrigger value="saved">
            <Icon name="Bookmark" size={16} className="mr-2" />
            Сохраненные
          </TabsTrigger>
          <TabsTrigger value="playlists">
            <Icon name="ListVideo" size={16} className="mr-2" />
            Плейлисты
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="liked">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {liked.map(video => (
              <VideoCard
                key={video.id}
                {...video}
                onLike={handleLikedLike}
              />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="saved">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {saved.map(video => (
              <VideoCard
                key={video.id}
                {...video}
                onLike={handleSavedLike}
              />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="playlists">
          <div className="text-center py-20">
            <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
              <Icon name="ListVideo" size={48} className="text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">У вас пока нет плейлистов</h3>
            <p className="text-muted-foreground">Создайте свой первый плейлист</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
