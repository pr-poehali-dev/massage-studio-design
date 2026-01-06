import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqData = [
  {
    question: 'Как записаться на массаж?',
    answer: 'Записаться можно по телефону +7 (963) 680-20-20, через Telegram @tvoimassagist или нажав на кнопку "Записаться" на сайте. Мы подберём удобное для вас время.'
  },
  {
    question: 'Сколько длится сеанс массажа?',
    answer: 'Продолжительность сеанса зависит от выбранной услуги: от 30 минут для экспресс-массажа до 120 минут для полного комплексного массажа.'
  },
  {
    question: 'Есть ли противопоказания к массажу?',
    answer: 'Да, есть ряд противопоказаний: онкология, тяжёлые заболевания сердечно-сосудистой системы, острые воспалительные процессы, высокая температура. Перед первым сеансом мы обязательно проводим консультацию.'
  },
  {
    question: 'Можно ли подарить сертификат на массаж?',
    answer: 'Да, мы оформляем подарочные сертификаты на любую услугу или абонемент. Это отличный подарок для близких! Свяжитесь с нами для оформления.'
  },
  {
    question: 'Как часто нужно ходить на массаж?',
    answer: 'Для поддержания здоровья рекомендуем 1-2 сеанса в неделю. При лечебном массаже — курс из 10-15 процедур. Индивидуальный график подбирается на консультации.'
  },
  {
    question: 'Нужна ли специальная подготовка к массажу?',
    answer: 'Не рекомендуем плотно кушать за 2 часа до сеанса. Принесите удобную одежду. Всё необходимое (полотенца, одноразовые принадлежности, масла) мы предоставляем.'
  }
];

const additionalFaqData = [
  {
    question: 'Нужно ли брать с собой что-то на сеанс?',
    answer: 'Нет, всё необходимое для подготовки к сеансу вы найдете на клиентском столике. Одноразовое нижнее белье и шапочки, дезодорант, мицеллярную воду, резинки для волос, влажные и сухие салфетки.'
  },
  {
    question: 'Есть ли у вас парковка?',
    answer: 'В наших филиалах в СЗАО и ЮАО доступны городские парковки, как платные так и бесплатные.'
  },
  {
    question: 'У меня есть лишний вес, я стесняюсь идти на массаж',
    answer: 'Если это единственное, что вас останавливает – смело записывайтесь на сеанс. Любое тело – прекрасно, наши специалисты работают не только со спортсменами, среди наших гостей есть также представители size+'
  },
  {
    question: 'Что делать, если я забыл вещи на сеансе?',
    answer: 'Все забытые вещи хранятся до появления их владельцев'
  },
  {
    question: 'Не успела сделать эпиляцию, как на меня будет смотреть мастер?',
    answer: 'С уважением. Мастер не оценивает волосы на ногах, он оценивает и работает над вашим телом и состоянием ваших мышц'
  },
  {
    question: 'Есть ли в студии душ?',
    answer: 'Да, и по желанию вы можете им воспользоваться до и после сеанса. В кабинете мы также подготовили для вас салфетки, мицелярную воду, дезодорант, сухой шампунь, шапочку для волос и даже одноразовое белье.'
  },
  {
    question: 'А у меня не будет аллергии на вашу косметику?',
    answer: 'Все средства на которых мы проводим процедуры - гипоаллергенны и безопасны и даже не пачкают одежду и имеют нейтральный аромат.'
  },
  {
    question: 'У меня все четко по графику, сделают ли мне процедуру вовремя?',
    answer: 'Мы также уважаем ваше время как и вы наше, поэтому все процедуры будут начаты и закончены вовремя, не беспокойтесь.'
  },
  {
    question: 'А будут синяки?',
    answer: 'Абсолютно нет. Мы делаем всё для вашего комфорта и безопасности здоровья. Единственным исключением может быть индивидуальные моменты гостя в зависимости от особенностей вашего тела'
  },
  {
    question: 'Что такое лимфодренажный массаж?',
    answer: 'Лимфодренажный массаж — это техника работы с лимфатической системой, направленная на выведение лишней жидкости, снятие отёков и улучшение обмена веществ. Помогает при похудении и укрепляет иммунитет.'
  },
  {
    question: 'Чем антицеллюлитный массаж отличается от обычного?',
    answer: 'Антицеллюлитный массаж использует более интенсивные техники для глубокой проработки проблемных зон, улучшает микроциркуляцию, разглаживает кожу и уменьшает объёмы. Результат заметен уже после первых сеансов.'
  }
];

export default function BookingSection() {
  const [showAllFaq, setShowAllFaq] = useState(false);

  return (
    <>
      <section id="booking" className="py-16 md:py-24 bg-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">Часто задаваемые вопросы о массаже</h2>
              <p className="text-base sm:text-lg text-muted-foreground">
                Часто задаваемые вопросы о наших услугах
              </p>
            </div>

            <Card className="shadow-xl border-2 bg-card/50 backdrop-blur">
              <CardContent className="pt-6">
                <Accordion type="single" collapsible className="w-full">
                  {faqData.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border-b border-border/50">
                      <AccordionTrigger className="text-left hover:text-primary transition-colors py-4 text-base font-medium">
                        <div className="flex items-start gap-3">
                          <Icon name="HelpCircle" size={20} className="text-primary mt-1 flex-shrink-0" />
                          <span>{faq.question}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed pb-4 pl-8">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                  
                  {showAllFaq && additionalFaqData.map((faq, index) => (
                    <AccordionItem key={`additional-${index}`} value={`additional-${index}`} className="border-b border-border/50">
                      <AccordionTrigger className="text-left hover:text-primary transition-colors py-4 text-base font-medium">
                        <div className="flex items-start gap-3">
                          <Icon name="HelpCircle" size={20} className="text-primary mt-1 flex-shrink-0" />
                          <span>{faq.question}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed pb-4 pl-8">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>

                <div className="mt-6 text-center">
                  <button
                    onClick={() => setShowAllFaq(!showAllFaq)}
                    className="inline-flex items-center gap-2 px-6 py-3 text-primary hover:bg-primary/10 rounded-lg transition-colors font-medium"
                  >
                    {showAllFaq ? (
                      <>
                        <Icon name="ChevronUp" size={20} />
                        Скрыть дополнительные вопросы
                      </>
                    ) : (
                      <>
                        <Icon name="ChevronDown" size={20} />
                        Показать все вопросы ({additionalFaqData.length})
                      </>
                    )}
                  </button>
                </div>

                <div className="mt-8 p-6 bg-primary/5 rounded-lg border border-primary/20">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="MessageCircle" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Не нашли ответ?</h4>
                      <p className="text-muted-foreground mb-4">Свяжитесь с нами удобным способом, и мы ответим на все ваши вопросы!</p>
                      <div className="flex flex-wrap gap-3">
                        <a href="tel:+79636802020" className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                          <Icon name="Phone" size={18} />
                          Позвонить
                        </a>
                        <a href="https://t.me/tvoimassagist" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                          <Icon name="MessageCircle" size={18} />
                          Telegram
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-16 md:py-24 bg-gradient-to-b from-background to-accent/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">Контакты студии массажа</h2>
            <p className="text-base sm:text-lg text-muted-foreground">
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

      <footer className="py-12 md:py-16 bg-gradient-to-b from-accent/5 to-accent/10 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto mb-8">
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-foreground mb-4">О компании</h4>
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">ТВОЙ МАССАЖ</strong> — специализированная студия профессионального массажа по доступным ценам. 
                У нас работают только опытные сертифицированные массажисты.
              </p>
              <div className="pt-4 space-y-2 text-sm text-muted-foreground">
                <p className="font-semibold text-foreground">ИП Базлеев Иван Валентинович</p>
                <p>ИНН: 773475020907</p>
                <p>ОГРН: 325774600258609</p>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-bold text-foreground mb-4">Документы</h4>
              <div className="space-y-3">
                <a 
                  href="https://disk.yandex.ru/i/NvvQ1_qWsEraZQ" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <Icon name="FileText" size={18} className="group-hover:scale-110 transition-transform" />
                  <span>Политика обработки персональных данных</span>
                </a>
                <a 
                  href="https://disk.yandex.ru/i/hxeok_hC5zXxNw" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <Icon name="FileText" size={18} className="group-hover:scale-110 transition-transform" />
                  <span>Пользовательское соглашение</span>
                </a>
                <a 
                  href="https://disk.yandex.ru/i/6DfkSCOQZW7LZQ" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <Icon name="FileText" size={18} className="group-hover:scale-110 transition-transform" />
                  <span>Публичная оферта</span>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-8">
            <div className="text-center text-muted-foreground text-sm">
              <p>© {new Date().getFullYear()} Твой Массаж. Все права защищены.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}