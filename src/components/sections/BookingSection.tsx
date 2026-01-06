import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import BookingCalendar from '@/components/BookingCalendar';

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

      <section id="contacts" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl md:text-5xl font-bold mb-4">Контакты</h3>
            <p className="text-lg text-muted-foreground">
              Мы всегда на связи
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <a 
              href="tel:+79636802020" 
              className="block transition-transform hover:scale-105"
            >
              <Card className="text-center hover:shadow-lg transition-shadow h-full cursor-pointer">
                <CardContent className="pt-6 space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Icon name="Phone" size={32} className="text-primary" />
                  </div>
                </CardContent>
              </Card>
            </a>

            <a 
              href="https://t.me/tvoimassagist" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block transition-transform hover:scale-105"
            >
              <Card className="text-center hover:shadow-lg transition-shadow h-full cursor-pointer">
                <CardContent className="pt-6 space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Icon name="MessageCircle" size={32} className="text-primary" />
                  </div>
                </CardContent>
              </Card>
            </a>

            <a 
              href="https://yandex.ru/maps/-/CLX7vC4Q" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block transition-transform hover:scale-105"
            >
              <Card className="text-center hover:shadow-lg transition-shadow h-full cursor-pointer">
                <CardContent className="pt-6 space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Icon name="MapPin" size={32} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground leading-tight">
                      г. Москва, ул. Маршала Рыбалко 3<br />
                      <span className="text-xs">(вход через клуб "Атлетик-А")</span>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </a>
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