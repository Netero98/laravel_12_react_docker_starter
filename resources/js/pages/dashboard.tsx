import React from 'react';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
} from 'chart.js';

import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

// Инициализация Chart.js
ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Tooltip);

// Хлебные крошки
const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Dashboard',
    href: '/dashboard',
  },
];

// Данные для графика (заглушка)
const chartData = {
  labels: Array.from({ length: 7 }, (_, i) => `Day ${i + 1}`),
  datasets: [
    {
      label: 'Посещения',
      data: [120, 190, 300, 250, 220, 320, 400],
      borderColor: '#3b82f6',
      backgroundColor: 'rgba(59, 130, 246, 0.2)',
      tension: 0.3,
    },
  ],
};

export default function Dashboard() {
  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Dashboard" />

      <div className="flex flex-col gap-4 rounded-xl p-4">
        {/* Метрики */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Продажи', 'Пользователи', 'Конверсии', 'Отклики'].map((title, i) => (
            <Card key={i}>
              <CardContent className="p-4 space-y-2">
                <div className="text-sm text-muted-foreground">{title}</div>
                <Skeleton className="h-8 w-2/3" />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* График активности */}
        <Card>
          <CardContent className="p-4">
            <h2 className="text-lg font-semibold mb-4">Посещения за неделю</h2>
            <div className="h-64">
              <Line
                data={chartData}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: { legend: { display: false } },
                  scales: {
                    y: {
                      ticks: { beginAtZero: true },
                      grid: { color: '#e5e7eb' },
                    },
                    x: {
                      grid: { display: false },
                    },
                  },
                }}
              />
            </div>
          </CardContent>
        </Card>

        {/* Список задач */}
        <Card>
          <CardContent className="p-4">
            <h2 className="text-lg font-semibold mb-4">Список задач</h2>
            <ul className="space-y-2">
              {['Добавить продукт', 'Проверить отчёты', 'Обновить профиль'].map((text, idx) => (
                <li
                  key={idx}
                  className="flex items-center justify-between p-3 bg-muted rounded-lg"
                >
                  <span>{text}</span>
                  <Skeleton className="h-4 w-10" />
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}
