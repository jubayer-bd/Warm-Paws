import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPaw,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-linear-to-b from-white via-gray-50 to-gray-100 border-t border-gray-200 mt-16">
      {/* Main content */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center sm:text-left">
        {/* Brand Section */}
        <div>
          <div className="flex items-center justify-center sm:justify-start gap-2 text-2xl font-bold text-primary mb-4">
            <FaPaw className="text-3xl text-primary" />
            WarmPaws
          </div>
          <p className="text-gray-600 leading-relaxed text-sm">
            Caring for your furry friends with warmth and love — especially
            during the winter season.
          </p>
        </div>

        {/* Quick Info Section */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3">About Us</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            WarmPaws is your trusted companion in pet care, offering premium
            winter services to keep your pets cozy, safe, and happy.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            Contact Info
          </h3>
          <ul className="flex flex-col gap-3 text-gray-600 text-sm">
            <li className="flex items-center justify-center sm:justify-start gap-2">
              <FaEnvelope className="text-primary" /> support@warmpaws.com
            </li>
            <li className="flex items-center justify-center sm:justify-start gap-2">
              <FaPhoneAlt className="text-primary" /> +880 1234 567890
            </li>
            <li className="flex items-center justify-center sm:justify-start gap-2">
              <FaMapMarkerAlt className="text-primary" /> Dhaka, Bangladesh
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            Follow Us
          </h3>
          <div className="flex justify-center sm:justify-start gap-4 text-gray-600 text-xl">
            <a
              href="#"
              className="hover:text-primary transition-transform transform hover:scale-110"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="hover:text-primary transition-transform transform hover:scale-110"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="hover:text-primary transition-transform transform hover:scale-110"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-300 py-5 text-center text-gray-600 text-sm">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-primary">WarmPaws</span>. All
          rights reserved. | Privacy Policy
        </p>
      </div>
    </footer>
  );
};

export default Footer;
