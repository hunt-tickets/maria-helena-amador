'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/components/ui/Button';
import InfiniteCarousel from '@/components/ui/InfiniteCarousel';

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
      <InfiniteCarousel
        imageUrl="https://8qdflvbxjc.ufs.sh/f/Uou7Uf8rkNCSKoryYL6zmKNpSJOQl7ZgujFW8GwC0MUB9qyD"
        height="20vh"
        speed={25}
      />
      <div
        className="relative flex items-center justify-center bg-cover bg-center bg-no-repeat w-full"
        style={{
          backgroundImage: 'url("https://8qdflvbxjc.ufs.sh/f/Uou7Uf8rkNCSba4DVhNwiCum51YLaTFe2QcNxB7SozkO6Ayv")',
          height: '80vh'
        }}
      >
        <div className="flex items-end justify-center px-4 py-safe relative w-full max-w-6xl h-full">
          <div className="grid grid-cols-2 gap-4 w-full max-w-lg animate-fade-in mb-8">
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
