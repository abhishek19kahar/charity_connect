import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Button } from "./ui/button.tsx";
import { Card, CardContent } from "./ui/card.tsx";
import {
  HeartHandshake,
  Globe,
  Users,
  ArrowRight,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import { DynamicFavicon } from "./DynamicFavicon.tsx";
import ImageCarousel from "./ImageCarousel.tsx";
import { Input } from "./ui/input.tsx";

const backgroundImages = [
  // "https://t4.ftcdn.net/jpg/08/37/62/51/240_F_837625115_1gHeuoYe0JDJOOjkFxTBt11M0lZFzvBZ.jpg",
  // "https://t4.ftcdn.net/jpg/08/56/37/77/240_F_856377715_OKWDp8zaIyOTjxNzJtLxB1JPVjfV0GOU.jpg",
  "https://images.pexels.com/photos/28101466/pexels-photo-28101466/free-photo-of-photo-of-children-drinking-water.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/6646852/pexels-photo-6646852.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/933624/pexels-photo-933624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/16465625/pexels-photo-16465625/free-photo-of-golden-retriever-lying-under-brick-wall.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];

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

const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col h-full min-h-screen justify-center">
      <DynamicFavicon />
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" to="/">
          <img
            src="./ngoLogo.png"
            alt="NGO Logo"
            className="w-10 h-10 rounded-full"
          />
          <span className="ml-2 text-3xl font-bold">Charity Connect</span>
        </Link>

        <nav className="ml-auto flex gap-4 sm:gap-6 bg-white shadow-md fixed top-0 left-0 right-0 z-50">
          <div className="container mx-auto px-4 py-3 flex justify-between items-center">
            {/* Left side: Logo and title */}
            <div className="flex items-center">
              <img
                src="./ngologo.png"
                alt="NPO Logo"
                className="h-10 w-10 mr-3 rounded-full"
              />
              <span className="text-xl font-bold text-gray-800">
                Charity Connect
              </span>
            </div>

            {/* Right side: Navigation links */}
            <div className="flex gap-4 ml-auto">
              <Link
                to={""}
                className="text-sm font-medium hover:underline underline-offset-4"
                onClick={() => smoothScrollTo("mission")}
              >
                Our Mission
              </Link>
              <Link
                to={""}
                className="text-sm font-medium hover:underline underline-offset-4"
                onClick={() => smoothScrollTo("impact")}
              >
                Our Impact
              </Link>
              <Link
                to={""}
                className="text-sm font-medium hover:underline underline-offset-4"
                onClick={() => smoothScrollTo("get-involved")}
              >
                Get Involved
              </Link>
            </div>
          </div>
        </nav>
      </header>

      <main className="flex-1 items-center justify-center">
        <section>
          <header
            id="header"
            className="relative bg-gray-900 text-white py-32 overflow-hidden"
          >
            <ImageCarousel images={backgroundImages} />
            <div className="container mx-auto px-4 text-center relative z-10">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-shadow-lg">
                Empowering Communities, Changing Lives
              </h1>
              <p className="text-xl mb-8 text-shadow-md">
                Join us in our mission to create lasting change and build a
                better world for all.
              </p>
              <div className="space-x-4">
                <Button
                  variant="outline"
                  className="hover:bg-white hover:text-black"
                  asChild
                >
                  <Link to="/signup">Get Started</Link>
                </Button>
                <Button
                  variant="outline"
                  className="hover:bg-white hover:text-black"
                  asChild
                >
                  <Link to="#learn-more">Learn More</Link>
                </Button>
              </div>
            </div>
          </header>
        </section>

        <section
          id="mission"
          className="w-full py-12 md:py-24 lg:py-32 bg-white"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Our Mission
            </h2>
            <div className="grid gap-6 lg:grid-cols-3 items-stretch">
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <HeartHandshake className="h-12 w-12 text-purple-600" />
                  <h3 className="text-2xl font-bold">Community Support</h3>
                  <p className="text-gray-500">
                    Providing resources and assistance to underserved
                    communities worldwide.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <Globe className="h-12 w-12 text-purple-600" />
                  <h3 className="text-2xl font-bold">Global Impact</h3>
                  <p className="text-gray-500">
                    Creating sustainable solutions to address global challenges.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <Users className="h-12 w-12 text-purple-600" />
                  <h3 className="text-2xl font-bold">Volunteer Engagement</h3>
                  <p className="text-gray-500">
                    Empowering individuals to make a difference through
                    meaningful volunteer opportunities.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section
          id="impact"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Our Impact
            </h2>
            <div className="grid gap-6 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <span className="text-4xl font-bold text-purple-600">100+</span>
                <span className="text-xl font-semibold text-gray-700">
                  Projects Completed
                </span>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <span className="text-4xl font-bold text-purple-600">50K+</span>
                <span className="text-xl font-semibold text-gray-700">
                  Lives Impacted
                </span>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <span className="text-4xl font-bold text-purple-600">25+</span>
                <span className="text-xl font-semibold text-gray-700">
                  Countries Reached
                </span>
              </div>
            </div>
          </div>
        </section>
        <section
          id="get-involved"
          className="w-full py-12 md:py-24 lg:py-32 bg-purple-600 text-white"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Get Involved Today
                </h2>
                <p className="mx-auto max-w-[700px] text-purple-100 md:text-xl">
                  Your support can make a real difference. Join our community of
                  changemakers and help us create a better world.
                </p>
              </div>
              <Button asChild variant="secondary" size="lg">
                <Link to="/signup" className="flex items-center">
                  Sign Up Now <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-black text-white py-12">
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
    </div>
  );
};

export default LandingPage;
