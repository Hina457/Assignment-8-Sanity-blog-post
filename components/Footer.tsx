


import React from "react";
import {
  FaLinkedin,
  FaFacebookSquare,
  FaInstagram,
  FaSkype,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray-200 text-white p-5 ">
     
      <div className="flex flex-col  justify-between items-center text-center ">
        <p className="text-lg mb-5 font-serif text-violet-900">
          &copy; 2025 Hina Alvi Sanity Blog Project. All rights reserved.
        </p>
        <div className="flex  gap-4 text-2xl ">
          <FaLinkedin />
          <FaFacebookSquare />
          <FaInstagram />
          <FaSkype />
          <FaTwitter />
        </div>
      </div>
    </div>
  );
};

export default Footer;