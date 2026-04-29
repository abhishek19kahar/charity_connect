import React, { useState } from 'react';
import AnimatedIcon from './ui/AnimatedIcon.tsx';
import AnimatedButton from './ui/AnimatedButton.tsx';
import { useNavigate } from 'react-router-dom';

const AnimatedPaymentCancel: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleGoBack = () => {
    setIsVisible(false);
    // Implement go back logic
    navigate('/home')
  };
  const navigate = useNavigate();
  const handleContactSupport = () => {
    // Implement contact support logic
    navigate('/home')
  };

  if (!isVisible) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center p-4">
      <div className="text-center space-y-8 animate-fadeIn">
        <AnimatedIcon name="cancel" />
        <h2 className="text-4xl font-bold text-gray-900 animate-slideDown">
          Payment Cancelled
        </h2>
        <p className="text-xl text-gray-600 max-w-md mx-auto animate-slideUp">
          Your payment has been cancelled. If this was a mistake, please try again or contact our support team for assistance.
        </p>
        <div className="space-y-4 animate-fadeIn">
          <AnimatedButton onClick={handleGoBack}>Go Back</AnimatedButton>
        </div>
      </div>
    </div>
  );
};

export default AnimatedPaymentCancel;

