import { useState } from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

export default function Settings() {
  const [notifications, setNotifications] = useState(true);
  const [autoplay, setAutoplay] = useState(false);
  const [quality, setQuality] = useState('auto');

  return (
    <div className="p-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2">Настройки</h2>
        <p className="text-muted-foreground">Управляйте своим аккаунтом и предпочтениями</p>
      </div>

      <Tabs defaultValue="account" className="w-full max-w-4xl">
        <TabsList className="mb-6">
          <TabsTrigger value="account">
            <Icon name="User" size={16} className="mr-2" />
            Аккаунт
          </TabsTrigger>
          <TabsTrigger value="privacy">
            <Icon name="Shield" size={16} className="mr-2" />
            Приватность
          </TabsTrigger>
          <TabsTrigger value="notifications">
            <Icon name="Bell" size={16} className="mr-2" />
            Уведомления
          </TabsTrigger>
          <TabsTrigger value="playback">
            <Icon name="Play" size={16} className="mr-2" />
            Воспроизведение
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="account" className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Информация об аккаунте</h3>
            
            <div className="space-y-2">
              <Label htmlFor="username">Логин</Label>
              <Input id="username" defaultValue="yourchannel" className="bg-white" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" defaultValue="user@example.com" className="bg-white" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="name">Имя канала</Label>
              <Input id="name" defaultValue="Ваш канал" className="bg-white" />
            </div>
            
            <Button className="gradient-primary text-white">
              Сохранить изменения
            </Button>
          </div>
          
          <Separator />
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-destructive">Опасная зона</h3>
            <p className="text-sm text-muted-foreground">
              Удаление аккаунта приведет к безвозвратной потере всех данных
            </p>
            <Button variant="destructive">
              Удалить аккаунт
            </Button>
          </div>
        </TabsContent>
        
        <TabsContent value="privacy" className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Настройки приватности</h3>
            
            <div className="flex items-center justify-between py-3">
              <div>
                <p className="font-medium">Показывать историю просмотров</p>
                <p className="text-sm text-muted-foreground">Позволяет другим видеть ваши просмотры</p>
              </div>
              <Switch />
            </div>
            
            <Separator />
            
            <div className="flex items-center justify-between py-3">
              <div>
                <p className="font-medium">Публичные подписки</p>
                <p className="text-sm text-muted-foreground">Другие могут видеть на кого вы подписаны</p>
              </div>
              <Switch defaultChecked />
            </div>
            
            <Separator />
            
            <div className="flex items-center justify-between py-3">
              <div>
                <p className="font-medium">Показывать лайки</p>
                <p className="text-sm text-muted-foreground">Делает ваши лайки видимыми</p>
              </div>
              <Switch />
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="notifications" className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Уведомления</h3>
            
            <div className="flex items-center justify-between py-3">
              <div>
                <p className="font-medium">Push-уведомления</p>
                <p className="text-sm text-muted-foreground">Получать уведомления в браузере</p>
              </div>
              <Switch checked={notifications} onCheckedChange={setNotifications} />
            </div>
            
            <Separator />
            
            <div className="flex items-center justify-between py-3">
              <div>
                <p className="font-medium">Email уведомления</p>
                <p className="text-sm text-muted-foreground">Получать письма о новых видео</p>
              </div>
              <Switch defaultChecked />
            </div>
            
            <Separator />
            
            <div className="flex items-center justify-between py-3">
              <div>
                <p className="font-medium">Уведомления о комментариях</p>
                <p className="text-sm text-muted-foreground">Когда кто-то комментирует ваши видео</p>
              </div>
              <Switch defaultChecked />
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="playback" className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Воспроизведение</h3>
            
            <div className="flex items-center justify-between py-3">
              <div>
                <p className="font-medium">Автовоспроизведение</p>
                <p className="text-sm text-muted-foreground">Автоматически запускать следующее видео</p>
              </div>
              <Switch checked={autoplay} onCheckedChange={setAutoplay} />
            </div>
            
            <Separator />
            
            <div className="space-y-2">
              <Label>Качество видео по умолчанию</Label>
              <select 
                className="w-full p-2 border rounded-lg bg-white"
                value={quality}
                onChange={(e) => setQuality(e.target.value)}
              >
                <option value="auto">Авто</option>
                <option value="1080p">1080p</option>
                <option value="720p">720p</option>
                <option value="480p">480p</option>
                <option value="360p">360p</option>
              </select>
            </div>
            
            <Separator />
            
            <div className="flex items-center justify-between py-3">
              <div>
                <p className="font-medium">Субтитры по умолчанию</p>
                <p className="text-sm text-muted-foreground">Автоматически включать субтитры</p>
              </div>
              <Switch />
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
