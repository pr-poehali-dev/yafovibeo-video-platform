import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface VideoCardProps {
  id: string;
  title: string;
  channel: string;
  views: string;
  thumbnail: string;
  avatar: string;
  likes: number;
  comments: number;
  isLiked: boolean;
  onLike: (id: string) => void;
}

export default function VideoCard({
  id,
  title,
  channel,
  views,
  thumbnail,
  avatar,
  likes,
  comments,
  isLiked,
  onLike,
}: VideoCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all cursor-pointer group">
      <Link to={`/watch/${id}`}>
        <div className="relative aspect-video overflow-hidden bg-muted">
          <img 
            src={thumbnail} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
            <div className="w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <Icon name="Play" className="text-white ml-1" size={24} />
            </div>
          </div>
        </div>
      </Link>
      <div className="p-4">
        <Link to={`/watch/${id}`}>
          <div className="flex gap-3">
            <Avatar className="w-10 h-10">
              <AvatarImage src={avatar} />
              <AvatarFallback>{channel[0]}</AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold line-clamp-2 mb-1 hover:text-primary transition-colors">{title}</h3>
              <p className="text-sm text-muted-foreground mb-1">{channel}</p>
              <p className="text-sm text-muted-foreground">{views} просмотров</p>
            </div>
          </div>
        </Link>
        <div className="flex items-center gap-4 mt-4 pt-4 border-t">
          <button 
            onClick={(e) => {
              e.preventDefault();
              onLike(id);
            }}
            className="flex items-center gap-2 text-sm transition-colors hover:text-primary"
          >
            <Icon 
              name="Heart" 
              size={18} 
              className={isLiked ? "fill-primary text-primary" : ""}
            />
            <span className={isLiked ? "text-primary font-medium" : "text-muted-foreground"}>
              {likes}
            </span>
          </button>
          <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
            <Icon name="MessageCircle" size={18} />
            <span>{comments}</span>
          </button>
          <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors ml-auto">
            <Icon name="Share2" size={18} />
          </button>
        </div>
      </div>
    </Card>
  );
}
