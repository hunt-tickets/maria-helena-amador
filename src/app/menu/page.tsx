'use client';

import { useRouter } from 'next/navigation';
import Layout from '@/components/layout/Layout';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

const menuItems = [
  {
    title: 'INFORMACIÓN DEL EVENTO',
    description: 'Conoce todos los detalles sobre María Helena Amador',
    route: '/evento',
    color: 'pop-blue' as const,
    icon: '📋'
  },
  {
    title: 'HORARIOS Y PRESENTACIONES',
    description: 'Cronograma completo de actividades y shows',
    route: '/horarios',
    color: 'pop-lime' as const,
    icon: '🕐'
  },
  {
    title: 'COMIDAS Y SERVICIOS',
    description: 'Opciones gastronómicas y servicios disponibles',
    route: '/comidas',
    color: 'pop-yellow' as const,
    icon: '🍽️'
  },
  {
    title: 'UBICACIÓN Y LOGÍSTICA',
    description: 'Cómo llegar y información práctica',
    route: '/ubicacion',
    color: 'pop-pink' as const,
    icon: '📍'
  }
];

export default function Menu() {
  const router = useRouter();

  return (
    <Layout className="bg-brutal-white">
      <div className="min-h-screen p-4 md:p-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="steelfish text-4xl md:text-6xl text-brutal-black mb-4">
              MENÚ PRINCIPAL
            </h1>
            <p className="text-lg md:text-xl text-brutal-gray">
              Explora toda la información sobre el evento María Helena Amador
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12">
            {menuItems.map((item, index) => (
              <Card
                key={index}
                variant={item.color}
                className="p-8 cursor-pointer"
                onClick={() => router.push(item.route)}
              >
                <div className="text-center">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h2 className="steelfish text-xl md:text-2xl mb-3">
                    {item.title}
                  </h2>
                  <p className="text-base md:text-lg">
                    {item.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="secondary"
              size="lg"
              onClick={() => router.push('/')}
            >
              ← VOLVER AL INICIO
            </Button>

            <Button
              variant="pop-pink"
              size="lg"
              onClick={() => window.open('https://hunttickets.com/maria-helena-amador', '_blank')}
            >
              COMPRAR BOLETOS
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}