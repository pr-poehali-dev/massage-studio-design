import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

const massageServices = [
  {
    name: 'ТВОЯ спина',
    duration: '30 мин',
    price: '3500 ₽',
    description: 'Экспресс-массаж спины поможет снять напряжение и придать тонус (поясница + спина + шейно-воротниковая зона)'
  },
  {
    name: 'Массаж на ТВОЙ ВЫБОР',
    duration: '60 мин',
    price: '6000 ₽',
    description: 'Массаж тела, в котором вы сами выбираете какие зоны хотите проработать и какие техники использовать'
  },
  {
    name: 'Массаж на ТВОЙ ВЫБОР',
    duration: '90 мин',
    price: '8000 ₽',
    description: 'Массаж тела, в котором вы сами выбираете какие зоны хотите проработать и какие техники использовать'
  },
  {
    name: 'Массаж на ТВОЙ ВЫБОР',
    duration: '120 мин',
    price: '10000 ₽',
    description: 'Массаж тела, в котором вы сами выбираете какие зоны хотите проработать и какие техники использовать'
  },
  {
    name: 'Лимфодренажный массаж ТВОЁ ЗДОРОВЬЕ',
    duration: '60 мин',
    price: '6000 ₽',
    description: 'Лимфодренажный массаж — особая техника работы с лимфатической системой организма, направленная на выведение из организма лишней жидкости и снятие отеков. Благодаря ускорению движения лимфы, активизируется процесс похудения и происходит уменьшение объемов тела'
  },
  {
    name: 'Антицеллюлитный массаж ТВОЯ ФИГУРА',
    duration: '60 мин',
    price: '6000 ₽',
    description: 'Улучшает обмен веществ, разглаживает «апельсиновую» корку, уменьшает объемы, делает кожу более эластичной'
  },
  {
    name: 'Спортивный массаж ТВОЙ СПОРТ',
    duration: '60 мин',
    price: '6000 ₽',
    description: 'Подходит для тех, кто активно занимается спортом. При массаже улучшается снабжение мышц кислородом и питательными веществами, стимулируются обменные процессы, мышцы быстрее восстанавливаются, а также увеличивается их работоспособность'
  },
  {
    name: 'ТВОЙ ФИРМЕННЫЙ массаж',
    duration: '60 мин',
    price: '6000 ₽',
    description: 'Глубокая проработка мышц спины. Массаж создаёт общеукрепляющее действие, помогает снять усталость и даёт прилив новых сил'
  },
  {
    name: 'Триггерная терапия',
    duration: '60 мин',
    price: '6000 ₽',
    description: 'Проработка спазмированных мышечных участков'
  },
  {
    name: 'Скульптурный массаж тела с ингибитором жира',
    duration: '90 мин',
    price: '8000 ₽',
    description: 'Уже за первый сеанс уйдет 2-3 см, а качество кожи заметно улучшится. Снимет напряжение и усталость мышц. Очень хороший результат по борьбе с отёками (клинически доказано)'
  }
];

interface ServicesSectionProps {
  scrollToSection: (id: string) => void;
}

export default function ServicesSection({ scrollToSection }: ServicesSectionProps) {
  const [expandedServices, setExpandedServices] = useState<Set<number>>(new Set());

  const toggleExpanded = (index: number) => {
    setExpandedServices(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  return (
    <section id="services" className="py-16 md:py-24 bg-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Услуги массажа в Москве</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Лимфодренажный, антицеллюлитный, спортивный и другие виды массажа для здоровья
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {massageServices.map((service, serviceIndex) => {
            const isExpanded = expandedServices.has(serviceIndex);
            const needsExpansion = service.description.length > 100;
            
            return (
              <Card key={serviceIndex} className="hover:shadow-lg transition-all hover:border-primary/50 flex flex-col">
                <CardHeader className="flex-grow">
                  <CardTitle className="text-xl min-h-[56px] leading-tight">{service.name}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed min-h-[60px]">
                    <span className={!isExpanded && needsExpansion ? 'line-clamp-3' : ''}>
                      {service.description}
                    </span>
                    {needsExpansion && (
                      <button
                        onClick={() => toggleExpanded(serviceIndex)}
                        className="text-primary hover:underline ml-1 font-medium"
                      >
                        {isExpanded ? 'Свернуть' : '...ещё'}
                      </button>
                    )}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="flex items-center gap-1">
                      <Icon name="Clock" size={14} />
                      {service.duration}
                    </Badge>
                    <div className="text-2xl font-bold text-primary">{service.price}</div>
                  </div>
                  <a href="https://dikidi.ru/#widget=201217" className="w-full">
                    <Button className="w-full">
                      Записаться
                    </Button>
                  </a>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}