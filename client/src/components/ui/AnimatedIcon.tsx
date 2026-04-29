import React from 'react';

interface AnimatedIconProps {
  name: string;
}

const AnimatedIcon: React.FC<AnimatedIconProps> = ({ name }) => {
  const icons: { [key: string]: JSX.Element } = {
    cancel: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-red-500 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    ),
  };

  return icons[name] || null;
};

export default AnimatedIcon;

