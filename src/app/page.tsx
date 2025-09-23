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
        <h1 className="steelfish text-2xl md:text-3xl lg:text-4xl font-bold">
          MARÍA HELENA AMADOR
        </h1>
      </header>
      <div
        className="relative flex items-center justify-center bg-contain bg-top bg-no-repeat w-full bg-black"
        style={{
          backgroundImage: 'url("https://8qdflvbxjc.ufs.sh/f/Uou7Uf8rkNCSba4DVhNwiCum51YLaTFe2QcNxB7SozkO6Ayv")',
          height: 'calc(100vh - 80px)'
        }}
      >
        <div className="flex items-end justify-center px-4 py-safe relative w-full max-w-6xl h-full">
          <div className="grid grid-cols-2 gap-4 w-full max-w-lg animate-fade-in mb-16">
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
            >
              COMPRAR BOLETOS
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
