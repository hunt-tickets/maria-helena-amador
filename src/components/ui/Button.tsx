import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'pop-blue' | 'pop-lime' | 'pop-yellow' | 'pop-pink';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}: ButtonProps) => {
  const baseClasses = 'font-bold border-0 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed rounded-lg';

  const variantClasses = {
    primary: 'bg-white text-black hover:bg-gray-100',
    secondary: 'bg-black text-white hover:bg-gray-800',
    'pop-blue': 'bg-blue-600 text-white hover:bg-blue-700',
    'pop-lime': 'bg-lime-400 text-black hover:bg-lime-500',
    'pop-yellow': 'bg-yellow-400 text-black hover:bg-yellow-500',
    'pop-pink': 'bg-pink-500 text-white hover:bg-pink-600',
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-12 py-6 text-xl steelfish',
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;