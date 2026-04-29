import React from 'react';

interface ProgressBarProps {
  value: number;
  max: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ value, max }) => {
  const percentage = (value / max) * 100;

  return (
    <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-100">
      <div
        className="bg-green-600 h-2 rounded-full transition-all duration-500 ease-in-out"
        style={{ width: `${percentage}%` }}
      >
        <span className="sr-only">{`${percentage}%`}</span>
      </div>
    </div>
  );
};

export default ProgressBar;

