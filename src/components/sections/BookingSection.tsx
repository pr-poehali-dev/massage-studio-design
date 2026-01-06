import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import BookingCalendar from '@/components/BookingCalendar';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';

export default function BookingSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: '',
    date: undefined as Date | undefined,
    time: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.date || !formData.time) {
      alert('Пожалуйста, выберите дату и время записи');
      return;
    }
    console.log('Booking submitted:', formData);
    alert(`Отлично! Вы записаны на ${formData.date.toLocaleDateString('ru-RU')} в ${formData.time}. Мы свяжемся с вами для подтверждения.`);
    setFormData({ name: '', phone: '', service: '', message: '', date: undefined, time: '' });
  };

  const handleDateTimeSelect = (date: Date | undefined, time: string) => {
    setFormData({ ...formData, date, time });
  };

  return (
    <>
      <section id="booking" className="py-16 md:py-24 bg-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-4xl md:text-5xl font-bold mb-4">Записаться на сеанс</h3>
              <p className="text-lg text-muted-foreground">
                Заполните форму, и мы свяжемся с вами в ближайшее время
              </p>
            </div>

            <Card className="shadow-xl border-2">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Icon name="Calendar" size={24} className="text-primary" />
                  Форма записи
                </CardTitle>
                <CardDescription>
                  Все поля обязательны для заполнения
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Ваше имя</label>
                      <Input 
                        required
                        placeholder="Иван Иванов"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Телефон</label>
                      <Input 
                        required
                        type="tel"
                        placeholder="+7 (999) 123-45-67"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Желаемая услуга</label>
                    <Input 
                      required
                      placeholder="Общий массаж тела"
                      value={formData.service}
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Дата и время</label>
                    <BookingCalendar onDateTimeSelect={handleDateTimeSelect} />
                    {formData.date && formData.time && (
                      <div className="mt-2 p-3 bg-primary/10 rounded-lg flex items-center gap-2">
                        <Icon name="CheckCircle" size={16} className="text-primary" />
                        <span className="text-sm font-medium">
                          Выбрано: {formData.date.toLocaleDateString('ru-RU')} в {formData.time}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Комментарий</label>
                    <Textarea 
                      placeholder="Дополнительные пожелания или вопросы"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      rows={4}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-lg py-6">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-16 md:py-24 bg-gradient-to-b from-background to-accent/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">Контакты</h3>
            <p className="text-lg text-muted-foreground">
              Свяжитесь с нами удобным способом
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Tooltip>
              <TooltipTrigger asChild>
                <a 
                  href="tel:+79636802020" 
                  className="group block transition-all duration-300 hover:scale-105"
                >
                  <Card className="text-center hover:shadow-2xl transition-all h-full cursor-pointer border-2 hover:border-primary/50 bg-card/50 backdrop-blur">
                    <CardContent className="pt-10 pb-10 space-y-6">
                      <div className="relative">
                        <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl group-hover:blur-2xl transition-all"></div>
                        <div className="relative w-20 h-20 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:shadow-primary/50 transition-all group-hover:rotate-12">
                          <Icon name="Phone" size={36} className="text-primary-foreground" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-lg">Телефон</h4>
                        <p className="text-sm text-muted-foreground font-medium">+7 (963) 680-20-20</p>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>Позвонить</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <a 
                  href="https://t.me/tvoimassagist" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group block transition-all duration-300 hover:scale-105"
                >
                  <Card className="text-center hover:shadow-2xl transition-all h-full cursor-pointer border-2 hover:border-primary/50 bg-card/50 backdrop-blur">
                    <CardContent className="pt-10 pb-10 space-y-6">
                      <div className="relative">
                        <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl group-hover:blur-2xl transition-all"></div>
                        <div className="relative w-20 h-20 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:shadow-primary/50 transition-all group-hover:rotate-12">
                          <Icon name="MessageCircle" size={36} className="text-primary-foreground" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-lg">Telegram</h4>
                        <p className="text-sm text-muted-foreground font-medium">@tvoimassagist</p>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>Написать в Telegram</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <a 
                  href="https://yandex.ru/maps/-/CLX7vC4Q" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group block transition-all duration-300 hover:scale-105"
                >
                  <Card className="text-center hover:shadow-2xl transition-all h-full cursor-pointer border-2 hover:border-primary/50 bg-card/50 backdrop-blur">
                    <CardContent className="pt-10 pb-10 space-y-6">
                      <div className="relative">
                        <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl group-hover:blur-2xl transition-all"></div>
                        <div className="relative w-20 h-20 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:shadow-primary/50 transition-all group-hover:rotate-12">
                          <Icon name="MapPin" size={36} className="text-primary-foreground" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-lg">Адрес</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed font-medium px-2">
                          г. Москва, ул. Маршала<br />Рыбалко 3<br />
                          <span className="text-xs opacity-75">(вход через клуб "Атлетик-А")</span>
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>Показать на карте</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>
      </section>

      <footer className="py-8 bg-accent/5 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center text-muted-foreground">
            <p>© 2024 Твой Массаж. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </>
  );
}