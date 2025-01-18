import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Youtube, Send, Music2, Download, ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-text">
      {/* Hero Section with Gradient Background */}
      <section className="relative py-24 bg-gradient-to-r from-[#9b87f5] to-[#7E69AB] text-white animate-fade-in">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-scale-in">
            Добро пожаловать в Prek Company!
          </h1>
          <p className="text-xl max-w-2xl mx-auto mb-12 opacity-90">
            Мы разрабатываем инновационные программы для вашего удобства. 
            Наша цель — создать решения, которые упрощают вашу работу с техникой.
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
        <div className="absolute bottom-0 left-0 w-full h-16 bg-background" style={{
          clipPath: 'polygon(0 100%, 100% 100%, 100% 0)'
        }}></div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 bg-gray-50 animate-fade-in" style={{ animationDelay: "0.2s" }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Наши Программы</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="transform hover:scale-105 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Download className="w-6 h-6 text-primary" />
                  CloudNest
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-text-light mb-6">
                  Программа для хранения файлов в облаке с улучшенной безопасностью. 
                  Храните ваши данные надежно и получайте к ним доступ откуда угодно.
                </p>
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
                  Скоро
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-text-light mb-6">
                  Мы работаем над новыми продуктами, которые сделают вашу работу еще удобнее.
                  Следите за обновлениями!
                </p>
                <Button 
                  variant="outline"
                  className="w-full"
                  disabled
                >
                  Скоро
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Media Section with Gradient Cards */}
      <section className="container py-20 animate-fade-in" style={{ animationDelay: "0.4s" }}>
        <h2 className="text-3xl font-bold mb-8 text-center">
          Подписывайтесь на нас в социальных сетях
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

      {/* Download Section with Gradient Background */}
      <section id="download" className="relative py-20 bg-gradient-to-r from-primary to-[#7E69AB] text-white animate-fade-in" style={{ animationDelay: "0.6s" }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Готовы начать?</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Скачайте CloudNest прямо сейчас и начните использовать все преимущества облачного хранения данных.
          </p>
          <Button 
            variant="secondary"
            size="lg"
            className="transform hover:scale-105 transition-transform bg-white text-primary hover:bg-gray-100"
            onClick={() => window.open("#download", "_blank")}
          >
            <Download className="mr-2" />
            Скачать программу CloudNest
          </Button>
        </div>
        <div className="absolute top-0 left-0 w-full h-16 bg-background" style={{
          clipPath: 'polygon(0 0, 100% 0, 100% 100%)'
        }}></div>
      </section>
    </div>
  );
};

export default Index;