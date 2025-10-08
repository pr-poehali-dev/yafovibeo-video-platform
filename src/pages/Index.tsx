import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import Home from './Home';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function Index() {
  const [isAuthOpen, setIsAuthOpen] = useState(true);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  const navigate = useNavigate();

  const handleAuth = () => {
    setIsAuthOpen(false);
    navigate('/home');
  };

  return (
    <div className="min-h-screen bg-background">
      <Dialog open={isAuthOpen} onOpenChange={setIsAuthOpen}>
        <DialogContent className="sm:max-w-md bg-white">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-[#FF0050] to-[#8B5CF6] bg-clip-text text-transparent">
              {authMode === 'login' ? 'Вход в YaFOVibeo' : 'Регистрация в YaFOVibeo'}
            </DialogTitle>
            <DialogDescription className="text-slate-600">
              {authMode === 'login' 
                ? 'Войдите, чтобы смотреть, лайкать и комментировать видео'
                : 'Создайте аккаунт и начните делиться своими видео'}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="username" className="text-slate-700">Логин</Label>
              <Input id="username" placeholder="Введите логин" className="bg-white border-slate-200" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-slate-700">Пароль</Label>
              <Input id="password" type="password" placeholder="Введите пароль" className="bg-white border-slate-200" />
            </div>
            {authMode === 'register' && (
              <div className="space-y-2">
                <Label htmlFor="confirm-password" className="text-slate-700">Подтвердите пароль</Label>
                <Input id="confirm-password" type="password" placeholder="Повторите пароль" className="bg-white border-slate-200" />
              </div>
            )}
            <Button 
              className="w-full gradient-primary text-white hover:opacity-90 transition-opacity" 
              onClick={handleAuth}
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

      <Layout>
        <Home />
      </Layout>
    </div>
  );
}