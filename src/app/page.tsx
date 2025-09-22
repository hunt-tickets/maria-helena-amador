'use client';

import { useRouter } from 'next/navigation';
import Layout from '@/components/layout/Layout';
import Button from '@/components/ui/Button';

export default function Home() {
  const router = useRouter();

  return (
    <Layout>
      <div
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://8qdflvbxjc.ufs.sh/f/Uou7Uf8rkNCSba4DVhNwiCum51YLaTFe2QcNxB7SozkO6Ayv")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="flex flex-col items-center text-center z-10 px-4 relative">
          <h1 className="steelfish text-4xl md:text-6xl lg:text-8xl text-brutal-white text-outline mb-8 animate-fade-in">
            MARÍA HELENA
          </h1>
          <h2 className="steelfish text-2xl md:text-4xl lg:text-6xl text-brutal-white text-outline mb-12 animate-fade-in">
            AMADOR
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
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

          <p className="text-brutal-white text-lg md:text-xl mt-8 max-w-2xl font-semibold">
            Colegio Gimnasio Moderno • Un evento único lleno de cultura, arte y entretenimiento
          </p>
        </div>
      </div>
    </Layout>
  );
}
