import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import PackagesSection from '@/components/sections/PackagesSection';
import ReviewsSection from '@/components/sections/ReviewsSection';
import BookingSection from '@/components/sections/BookingSection';

export default function Index() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl md:text-3xl font-bold text-primary">Твой Массаж</h1>
            <div className="hidden md:flex gap-6">
              <button onClick={() => scrollToSection('hero')} className="text-foreground hover:text-primary transition-colors">Главная</button>
              <button onClick={() => scrollToSection('services')} className="text-foreground hover:text-primary transition-colors">Услуги</button>
              <button onClick={() => scrollToSection('packages')} className="text-foreground hover:text-primary transition-colors">Абонементы</button>
              <button onClick={() => scrollToSection('reviews')} className="text-foreground hover:text-primary transition-colors">Отзывы</button>
              <button onClick={() => scrollToSection('contacts')} className="text-foreground hover:text-primary transition-colors">Контакты</button>
            </div>
            <Button onClick={() => scrollToSection('booking')} className="bg-primary hover:bg-primary/90">
              Записаться
            </Button>
          </div>
        </div>
      </nav>

      <HeroSection scrollToSection={scrollToSection} />
      <ServicesSection scrollToSection={scrollToSection} />
      <PackagesSection scrollToSection={scrollToSection} />
      <ReviewsSection />
      <BookingSection />

      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 group transition-all duration-300 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16 pointer-events-none'
        }`}
        aria-label="Наверх"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-primary/30 rounded-full blur-lg group-hover:blur-xl transition-all"></div>
          <div className="relative w-14 h-14 bg-gradient-to-br from-primary to-primary/80 rounded-full shadow-lg group-hover:shadow-primary/50 flex items-center justify-center group-hover:scale-110 transition-all">
            <Icon name="ArrowUp" size={24} className="text-primary-foreground" />
          </div>
        </div>
      </button>
    </div>
  );
}