"use client";

import { useState, useEffect } from "react";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline";
import NavLinks from "./navlink";
import HandleLoginClick from "./handle-login-click";

export default function ToggleMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      <button
        onClick={toggleMenu}
        className="block lg:hidden focus:outline-none"
      >
        {isOpen ? (
          <XMarkIcon className="h-8 w-8 text-white" />
        ) : (
          <Bars3Icon className="h-8 w-8 text-white" />
        )}
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-[#262528] z-50 flex flex-col items-center justify-center space-y-6 text-center">
          <button
            onClick={toggleMenu}
            className="absolute top-6 right-6 text-white"
          >
            <XMarkIcon className="h-8 w-8" />
          </button>

          <NavLinks />
          <HandleLoginClick />
        </div>
      )}
    </>
  );
}
