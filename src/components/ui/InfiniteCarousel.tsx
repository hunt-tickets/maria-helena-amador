'use client';

interface InfiniteCarouselProps {
  imageUrl: string;
  height?: string;
  speed?: number;
}

const InfiniteCarousel = ({
  imageUrl,
  height = '60px',
  speed = 30
}: InfiniteCarouselProps) => {
  return (
    <div
      className="relative overflow-hidden w-full bg-white"
      style={{ height }}
    >
      <div
        className="flex absolute top-0 left-0 h-full infinite-scroll"
        style={{
          width: '200%',
          '--scroll-speed': `${speed}s`
        } as React.CSSProperties}
      >
        {/* Repetir la imagen múltiples veces para crear el efecto infinito */}
        {Array.from({ length: 20 }).map((_, index) => (
          <div
            key={index}
            className="flex-shrink-0 h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url("${imageUrl}")`,
              width: '10%', // 20 elementos = 200% / 20 = 10% cada uno
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default InfiniteCarousel;