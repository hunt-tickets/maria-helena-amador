'use client';

import { useRouter } from 'next/navigation';
import Layout from '@/components/layout/Layout';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

export default function Evento() {
  const router = useRouter();

  return (
    <Layout className="bg-brutal-white">
      <div className="min-h-screen p-4 md:p-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="steelfish text-4xl md:text-6xl text-brutal-black mb-4">
              MARÍA HELENA AMADOR
            </h1>
            <p className="text-xl md:text-2xl text-brutal-gray steelfish">
              INFORMACIÓN DEL EVENTO
            </p>
          </div>

          <div className="space-y-8">
            <Card variant="pop-blue" className="p-8">
              <h2 className="steelfish text-2xl md:text-3xl mb-4">
                🎭 SOBRE EL EVENTO
              </h2>
              <p className="text-lg leading-relaxed">
                María Helena Amador es un evento cultural único que celebra el arte,
                la música y la creatividad en el prestigioso Colegio Gimnasio Moderno.
                Una experiencia inmersiva que combina diferentes expresiones artísticas
                en un ambiente educativo de excelencia.
              </p>
            </Card>

            <Card variant="pop-lime" className="p-8">
              <h2 className="steelfish text-2xl md:text-3xl mb-4">
                📅 FECHA Y LUGAR
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-lg mb-2">Fecha:</h3>
                  <p className="text-lg">Por confirmar</p>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Lugar:</h3>
                  <p className="text-lg">Colegio Gimnasio Moderno</p>
                  <p className="text-base">Bogotá, Colombia</p>
                </div>
              </div>
            </Card>

            <Card variant="pop-yellow" className="p-8">
              <h2 className="steelfish text-2xl md:text-3xl mb-4">
                🎪 QUÉ ESPERAR
              </h2>
              <ul className="space-y-3 text-lg">
                <li>• Presentaciones artísticas de alta calidad</li>
                <li>• Experiencias interactivas y talleres</li>
                <li>• Gastronomía especializada</li>
                <li>• Ambiente familiar y educativo</li>
                <li>• Networking con la comunidad educativa</li>
              </ul>
            </Card>

            <Card variant="pop-pink" className="p-8">
              <h2 className="steelfish text-2xl md:text-3xl mb-4">
                🎫 BOLETERÍA
              </h2>
              <p className="text-lg mb-4">
                Adquiere tus boletos de manera segura y fácil a través de Hunt Tickets.
                Diferentes categorías disponibles para que vivas la experiencia que prefieras.
              </p>
              <Button
                variant="secondary"
                size="lg"
                onClick={() => window.open('https://hunttickets.com/maria-helena-amador', '_blank')}
              >
                COMPRAR BOLETOS AHORA
              </Button>
            </Card>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            <Button
              variant="secondary"
              size="lg"
              onClick={() => router.push('/menu')}
            >
              ← VOLVER AL MENÚ
            </Button>

            <Button
              variant="pop-blue"
              size="lg"
              onClick={() => router.push('/horarios')}
            >
              VER HORARIOS →
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}