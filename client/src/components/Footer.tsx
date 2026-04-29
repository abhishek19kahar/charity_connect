import React from 'react'
import { Button } from "./ui/button.tsx";
import { Input } from "./ui/input.tsx";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  User,
} from "lucide-react";


const Footer: React.FC = () => {
  return (
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
  )
}

export default Footer

