import React from 'react';

interface AnimatedButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({ children, onClick, variant = 'primary' }) => {
  const baseClasses = "px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variantClasses = variant === 'primary'
    ? "bg-gradient-to-r from-purple-500 to-indigo-600 text-white hover:from-purple-600 hover:to-indigo-700 focus:ring-indigo-500"
    : "bg-gradient-to-r from-gray-200 to-gray-300 text-gray-800 hover:from-gray-300 hover:to-gray-400 focus:ring-gray-400";

  return (
    <button
      className={`${baseClasses} ${variantClasses}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default AnimatedButton;

