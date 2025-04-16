
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Code2, Medal } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white/80 backdrop-blur-sm border-b border-gray-200 fixed w-full z-30 transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <Code2 className="h-8 w-8 text-hackathon-purple mr-2" />
              <span className="text-xl font-bold gradient-text">HackCollab</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link to="/hackathons" className="text-gray-700 hover:text-hackathon-purple px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Explore Hackathons
              </Link>
              <Link to="/teams" className="text-gray-700 hover:text-hackathon-purple px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Find Teams
              </Link>
              <Link to="/projects" className="text-gray-700 hover:text-hackathon-purple px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Browse Projects
              </Link>
              <Link to="/host" className="text-gray-700 hover:text-hackathon-purple px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Host a Hackathon
              </Link>
            </div>
          </div>

          {/* User Actions */}
          <div className="hidden md:flex items-center space-x-2">
            <Button variant="outline" size="sm">
              Sign In
            </Button>
            <Button size="sm" className="bg-hackathon-purple hover:bg-hackathon-darkPurple text-white">
              Register
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-hackathon-purple hover:bg-gray-100 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"} transition-all duration-300 ease-in-out`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-b border-gray-200">
          <Link 
            to="/hackathons"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-hackathon-purple hover:bg-gray-50"
            onClick={toggleMenu}
          >
            Explore Hackathons
          </Link>
          <Link 
            to="/teams"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-hackathon-purple hover:bg-gray-50"
            onClick={toggleMenu}
          >
            Find Teams
          </Link>
          <Link 
            to="/projects"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-hackathon-purple hover:bg-gray-50"
            onClick={toggleMenu}
          >
            Browse Projects
          </Link>
          <Link 
            to="/host"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-hackathon-purple hover:bg-gray-50"
            onClick={toggleMenu}
          >
            Host a Hackathon
          </Link>
          <div className="pt-2 space-y-2">
            <Button variant="outline" className="w-full" size="sm">Sign In</Button>
            <Button className="w-full bg-hackathon-purple hover:bg-hackathon-darkPurple" size="sm">Register</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
