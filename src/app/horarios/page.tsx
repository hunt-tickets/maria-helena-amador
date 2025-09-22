'use client';

import { useRouter } from 'next/navigation';
import Layout from '@/components/layout/Layout';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

const schedule = [
  {
    time: '9:00 AM',
    activity: 'Apertura y Bienvenida',
    description: 'Ceremonia inaugural del evento María Helena Amador',
    type: 'opening'
  },
  {
    time: '10:00 AM',
    activity: 'Presentación Musical',
    description: 'Conjunto musical estudiantil - Repertorio clásico y contemporáneo',
    type: 'music'
  },
  {
    time: '11:30 AM',
    activity: 'Taller Interactivo',
    description: 'Actividades participativas para toda la familia',
    type: 'workshop'
  },
  {
    time: '1:00 PM',
    activity: 'Almuerzo y Networking',
    description: 'Tiempo para disfrutar la gastronomía y conectar con otros asistentes',
    type: 'food'
  },
  {
    time: '2:30 PM',
    activity: 'Exposición Artística',
    description: 'Muestra de trabajos estudiantiles y artistas invitados',
    type: 'art'
  },
  {
    time: '4:00 PM',
    activity: 'Conferencia Magistral',
    description: 'Charla sobre educación y desarrollo cultural',
    type: 'conference'
  },
  {
    time: '5:30 PM',
    activity: 'Presentación Teatral',
    description: 'Obra teatral interpretada por estudiantes del colegio',
    type: 'theater'
  },
  {
    time: '7:00 PM',
    activity: 'Clausura y Reconocimientos',
    description: 'Ceremonia de cierre con reconocimientos especiales',
    type: 'closing'
  }
];

const getTypeColor = (type: string) => {
  const colors = {
    opening: 'pop-blue',
    music: 'pop-lime',
    workshop: 'pop-yellow',
    food: 'pop-pink',
    art: 'pop-blue',
    conference: 'pop-lime',
    theater: 'pop-yellow',
    closing: 'pop-pink'
  };
  return colors[type as keyof typeof colors] || 'default';
};

const getTypeIcon = (type: string) => {
  const icons = {
    opening: '🎉',
    music: '🎵',
    workshop: '🎨',
    food: '🍽️',
    art: '🖼️',
    conference: '🎤',
    theater: '🎭',
    closing: '🏆'
  };
  return icons[type as keyof typeof icons] || '📋';
};

export default function Horarios() {
  const router = useRouter();

  return (
    <Layout className="bg-brutal-white">
      <div className="min-h-screen p-4 md:p-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="steelfish text-4xl md:text-6xl text-brutal-black mb-4">
              HORARIOS
            </h1>
            <p className="text-xl md:text-2xl text-brutal-gray steelfish">
              CRONOGRAMA DE ACTIVIDADES
            </p>
          </div>

          <div className="space-y-6">
            {schedule.map((item, index) => (
              <Card
                key={index}
                variant={getTypeColor(item.type) as 'default' | 'pop-blue' | 'pop-lime' | 'pop-yellow' | 'pop-pink'}
                className="p-6"
                hover={false}
              >
                <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                  <div className="flex items-center gap-3 min-w-0 md:min-w-[120px]">
                    <span className="text-2xl">{getTypeIcon(item.type)}</span>
                    <span className="steelfish text-xl md:text-2xl">
                      {item.time}
                    </span>
                  </div>

                  <div className="flex-1">
                    <h3 className="steelfish text-lg md:text-xl mb-2">
                      {item.activity}
                    </h3>
                    <p className="text-base md:text-lg">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <Card className="p-8 mt-12">
            <div className="text-center">
              <h2 className="steelfish text-2xl md:text-3xl mb-4">
                📝 INFORMACIÓN IMPORTANTE
              </h2>
              <div className="space-y-3 text-lg">
                <p>• Los horarios pueden estar sujetos a cambios menores</p>
                <p>• Se recomienda llegar 30 minutos antes del inicio</p>
                <p>• Habrá espacios de descanso disponibles durante todo el evento</p>
                <p>• Las actividades están diseñadas para toda la familia</p>
              </div>
            </div>
          </Card>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            <Button
              variant="secondary"
              size="lg"
              onClick={() => router.push('/menu')}
            >
              ← VOLVER AL MENÚ
            </Button>

            <Button
              variant="pop-yellow"
              size="lg"
              onClick={() => router.push('/comidas')}
            >
              VER COMIDAS →
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}