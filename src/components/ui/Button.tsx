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
  const baseClasses = 'font-bold border-4 border-black transition-all duration-200 hover:translate-x-1 hover:translate-y-1 active:translate-x-2 active:translate-y-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed';

  const variantClasses = {
    primary: 'bg-white text-black shadow-[8px_8px_0px_#000] hover:shadow-none',
    secondary: 'bg-black text-white shadow-[8px_8px_0px_#333] hover:shadow-none',
    'pop-blue': 'bg-blue-600 text-white shadow-[8px_8px_0px_#000] hover:shadow-none',
    'pop-lime': 'bg-lime-400 text-black shadow-[8px_8px_0px_#000] hover:shadow-none',
    'pop-yellow': 'bg-yellow-400 text-black shadow-[8px_8px_0px_#000] hover:shadow-none',
    'pop-pink': 'bg-pink-500 text-white shadow-[8px_8px_0px_#000] hover:shadow-none',
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