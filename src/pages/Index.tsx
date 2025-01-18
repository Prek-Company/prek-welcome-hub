import { Button } from "@/components/ui/button";
import { Youtube, Send, Music2 } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-text">
      {/* Hero Section */}
      <section className="container py-20 animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Добро пожаловать в Prek Company!
        </h1>
        <p className="text-xl text-text-light max-w-2xl mx-auto mb-12">
          Мы разрабатываем инновационные программы для вашего удобства. 
          Наша цель — создать решения, которые упрощают вашу работу с техникой.
        </p>
      </section>

      {/* Programs Section */}
      <section className="bg-gray-50 py-20 animate-fade-in" style={{ animationDelay: "0.2s" }}>
        <div className="container">
          <h2 className="text-3xl font-bold mb-12">Наши Программы</h2>
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4">CloudNest</h3>
            <p className="text-text-light mb-6">
              Программа для хранения файлов в облаке с улучшенной безопасностью. 
              Программа доступна для скачивания с нашего сайта.
            </p>
            <Button 
              className="bg-primary hover:bg-primary-hover transition-colors duration-300 transform hover:scale-105"
              onClick={() => window.open("#download", "_blank")}
            >
              Скачать CloudNest
            </Button>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="container py-20 animate-fade-in" style={{ animationDelay: "0.4s" }}>
        <h2 className="text-3xl font-bold mb-8">
          Подписывайтесь на нас в социальных сетях
        </h2>
        <p className="text-text-light mb-12">
          Будьте в курсе последних новостей и обновлений!
        </p>
        <div className="flex justify-center gap-8">
          <a 
            href="https://youtube.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-text-light hover:text-primary transition-colors"
          >
            <Youtube className="w-6 h-6" />
            YouTube
          </a>
          <a 
            href="https://telegram.org" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-text-light hover:text-primary transition-colors"
          >
            <Send className="w-6 h-6" />
            Telegram
          </a>
          <a 
            href="https://tiktok.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-text-light hover:text-primary transition-colors"
          >
            <Music2 className="w-6 h-6" />
            TikTok
          </a>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="bg-primary text-white py-20 animate-fade-in" style={{ animationDelay: "0.6s" }}>
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-8">Готовы начать?</h2>
          <Button 
            variant="secondary"
            size="lg"
            className="transform hover:scale-105 transition-transform"
            onClick={() => window.open("#download", "_blank")}
          >
            Скачать программу CloudNest
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;