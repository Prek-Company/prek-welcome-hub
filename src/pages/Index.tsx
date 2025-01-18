import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Youtube, Send, Music2, Download, ArrowRight, Sun, Moon, Monitor } from "lucide-react";
import { useEffect, useState } from "react";

const Index = () => {
  const [theme, setTheme] = useState<'light' | 'dark' | 'system'>('system');

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');

    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      root.classList.add(systemTheme);
    } else {
      root.classList.add(theme);
    }
  }, [theme]);

  const features = {
    cloudnest: [
      "Безопасность: Многоуровневая защита файлов",
      "Доступность: Доступ с любых устройств",
      "Синхронизация: Между всеми устройствами",
      "Простота использования: Интуитивный интерфейс"
    ],
    prekHelper: [
      "Диагностика системы: Анализ производительности",
      "Оптимизация работы: Ускорение системы",
      "Информация о системе: Подробные данные о ПК",
      "Обновления: Автоматическая проверка"
    ]
  };

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Theme Toggle */}
      <div className="fixed top-4 right-4 flex gap-2 z-50">
        <Button
          variant={theme === 'light' ? 'default' : 'outline'}
          size="icon"
          onClick={() => setTheme('light')}
          className="animate-fade-in"
        >
          <Sun className="h-5 w-5" />
        </Button>
        <Button
          variant={theme === 'dark' ? 'default' : 'outline'}
          size="icon"
          onClick={() => setTheme('dark')}
          className="animate-fade-in"
        >
          <Moon className="h-5 w-5" />
        </Button>
        <Button
          variant={theme === 'system' ? 'default' : 'outline'}
          size="icon"
          onClick={() => setTheme('system')}
          className="animate-fade-in"
        >
          <Monitor className="h-5 w-5" />
        </Button>
      </div>

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-primary to-[#7E69AB] text-white animate-fade-in">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-scale-in">
            Добро пожаловать в Prek Company!
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-12 opacity-90">
            Мы разрабатываем инновационные программные решения, которые делают вашу работу с компьютером и мобильными устройствами более эффективной и удобной.
          </p>
          <Button 
            size="lg"
            className="bg-white text-primary hover:bg-gray-100 transform hover:scale-105 transition-all duration-300"
            onClick={() => document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Узнать больше
            <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 bg-background animate-fade-in">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Наши Программы</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="transform hover:scale-105 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Download className="w-6 h-6 text-primary" />
                  CloudNest
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-text-light mb-6">
                  Надежное и безопасное облачное хранилище для ваших файлов. Храните, синхронизируйте и делитесь файлами между устройствами.
                </p>
                <ul className="space-y-2 mb-6">
                  {features.cloudnest.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  className="w-full bg-primary hover:bg-primary-hover"
                  onClick={() => window.open("#download", "_blank")}
                >
                  Скачать CloudNest
                </Button>
              </CardContent>
            </Card>

            <Card className="transform hover:scale-105 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Download className="w-6 h-6 text-primary" />
                  Prek Helper
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-text-light mb-6">
                  Универсальная программа для управления настройками вашего ПК. Оптимизируйте работу устройства и исправляйте ошибки.
                </p>
                <ul className="space-y-2 mb-6">
                  {features.prekHelper.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  className="w-full bg-primary hover:bg-primary-hover"
                  onClick={() => window.open("#download", "_blank")}
                >
                  Скачать Prek Helper
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="container py-20 animate-fade-in">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Следите за нами в социальных сетях
        </h2>
        <p className="text-text-light mb-12 text-center">
          Будьте в курсе последних новостей и обновлений!
        </p>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <a 
            href="https://youtube.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group p-6 rounded-lg bg-gradient-to-br from-red-500 to-red-600 text-white text-center transform hover:scale-105 transition-all duration-300"
          >
            <Youtube className="w-12 h-12 mx-auto mb-4 group-hover:animate-bounce" />
            <span className="font-semibold">YouTube</span>
          </a>
          <a 
            href="https://telegram.org" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group p-6 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 text-white text-center transform hover:scale-105 transition-all duration-300"
          >
            <Send className="w-12 h-12 mx-auto mb-4 group-hover:animate-bounce" />
            <span className="font-semibold">Telegram</span>
          </a>
          <a 
            href="https://tiktok.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group p-6 rounded-lg bg-gradient-to-br from-gray-800 to-black text-white text-center transform hover:scale-105 transition-all duration-300"
          >
            <Music2 className="w-12 h-12 mx-auto mb-4 group-hover:animate-bounce" />
            <span className="font-semibold">TikTok</span>
          </a>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="relative py-20 bg-gradient-to-r from-primary to-[#7E69AB] text-white animate-fade-in">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Готовы начать?</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Скачайте наши программы прямо сейчас и начните использовать все их преимущества.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button 
              variant="secondary"
              size="lg"
              className="transform hover:scale-105 transition-transform bg-white text-primary hover:bg-gray-100"
              onClick={() => window.open("#download", "_blank")}
            >
              <Download className="mr-2" />
              Скачать CloudNest
            </Button>
            <Button 
              variant="secondary"
              size="lg"
              className="transform hover:scale-105 transition-transform bg-white text-primary hover:bg-gray-100"
              onClick={() => window.open("#download", "_blank")}
            >
              <Download className="mr-2" />
              Скачать Prek Helper
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;