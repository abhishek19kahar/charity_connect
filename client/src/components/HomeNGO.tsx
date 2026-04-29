// import React, { useState, useEffect } from "react";
// import { Button } from "./ui/button.tsx";
// import { Card, CardContent } from "./ui/card.tsx";
// import { Input } from "./ui/input.tsx";
// import { handleSuccess } from "./utils";
// import ngoLogo from "./ngoLogo.png";
// import ProfileSlideout from "./profileSlideout.tsx";
// import ScrollableFundraisingContainer from "./ScrollableFundraisingContainer.tsx";

// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogDescription,
//   DialogTrigger,
// } from "./ui/dialog.tsx";
// import {
//   Utensils,
//   PawPrintIcon as Paw,
//   BookOpen,
//   Users,
//   Baby,
//   UserIcon as Female,
//   Pill,
//   Tent,
//   HandHeart,
//   ArrowUp,
//   Facebook,
//   Twitter,
//   Instagram,
//   Linkedin,
//   User,
//   LogOut,
//   X,
// } from "lucide-react";
// import { useNavigate, useLocation } from "react-router-dom";
// import { DynamicFavicon } from "./DynamicFavicon.tsx";
// import ImageCarousel from "./ImageCarousel.tsx";

// interface Pickup {
//   _id: string;
//   pickupDate: string;
//   pickupTime: string;
//   pickupAddress: string;
//   createdAt: string;
// }

// const donationOptions = [
//   {
//     name: "Food",
//     icon: Utensils,
//     color: "from-amber-100 to-amber-200 text-amber-600",
//     background: "https://serudsindia.org/wp-content/uploads/2020/11/Donate-Money-For-Food-In-India-To-Special-Charity-Programs.png",
//     progress: 75,
//   },
//   {
//     name: "Animals",
//     icon: Paw,
//     color: "from-emerald-100 to-emerald-200 text-emerald-600",
//     background: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ3l29J3Ryi-hpgqsG5ZkkHhjElv-ustOEpw&s",
//     progress: 60,
//   },
//   {
//     name: "Education",
//     icon: BookOpen,
//     color: "from-blue-100 to-blue-200 text-blue-600",
//     background: "https://savioursfoundation.org/wp-content/uploads/2021/04/banner.jpg",
//     progress: 80,
//   },
//   {
//     name: "Elderly",
//     icon: Users,
//     color: "from-indigo-100 to-indigo-200 text-indigo-600",
//     background: "https://cdn.images.express.co.uk/img/dynamic/1/590x/elderly-1013634.jpg?r=1536191441819",
//     progress: 45,
//   },
//   {
//     name: "Children",
//     icon: Baby,
//     color: "from-pink-100 to-pink-200 text-pink-600",
//     background: "https://connect-assets.prosple.com/cdn/ff/wJsI5yR3eBGFwBb4VxCx6L6h8Q4_Cor4CrsdgWmc1Co/1567568623/public/styles/scale_890_no_upsize/public/2019-09/feature-article-Is-charity-work-right-for-me-838x484_2017.jpg?itok=M7QiD1Id",
//     progress: 90,
//   },
//   {
//     name: "Women",
//     icon: Female,
//     color: "from-purple-100 to-purple-200 text-purple-600",
//     background: "https://images.squarespace-cdn.com/content/v1/55436531e4b0d578c589552a/1501551404503-0KOHSH7VHI7406SJK83O/Ladli+Charity+in+Jaipur%2C+India",
//     progress: 70,
//   },
//   {
//     name: "Medicines",
//     icon: Pill,
//     color: "from-red-100 to-red-200 text-red-600",
//     background: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRULALEaJr3tSxPyGEpeRbe_MSctvi2UfSkgA&s",
//     progress: 55,
//   },
//   {
//     name: "Tribes",
//     icon: Tent,
//     color: "from-teal-100 to-teal-200 text-teal-600",
//     background: "https://www.osiligi.org/wp2/wp-content/uploads/2014/03/Warriors-1000x576.jpg",
//     progress: 40,
//   },
// ];

// const backgroundImages = [
//   "https://www.genyuvaa.com/images/t_slider_1.jpg",
//   "https://helplocal.in/uploads/ngo/240435322_4776508312361277_7003867829429765616_n.jpg",
//   "https://jananidham.org/images/uploads/slider/homepage/banner2.jpg",
//   "https://images.squarespace-cdn.com/content/v1/5dc2f01d4543244bccdd8d6b/1580728380411-3L9XLBSLKJI4YNUZ9DC1/CWD-%E2%80%93-Volunteer-Header.png",
//   "https://hrdsindia.org/img/sub-banner-donate-one-brick.jpg",
// ];

// const getNGOs = (category: string) => {
//   const ngos = [
//     `${category} Aid International`,
//     `Global ${category} Foundation`,
//     `${category} Relief Organization`,
//     `${category} Support Network`,
//     `${category} Care Alliance`,
//   ];
//   return ngos.sort(() => 0.5 - Math.random()).slice(0, 5);
// };

// const HomePage: React.FC = () => {
//   const [showBackToTop, setShowBackToTop] = useState(false);
//   const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
//   const [ngoList, setNgoList] = useState<string[]>([]);
//   // const [pickups, setPickups] = useState<Pickup[]>([]);
//   const [donation, setDonation] = useState("");
//   const [pickupData, setPickupData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [showProfile, setShowProfile] = useState(false);
//   const [loggedInUser, setLoggedInUser] = useState("John Doe")
//   const [loggedEmail, setLoggedEmail] = useState("john.doe@example.com")
//   const [volunteerStatus, setVolunteerStatus] = useState<string | null>(null);

//   const navigate = useNavigate();

//   useEffect(() => {
//     const handleScroll = () => {
//       setShowBackToTop(window.scrollY > 300);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);
//   const fetchVolunteerStatus = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       const response = await fetch("http://localhost:8080/api/volunteer_status", {
//         method: "GET",
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       const data = await response.json();
//       if (response.ok) {
//         setVolunteerStatus(data.status);
//         console.log(data);
//       } else {
//         console.error(`Failed to fetch volunteer status: ${data.message}`);
//       }
//     } catch (error) {
//       console.error("Error fetching volunteer status:", error);
//     }finally{
//       setLoading(false);
//     }
//   };
//   const fetchUserPickups = async () => {
//     try {
//       const token = localStorage.getItem('token');
//       const response = await fetch('http://localhost:8080/api/pickups', {
//         method: 'GET',
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       const data = await response.json();

//       if (response.ok) {
//         setPickupData(data);
//         console.log(data);
//       } else {
//         console.error(`Failed to fetch pickups: ${data.message}`);
//       }
//     } catch (error) {
//       console.error('Error fetching pickups:', error);
//     }finally{
//       setLoading(false);
//     }
  
//   };
 

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (!token) {
//       navigate('/login');
//     } else {
//       fetchVolunteerStatus();
//       fetchUserPickups();
//     }
//   }, [navigate]);

//   useEffect(() => {
//     setLoggedInUser(localStorage.getItem('loggedInUser'));
//     setLoggedEmail(localStorage.getItem('loggedEmail'));

//   }, []);

//   // const scrollToTop = () => {
//   //   window.scrollTo({ top: 0, behavior: "smooth" });
//   // };

//   const handleDonateClick = (category: string) => {
//     setDonation(category);
//     setSelectedCategory(category);
//     setNgoList(getNGOs(category));
//   };
//   const handleLogout = (e) => {
//     localStorage.removeItem('token');
//     localStorage.removeItem('loggedInUser');
//     handleSuccess('User Loggedout');
//     setTimeout(() => {
//       navigate('/');
//     }, 1000);
//   };

//   const smoothScrollTo = (targetId) => {
//     const targetElement = document.getElementById(targetId);
//     if (!targetElement) return;

//     const targetPosition =
//       targetElement.getBoundingClientRect().top + window.scrollY;
//     const startPosition = window.scrollY;
//     const distance = targetPosition - startPosition;
//     const duration = 1000; // Duration of scroll in milliseconds
//     let startTime = null;

//     function animation(currentTime) {
//       if (startTime === null) startTime = currentTime;
//       const timeElapsed = currentTime - startTime;
//       const run = easeOutCubic(timeElapsed, startPosition, distance, duration);
//       window.scrollTo(0, run);

//       if (timeElapsed < duration) {
//         requestAnimationFrame(animation);
//       }
//     }

//     // Ease-out cubic function for smooth scrolling
//     function easeOutCubic(t, b, c, d) {
//       t /= d;
//       t--;
//       return c * (t * t * t + 1) + b;
//     }

//     requestAnimationFrame(animation);
//   };
//   const location = useLocation();
//   const isActive = (path) => location.pathname === path;

//   return (
//     <div className="min-h-screen bg-gray-50 font-sans">
//       <DynamicFavicon />
//       <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
//         <div className="container mx-auto px-4 py-3 flex justify-between items-center">
//           <div className="flex items-center">
//             <img
//               src={ngoLogo}
//               alt="NPO Logo"
//               className="h-10 w-10 mr-3 rounded-full"
//             />
//             <span className="text-xl font-bold text-gray-800">
//               Charity Connect
//             </span>
//           </div>
//           <div className="hidden md:flex space-x-8">
//             <a href="/home" className={`text-gray-600 hover:text-orange-500 font-bold text-xl ${
//               isActive("/home") ? "text-orange-500" : "text-gray-600"
//             }` }           >
//               Home
//             </a>
//             <a href="about" className="text-gray-600 hover:text-orange-500 font-bold text-xl">
//               About
//             </a>
//             <a href="contact" className="text-gray-600 hover:text-orange-500 font-bold text-xl">
//               Contact
//             </a>
//           </div>
//           <div className="flex items-center space-x-4">
//             <Button
//               className="bg-orange-500 hover:bg-orange-600 text-white"
//               onClick={() => smoothScrollTo("card-become-a-volunteer")}
//             >
//               Become a Volunteer
//             </Button>
//             <Button
//               variant="ghost"
//               size="icon"
//               onClick={() => setShowProfile(true)}
//             >
//               <User className="h-5 w-5" />
//               <span className="sr-only">Toggle profile</span>
//             </Button>
//           </div>
//         </div>
//       </nav>

//       <ProfileSlideout
//         showProfile={showProfile}
//         setShowProfile={setShowProfile}
//         loggedInUser={loggedInUser}
//         loggedEmail={loggedEmail}
//         loading={loading}
//         error={error}
//         volunteer ={volunteerStatus}
//         setVolunteerStatus ={setVolunteerStatus}
//         pickups={pickupData}
//         setPickupData={setPickupData}
//         handleLogout={handleLogout}
//       />

//       <header
//         id="header"
//         className="relative bg-gray-900 text-white py-24 mt-16 overflow-hidden"
//       >
//         <ImageCarousel images={backgroundImages} />
//         <div className="container mx-auto px-4 text-center relative z-10">
//           <h1 className="text-4xl md:text-5xl font-bold mb-4 text-shadow-lg">
//             Together, we can make a difference
//           </h1>
//           <p className="text-xl mb-8 text-shadow-md">One donation at a time.</p>
//           <Button
//             size="lg"
//             className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-3"
//             onClick={() => smoothScrollTo("choose-cause")}
//           >
//             Start Giving Today
//           </Button>
//         </div>
//       </header>

//       <main id="choose-cause" className="container mx-auto px-4 py-12 bg-white">
//         <h2 className="text-3xl font-bold text-center mb-12">
//           Choose a Cause to Support
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//           {donationOptions.map((option) => (
//             <Card
//               key={option.name}
//               id={`card-${option.name.toLowerCase().replace(/\s+/g, "-")}`}
//               className="overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
//             >
//               <CardContent
//                 className={`relative p-6 flex flex-col items-center text-center bg-gradient-to-br ${option.color}`}
//                 style={{
//                   backgroundImage: `
//             linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.7)),
//             url('${option.background}')
//           `,
//                   backgroundSize: "cover",
//                   backgroundPosition: "center",
//                   backgroundRepeat: "no-repeat",
//                 }}
//               >
//                 <div className="relative z-10">
//                   <option.icon className="h-12 w-12 mb-4" />
//                   <h3 className="text-xl font-semibold mb-2">{option.name}</h3>
//                   <p className="text-gray-200 mb-4">
//                     Support our {option.name.toLowerCase()} initiatives
//                   </p>
//                   <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
//                     <div
//                       className="bg-blue-600 h-2.5 rounded-full"
//                       style={{ width: `${option.progress}%` }}
//                     ></div>
//                   </div>
//                   <Button
//                     className="bg-orange-900 text-gray-200 hover:bg-black"
//                     onClick={() => handleDonateClick(option.name)}
//                   >
//                     Donate for {option.name}
//                   </Button>
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>


//         <Card
//           className="mt-12 overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
//           id="card-become-a-volunteer"
//         >
//           <CardContent className="p-6 flex flex-col items-center text-center bg-gradient-to-br from-yellow-400 to-orange-500 text-white">
//             <HandHeart className="h-12 w-12 mb-4" />
//             <h3 className="text-2xl font-semibold mb-2">Become a Volunteer</h3>
//             <p className="mb-4">
//               Join our team and make a difference in your community
//             </p>

//             <Button
//               className="bg-white text-orange-600 hover:bg-gray-100"
//               onClick={() => {
//                 navigate("/volunteer/apply");
//               }}
//             >
//               Sign Up to Volunteer
//             </Button>
//           </CardContent>
//         </Card>
//         <ScrollableFundraisingContainer />
//       </main>

//       <footer className="bg-black text-white py-12 mt-12">
//         <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
//           <div>
//             <h4 className="text-2xl font-bold mb-4">Charity Connect</h4>
//             <p>
//               Making the world a better place through compassion and dedication.
//             </p>
//           </div>
//           <div>
//             <h5 className="text-xl font-semibold mb-4">Quick Links</h5>
//             <ul className="space-y-2">
//               <li>
//                 <a href="#" className="hover:text-blue-400">
//                   About Us
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-blue-400">
//                   Our Causes
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-blue-400">
//                   Get Involved
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-blue-400">
//                   Contact
//                 </a>
//               </li>
//             </ul>
//           </div>
//           <div>
//             <h5 className="text-xl font-semibold mb-4">Connect With Us</h5>
//             <div className="flex space-x-4">
//               <a href="#" className="text-white hover:text-blue-400">
//                 <Facebook />
//               </a>
//               <a href="#" className="text-white hover:text-blue-400">
//                 <Twitter />
//               </a>
//               <a href="#" className="text-white hover:text-blue-400">
//                 <Instagram />
//               </a>
//               <a href="#" className="text-white hover:text-blue-400">
//                 <Linkedin />
//               </a>
//             </div>
//           </div>
//           <div>
//             <h5 className="text-xl font-semibold mb-4">Newsletter</h5>
//             <p className="mb-4">
//               Stay updated with our latest news and events.
//             </p>
//             <form className="flex">
//               <Input
//                 type="email"
//                 placeholder="Your email"
//                 className="rounded-r-none"
//               />
//               <Button
//                 type="submit"
//                 className="bg-blue-500 hover:bg-blue-600 rounded-l-none"
//               >
//                 Subscribe
//               </Button>
//             </form>
//           </div>
//         </div>
//         <div className="container mx-auto px-4 mt-8 pt-8 border-t border-gray-700 text-center flex-col">
//           <p>&copy; 2024 Charity Connect. All rights reserved.</p>
//           <p className="text-sm mt-4 pt-4">
//             Made with <span className="text-red-500">&hearts;</span> in India
//           </p>
//         </div>
//       </footer>

//       {showBackToTop && (
//         <button
//           onClick={() => smoothScrollTo("header")} // Scroll to the top header element
//           className="fixed bottom-8 right-8 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition-all duration-300"
//           aria-label="Back to top"
//         >
//           <ArrowUp />
//         </button>
//       )}

//       <Dialog
//         open={!!selectedCategory}
//         onOpenChange={() => setSelectedCategory(null)}
//       >
//         <DialogContent className="sm:max-w-[425px] bg-white">
//           <DialogHeader>
//             <DialogTitle>Choose an NGO for {selectedCategory}</DialogTitle>
//             <DialogDescription>
//               Select one of the following NGOs to donate for{" "}
//               {selectedCategory?.toLowerCase()}:
//             </DialogDescription>
//           </DialogHeader>
//           <div className="grid gap-4 py-4">
//             {ngoList.map((ngo, index) => (
//               <Button
//                 key={index}
//                 variant="outline"
//                 onClick={() => {
//                   const formattedNgo = ngo.replace(/\s+/g, "-").toLowerCase();
//                   navigate(
//                     `/${selectedCategory?.toLowerCase()}/${formattedNgo}`
//                   );
//                 }}
//               >
//                 {ngo}
//               </Button>
//             ))}
//             { ['food', 'elderly', 'animals', 'children'].includes(donation.toLocaleLowerCase()) &&
//               <Button 
//                 variant="outline"
//                 onClick={() => {
//                   navigate(
//                     `/${donation?.toLowerCase()}/khushiyan-org`
//                   );
//                 }}
//               >
//                 Khushiyan Organisation
//               </Button>
//             }
//           </div>
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// };

// export default HomePage;
















import React, { useState, useEffect } from "react";
import { Button } from "./ui/button.tsx";
import { Card, CardContent } from "./ui/card.tsx";
import { Input } from "./ui/input.tsx";
import { handleSuccess } from "./utils";
import ngoLogo from "./ngoLogo.png";
import ProfileSlideout from "./profileSlideout.tsx";
import ScrollableFundraisingContainer from "./ScrollableFundraisingContainer.tsx";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "./ui/dialog.tsx";
import {
  Utensils,
  PawPrintIcon as Paw,
  BookOpen,
  Users,
  Baby,
  UserIcon as Female,
  Pill,
  Tent,
  HandHeart,
  ArrowUp,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  User,
  LogOut,
  X,
} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { DynamicFavicon } from "./DynamicFavicon.tsx";
import ImageCarousel from "./ImageCarousel.tsx";

interface Pickup {
  _id: string;
  pickupDate: string;
  pickupTime: string;
  pickupAddress: string;
  createdAt: string;
}

const donationOptions = [
  {
    name: "Food",
    icon: Utensils,
    color: "from-amber-100 to-amber-200 text-amber-600",
    background: "https://serudsindia.org/wp-content/uploads/2020/11/Donate-Money-For-Food-In-India-To-Special-Charity-Programs.png",
    progress: 75,
  },
  {
    name: "Animals",
    icon: Paw,
    color: "from-emerald-100 to-emerald-200 text-emerald-600",
    background: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ3l29J3Ryi-hpgqsG5ZkkHhjElv-ustOEpw&s",
    progress: 60,
  },
  {
    name: "Education",
    icon: BookOpen,
    color: "from-blue-100 to-blue-200 text-blue-600",
    background: "https://savioursfoundation.org/wp-content/uploads/2021/04/banner.jpg",
    progress: 80,
  },
  {
    name: "Elderly",
    icon: Users,
    color: "from-indigo-100 to-indigo-200 text-indigo-600",
    background: "https://cdn.images.express.co.uk/img/dynamic/1/590x/elderly-1013634.jpg?r=1536191441819",
    progress: 45,
  },
  {
    name: "Children",
    icon: Baby,
    color: "from-pink-100 to-pink-200 text-pink-600",
    background: "https://connect-assets.prosple.com/cdn/ff/wJsI5yR3eBGFwBb4VxCx6L6h8Q4_Cor4CrsdgWmc1Co/1567568623/public/styles/scale_890_no_upsize/public/2019-09/feature-article-Is-charity-work-right-for-me-838x484_2017.jpg?itok=M7QiD1Id",
    progress: 90,
  },
  {
    name: "Women",
    icon: Female,
    color: "from-purple-100 to-purple-200 text-purple-600",
    background: "https://images.squarespace-cdn.com/content/v1/55436531e4b0d578c589552a/1501551404503-0KOHSH7VHI7406SJK83O/Ladli+Charity+in+Jaipur%2C+India",
    progress: 70,
  },
  {
    name: "Medicines",
    icon: Pill,
    color: "from-red-100 to-red-200 text-red-600",
    background: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRULALEaJr3tSxPyGEpeRbe_MSctvi2UfSkgA&s",
    progress: 55,
  },
  {
    name: "Tribes",
    icon: Tent,
    color: "from-teal-100 to-teal-200 text-teal-600",
    background: "https://www.osiligi.org/wp2/wp-content/uploads/2014/03/Warriors-1000x576.jpg",
    progress: 40,
  },
];

const backgroundImages = [
  "https://www.genyuvaa.com/images/t_slider_1.jpg",
  "https://helplocal.in/uploads/ngo/240435322_4776508312361277_7003867829429765616_n.jpg",
  "https://jananidham.org/images/uploads/slider/homepage/banner2.jpg",
  "https://images.squarespace-cdn.com/content/v1/5dc2f01d4543244bccdd8d6b/1580728380411-3L9XLBSLKJI4YNUZ9DC1/CWD-%E2%80%93-Volunteer-Header.png",
  "https://hrdsindia.org/img/sub-banner-donate-one-brick.jpg",
];

const getNGOs = (category: string) => {
  const ngos = [
    `${category} Aid International`,
    `Global ${category} Foundation`,
    `${category} Relief Organization`,
    `${category} Support Network`,
    `${category} Care Alliance`,
  ];
  return ngos.sort(() => 0.5 - Math.random()).slice(0, 5);
};

const HomePage: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [ngoList, setNgoList] = useState<string[]>([]);
  // const [pickups, setPickups] = useState<Pickup[]>([]);
  const [donation, setDonation] = useState("");
  const [pickupData, setPickupData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showProfile, setShowProfile] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState("John Doe")
  const [loggedEmail, setLoggedEmail] = useState("john.doe@example.com")
  const [volunteerStatus, setVolunteerStatus] = useState<string | null>(null);
  const [selectedCity, setSelectedCity] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const fetchVolunteerStatus = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch("http://localhost:8080/api/volunteer_status", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();
      if (response.ok) {
        setVolunteerStatus(data.status);
        console.log(data);
      } else {
        console.error(`Failed to fetch volunteer status: ${data.message}`);
      }
    } catch (error) {
      console.error("Error fetching volunteer status:", error);
    }finally{
      setLoading(false);
    }
  };
  const fetchUserPickups = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:8080/api/pickups', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (response.ok) {
        setPickupData(data);
        console.log(data);
      } else {
        console.error(`Failed to fetch pickups: ${data.message}`);
      }
    } catch (error) {
      console.error('Error fetching pickups:', error);
    }finally{
      setLoading(false);
    }
  
  };
 

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    } else {
      fetchVolunteerStatus();
      fetchUserPickups();
    }
  }, [navigate]);

  useEffect(() => {
    setLoggedInUser(localStorage.getItem('loggedInUser'));
    setLoggedEmail(localStorage.getItem('loggedEmail'));

  }, []);

  // const scrollToTop = () => {
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // };

  // const handleDonateClick = (category: string) => {
  //   setDonation(category);
  //   setSelectedCategory(category);
  //   setNgoList(getNGOs(category));
  // };
  const handleDonateClick = (category: string) => {
  setDonation(category);
  setSelectedCategory(category);
  setSelectedCity("");
  setNgoList([]);
};
const fetchNgoByCity = async (city: string) => {
  try {
    setSelectedCity(city);

    const response = await fetch(
      `http://localhost:8080/api/ngos?area=${city}&category=${selectedCategory?.toLowerCase()}`
    );

    const data = await response.json();

    if (response.ok) {
      setNgoList(data.ngos);
    } else {
      setNgoList([]);
    }
  } catch (error) {
    console.log(error);
    setNgoList([]);
  }
};
  const handleLogout = (e) => {
    localStorage.removeItem('token');
    localStorage.removeItem('loggedInUser');
    handleSuccess('User Loggedout');
    setTimeout(() => {
      navigate('/');
    }, 1000);
  };

  const smoothScrollTo = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (!targetElement) return;

    const targetPosition =
      targetElement.getBoundingClientRect().top + window.scrollY;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    const duration = 1000; // Duration of scroll in milliseconds
    let startTime = null;

    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = easeOutCubic(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    }

    // Ease-out cubic function for smooth scrolling
    function easeOutCubic(t, b, c, d) {
      t /= d;
      t--;
      return c * (t * t * t + 1) + b;
    }

    requestAnimationFrame(animation);
  };
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <DynamicFavicon />
      <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center">
            <img
              src={ngoLogo}
              alt="NPO Logo"
              className="h-10 w-10 mr-3 rounded-full"
            />
            <span className="text-xl font-bold text-gray-800">
              Charity Connect
            </span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="/home" className={`text-gray-600 hover:text-orange-500 font-bold text-xl ${
              isActive("/home") ? "text-orange-500" : "text-gray-600"
            }` }           >
              Home
            </a>
            <a href="about" className="text-gray-600 hover:text-orange-500 font-bold text-xl">
              About
            </a>
            <a href="contact" className="text-gray-600 hover:text-orange-500 font-bold text-xl">
              Contact
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <Button
              className="bg-orange-500 hover:bg-orange-600 text-white"
              onClick={() => smoothScrollTo("card-become-a-volunteer")}
            >
              Become a Volunteer
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setShowProfile(true)}
            >
              <User className="h-5 w-5" />
              <span className="sr-only">Toggle profile</span>
            </Button>
          </div>
        </div>
      </nav>

      <ProfileSlideout
        showProfile={showProfile}
        setShowProfile={setShowProfile}
        loggedInUser={loggedInUser}
        loggedEmail={loggedEmail}
        loading={loading}
        error={error}
        volunteer ={volunteerStatus}
        setVolunteerStatus ={setVolunteerStatus}
        pickups={pickupData}
        setPickupData={setPickupData}
        handleLogout={handleLogout}
      />

      <header
        id="header"
        className="relative bg-gray-900 text-white py-24 mt-16 overflow-hidden"
      >
        <ImageCarousel images={backgroundImages} />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-shadow-lg">
            Together, we can make a difference
          </h1>
          <p className="text-xl mb-8 text-shadow-md">One donation at a time.</p>
          <Button
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-3"
            onClick={() => smoothScrollTo("choose-cause")}
          >
            Start Giving Today
          </Button>
        </div>
      </header>

      <main id="choose-cause" className="container mx-auto px-4 py-12 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12">
          Choose a Cause to Support
        </h2>
    
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {donationOptions.map((option) => (
            <Card
              key={option.name}
              id={`card-${option.name.toLowerCase().replace(/\s+/g, "-")}`}
              className="overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              <CardContent
                className={`relative p-6 flex flex-col items-center text-center bg-gradient-to-br ${option.color}`}
                style={{
                  backgroundImage: `
            linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.7)),
            url('${option.background}')
          `,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="relative z-10">
                  <option.icon className="h-12 w-12 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{option.name}</h3>
                  <p className="text-gray-200 mb-4">
                    Support our {option.name.toLowerCase()} initiatives
                  </p>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                    <div
                      className="bg-blue-600 h-2.5 rounded-full"
                      style={{ width: `${option.progress}%` }}
                    ></div>
                  </div>
                  <Button
                    className="bg-orange-900 text-gray-200 hover:bg-black"
                    onClick={() => handleDonateClick(option.name)}
                  >
                    Donate for {option.name}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>


        <Card
          className="mt-12 overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          id="card-become-a-volunteer"
        >
          <CardContent className="p-6 flex flex-col items-center text-center bg-gradient-to-br from-yellow-400 to-orange-500 text-white">
            <HandHeart className="h-12 w-12 mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Become a Volunteer</h3>
            <p className="mb-4">
              Join our team and make a difference in your community
            </p>

            <Button
              className="bg-white text-orange-600 hover:bg-gray-100"
              onClick={() => {
                navigate("/volunteer/apply");
              }}
            >
              Sign Up to Volunteer
            </Button>
          </CardContent>
        </Card>
        <ScrollableFundraisingContainer />
      </main>

      <footer className="bg-black text-white py-12 mt-12">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-2xl font-bold mb-4">Charity Connect</h4>
            <p>
              Making the world a better place through compassion and dedication.
            </p>
          </div>
          <div>
            <h5 className="text-xl font-semibold mb-4">Quick Links</h5>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Our Causes
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Get Involved
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-xl font-semibold mb-4">Connect With Us</h5>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-blue-400">
                <Facebook />
              </a>
              <a href="#" className="text-white hover:text-blue-400">
                <Twitter />
              </a>
              <a href="#" className="text-white hover:text-blue-400">
                <Instagram />
              </a>
              <a href="#" className="text-white hover:text-blue-400">
                <Linkedin />
              </a>
            </div>
          </div>
          <div>
            <h5 className="text-xl font-semibold mb-4">Newsletter</h5>
            <p className="mb-4">
              Stay updated with our latest news and events.
            </p>
            <form className="flex">
              <Input
                type="email"
                placeholder="Your email"
                className="rounded-r-none"
              />
              <Button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 rounded-l-none"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-8 pt-8 border-t border-gray-700 text-center flex-col">
          <p>&copy; 2024 Charity Connect. All rights reserved.</p>
          <p className="text-sm mt-4 pt-4">
            Made with <span className="text-red-500">&hearts;</span> in India
          </p>
        </div>
      </footer>

      {showBackToTop && (
        <button
          onClick={() => smoothScrollTo("header")} // Scroll to the top header element
          className="fixed bottom-8 right-8 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition-all duration-300"
          aria-label="Back to top"
        >
          <ArrowUp />
        </button>
      )}

      <Dialog
        open={!!selectedCategory}
        onOpenChange={() => setSelectedCategory(null)}
      >
        <DialogContent className="sm:max-w-[425px] bg-white">
          <DialogHeader>
            <DialogTitle>Choose an NGO for {selectedCategory}</DialogTitle>
            <DialogDescription>
              Select one of the following NGOs to donate for{" "}
              {selectedCategory?.toLowerCase()}:
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">

  <select
    className="border px-4 py-2 rounded-md"
    value={selectedCity}
    onChange={(e) => fetchNgoByCity(e.target.value)}
  >
    <option value="">Select City</option>
    <option>Mulund West</option>
    <option>Mulund East</option>
    <option>Thane West</option>
    <option>Thane East</option>
    <option>Bhandup West</option>
    <option>Bhandup East</option>
    <option>Sion East</option>
    <option>Sion West</option>
    <option>Dadar West</option>
    <option>Dadar East</option>
    <option>CSMT Fort</option>
    <option>CSMT CST Area</option>
  </select>

  {ngoList.map((ngo, index) => (
    <Button
      key={index}
      variant="outline"
   onClick={async () => {
  try {
    const userId = localStorage.getItem("userId");

    await fetch("http://localhost:8080/api/select-ngo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        userId,
        ngoName: ngo.name,
        city: ngo.city,
        area: ngo.area,
        category: ngo.category,
        address: ngo.address
      })
    });

    localStorage.setItem("selectedNgo", ngo.name);

    const formattedNgo = ngo.name
      .replace(/\s+/g, "-")
      .toLowerCase();

    navigate(
      `/${selectedCategory?.toLowerCase()}/${formattedNgo}`,
      { state: ngo }
    );

  } catch (error) {
    console.log(error);
  }
}}
    >
      {ngo.name}
    </Button>
  ))}

</div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default HomePage;
