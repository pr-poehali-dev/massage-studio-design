import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function YandexReviewsConfig() {
  const [orgId, setOrgId] = useState('');
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const savedOrgId = localStorage.getItem('yandex_org_id');
    if (savedOrgId) {
      setOrgId(savedOrgId);
      setSaved(true);
    }
  }, []);

  const extractOrgId = (input: string): string => {
    const match = input.match(/\/(\d+)\//);
    return match ? match[1] : input.trim();
  };

  const handleSave = () => {
    const extractedId = extractOrgId(orgId);
    if (extractedId) {
      localStorage.setItem('yandex_org_id', extractedId);
      setSaved(true);
      window.location.reload();
    }
  };

  const handleClear = () => {
    localStorage.removeItem('yandex_org_id');
    setOrgId('');
    setSaved(false);
  };

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Icon name="Settings" size={24} />
          Настройка отзывов Яндекс.Карты
        </CardTitle>
        <CardDescription>
          Укажите ID вашей организации в Яндекс.Картах для автоматической загрузки отзывов
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">ID организации</label>
          <div className="flex gap-2">
            <Input
              value={orgId}
              onChange={(e) => {
                setOrgId(e.target.value);
                setSaved(false);
              }}
              placeholder="Вставьте полный URL или ID организации"
              className="flex-1"
            />
            {saved ? (
              <Button onClick={handleClear} variant="outline">
                <Icon name="X" size={16} />
              </Button>
            ) : (
              <Button onClick={handleSave} disabled={!orgId.trim()}>
                <Icon name="Save" size={16} className="mr-2" />
                Сохранить
              </Button>
            )}
          </div>
          {saved && (
            <p className="text-sm text-green-600 flex items-center gap-2">
              <Icon name="CheckCircle" size={16} />
              ID сохранен. Отзывы загружаются автоматически.
            </p>
          )}
        </div>

        <div className="bg-muted/50 p-4 rounded-lg space-y-2 text-sm">
          <p className="font-semibold">Как использовать:</p>
          <ol className="list-decimal list-inside space-y-1 text-muted-foreground">
            <li>Откройте Яндекс.Карты и найдите вашу организацию</li>
            <li>Скопируйте полный URL карточки организации</li>
            <li>Вставьте URL целиком — ID извлечется автоматически</li>
            <li>Пример: yandex.ru/maps/org/tvoy_massazh/<strong>81754500528</strong>/...</li>
          </ol>
        </div>
      </CardContent>
    </Card>
  );
}