// import React from 'react'
// import { SuccessAnimation } from './SuccessAnimation.tsx'


// export default function PaymentSuccess() {
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-100">
//       <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-lg">
//         <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">Payment Successful</h1>
//         <SuccessAnimation />
//         <p className="mt-6 text-center text-gray-600">Your payment has been processed successfully.</p>
//       </div>
//     </main>
//   )
// }


import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SuccessAnimation } from "./SuccessAnimation.tsx";

export default function PaymentSuccess() {
  const navigate = useNavigate();

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    const ngoName = localStorage.getItem("ngoName");
    const amount = localStorage.getItem("amount");

    const updateDonation = async () => {
      try {
        await fetch("http://localhost:8080/api/update-donation", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId,
            ngoName,
            amount,
          }),
        });
      } catch (error) {
        console.log(error);
      }
    };

    if (userId && ngoName && amount) {
      updateDonation();
    }

    const timer = setTimeout(() => {
      navigate("/home");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Payment Successful
        </h1>

        <SuccessAnimation />

        <p className="mt-6 text-center text-gray-600">
          Your payment has been processed successfully.
        </p>

        <p className="mt-2 text-center text-sm text-gray-500">
          Redirecting to Home in 3 seconds...
        </p>
      </div>
    </main>
  );
}