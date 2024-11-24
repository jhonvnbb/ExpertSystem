"use client";

import NavLinks from "./navlink";
import HandleLoginClick from "./handle-login-click";
import ToggleMenu from "./toggle-menu";
import { useEffect, useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed left-0 right-0 z-50 flex items-center justify-between p-6 transition-colors duration-300 ${
        scrolled
          ? "bg-gray-800 bg-opacity-90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      } text-white border-b border-white`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="text-white text-3xl font-extrabold tracking-tight"
        >
          Expert<span className="text-yellow-400">System</span>
        </Link>

        <div className="hidden lg:flex md:gap-6 items-center">
          <NavLinks />
          <HandleLoginClick />
        </div>

        <ToggleMenu />
      </div>
    </nav>
  );
};

export default Navbar;
