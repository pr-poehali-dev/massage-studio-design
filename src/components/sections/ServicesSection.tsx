import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const massageServices = [
  {
    category: 'Классический массаж',
    services: [
      { name: 'Общий массаж тела', duration: '60 мин', price: '3500 ₽', description: 'Полное расслабление всего тела' },
      { name: 'Массаж спины и шеи', duration: '40 мин', price: '2200 ₽', description: 'Снятие напряжения с плечевого пояса' },
      { name: 'Массаж ног', duration: '30 мин', price: '1800 ₽', description: 'Улучшение кровообращения' },
    ]
  },
  {
    category: 'Лечебный массаж',
    services: [
      { name: 'Антицеллюлитный массаж', duration: '50 мин', price: '3200 ₽', description: 'Коррекция проблемных зон' },
      { name: 'Лимфодренажный массаж', duration: '60 мин', price: '3800 ₽', description: 'Выведение лишней жидкости' },
      { name: 'Массаж при остеохондрозе', duration: '45 мин', price: '2800 ₽', description: 'Облегчение болевых симптомов' },
    ]
  },
  {
    category: 'Авторские техники',
    services: [
      { name: 'Тайский массаж', duration: '90 мин', price: '5500 ₽', description: 'Глубокая проработка мышц' },
      { name: 'Стоунтерапия', duration: '70 мин', price: '4500 ₽', description: 'Массаж горячими камнями' },
      { name: 'Аромамассаж', duration: '60 мин', price: '4000 ₽', description: 'С использованием эфирных масел' },
    ]
  }
];

interface ServicesSectionProps {
  scrollToSection: (id: string) => void;
}

export default function ServicesSection({ scrollToSection }: ServicesSectionProps) {
  return (
    <section id="services" className="py-16 md:py-24 bg-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-4xl md:text-5xl font-bold mb-4">Наши услуги</h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Широкий выбор техник массажа для вашего здоровья и комфорта
          </p>
        </div>

        <div className="space-y-12">
          {massageServices.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-6">
              <h4 className="text-2xl font-semibold text-primary flex items-center gap-2">
                <Icon name="Sparkles" size={24} />
                {category.category}
              </h4>
              <div className="grid md:grid-cols-3 gap-6">
                {category.services.map((service, serviceIndex) => (
                  <Card key={serviceIndex} className="hover:shadow-lg transition-all hover:border-primary/50">
                    <CardHeader>
                      <CardTitle className="text-xl">{service.name}</CardTitle>
                      <CardDescription>{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between">
                        <Badge variant="secondary" className="flex items-center gap-1">
                          <Icon name="Clock" size={14} />
                          {service.duration}
                        </Badge>
                        <div className="text-2xl font-bold text-primary">{service.price}</div>
                      </div>
                      <Button onClick={() => scrollToSection('booking')} className="w-full">
                        Записаться
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
