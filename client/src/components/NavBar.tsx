import React from "react";
import { useLocation } from "react-router-dom";
import ngoLogo from "./ngoLogo.png";
import { DynamicFavicon } from "./DynamicFavicon.tsx";

export default function NavBar() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  return (
    <div>
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
            <a
              href="/home"
              className={`font-bold text-xl hover:text-orange-500 ${
                isActive("/home") ? "text-orange-500" : "text-gray-600"
              }`}
            >
              Home
            </a>
            <a
              href="/about"
              className={`font-bold text-xl hover:text-orange-500 ${
                isActive("/about") ? "text-orange-500" : "text-gray-600"
              }`}
            >
              About
            </a>
            <a
              href="/contact"
              className={`font-bold text-xl hover:text-orange-500 ${
                isActive("/contact") ? "text-orange-500" : "text-gray-600"
              }`}
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
