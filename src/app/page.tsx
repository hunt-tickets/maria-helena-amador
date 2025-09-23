'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/components/ui/Button';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Set viewport height for mobile browsers
    const setViewportHeight = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    setViewportHeight();
    window.addEventListener('resize', setViewportHeight);
    window.addEventListener('orientationchange', setViewportHeight);

    return () => {
      window.removeEventListener('resize', setViewportHeight);
      window.removeEventListener('orientationchange', setViewportHeight);
    };
  }, []);

  return (
    <>
      <header className="bg-black text-white py-4 px-4 text-center">
        <h1 className="font-steelfish text-2xl md:text-3xl lg:text-4xl font-bold" style={{ lineHeight: '2.0' }}>
          MARÍA HELENA AMADOR
        </h1>
      </header>
      <div
        className="relative bg-cover md:bg-contain bg-center bg-no-repeat w-full bg-black"
        style={{
          backgroundImage: 'url("https://8qdflvbxjc.ufs.sh/f/Uou7Uf8rkNCSba4DVhNwiCum51YLaTFe2QcNxB7SozkO6Ayv")',
          paddingBottom: '56.25%' // 16:9 aspect ratio
        }}
      >
      </div>

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
    </>
  );
}
