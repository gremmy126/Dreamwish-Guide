import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'white' | 'outline';
  className?: string;
  fullWidth?: boolean;
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  className = '', 
  fullWidth = false,
  href
}) => {
  const baseStyle = "inline-flex items-center justify-center px-6 py-3 rounded-full font-bold transition-all duration-300 shadow-md text-sm md:text-base";
  
  const variants = {
    primary: "bg-dream-blue text-white hover:bg-dream-dark border border-transparent",
    secondary: "bg-gray-900 text-white hover:bg-gray-800 border border-transparent",
    white: "bg-white text-dream-blue hover:bg-gray-100 border border-transparent",
    outline: "bg-transparent text-dream-blue border-2 border-dream-blue hover:bg-dream-blue hover:text-white"
  };

  const widthClass = fullWidth ? "w-full" : "";

  const Component = href ? motion.a : motion.button;
  const props = href ? { href, target: "_blank", rel: "noopener noreferrer" } : { onClick };

  return (
    // @ts-ignore - framer-motion polymorphism typing allows this but TS strict mode complains sometimes
    <Component
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyle} ${variants[variant]} ${widthClass} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};