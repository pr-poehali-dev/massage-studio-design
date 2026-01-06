import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  scrollToSection: (id: string) => void;
}

export default function HeroSection({ scrollToSection }: HeroSectionProps) {
  return (
    <section id="hero" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-accent/5 to-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-foreground">
              Профессиональный массаж в Москве
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed">
              Студия «Твой Массаж» — 15+ видов профессионального массажа по доступным ценам. 
              Опытные сертифицированные массажисты, натуральные масла и атмосфера абсолютного комфорта.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-4">
              {/* Desktop button - with widget */}
              <a href="https://dikidi.ru/#widget=201217" className="w-full sm:w-auto hidden md:block">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-base sm:text-lg px-8 w-full sm:w-auto h-12 sm:h-auto">
                  Записаться на сеанс
                </Button>
              </a>
              {/* Mobile button - direct link */}
              <a href="https://dikidi.ru/tvoimassage" className="w-full sm:w-auto md:hidden">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-base sm:text-lg px-8 w-full sm:w-auto h-12 sm:h-auto">
                  Записаться на сеанс
                </Button>
              </a>
              <Button onClick={() => scrollToSection('services')} size="lg" variant="outline" className="text-base sm:text-lg px-8 w-full sm:w-auto h-12 sm:h-auto">
                Узнать больше
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-6">
              <div className="text-center sm:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-primary">1000+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Довольных клиентов</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-primary">10+ лет</div>
                <div className="text-xs sm:text-sm text-muted-foreground">На рынке</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-primary">15+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Видов массажа</div>
              </div>
            </div>
          </div>
          <div className="relative h-[300px] sm:h-[400px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl animate-scale-in">
            <img 
              src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80" 
              alt="Профессиональный массаж в студии Твой Массаж — расслабляющая спа-атмосфера" 
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-accent/30 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}