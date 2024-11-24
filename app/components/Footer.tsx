import React from "react";
import FootLinks from "./footlink";

const Footer = () => {
  return (
    <footer className="bg-gray-800 p-6 text-white">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between items-center space-y-8 lg:space-y-0 lg:space-x-8">
        <div className="flex flex-col items-center lg:items-start">
          <img src="https://placeholder.com/150" alt="Expert System" className="h-20 mb-4" />
          <div className="text-center lg:text-left">
            <h4 className="text-xl font-semibold">
              Pemilihan Jurusan | Expert System
            </h4>
            <div className="flex justify-center lg:justify-start space-x-4 mt-3">
              <FootLinks />
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-xl font-bold mb-4">KONTAK</h1>
          <div className="space-y-3">
            <p className="font-light">
              Jl. Prof.Dr. Ir. Sumatri Brojonegoro No.1 Gedong Meneng, Kec.
              Rajabasa, Kota Bandar Lampung, Indonesia
            </p>
            <p className="font-light">📍 Gedung Pemilihan Jurusan | Expert System</p>
            <p className="font-light">📧 pemilihanjurusan.expert@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="text-center mt-6">
        <i className="text-sm font-semibold">&copy; 2024 ExpertSystem. All rights reserved.</i>
      </div>
    </footer>
  );
};

export default Footer;