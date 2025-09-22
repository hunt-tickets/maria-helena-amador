import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'pop-blue' | 'pop-lime' | 'pop-yellow' | 'pop-pink';
  hover?: boolean;
}

const Card = ({
  children,
  className = '',
  variant = 'default',
  hover = true,
}: CardProps) => {
  const baseClasses = 'border-4 border-brutal-black p-6 transition-all duration-200';

  const variantClasses = {
    default: 'bg-brutal-white brutalist-shadow',
    'pop-blue': 'bg-pop-blue text-brutal-white brutalist-shadow',
    'pop-lime': 'bg-pop-lime text-brutal-black brutalist-shadow',
    'pop-yellow': 'bg-pop-yellow text-brutal-black brutalist-shadow',
    'pop-pink': 'bg-pop-pink text-brutal-white brutalist-shadow',
  };

  const hoverClasses = hover
    ? 'hover:translate-x-1 hover:translate-y-1 hover:shadow-none cursor-pointer'
    : '';

  return (
    <div
      className={`${baseClasses} ${variantClasses[variant]} ${hoverClasses} ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;