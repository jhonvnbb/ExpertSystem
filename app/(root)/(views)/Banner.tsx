
import React from "react";
import Link from "next/link";

const Banner = () => {
  return (
    <section className="bg-[#eee] py-24">
      <div className="container mx-auto flex flex-col items-center justify-center p-6">
        <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
          <img
            src="/himakom.png"
            alt="logo-himakom"
            className="max-w-full h-auto"
          />
        </div>
        <div className="w-full md:w-1/2 text-center mt-3">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800">
            Dare to Dream, Strive for Greatness
          </h1>
          <div className="mt-6">
            <Link
              href="/#about"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 border rounded inline-block"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
