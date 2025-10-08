import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import VideoCard from '@/components/VideoCard';

interface Comment {
  id: string;
  author: string;
  avatar: string;
  text: string;
  likes: number;
  time: string;
}

const mockComments: Comment[] = [
  {
    id: '1',
    author: 'Иван Петров',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ivan',
    text: 'Отличное видео! Очень полезная информация',
    likes: 24,
    time: '2 часа назад',
  },
  {
    id: '2',
    author: 'Мария Смирнова',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=maria',
    text: 'Спасибо за подробное объяснение!',
    likes: 12,
    time: '5 часов назад',
  },
];

const relatedVideos = [
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
];

export default function Watch() {
  const { id } = useParams();
  const [isLiked, setIsLiked] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [likes, setLikes] = useState(1204);
  const [comments, setComments] = useState(mockComments);
  const [newComment, setNewComment] = useState('');
  const [related, setRelated] = useState(relatedVideos);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(isLiked ? likes - 1 : likes + 1);
  };

  const handleRelatedLike = (videoId: string) => {
    setRelated(related.map(video => 
      video.id === videoId 
        ? { ...video, isLiked: !video.isLiked, likes: video.isLiked ? video.likes - 1 : video.likes + 1 }
        : video
    ));
  };

  const handleAddComment = () => {
    if (newComment.trim()) {
      const comment: Comment = {
        id: String(comments.length + 1),
        author: 'Вы',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=user',
        text: newComment,
        likes: 0,
        time: 'только что',
      };
      setComments([comment, ...comments]);
      setNewComment('');
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-8">
      <div className="lg:col-span-2 space-y-6">
        <div className="aspect-video bg-black rounded-xl overflow-hidden relative group">
          <img 
            src="https://images.unsplash.com/photo-1626785774573-4b799315345d?w=1200&h=675&fit=crop"
            alt="Video"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
            <button className="w-20 h-20 rounded-full bg-primary/90 hover:bg-primary flex items-center justify-center transition-all group-hover:scale-110">
              <Icon name="Play" className="text-white ml-1" size={32} />
            </button>
          </div>
        </div>

        <div>
          <h1 className="text-2xl font-bold mb-4">Как создать крутой дизайн за 10 минут</h1>
          
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <Avatar className="w-12 h-12">
                <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=1" />
                <AvatarFallback>DP</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold">Design Pro</p>
                <p className="text-sm text-muted-foreground">1.2M подписчиков</p>
              </div>
              <Button 
                className={isSubscribed ? "bg-muted text-foreground hover:bg-muted/90" : "gradient-primary text-white"}
                onClick={() => setIsSubscribed(!isSubscribed)}
              >
                {isSubscribed ? 'Вы подписаны' : 'Подписаться'}
              </Button>
            </div>
            
            <div className="flex items-center gap-2">
              <Button 
                variant="outline" 
                onClick={handleLike}
                className={isLiked ? "text-primary border-primary" : ""}
              >
                <Icon 
                  name="Heart" 
                  size={18} 
                  className={`mr-2 ${isLiked ? "fill-primary" : ""}`}
                />
                {likes}
              </Button>
              <Button variant="outline">
                <Icon name="Share2" size={18} className="mr-2" />
                Поделиться
              </Button>
              <Button variant="outline">
                <Icon name="Download" size={18} className="mr-2" />
                Скачать
              </Button>
            </div>
          </div>

          <div className="bg-muted rounded-xl p-4">
            <p className="text-sm mb-2">
              <span className="font-semibold">20,944 просмотра</span> · Опубликовано 2 дня назад
            </p>
            <p className="text-sm text-muted-foreground">
              В этом видео я покажу вам, как создать профессиональный дизайн всего за 10 минут. 
              Рассмотрим основные принципы композиции, цветовые схемы и типографику.
              <br /><br />
              Таймкоды:<br />
              0:00 - Введение<br />
              1:30 - Композиция<br />
              4:20 - Цветовая палитра<br />
              7:10 - Типографика<br />
              9:30 - Финальные штрихи
            </p>
          </div>
        </div>

        <Separator />

        <div>
          <h3 className="text-xl font-semibold mb-4">{comments.length} комментариев</h3>
          
          <div className="flex gap-3 mb-6">
            <Avatar>
              <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=user" />
              <AvatarFallback>YF</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <Textarea 
                placeholder="Добавьте комментарий..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className="mb-2 bg-white"
              />
              <div className="flex gap-2 justify-end">
                <Button variant="outline" onClick={() => setNewComment('')}>
                  Отмена
                </Button>
                <Button 
                  className="gradient-primary text-white"
                  onClick={handleAddComment}
                  disabled={!newComment.trim()}
                >
                  Комментировать
                </Button>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {comments.map(comment => (
              <div key={comment.id} className="flex gap-3">
                <Avatar>
                  <AvatarImage src={comment.avatar} />
                  <AvatarFallback>{comment.author[0]}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="font-semibold text-sm">{comment.author}</p>
                    <p className="text-xs text-muted-foreground">{comment.time}</p>
                  </div>
                  <p className="text-sm mb-2">{comment.text}</p>
                  <div className="flex items-center gap-4">
                    <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors">
                      <Icon name="ThumbsUp" size={14} />
                      <span>{comment.likes}</span>
                    </button>
                    <button className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      Ответить
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Похожие видео</h3>
        {related.map(video => (
          <VideoCard
            key={video.id}
            {...video}
            onLike={handleRelatedLike}
          />
        ))}
      </div>
    </div>
  );
}
