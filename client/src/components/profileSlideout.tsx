// "use client"
// import React, { useEffect, useState } from 'react'
// import { X, LogOut, ChevronRight, Settings } from 'lucide-react'
// import { Button } from "./ui/button.tsx"
// import { Card } from "./ui/card.tsx"
// import { ToastContainer } from 'react-toastify'

// // Helper function to get initials from name
// function getInitials(name: string) {
//   return name
//     ?.split(' ')
//     .map(word => word[0])
//     .join('')
//     .toUpperCase() || '?'
// }

// // Helper function to generate a random pastel color
// function generatePastelColor(seed: string) {
//   let hash = 0
//   for (let i = 0; i < seed.length; i++) {
//     hash = seed.charCodeAt(i) + ((hash << 5) - hash)
//   }
//   const hue = hash % 360
//   return `hsl(${hue}, 70%, 70%)`
// }

// export default function ProfileSlideout({
//   showProfile,
//   setShowProfile,
//   loggedInUser,
//   loggedEmail,
//   loading,
//   error,
//   pickups,
//   handleLogout
// }: any) {
//   const initials = getInitials(loggedInUser)
//   const [donations, setDonations] = useState([]);
//   const avatarColor = generatePastelColor(loggedInUser)
// useEffect(() => {
//   const userId = localStorage.getItem("userId");

//   if (!userId) return;

//   fetch(`http://localhost:8080/api/my-ngos/${userId}`)
//     .then(res => res.json())
//     .then(data => {
//       setDonations(data.data || []);
//     })
//     .catch(err => console.log(err));

// }, []);
//   return (
//     <div
//       className={`fixed inset-y-0 right-0 w-80 bg-black shadow-2xl transform ${showProfile ? "translate-x-0" : "translate-x-full"
//         } transition-transform duration-300 ease-in-out z-50`}
//     >
//       <div className="h-full flex flex-col p-6 text-white">
//         <div className="flex-none">
//           <div className="flex justify-between items-center mb-8">
//             <h2 className="text-2xl font-semibold">Profile</h2>
//             <Button
//               variant="ghost"
//               size="icon"
//               className="text-white hover:bg-white/10 rounded-full"
//               onClick={() => setShowProfile(false)}
//             >
//               <X className="h-5 w-5" />
//             </Button>
//           </div>

//           <div className="flex flex-col items-center mb-8">
//             <div
//               className="w-24 h-24 rounded-full flex items-center justify-center text-3xl font-semibold mb-4 transition-transform hover:scale-105"
//               style={{ backgroundColor: avatarColor }}
//             >
//               {initials}
//             </div>
//             <div className="relative mb-1">
//               <span className="px-3 py-1 text-sm bg-zinc-800 rounded-full">Free</span>
//             </div>
//             <h1 className="text-xl font-semibold mt-2">{loggedInUser}</h1>
//             <p className="text-zinc-400 text-sm">{loggedEmail}</p>
//           </div>
//         </div>

//         <div className="flex-1 space-y-4 overflow-y-auto min-h-0 scrollbar-thin scrollbar-thumb-zinc-600 scrollbar-track-transparent">
//           <Card className="bg-zinc-900 border-zinc-800 hover:bg-zinc-800/50 transition-colors cursor-pointer p-4 rounded-xl">
//             <div className="flex items-center justify-between">
//               <div className="flex items-center gap-3">
//                 <div className="p-2 bg-zinc-800 rounded-lg">
//                   <Settings className="h-5 w-5" />
//                 </div>
//                 <span>Settings</span>
//               </div>
//               <ChevronRight className="h-5 w-5 text-zinc-600" />
//             </div>
//           </Card>

//           {loading ? (
            
//             <p className="text-center text-zinc-400">Loading pickup data...</p>
//           ) : error ? (
//             <p className="text-red-500">{error}</p>
//           ) : pickups.length > 0 ? (
//             <Card className="bg-zinc-900 border-zinc-800 p-4 rounded-xl">
//               <h3 className="text-lg font-semibold mb-4">Recent Pickups</h3>
//               <div className="space-y-3">
//                 {pickups.map((pickup: any) => (
//                   <div key={pickup._id} className="border-b border-zinc-800 pb-3">
//                     <p className="text-sm text-zinc-400">
//                       {new Date(pickup.pickupDate).toLocaleDateString()}
//                       {' • '}
//                       {pickup.pickupTime}
//                     </p>
//                     <p className="text-sm mt-1">{pickup.pickupAddress}</p>
//                   </div>
//                 ))}
//               </div>
//             </Card>
//           ) : (
//             <p className="text-center text-zinc-400">No pickup data available.</p>
//           )}
//         </div>

//         <div className="flex-none mt-6">
//           <Button
//             className="w-full bg-zinc-900 hover:bg-zinc-800 text-white border border-zinc-800"
//             onClick={handleLogout}
//           >
//             <LogOut className="mr-2 h-4 w-4" /> Sign Out
//           </Button>
//         </div>
//         <ToastContainer />
//       </div>
//     </div>
//   )
// }



"use client";

import React, { useEffect, useState } from "react";
import { X, LogOut, ChevronRight, Settings } from "lucide-react";
import { Button } from "./ui/button.tsx";
import { Card } from "./ui/card.tsx";
import { ToastContainer } from "react-toastify";

// Helper function to get initials from name
function getInitials(name: string) {
  return (
    name
      ?.split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase() || "?"
  );
}

// Helper function to generate pastel color
function generatePastelColor(seed: string) {
  let hash = 0;

  for (let i = 0; i < (seed || "").length; i++) {
    hash = seed.charCodeAt(i) + ((hash << 5) - hash);
  }

  const hue = hash % 360;
  return `hsl(${hue}, 70%, 70%)`;
}

export default function ProfileSlideout({
  showProfile,
  setShowProfile,
  loggedInUser,
  loggedEmail,
  loading,
  error,
  pickups,
  handleLogout,
}: any) {
  const [donations, setDonations] = useState([]);

  const initials = getInitials(loggedInUser || "User");
  const avatarColor = generatePastelColor(loggedInUser || "User");

  useEffect(() => {
    const userId = localStorage.getItem("userId");

    if (!userId) return;

    fetch(`http://localhost:8080/api/my-ngos/${userId}`)
      .then((res) => res.json())
      .then((data) => {
  console.log("DONATION API:", data);
  setDonations(data.data || []);
})
      .catch((err) => console.log(err));
  }, []);

  return (
    <div
      className={`fixed inset-y-0 right-0 w-80 bg-black shadow-2xl transform ${
        showProfile ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out z-50`}
    >
      <div className="h-full flex flex-col p-6 text-white">
        {/* TOP */}
        <div className="flex-none">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-semibold">Profile</h2>

            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/10 rounded-full"
              onClick={() => setShowProfile(false)}
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* USER INFO */}
          <div className="flex flex-col items-center mb-8">
            <div
              className="w-24 h-24 rounded-full flex items-center justify-center text-3xl font-semibold mb-4 transition-transform hover:scale-105"
              style={{ backgroundColor: avatarColor }}
            >
              {initials}
            </div>

            

            <h1 className="text-xl font-semibold mt-2">
              {loggedInUser || "User"}
            </h1>

            <p className="text-zinc-400 text-sm">
              {loggedEmail || "user@gmail.com"}
            </p>
          </div>
        </div>

        {/* CONTENT */}
        <div className="flex-1 space-y-4 overflow-y-auto min-h-0 scrollbar-thin scrollbar-thumb-zinc-600 scrollbar-track-transparent">
          {/* SETTINGS */}
          <Card className="bg-zinc-900 border-zinc-800 hover:bg-zinc-800/50 transition-colors cursor-pointer p-4 rounded-xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-zinc-800 rounded-lg">
                  <Settings className="h-5 w-5" />
                </div>

                <span>Settings</span>
              </div>

              <ChevronRight className="h-5 w-5 text-zinc-600" />
            </div>
          </Card>

          {/* DONATION HISTORY */}
          {donations.length > 0 && (
            <Card className="bg-zinc-900 border-zinc-800 p-4 rounded-xl">
              <h3 className="text-lg font-semibold mb-4">My Donations</h3>

              <div className="space-y-3">
                {donations.map((item: any, index) => (
                  <div
                    key={index}
                    className="border-b border-zinc-800 pb-3"
                  >
                    <p className="font-medium">{item.ngoName}</p>

                    <p className="text-sm text-zinc-400">
                      {item.category} • {item.area}
                    </p>

                    <p className="text-sm text-green-400">
                      ₹{item.amount}
                    </p>

                    <p className="text-xs text-zinc-500">
                      {new Date(item.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          )}

          {/* PICKUP SECTION */}
          {loading ? (
            <p className="text-center text-zinc-400">
              Loading pickup data...
            </p>
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : pickups?.length > 0 ? (
            <Card className="bg-zinc-900 border-zinc-800 p-4 rounded-xl">
              <h3 className="text-lg font-semibold mb-4">
                Recent Pickups
              </h3>

              <div className="space-y-3">
                {pickups.map((pickup: any) => (
                  <div
                    key={pickup._id}
                    className="border-b border-zinc-800 pb-3"
                  >
                    <p className="text-sm text-zinc-400">
                      {new Date(
                        pickup.pickupDate
                      ).toLocaleDateString()}
                      {" • "}
                      {pickup.pickupTime}
                    </p>

                    <p className="text-sm mt-1">
                      {pickup.pickupAddress}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          ) : (
            <p className="text-center text-zinc-400">
              No pickup data available.
            </p>
          )}
        </div>

        {/* LOGOUT */}
        <div className="flex-none mt-6">
          <Button
            className="w-full bg-zinc-900 hover:bg-zinc-800 text-white border border-zinc-800"
            onClick={handleLogout}
          >
            <LogOut className="mr-2 h-4 w-4" />
            Sign Out
          </Button>
        </div>

        <ToastContainer />
      </div>
    </div>
  );
}