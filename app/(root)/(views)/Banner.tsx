import React from "react";
import Link from "next/link";

const Banner = () => {
  return (
    <section
      className="relative p-6"
      style={{
        backgroundImage: "url('/banner.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative z-10 mx-auto flex flex-col items-center justify-center pt-40 pb-24">
        <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
          <img
            src="https://placeholder.com/250"
            alt="logo-himakom"
            className="max-w-full h-auto"
          />
        </div>

        <div className="w-full md:w-2/3 text-center mt-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight drop-shadow-md">
            Dare to Dream, Strive <br/> for Greatness
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mt-4">
            Find your fav
          </p>

          <div className="mt-8">
            <Link
              href="/#about"
              className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-700 hover:to-blue-900 text-white font-bold py-3 px-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
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
