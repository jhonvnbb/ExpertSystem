'use client';

import React, { useState, useEffect } from 'react';
import { VscMenu, VscClose, VscChevronDown } from "react-icons/vsc";
import { UserButton, useUser } from "@clerk/nextjs";
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const router = useRouter();
  const { isSignedIn } = useUser();

  const handleLoginClick = () => {
    router.push('/sign-in');
  };


  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <nav className="bg-gray-800 p-6 shadow-md">
      <div className="container mx-auto flex justify-between items-center">

        <div className="text-white text-3xl font-bold tracking-wider">
          Game<span className="text-yellow-400">On</span>
        </div>

        {/* Toggler Button for Mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none transition-transform transform hover:scale-105 duration-300 ease-in-out"
          >
            {isOpen ? (
              <VscClose className="h-7 w-7" />
            ) : (
              <VscMenu className="h-7 w-7" />
            )}
          </button>
        </div>

        {/* Links for desktop */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="/" className="text-white hover:text-yellow-400 transition duration-300 text-lg">Home</a>
          <div className="relative">
            <button onClick={toggleDropdown} className="flex items-center text-white hover:text-yellow-400 transition duration-300 text-lg">
              Lapangan <VscChevronDown className="ml-2 h-5 w-5" />
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-md py-2 z-50 transition-all duration-300 ease-in-out">
                <a href="/futsal" className="block px-4 py-2 text-gray-900 hover:bg-yellow-400 transition">Futsal</a>
                <a href="/basket" className="block px-4 py-2 text-gray-900 hover:bg-yellow-400 transition">Basket</a>
                <a href="/badminton" className="block px-4 py-2 text-gray-900 hover:bg-yellow-400 transition">Badminton</a>
              </div>
            )}
          </div>
          
          {isSignedIn ? (
            <UserButton afterSignOutUrl="/" />
          ) : (
            <button onClick={handleLoginClick} className="text-white hover:text-yellow-400 transition duration-300 text-lg">Login</button>
          )}
        </div>

        {/* Sidebar for mobile */}
        <div className={`fixed top-0 left-0 w-64 h-full bg-gray-900 p-6 z-50 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}>
          <nav className="flex flex-col space-y-4">
            {isSignedIn ? (
              <UserButton afterSignOutUrl="/" />
            ) : (
              <button onClick={handleLoginClick} className="text-white hover:text-yellow-400 transition duration-300 text-lg">Login</button>
            )}

            <a href="/" className="text-white hover:text-yellow-400 transition duration-300 text-lg">Lapangan</a>
            <div>
              <button onClick={toggleDropdown} className="flex items-center text-white hover:text-yellow-400 transition duration-300 text-lg">
                Sport <VscChevronDown className="ml-2 h-5 w-5" />
              </button>
              {isDropdownOpen && (
                <div className="mt-2 bg-gray-700 rounded-lg py-2">
                  <a href="/futsal" className="block px-4 py-2 text-white hover:bg-yellow-400 transition">Futsal</a>
                  <a href="/basket" className="block px-4 py-2 text-white hover:bg-yellow-400 transition">Basket</a>
                  <a href="/badminton" className="block px-4 py-2 text-white hover:bg-yellow-400 transition">Badminton</a>
                </div>
              )}
            </div>
          </nav>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
