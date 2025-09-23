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
  const baseClasses = 'font-bold transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center';

  const variantClasses = {
    primary: 'bg-white text-black hover:bg-gray-100 border-4 border-purple-500',
    secondary: 'bg-black text-white hover:bg-gray-800 border-4 border-cyan-400',
    'pop-blue': 'bg-blue-600 text-white hover:bg-blue-700 border-4 border-orange-400',
    'pop-lime': 'bg-lime-400 text-black hover:bg-lime-500 border-4 border-purple-600',
    'pop-yellow': 'bg-yellow-400 text-black hover:bg-yellow-500 border-4 border-blue-600',
    'pop-pink': 'bg-pink-500 text-white hover:bg-pink-600 border-4 border-green-400',
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm h-[40px] w-[40px]',
    md: 'px-6 py-3 text-base h-[48px] w-[48px]',
    lg: 'px-8 py-4 text-lg h-[56px] w-[56px]',
    xl: 'px-4 py-2 text-base font-steelfish h-[100px] w-[100px]',
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