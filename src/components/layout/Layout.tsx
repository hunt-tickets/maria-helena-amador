'use client';

import { ReactNode, useEffect } from 'react';
import Header from './Header';

interface LayoutProps {
  children: ReactNode;
  className?: string;
  showHeader?: boolean;
  headerTitle?: string;
}

const Layout = ({
  children,
  className = '',
  showHeader = true,
  headerTitle = 'MARÍA HELENA AMADOR'
}: LayoutProps) => {
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
    <div className={`min-h-screen ${className}`}>
      {showHeader && <Header title={headerTitle} />}
      <main className={showHeader ? 'pt-20' : ''}>
        {children}
      </main>
    </div>
  );
};

export default Layout;