import React from 'react';
import { MessageCircle } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'white';
  fullWidth?: boolean;
  icon?: boolean;
  href?: string;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  icon = false,
  href,
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-4 text-sm font-semibold tracking-wide uppercase transition-all duration-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    // White background, black text (Premium High Contrast)
    primary: "bg-white hover:bg-zinc-200 text-black focus:ring-white border border-transparent shadow-lg shadow-zinc-900/20",
    // Transparent background, white border
    outline: "bg-transparent border border-zinc-700 text-white hover:bg-zinc-800 hover:border-zinc-600 focus:ring-zinc-500",
    // Dark background, white text (Alternate)
    white: "bg-zinc-900 text-white hover:bg-black border border-zinc-800 focus:ring-zinc-800",
  };

  const widthClass = fullWidth ? "w-full" : "";
  
  const content = (
    <>
      {icon && <MessageCircle className="w-5 h-5 mr-2" />}
      {children}
    </>
  );

  const combinedClasses = `${baseStyles} ${variants[variant]} ${widthClass} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClasses} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {content}
    </button>
  );
};