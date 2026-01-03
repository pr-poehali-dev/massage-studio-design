import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const packages = [
  {
    name: 'Релакс',
    description: 'Идеальный пакет для первого знакомства',
    services: ['Общий массаж тела', 'Аромамассаж'],
    duration: '120 мин',
    price: '6800 ₽',
    oldPrice: '7500 ₽',
    badge: 'Популярное'
  },
  {
    name: 'Антистресс',
    description: 'Комплексное снятие напряжения',
    services: ['Массаж спины и шеи', 'Массаж ног', 'Массаж головы'],
    duration: '90 мин',
    price: '4500 ₽',
    oldPrice: '5200 ₽',
    badge: 'Хит'
  },
  {
    name: 'Премиум',
    description: 'Максимальная забота о теле',
    services: ['Тайский массаж', 'Стоунтерапия', 'Лимфодренажный массаж'],
    duration: '220 мин',
    price: '12500 ₽',
    oldPrice: '13800 ₽',
    badge: 'VIP'
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
          <h3 className="text-4xl md:text-5xl font-bold mb-4">Пакеты услуг</h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Специальные предложения с выгодой до 20%
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <Card key={index} className="relative overflow-hidden hover:shadow-2xl transition-all border-2 hover:border-primary">
              {pkg.badge && (
                <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                  {pkg.badge}
                </Badge>
              )}
              <CardHeader className="space-y-4">
                <CardTitle className="text-3xl">{pkg.name}</CardTitle>
                <CardDescription className="text-base">{pkg.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  {pkg.services.map((service, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{service}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Icon name="Clock" size={16} />
                  {pkg.duration}
                </div>
                <div className="space-y-2">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-primary">{pkg.price}</span>
                    <span className="text-lg text-muted-foreground line-through">{pkg.oldPrice}</span>
                  </div>
                  <Button onClick={() => scrollToSection('booking')} className="w-full bg-primary hover:bg-primary/90 text-base py-6">
                    Выбрать пакет
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
