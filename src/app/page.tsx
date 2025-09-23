'use client';

import { useRouter } from 'next/navigation';
import Layout from '@/components/layout/Layout';
import Button from '@/components/ui/Button';

export default function Home() {
  const router = useRouter();

  return (
    <Layout>
      <div className="relative">
        {/* Hero Image */}
        <div className="relative">
          <img
            src="https://8qdflvbxjc.ufs.sh/f/Uou7Uf8rkNCSba4DVhNwiCum51YLaTFe2QcNxB7SozkO6Ayv"
            alt="María Helena Amador"
            className="w-full h-auto block"
            style={{
              filter: 'brightness(1.1) contrast(1.05)',
            }}
          />
          {/* Overlay gradient for better header visibility */}
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/50 to-transparent pointer-events-none" />
        </div>

        {/* Navigation Section */}
        <section className="py-6 px-4 bg-black">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-steelfish text-2xl md:text-3xl text-white text-center mb-8 font-bold">
              NAVEGACIÓN
            </h2>
            <div className="grid grid-cols-2 gap-6" style={{ gridAutoRows: '1fr' }}>
              <Button
                variant="pop-lime"
                size="xl"
                onClick={() => router.push('/menu')}
                className="animate-subtle-bounce pattern-dots"
              >
                EXPLORAR EVENTO
              </Button>

              <Button
                variant="pop-pink"
                size="xl"
                onClick={() => window.open('https://hunttickets.com/maria-helena-amador', '_blank')}
                className="animate-subtle-bounce pattern-stripes"
              >
                COMPRAR BOLETOS
              </Button>

              <Button
                variant="pop-blue"
                size="xl"
                onClick={() => router.push('/horarios')}
                className="animate-subtle-bounce pattern-grid"
              >
                HORARIOS
              </Button>

              <Button
                variant="pop-yellow"
                size="xl"
                onClick={() => router.push('/ubicacion')}
                className="animate-subtle-bounce pattern-waves"
              >
                UBICACIÓN
              </Button>

              <Button
                variant="primary"
                size="xl"
                onClick={() => router.push('/comidas')}
                className="animate-subtle-bounce pattern-zigzag"
              >
                COMIDAS
              </Button>

              <Button
                variant="secondary"
                size="xl"
                onClick={() => router.push('/evento')}
                className="animate-subtle-bounce pattern-cross"
              >
                EVENTO
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
