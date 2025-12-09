import { useState } from 'react';
import { Calendar } from '@/components/ui/calendar';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const timeSlots = [
  '09:00', '10:00', '11:00', '12:00', 
  '13:00', '14:00', '15:00', '16:00', 
  '17:00', '18:00', '19:00', '20:00'
];

interface BookingCalendarProps {
  onSelectDateTime: (date: Date | undefined, time: string) => void;
  selectedDate?: Date;
  selectedTime?: string;
}

export default function BookingCalendar({ onSelectDateTime, selectedDate, selectedTime }: BookingCalendarProps) {
  const [date, setDate] = useState<Date | undefined>(selectedDate);
  const [time, setTime] = useState<string | undefined>(selectedTime);

  const handleDateSelect = (newDate: Date | undefined) => {
    setDate(newDate);
    if (newDate && time) {
      onSelectDateTime(newDate, time);
    }
  };

  const handleTimeSelect = (newTime: string) => {
    setTime(newTime);
    if (date) {
      onSelectDateTime(date, newTime);
    }
  };

  const isTimeAvailable = (slot: string): boolean => {
    const bookedSlots = ['10:00', '14:00', '18:00'];
    return !bookedSlots.includes(slot);
  };

  return (
    <div className="space-y-6">
      <div>
        <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Icon name="CalendarDays" size={20} className="text-primary" />
          Выберите дату
        </h4>
        <Card className="inline-block">
          <CardContent className="p-4">
            <Calendar
              mode="single"
              selected={date}
              onSelect={handleDateSelect}
              disabled={(date) => date < new Date() || date < new Date(new Date().setHours(0, 0, 0, 0))}
              className="rounded-md"
            />
          </CardContent>
        </Card>
      </div>

      {date && (
        <div className="animate-fade-in">
          <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Icon name="Clock" size={20} className="text-primary" />
            Выберите время
          </h4>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
            {timeSlots.map((slot) => {
              const available = isTimeAvailable(slot);
              const isSelected = time === slot;
              
              return (
                <Button
                  key={slot}
                  onClick={() => available && handleTimeSelect(slot)}
                  disabled={!available}
                  variant={isSelected ? "default" : "outline"}
                  className={`
                    relative h-16 flex flex-col items-center justify-center gap-1
                    ${isSelected ? 'bg-primary text-primary-foreground' : ''}
                    ${!available ? 'opacity-40 cursor-not-allowed' : 'hover:border-primary'}
                  `}
                >
                  <span className="text-base font-semibold">{slot}</span>
                  {!available && (
                    <Badge variant="secondary" className="text-xs py-0 px-1.5 h-4">
                      занято
                    </Badge>
                  )}
                </Button>
              );
            })}
          </div>
        </div>
      )}

      {date && time && (
        <Card className="bg-primary/5 border-primary/20 animate-scale-in">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Icon name="CheckCircle" size={20} className="text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Выбранное время:</p>
                <p className="font-semibold text-lg">
                  {date.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' })} в {time}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
