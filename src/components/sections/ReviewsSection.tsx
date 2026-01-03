import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import YandexReviewsConfig from '@/components/YandexReviewsConfig';

const defaultTestimonials = [
  {
    name: 'Анна Петрова',
    text: 'Невероятная атмосфера! После сеанса стоунтерапии чувствую себя заново рожденной. Мастера — профессионалы своего дела.',
    rating: 5
  },
  {
    name: 'Михаил Соколов',
    text: 'Хожу на массаж спины уже полгода. Боли в шее практически исчезли. Рекомендую всем, кто работает в офисе!',
    rating: 5
  },
  {
    name: 'Елена Волкова',
    text: 'Пакет "Релакс" — это что-то невероятное! Прекрасное сочетание техник. Обязательно вернусь еще.',
    rating: 5
  }
];

export default function ReviewsSection() {
  const [testimonials, setTestimonials] = useState(defaultTestimonials);
  const [loadingReviews, setLoadingReviews] = useState(false);
  const [showConfig, setShowConfig] = useState(false);

  useEffect(() => {
    const organizationId = localStorage.getItem('yandex_org_id');
    if (!organizationId) return;

    setLoadingReviews(true);
    fetch(`https://functions.poehali.dev/9d573f85-d500-4426-a138-88f14f794b3d?organization_id=${organizationId}`)
      .then(res => res.json())
      .then(data => {
        if (data.reviews && data.reviews.length > 0) {
          setTestimonials(data.reviews.slice(0, 6));
        }
      })
      .catch(err => console.log('Используем дефолтные отзывы:', err))
      .finally(() => setLoadingReviews(false));
  }, []);

  return (
    <section id="reviews" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-4xl md:text-5xl font-bold mb-4">Отзывы наших клиентов</h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Более 500 довольных клиентов доверяют нам свое здоровье
          </p>
          <Button 
            onClick={() => setShowConfig(!showConfig)} 
            variant="outline" 
            size="sm"
            className="mt-4"
          >
            <Icon name="Settings" size={16} className="mr-2" />
            {showConfig ? 'Скрыть настройки' : 'Настроить яндекс отзывы'}
          </Button>
          {loadingReviews && (
            <p className="text-sm text-muted-foreground mt-4 flex items-center justify-center gap-2">
              <Icon name="RefreshCw" size={16} className="animate-spin" />
              Загружаем актуальные отзывы...
            </p>
          )}
        </div>
        
        {showConfig && (
          <div className="mb-12">
            <YandexReviewsConfig />
          </div>
        )}

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 space-y-4">
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Icon key={i} name="Star" size={20} className="fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed">{testimonial.text}</p>
                <div className="font-semibold text-foreground">{testimonial.name}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
