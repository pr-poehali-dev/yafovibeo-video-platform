import { ReactNode, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');

  const navItems = [
    { id: 'home', path: '/home', icon: 'Home', label: 'Главная' },
    { id: 'trending', path: '/trending', icon: 'TrendingUp', label: 'Тренды' },
    { id: 'subscriptions', path: '/subscriptions', icon: 'Radio', label: 'Подписки' },
    { id: 'history', path: '/history', icon: 'Clock', label: 'История' },
    { id: 'library', path: '/library', icon: 'Library', label: 'Библиотека' },
    { id: 'profile', path: '/profile', icon: 'User', label: 'Профиль' },
    { id: 'settings', path: '/settings', icon: 'Settings', label: 'Настройки' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <aside className="fixed left-0 top-0 h-screen w-64 bg-white border-r border-border overflow-y-auto z-10">
        <div className="p-6">
          <Link to="/" className="flex items-center gap-2 mb-8">
            <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
              <Icon name="Play" className="text-white" size={24} />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-[#FF0050] to-[#8B5CF6] bg-clip-text text-transparent">
              YaFOVibeo
            </h1>
          </Link>
          
          <nav className="space-y-2">
            {navItems.map(item => (
              <Link
                key={item.id}
                to={item.path}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  location.pathname === item.path
                    ? 'bg-gradient-to-r from-[#FF0050]/10 to-[#8B5CF6]/10 text-primary font-medium'
                    : 'text-muted-foreground hover:bg-muted'
                }`}
              >
                <Icon name={item.icon} size={20} />
                <span>{item.label}</span>
              </Link>
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

        {children}
      </main>
    </div>
  );
}