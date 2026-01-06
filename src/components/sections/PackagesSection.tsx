import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const packages = [
  {
    name: 'Утро',
    description: 'Посещения по утреннему абонементу – в будни с 9 до 12 часов включительно',
    sessions: '5 сеансов',
    price: '21000 ₽',
    oldPrice: '30000 ₽'
  },
  {
    name: 'Детокс',
    description: 'Сеансы лимфодренажа помогают улучшить кровообращение, снять отёки, укрепить иммунитет и подарят ощущение гармонии и лёгкости.',
    sessions: '5 сеансов',
    price: '25500 ₽',
    oldPrice: '30000 ₽'
  },
  {
    name: 'Тело+лицо',
    description: '3 сеанса по телу и 2 сеанса по лицу',
    sessions: '5 сеансов',
    price: '25500 ₽',
    oldPrice: '30000 ₽'
  }
];

interface PackagesSectionProps {
  scrollToSection: (id: string) => void;
}

export default function PackagesSection({ scrollToSection }: PackagesSectionProps) {
  return (
    <section id="packages" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Абонементы на массаж</h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Выгодные пакетные предложения — экономия до 30%
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <Card key={index} className="relative overflow-hidden hover:shadow-2xl transition-all border-2 hover:border-primary flex flex-col">
              <CardHeader className="space-y-4 flex-grow">
                <CardTitle className="text-3xl">{pkg.name}</CardTitle>
                <CardDescription className="text-base leading-relaxed min-h-[80px]">{pkg.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                  <Icon name="CalendarCheck" size={18} className="text-primary" />
                  {pkg.sessions}
                </div>
                <div className="space-y-2">
                  <div className="flex items-baseline gap-3">
                    <span className="text-4xl font-bold text-primary">{pkg.price}</span>
                    <span className="text-xl text-muted-foreground line-through">{pkg.oldPrice}</span>
                  </div>
                  {/* Desktop button - with widget */}
                  <a href="https://dikidi.ru/#widget=201217" className="w-full hidden md:block">
                    <Button className="w-full bg-primary hover:bg-primary/90 text-base py-6">
                      Выбрать абонемент
                    </Button>
                  </a>
                  {/* Mobile button - direct link */}
                  <a href="https://dikidi.ru/tvoimassage" className="w-full md:hidden">
                    <Button className="w-full bg-primary hover:bg-primary/90 text-base py-6">
                      Выбрать абонемент
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}