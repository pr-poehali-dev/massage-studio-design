import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
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

const testimonials = [
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

export default function Index() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Booking submitted:', formData);
    alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', phone: '', service: '', message: '' });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
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
              <button onClick={() => scrollToSection('packages')} className="text-foreground hover:text-primary transition-colors">Пакеты</button>
              <button onClick={() => scrollToSection('reviews')} className="text-foreground hover:text-primary transition-colors">Отзывы</button>
              <button onClick={() => scrollToSection('contacts')} className="text-foreground hover:text-primary transition-colors">Контакты</button>
            </div>
            <Button onClick={() => scrollToSection('booking')} className="bg-primary hover:bg-primary/90">
              Записаться
            </Button>
          </div>
        </div>
      </nav>

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

      <section id="services" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold mb-4">Наши услуги</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Мы предлагаем широкий спектр массажных техник для вашего здоровья и комфорта
            </p>
          </div>
          
          <div className="space-y-12">
            {massageServices.map((category, idx) => (
              <div key={idx} className="space-y-6">
                <h4 className="text-3xl font-bold text-primary flex items-center gap-3">
                  <Icon name="Sparkles" size={32} className="text-secondary" />
                  {category.category}
                </h4>
                <div className="grid md:grid-cols-3 gap-6">
                  {category.services.map((service, serviceIdx) => (
                    <Card key={serviceIdx} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2">
                      <CardHeader>
                        <CardTitle className="text-xl">{service.name}</CardTitle>
                        <CardDescription className="text-base">{service.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex justify-between items-center mb-4">
                          <span className="text-sm text-muted-foreground flex items-center gap-1">
                            <Icon name="Clock" size={16} />
                            {service.duration}
                          </span>
                          <span className="text-2xl font-bold text-primary">{service.price}</span>
                        </div>
                        <Button onClick={() => scrollToSection('booking')} className="w-full bg-secondary hover:bg-secondary/90">
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

      <section id="packages" className="py-16 md:py-24 bg-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold mb-4">Специальные пакеты</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Выгодные комплексы услуг со скидкой до 15%
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, idx) => (
              <Card key={idx} className="relative hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2">
                {pkg.badge && (
                  <Badge className="absolute -top-3 right-6 bg-primary text-primary-foreground">
                    {pkg.badge}
                  </Badge>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  <CardDescription className="text-base">{pkg.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <div className="text-sm font-semibold text-muted-foreground mb-2">Включено:</div>
                    <ul className="space-y-2">
                      {pkg.services.map((service, serviceIdx) => (
                        <li key={serviceIdx} className="flex items-start gap-2 text-sm">
                          <Icon name="Check" size={16} className="text-secondary mt-0.5 flex-shrink-0" />
                          <span>{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="border-t pt-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon name="Clock" size={18} className="text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{pkg.duration}</span>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold text-primary">{pkg.price}</span>
                      <span className="text-lg text-muted-foreground line-through">{pkg.oldPrice}</span>
                    </div>
                  </div>
                  
                  <Button onClick={() => scrollToSection('booking')} className="w-full bg-primary hover:bg-primary/90 text-base py-6">
                    Выбрать пакет
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold mb-4">Отзывы наших клиентов</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Более 500 довольных клиентов доверяют нам свое здоровье
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-6 space-y-4">
                  <div className="flex gap-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <p className="text-base leading-relaxed text-muted-foreground italic">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon name="User" size={24} className="text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">Постоянный клиент</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="booking" className="py-16 md:py-24 bg-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-4xl md:text-5xl font-bold mb-4">Записаться на сеанс</h3>
              <p className="text-lg text-muted-foreground">
                Заполните форму, и мы свяжемся с вами для подтверждения записи
              </p>
            </div>
            
            <Card className="shadow-xl">
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-semibold">Ваше имя *</label>
                    <Input
                      id="name"
                      placeholder="Введите ваше имя"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="text-base"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-semibold">Телефон *</label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+7 (999) 123-45-67"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="text-base"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="service" className="text-sm font-semibold">Интересующая услуга</label>
                    <Input
                      id="service"
                      placeholder="Например: Общий массаж тела"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="text-base"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-semibold">Комментарий</label>
                    <Textarea
                      id="message"
                      placeholder="Укажите желаемую дату и время, или задайте вопрос"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      className="text-base"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-lg py-6">
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl md:text-5xl font-bold mb-4">Контакты</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" size={24} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Адрес</h4>
                  <p className="text-muted-foreground">г. Москва, ул. Спокойная, д. 12</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Phone" size={24} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Телефон</h4>
                  <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Clock" size={24} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Режим работы</h4>
                  <p className="text-muted-foreground">Ежедневно с 9:00 до 21:00</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Mail" size={24} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Email</h4>
                  <p className="text-muted-foreground">info@tvoymassage.ru</p>
                </div>
              </div>
            </div>
            
            <div className="h-[400px] rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&q=80" 
                alt="Интерьер студии" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-accent/10 py-12 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-primary">Твой Массаж</h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              Студия массажа, где каждый сеанс — это путешествие к гармонии и здоровью
            </p>
            <div className="flex justify-center gap-6 pt-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Instagram" size={24} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Facebook" size={24} />
              </a>
              <a href="https://t.me/+QgiLIa1gFRY4Y2Iy" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Send" size={24} />
              </a>
            </div>
            <div className="pt-8 border-t border-border text-sm text-muted-foreground">
              © 2024 Твой Массаж. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
