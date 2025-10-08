import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';

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

export default function Index() {
  const [activeTab, setActiveTab] = useState('home');
  const [isAuthOpen, setIsAuthOpen] = useState(true);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  const [videos, setVideos] = useState(mockVideos);
  const [searchQuery, setSearchQuery] = useState('');

  const handleLike = (videoId: string) => {
    setVideos(videos.map(video => 
      video.id === videoId 
        ? { ...video, isLiked: !video.isLiked, likes: video.isLiked ? video.likes - 1 : video.likes + 1 }
        : video
    ));
  };

  const navItems = [
    { id: 'home', icon: 'Home', label: 'Главная' },
    { id: 'trending', icon: 'TrendingUp', label: 'Тренды' },
    { id: 'subscriptions', icon: 'Radio', label: 'Подписки' },
    { id: 'history', icon: 'Clock', label: 'История' },
    { id: 'library', icon: 'Library', label: 'Библиотека' },
    { id: 'profile', icon: 'User', label: 'Профиль' },
    { id: 'settings', icon: 'Settings', label: 'Настройки' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Dialog open={isAuthOpen} onOpenChange={setIsAuthOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-[#FF0050] to-[#8B5CF6] bg-clip-text text-transparent">
              {authMode === 'login' ? 'Вход в YaFOVibeo' : 'Регистрация в YaFOVibeo'}
            </DialogTitle>
            <DialogDescription>
              {authMode === 'login' 
                ? 'Войдите, чтобы смотреть, лайкать и комментировать видео'
                : 'Создайте аккаунт и начните делиться своими видео'}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="username">Логин</Label>
              <Input id="username" placeholder="Введите логин" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Пароль</Label>
              <Input id="password" type="password" placeholder="Введите пароль" />
            </div>
            {authMode === 'register' && (
              <div className="space-y-2">
                <Label htmlFor="confirm-password">Подтвердите пароль</Label>
                <Input id="confirm-password" type="password" placeholder="Повторите пароль" />
              </div>
            )}
            <Button 
              className="w-full gradient-primary hover:opacity-90 transition-opacity" 
              onClick={() => setIsAuthOpen(false)}
            >
              {authMode === 'login' ? 'Войти' : 'Зарегистрироваться'}
            </Button>
            <div className="text-center text-sm">
              {authMode === 'login' ? (
                <button 
                  className="text-primary hover:underline"
                  onClick={() => setAuthMode('register')}
                >
                  Нет аккаунта? Зарегистрируйтесь
                </button>
              ) : (
                <button 
                  className="text-primary hover:underline"
                  onClick={() => setAuthMode('login')}
                >
                  Уже есть аккаунт? Войдите
                </button>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <aside className="fixed left-0 top-0 h-screen w-64 bg-white border-r border-border overflow-y-auto z-10">
        <div className="p-6">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
              <Icon name="Play" className="text-white" size={24} />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-[#FF0050] to-[#8B5CF6] bg-clip-text text-transparent">
              YaFOVibeo
            </h1>
          </div>
          
          <nav className="space-y-2">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  activeTab === item.id
                    ? 'bg-gradient-to-r from-[#FF0050]/10 to-[#8B5CF6]/10 text-primary font-medium'
                    : 'text-muted-foreground hover:bg-muted'
                }`}
              >
                <Icon name={item.icon} size={20} />
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </aside>

      <main className="ml-64 min-h-screen">
        <header className="sticky top-0 bg-white/80 backdrop-blur-lg border-b border-border z-10 px-8 py-4">
          <div className="flex items-center gap-4">
            <div className="flex-1 max-w-2xl relative">
              <Icon name="Search" className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
              <Input 
                placeholder="Поиск видео..." 
                className="pl-10 bg-muted border-0"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button variant="outline" size="icon">
              <Icon name="Upload" size={20} />
            </Button>
            <Button variant="outline" size="icon">
              <Icon name="Bell" size={20} />
            </Button>
            <Avatar>
              <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=user" />
              <AvatarFallback>YF</AvatarFallback>
            </Avatar>
          </div>
        </header>

        <div className="p-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2">
              {activeTab === 'home' && 'Главная'}
              {activeTab === 'trending' && 'Тренды'}
              {activeTab === 'subscriptions' && 'Подписки'}
              {activeTab === 'history' && 'История'}
              {activeTab === 'library' && 'Библиотека'}
              {activeTab === 'profile' && 'Профиль'}
              {activeTab === 'settings' && 'Настройки'}
            </h2>
            <p className="text-muted-foreground">
              {activeTab === 'home' && 'Смотрите популярные видео от топовых авторов'}
              {activeTab === 'trending' && 'Самые популярные видео прямо сейчас'}
              {activeTab === 'subscriptions' && 'Новые видео от ваших подписок'}
              {activeTab === 'history' && 'Ваши недавно просмотренные видео'}
              {activeTab === 'library' && 'Ваши сохраненные видео и плейлисты'}
              {activeTab === 'profile' && 'Управляйте своим профилем и видео'}
              {activeTab === 'settings' && 'Настройте ваш аккаунт'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map(video => (
              <Card key={video.id} className="overflow-hidden hover:shadow-lg transition-all cursor-pointer group">
                <div className="relative aspect-video overflow-hidden bg-muted">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Icon name="Play" className="text-white ml-1" size={24} />
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex gap-3">
                    <Avatar className="w-10 h-10">
                      <AvatarImage src={video.avatar} />
                      <AvatarFallback>{video.channel[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold line-clamp-2 mb-1">{video.title}</h3>
                      <p className="text-sm text-muted-foreground mb-1">{video.channel}</p>
                      <p className="text-sm text-muted-foreground">{video.views} просмотров</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 mt-4 pt-4 border-t">
                    <button 
                      onClick={() => handleLike(video.id)}
                      className="flex items-center gap-2 text-sm transition-colors hover:text-primary"
                    >
                      <Icon 
                        name={video.isLiked ? "Heart" : "Heart"} 
                        size={18} 
                        className={video.isLiked ? "fill-primary text-primary" : ""}
                      />
                      <span className={video.isLiked ? "text-primary font-medium" : "text-muted-foreground"}>
                        {video.likes}
                      </span>
                    </button>
                    <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                      <Icon name="MessageCircle" size={18} />
                      <span>{video.comments}</span>
                    </button>
                    <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors ml-auto">
                      <Icon name="Share2" size={18} />
                    </button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
