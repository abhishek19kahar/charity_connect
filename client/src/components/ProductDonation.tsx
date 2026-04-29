import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

      const ProductDonation: React.FC = () => {
        const [formData, setFormData] = useState({
          pickupDate: "",
          pickupTime: "",
          address: "",
        });
      
        const [responseMessage, setResponseMessage] = useState<string | null>(null);
        const navigate = useNavigate();
        const handleChange = (
          e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
        ) => {
          const { name, value } = e.target;
          setFormData((prevData) => ({
            ...prevData,
            [name]: value,
          }));
        };

        const handleSubmit = async (e: React.FormEvent) => {
          e.preventDefault();
          try {
            const token = localStorage.getItem('token');
            const response = await fetch('http://localhost:8080/api/pickup', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,

              },
              body: JSON.stringify({
                pickupDate: formData.pickupDate,
                pickupTime: formData.pickupTime,
                pickupAddress: formData.address,
              }),
            });

            const data = await response.json();

            if (response.ok) {

              setResponseMessage("Product donation submitted successfully!");
              setFormData({ pickupDate: "", pickupTime: "", address: "" });
              // Reset form
            } else {
              setResponseMessage(`Failed to submit: ${data.message}`);
            }
          } catch (error) {
            setResponseMessage("An error occurred. Please try again.");
          }
          setTimeout(() => {
            navigate("/home");
          }, 1000);
        };

        return (
          <div className="flex justify-center">
            <div className="bg-white p-6 rounded-lg shadow-md w-1/2">
              <h2 className="text-2xl font-bold mb-4">Product Donation</h2>
              {responseMessage && (
                <p
                  className={`mb-4 ${responseMessage.includes("success")
                      ? "text-green-500"
                      : "text-red-500"
                    }`}
                >
                  {responseMessage}
                </p>
              )}
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label
                    htmlFor="pickupDate"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Pickup Date
                  </label>
                  <input
                    type="date"
                    id="pickupDate"
                    name="pickupDate"
                    value={formData.pickupDate}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-md"
                    required
                    // Dynamically setting the minimum and maximum date
                    min={new Date().toISOString().split("T")[0]} // Today's date
                    max={(() => {
                      const nextMonthDate = new Date();
                      nextMonthDate.setMonth(nextMonthDate.getMonth() + 1);
                      return nextMonthDate.toISOString().split("T")[0];
                    })()} // Date one month from now
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="pickupTime"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Pickup Time
                  </label>
                  <select
                    id="pickupTime"
                    name="pickupTime"
                    value={formData.pickupTime}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-md"
                    required
                  >
                    <option value="">Select a time</option>
                    <option value="9-12">9:00 AM - 12:00 PM</option>
                    <option value="12-4">12:00 PM - 4:00 PM</option>
                    <option value="4-8">4:00 PM - 8:00 PM</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="address"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Pickup Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-md"
                    required
                  />
                </div>
                <div className="mb-4 text-sm text-gray-600">
                  Nominal pickup charge: ₹50
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                >
                  Submit Product Donation
                </button>
              </form>
            </div>
          </div>
        );
      };
    
export default ProductDonation;