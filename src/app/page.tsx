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
        <h1 className="steelfish text-2xl md:text-3xl lg:text-4xl font-bold" style={{ lineHeight: '2.0' }}>
          MARÍA HELENA AMADOR
        </h1>
      </header>
      <div
        className="relative bg-contain bg-top bg-no-repeat w-full"
        style={{
          backgroundImage: 'url("https://8qdflvbxjc.ufs.sh/f/Uou7Uf8rkNCSba4DVhNwiCum51YLaTFe2QcNxB7SozkO6Ayv")',
          height: '80vh',
          minHeight: '600px',
          backgroundColor: '#000000'
        }}
      >
      </div>

      <section className="py-8 px-4" style={{ backgroundColor: '#000000' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="steelfish text-2xl md:text-3xl text-white text-center mb-8 font-bold">
            NAVEGACIÓN
          </h2>
          <div className="grid grid-cols-2 gap-6 items-stretch">
            <Button
              variant="pop-lime"
              size="xl"
              onClick={() => router.push('/menu')}
              className="animate-subtle-bounce"
            >
              EXPLORAR EVENTO
            </Button>

            <Button
              variant="pop-pink"
              size="xl"
              onClick={() => window.open('https://hunttickets.com/maria-helena-amador', '_blank')}
              className="animate-subtle-bounce"
            >
              COMPRAR BOLETOS
            </Button>

            <Button
              variant="pop-blue"
              size="xl"
              onClick={() => router.push('/horarios')}
              className="animate-subtle-bounce"
            >
              HORARIOS
            </Button>

            <Button
              variant="pop-yellow"
              size="xl"
              onClick={() => router.push('/ubicacion')}
              className="animate-subtle-bounce"
            >
              UBICACIÓN
            </Button>

            <Button
              variant="primary"
              size="xl"
              onClick={() => router.push('/comidas')}
              className="animate-subtle-bounce"
            >
              COMIDAS
            </Button>

            <Button
              variant="secondary"
              size="xl"
              onClick={() => router.push('/evento')}
              className="animate-subtle-bounce"
            >
              EVENTO
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
