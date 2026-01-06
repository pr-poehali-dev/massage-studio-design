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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl md:text-3xl font-bold text-primary">Твой Массаж</h1>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex gap-6">
              <button onClick={() => scrollToSection('hero')} className="text-foreground hover:text-primary transition-colors">Главная</button>
              <button onClick={() => scrollToSection('services')} className="text-foreground hover:text-primary transition-colors">Услуги</button>
              <button onClick={() => scrollToSection('packages')} className="text-foreground hover:text-primary transition-colors">Абонементы</button>
              <button onClick={() => scrollToSection('booking')} className="text-foreground hover:text-primary transition-colors">Вопросы</button>
              <button onClick={() => scrollToSection('reviews')} className="text-foreground hover:text-primary transition-colors">Отзывы</button>
              <button onClick={() => scrollToSection('contacts')} className="text-foreground hover:text-primary transition-colors">Контакты</button>
            </div>
            
            <div className="flex items-center gap-3">
              <a href="https://dikidi.ru/#widget=201217" className="hidden sm:block">
                <Button className="bg-primary hover:bg-primary/90">
                  Записаться
                </Button>
              </a>
              
              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 hover:bg-accent rounded-lg transition-colors"
                aria-label="Меню"
              >
                <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-[73px] left-0 right-0 bg-background/95 backdrop-blur-lg z-40 md:hidden border-b border-border transition-all duration-300 ${
          mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
        <nav className="container mx-auto px-4 py-6 space-y-4">
          <button
            onClick={() => scrollToSection('hero')}
            className="block w-full text-left py-3 px-4 text-lg font-medium hover:bg-accent rounded-lg transition-colors"
          >
            Главная
          </button>
          <button
            onClick={() => scrollToSection('services')}
            className="block w-full text-left py-3 px-4 text-lg font-medium hover:bg-accent rounded-lg transition-colors"
          >
            Услуги
          </button>
          <button
            onClick={() => scrollToSection('packages')}
            className="block w-full text-left py-3 px-4 text-lg font-medium hover:bg-accent rounded-lg transition-colors"
          >
            Абонементы
          </button>
          <button
            onClick={() => scrollToSection('reviews')}
            className="block w-full text-left py-3 px-4 text-lg font-medium hover:bg-accent rounded-lg transition-colors"
          >
            Отзывы
          </button>
          <button
            onClick={() => scrollToSection('booking')}
            className="block w-full text-left py-3 px-4 text-lg font-medium hover:bg-accent rounded-lg transition-colors"
          >
            Вопросы
          </button>
          <button
            onClick={() => scrollToSection('contacts')}
            className="block w-full text-left py-3 px-4 text-lg font-medium hover:bg-accent rounded-lg transition-colors"
          >
            Контакты
          </button>
          <a href="https://dikidi.ru/#widget=201217" className="block">
            <Button className="w-full bg-primary hover:bg-primary/90 py-6 text-lg">
              Записаться на массаж
            </Button>
          </a>
        </nav>
      </div>

      <HeroSection scrollToSection={scrollToSection} />
      <ServicesSection scrollToSection={scrollToSection} />
      <PackagesSection scrollToSection={scrollToSection} />
      <ReviewsSection />
      <BookingSection />

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 group transition-all duration-300 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16 pointer-events-none'
        }`}
        aria-label="Наверх"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-primary/30 rounded-full blur-lg group-hover:blur-xl transition-all"></div>
          <div className="relative w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-primary to-primary/80 rounded-full shadow-lg group-hover:shadow-primary/50 flex items-center justify-center group-hover:scale-110 transition-all">
            <Icon name="ArrowUp" size={20} className="sm:hidden text-primary-foreground" />
            <Icon name="ArrowUp" size={24} className="hidden sm:block text-primary-foreground" />
          </div>
        </div>
      </button>

      {/* Mobile Quick Actions - только на мобильных */}
      <div className="fixed bottom-8 left-4 z-50 flex flex-col gap-3 md:hidden">
        {/* Кнопка звонка */}
        <a
          href="tel:+79636802020"
          className="group relative"
          aria-label="Позвонить"
        >
          <div className="absolute inset-0 bg-green-500/30 rounded-full blur-lg group-hover:blur-xl transition-all"></div>
          <div className="relative w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-full shadow-lg group-hover:shadow-green-500/50 flex items-center justify-center group-hover:scale-110 transition-all">
            <Icon name="Phone" size={24} className="text-white" />
          </div>
        </a>

        {/* Кнопка WhatsApp */}
        <a
          href="https://wa.me/79636802020"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative"
          aria-label="WhatsApp"
        >
          <div className="absolute inset-0 bg-green-500/30 rounded-full blur-lg group-hover:blur-xl transition-all"></div>
          <div className="relative w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-full shadow-lg group-hover:shadow-green-500/50 flex items-center justify-center group-hover:scale-110 transition-all">
            <Icon name="MessageCircle" size={24} className="text-white" />
          </div>
        </a>
      </div>
    </div>
  );
}