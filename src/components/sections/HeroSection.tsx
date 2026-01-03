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
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-foreground">
              Гармония тела и духа
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Погрузитесь в мир расслабления с нашими авторскими техниками массажа. 
              Используем только натуральные масла и создаем атмосферу абсолютного спокойствия.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button onClick={() => scrollToSection('booking')} size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
                Записаться на сеанс
              </Button>
              <Button onClick={() => scrollToSection('services')} size="lg" variant="outline" className="text-lg px-8">
                Узнать больше
              </Button>
            </div>
            <div className="flex gap-8 pt-6">
              <div>
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Довольных клиентов</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">8 лет</div>
                <div className="text-sm text-muted-foreground">На рынке</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Видов массажа</div>
              </div>
            </div>
          </div>
          <div className="relative h-[400px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl animate-scale-in">
            <img 
              src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80" 
              alt="Спа атмосфера" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-accent/30 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
