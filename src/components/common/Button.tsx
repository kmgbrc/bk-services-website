import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline';
  className?: string;
  onClick?: () => void;
}

export default function Button({ children, variant = 'primary', className = '', onClick }: ButtonProps) {
  const baseStyles = "px-8 py-3 transition-all duration-300";
  const variants = {
    primary: "bg-[var(--accent)] text-white hover:bg-opacity-90",
    outline: "border border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-white"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}