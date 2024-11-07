import React from "react";
import {
  FaInstagram,
  FaTiktok,
  FaGoogle,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const FooterU = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-4">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-start justify-between space-y-10 md:space-y-0 ">
        {/* Logo and Social Media Section */}
        <div className="flex flex-col sm:items-start items-center space-y-4 md:w-1/3">
          <div className="flex flex-col sm:items-start items-center">
           <a href="/">
            <img
              src="/images/logo.png" // Replace with the actual path to your logo
              alt="Eyez on the Prize Logo"
              className="w-32 h-auto" // Adjust width and height as needed
            /></a>
          </div>

          <div className="flex space-x-4 text-white text-xl">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTiktok />
            </a>
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGoogle />
            </a>
          </div>
        </div>

        {/* Pages, Services, and Business Info Sections */}
        <div className="flex flex-col sm:flex-row items-start justify-between w-full md:w-2/3 space-y-8 sm:space-y-0 sm:space-x-8">
          <div className="flex flex-col sm:items-start  space-y-2">
            <h4 className="font-semibold text-white uppercase tracking-wide pb-1 border-b border-dotted border-gray-500">
              Pages
            </h4>
            <a href="/" className="hover:text-purple-500">
              Home
            </a>
            <a href="/about-us" className="hover:text-purple-500">
              About
            </a>
            <a href="/services" className="hover:text-purple-500">
              Services
            </a>
            <a href="/service-areas" className="hover:text-purple-500">
              Services Areas
            </a>
            <a href="/gallery" className="hover:text-purple-500">
              Portfolio
            </a>
            <a href="/contact-us" className="hover:text-purple-500">
              Contact
            </a>
            <a
              href="https://book.squareup.com/appointments/g74ppxgb2rbmal/location/LH1DBHXC19NYZ/services"
              className="hover:text-purple-500"
            >
              Book Online
            </a>
            <a href="/plans" className="hover:text-purple-500">
              Plans
            </a>
          </div>

          <div className="flex flex-col items-start sm:items-start  space-y-2">
            <h4 className="font-semibold text-white uppercase tracking-wide pb-1 border-b border-dotted border-gray-500">
              Services
            </h4>
            <a href="/services/polishing" className="hover:text-purple-500">
              Polishing
            </a>
            <a href="/services/ceramic-coating" className="hover:text-purple-500">
              Ceramic Coating
            </a>
            <a href="/services/exterior-detailing" className="hover:text-purple-500">
              Exterior Detailing
            </a>
            <a href="/services/interior-detailing" className="hover:text-purple-500">
              Interior Detailing
            </a>
            <a href="/services/upholstery-cleaning" className="hover:text-purple-500">
              Upholstery Cleaning
            </a>
            <a href="/services/engine-bay-detailing" className="hover:text-purple-500">
              Engine Bay Detailing
            </a>
            <a href="/services/rv-detailing-2" className="hover:text-purple-500">
              RV Detailing
            </a>
            <a href="/services/auto-detailing" className="hover:text-purple-500">
              Auto Detailing
            </a>
            <a href="/services/luxury-detailing" className="hover:text-purple-500">
              Luxury Detailing
            </a>
            <a href="/services/boating-detailing" className="hover:text-purple-500">
              Boating Detailing
            </a>
          </div>

          <div className="flex flex-col sm:items-start items-start  space-y-2">
            <h4 className="font-semibold text-white uppercase tracking-wide pb-1 border-b border-dotted border-gray-500">
              Business Info
            </h4>
            <div className="flex items-center space-x-2">
              <FaPhoneAlt className="text-purple-500" />
              <a href="tel:+19803070431">
              <span>(980) 307-0431</span></a>
            </div>
            <div className="flex items-center space-x-2">
              
              <FaEnvelope className="text-purple-500" />
              <a href="mailto:eyezontheprizeautospa@gmail.com">
              <span>eyezontheprize@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar with Centered Purple Line */}
      <div className="max-w-6xl mx-auto mt-10 border-t border-purple-500 pt-4 text-center text-sm text-gray-400">
        <p> © Eyez On The Prize Auto-Spa 2024</p>
      </div>
    </footer>
  );
};

export default FooterU;
