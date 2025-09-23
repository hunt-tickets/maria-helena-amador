'use client';

import { useEffect, useState, useCallback } from 'react';

interface HeaderProps {
  title: string;
  className?: string;
}

const Header = ({ title, className = '' }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY;
    const newIsScrolled = scrollPosition > 50;

    if (newIsScrolled !== isScrolled) {
      setIsScrolled(newIsScrolled);
    }
  }, [isScrolled]);

  useEffect(() => {
    // Add scroll listener with passive flag for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Check initial scroll position
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50
        text-white py-4 px-4 text-center
        transition-all duration-500 ease-out
        header-fixed
        ${isScrolled
          ? 'blur-backdrop shadow-xl'
          : 'bg-transparent'
        }
        ${className}
      `}
      style={{
        backdropFilter: isScrolled ? 'blur(25px) saturate(200%) brightness(120%)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(25px) saturate(200%) brightness(120%)' : 'none',
        background: isScrolled ? 'rgba(0, 0, 0, 0.25)' : 'transparent',
        borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.15)' : 'none',
        boxShadow: isScrolled ? '0 8px 32px rgba(0, 0, 0, 0.3)' : 'none',
      }}
    >
      <h1
        className="font-steelfish text-2xl md:text-3xl lg:text-4xl font-bold drop-shadow-lg"
        style={{
          lineHeight: '2.0',
          textShadow: isScrolled
            ? '0 2px 4px rgba(0, 0, 0, 0.5)'
            : '0 2px 8px rgba(0, 0, 0, 0.8)'
        }}
      >
        {title}
      </h1>
    </header>
  );
};

export default Header;