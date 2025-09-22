'use client';

import { useRouter } from 'next/navigation';
import Layout from '@/components/layout/Layout';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

const transportOptions = [
  {
    type: 'Transporte Público',
    icon: '🚌',
    color: 'pop-blue' as const,
    options: [
      'TransMilenio: Estación más cercana',
      'Rutas de buses urbanos 15, 23, 45',
      'Servicio de taxi y Uber disponible',
      'Aplicaciones: Beat, InDriver, Cabify'
    ]
  },
  {
    type: 'Vehículo Particular',
    icon: '🚗',
    color: 'pop-lime' as const,
    options: [
      'Parqueadero disponible en el colegio',
      'Entrada por la Carrera 11 con Calle 74',
      'Capacidad para 200 vehículos',
      'Servicio de valet parking opcional'
    ]
  },
  {
    type: 'Servicios Especiales',
    icon: '🚐',
    color: 'pop-yellow' as const,
    options: [
      'Shuttle desde estaciones de TransMilenio',
      'Descuentos en Uber para asistentes',
      'Coordinación de carpools familiares',
      'Transporte para personas con movilidad reducida'
    ]
  }
];

const practicalInfo = [
  {
    title: 'Horarios de Acceso',
    icon: '🕐',
    info: 'Puertas abren a las 8:30 AM • Evento inicia 9:00 AM'
  },
  {
    title: 'Qué Traer',
    icon: '🎒',
    info: 'Cédula o documento de identidad • Cámara permitida • Ropa cómoda'
  },
  {
    title: 'Restricciones',
    icon: '🚫',
    info: 'No bebidas alcohólicas • No mascotas • No elementos cortopunzantes'
  },
  {
    title: 'Facilidades',
    icon: '♿',
    info: 'Acceso para sillas de ruedas • Baños familiares • Zona de primeros auxilios'
  }
];

export default function Ubicacion() {
  const router = useRouter();

  return (
    <Layout className="bg-brutal-white">
      <div className="min-h-screen p-4 md:p-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="steelfish text-4xl md:text-6xl text-brutal-black mb-4">
              UBICACIÓN Y LOGÍSTICA
            </h1>
            <p className="text-xl md:text-2xl text-brutal-gray steelfish">
              CÓMO LLEGAR Y QUÉ SABER
            </p>
          </div>

          <Card variant="pop-pink" className="p-8 mb-12">
            <div className="text-center">
              <h2 className="steelfish text-2xl md:text-3xl mb-6">
                📍 COLEGIO GIMNASIO MODERNO
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-bold text-xl mb-3">Dirección:</h3>
                  <p className="text-lg mb-4">
                    Carrera 11 # 74-55<br/>
                    Chapinero, Bogotá<br/>
                    Colombia
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-3">Contacto:</h3>
                  <p className="text-lg mb-4">
                    Teléfono: +57 (1) 312-0008<br/>
                    Email: eventos@gimnasimoderno.edu.co<br/>
                    WhatsApp: +57 300 123 4567
                  </p>
                </div>
              </div>
              <Button
                variant="secondary"
                size="lg"
                onClick={() => window.open('https://maps.google.com/?q=Gimnasio+Moderno+Bogotá', '_blank')}
                className="mt-4"
              >
                ABRIR EN GOOGLE MAPS
              </Button>
            </div>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {transportOptions.map((transport, index) => (
              <Card
                key={index}
                variant={transport.color}
                className="p-6"
                hover={false}
              >
                <div className="text-center mb-4">
                  <div className="text-4xl mb-3">{transport.icon}</div>
                  <h3 className="steelfish text-lg md:text-xl">
                    {transport.type}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {transport.options.map((option, optionIndex) => (
                    <li key={optionIndex} className="text-sm md:text-base">
                      • {option}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          <Card className="p-8 mb-12">
            <h2 className="steelfish text-2xl md:text-3xl text-center mb-8">
              ℹ️ INFORMACIÓN PRÁCTICA
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {practicalInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-4">
                  <span className="text-3xl">{info.icon}</span>
                  <div>
                    <h3 className="font-bold text-lg mb-2">{info.title}</h3>
                    <p className="text-base">{info.info}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card variant="pop-lime" className="p-8 mb-12">
            <div className="text-center">
              <h2 className="steelfish text-2xl md:text-3xl mb-4">
                🆘 SOPORTE Y AYUDA
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h3 className="font-bold text-lg mb-2">Día del Evento</h3>
                  <p>Personal de apoyo en entrada principal</p>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">WhatsApp</h3>
                  <p>+57 300 123 4567<br/>Atención inmediata</p>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Hunt Tickets</h3>
                  <p>Soporte técnico para boletos<br/>support@hunttickets.com</p>
                </div>
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