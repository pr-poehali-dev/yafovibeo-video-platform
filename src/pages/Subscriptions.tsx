import { useState } from 'react';
import VideoCard from '@/components/VideoCard';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
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
}

interface Channel {
  id: string;
  name: string;
  avatar: string;
  subscribers: string;
}

const subscribedChannels: Channel[] = [
  { id: '1', name: 'Design Pro', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=1', subscribers: '1.2M' },
  { id: '2', name: 'Code Master', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=2', subscribers: '890K' },
  { id: '3', name: 'Tech Explainer', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=tech', subscribers: '2.5M' },
  { id: '4', name: 'UX Masters', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=6', subscribers: '650K' },
];

const subscriptionVideos: Video[] = [
  {
    id: 's1',
    title: 'Новый курс по Figma - анонс',
    channel: 'Design Pro',
    views: '45k',
    thumbnail: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=300&fit=crop',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=1',
    likes: 3204,
    comments: 189,
    isLiked: false,
  },
  {
    id: 's2',
    title: 'React 19: что нового?',
    channel: 'Code Master',
    views: '123k',
    thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=2',
    likes: 8932,
    comments: 456,
    isLiked: true,
  },
  {
    id: 's3',
    title: 'Будущее искусственного интеллекта',
    channel: 'Tech Explainer',
    views: '567k',
    thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=tech',
    likes: 45000,
    comments: 2341,
    isLiked: false,
  },
];

export default function Subscriptions() {
  const [videos, setVideos] = useState(subscriptionVideos);

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
        <h2 className="text-3xl font-bold mb-2">Подписки</h2>
        <p className="text-muted-foreground">Новые видео от ваших любимых каналов</p>
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Ваши каналы</h3>
        <div className="flex gap-4 overflow-x-auto pb-4">
          {subscribedChannels.map(channel => (
            <div key={channel.id} className="flex flex-col items-center gap-2 min-w-[120px]">
              <Avatar className="w-20 h-20 hover:ring-2 ring-primary transition-all cursor-pointer">
                <AvatarImage src={channel.avatar} />
                <AvatarFallback>{channel.name[0]}</AvatarFallback>
              </Avatar>
              <div className="text-center">
                <p className="font-medium text-sm">{channel.name}</p>
                <p className="text-xs text-muted-foreground">{channel.subscribers}</p>
              </div>
              <Button size="sm" variant="outline" className="w-full">
                <Icon name="Bell" size={14} className="mr-1" />
                Все
              </Button>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-semibold">Последние видео</h3>
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
