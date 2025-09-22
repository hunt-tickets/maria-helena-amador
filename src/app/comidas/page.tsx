'use client';

import { useRouter } from 'next/navigation';
import Layout from '@/components/layout/Layout';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

const foodOptions = [
  {
    category: 'Desayuno y Meriendas',
    icon: '☕',
    color: 'pop-blue' as const,
    items: [
      'Café colombiano de origen',
      'Jugos naturales y frescos',
      'Pastelería artesanal',
      'Frutas frescas de temporada',
      'Opciones veganas disponibles'
    ]
  },
  {
    category: 'Almuerzo Principal',
    icon: '🍽️',
    color: 'pop-lime' as const,
    items: [
      'Platos de cocina internacional',
      'Especialidades colombianas',
      'Estación de ensaladas frescas',
      'Opciones vegetarianas',
      'Menú infantil disponible'
    ]
  },
  {
    category: 'Snacks y Antojitos',
    icon: '🍿',
    color: 'pop-yellow' as const,
    items: [
      'Arepas y empanadas',
      'Frutos secos gourmet',
      'Palomitas de maíz artesanales',
      'Helados y postres',
      'Bebidas refrescantes'
    ]
  },
  {
    category: 'Servicios Especiales',
    icon: '🎂',
    color: 'pop-pink' as const,
    items: [
      'Estación de crepes en vivo',
      'Bar de smoothies tropicales',
      'Corner de chocolatería artesanal',
      'Degustación de quesos',
      'Servicio de catering personalizado'
    ]
  }
];

const services = [
  {
    name: 'Área de Lactancia',
    description: 'Espacio privado y cómodo para madres lactantes',
    icon: '👶'
  },
  {
    name: 'Zona Kids',
    description: 'Área especializada con menú y entretenimiento infantil',
    icon: '🧸'
  },
  {
    name: 'Dietary Requirements',
    description: 'Opciones sin gluten, veganas y para alergias alimentarias',
    icon: '🥗'
  },
  {
    name: 'Servicio al Mesa',
    description: 'Personal especializado para atención personalizada',
    icon: '🤵'
  }
];

export default function Comidas() {
  const router = useRouter();

  return (
    <Layout className="bg-brutal-white">
      <div className="min-h-screen p-4 md:p-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="steelfish text-4xl md:text-6xl text-brutal-black mb-4">
              COMIDAS Y SERVICIOS
            </h1>
            <p className="text-xl md:text-2xl text-brutal-gray steelfish">
              EXPERIENCIA GASTRONÓMICA COMPLETA
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {foodOptions.map((option, index) => (
              <Card
                key={index}
                variant={option.color}
                className="p-8"
                hover={false}
              >
                <div className="text-center mb-6">
                  <div className="text-4xl mb-3">{option.icon}</div>
                  <h2 className="steelfish text-xl md:text-2xl">
                    {option.category}
                  </h2>
                </div>
                <ul className="space-y-2">
                  {option.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-base md:text-lg">
                      • {item}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          <Card className="p-8 mb-8">
            <h2 className="steelfish text-2xl md:text-3xl text-center mb-8">
              🌟 SERVICIOS ADICIONALES
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <div key={index} className="flex items-start gap-4">
                  <span className="text-3xl">{service.icon}</span>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{service.name}</h3>
                    <p className="text-base">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card variant="pop-blue" className="p-8 mb-12">
            <div className="text-center">
              <h2 className="steelfish text-2xl md:text-3xl mb-4">
                💰 INFORMACIÓN DE PRECIOS
              </h2>
              <div className="space-y-3 text-lg">
                <p>• El almuerzo principal está incluido en el boleto de entrada</p>
                <p>• Snacks y bebidas adicionales con precios especiales</p>
                <p>• Descuentos familiares para grupos de 4 o más personas</p>
                <p>• Métodos de pago: Efectivo, tarjetas y pagos móviles</p>
              </div>
            </div>
          </Card>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="secondary"
              size="lg"
              onClick={() => router.push('/menu')}
            >
              ← VOLVER AL MENÚ
            </Button>

            <Button
              variant="pop-pink"
              size="lg"
              onClick={() => router.push('/ubicacion')}
            >
              VER UBICACIÓN →
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}