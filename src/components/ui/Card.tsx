import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'pop-blue' | 'pop-lime' | 'pop-yellow' | 'pop-pink';
  hover?: boolean;
  onClick?: () => void;
}

const Card = ({
  children,
  className = '',
  variant = 'default',
  hover = true,
  onClick,
}: CardProps) => {
  const baseClasses = 'border-4 border-black p-6 transition-all duration-200';

  const variantClasses = {
    default: 'bg-white shadow-[8px_8px_0px_#000]',
    'pop-blue': 'bg-blue-600 text-white shadow-[8px_8px_0px_#000]',
    'pop-lime': 'bg-lime-400 text-black shadow-[8px_8px_0px_#000]',
    'pop-yellow': 'bg-yellow-400 text-black shadow-[8px_8px_0px_#000]',
    'pop-pink': 'bg-pink-500 text-white shadow-[8px_8px_0px_#000]',
  };

  const hoverClasses = hover
    ? 'hover:translate-x-1 hover:translate-y-1 hover:shadow-none cursor-pointer'
    : '';

  return (
    <div
      className={`${baseClasses} ${variantClasses[variant]} ${hoverClasses} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;