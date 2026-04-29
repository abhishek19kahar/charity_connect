import React, { useEffect, useState } from 'react';

interface Pickup {
  _id: string;
  pickupDate: string;
  pickupTime: string;
  pickupAddress: string;
  createdAt: string;
}

const UserDashboard: React.FC = () => {
  const [pickups, setPickups] = useState<Pickup[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPickups = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/pickups');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setPickups(data);
        setLoading(false);
      } catch (error: any) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchPickups();
  }, []);

  if (loading) {
    return <p>Loading data...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">User Dashboard</h2>
      <table className="w-full border-collapse border border-gray-200">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Date</th>
            <th className="border border-gray-300 px-4 py-2">Time</th>
            <th className="border border-gray-300 px-4 py-2">Address</th>
            <th className="border border-gray-300 px-4 py-2">Created At</th>
          </tr>
        </thead>
        <tbody>
          {pickups.map((pickup) => (
            <tr key={pickup._id}>
              <td className="border border-gray-300 px-4 py-2">{new Date(pickup.pickupDate).toLocaleDateString()}</td>
              <td className="border border-gray-300 px-4 py-2">{pickup.pickupTime}</td>
              <td className="border border-gray-300 px-4 py-2">{pickup.pickupAddress}</td>
              <td className="border border-gray-300 px-4 py-2">{new Date(pickup.createdAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserDashboard;
