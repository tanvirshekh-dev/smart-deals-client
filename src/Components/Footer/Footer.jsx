import React from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaTwitter,
  FaLinkedinIn,
  FaFacebookF,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#001529] text-gray-400 py-16 px-4 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h2 className="text-white text-2xl font-bold mb-4">
              Smart<span className="text-[#8B5CF6]">Deals</span>
            </h2>
            <p className="text-sm leading-relaxed text-gray-400">
              Your trusted marketplace for authentic local products. Discover
              the best deals from across Bangladesh.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a className="link link-hover">All Products</a>
              </li>
              <li>
                <a className="link link-hover">Dashboard</a>
              </li>
              <li>
                <a className="link link-hover">Login</a>
              </li>
              <li>
                <a className="link link-hover">Register</a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-semibold text-lg">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a className="link link-hover">Electronics</a>
              </li>
              <li>
                <a className="link link-hover">Fashion</a>
              </li>
              <li>
                <a className="link link-hover">Home & Living</a>
              </li>
              <li>
                <a className="link link-hover">Groceries</a>
              </li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-semibold text-lg">
              Contact & Support
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-gray-400" />
                <span>support@Smartdeals.com</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-gray-400" />
                <span>+880 123 456 789</span>
              </li>
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-gray-400 mt-1" />
                <span>
                  123 Commerce Street, <br /> Dhaka, Bangladesh
                </span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-semibold text-lg">Social Links</h3>
            <div className="flex gap-3">
              <a className="btn btn-circle btn-sm bg-white text-[#001529] hover:bg-[#8B5CF6] hover:text-white border-none">
                <FaTwitter size={14} />
              </a>
              <a className="btn btn-circle btn-sm bg-white text-[#001529] hover:bg-[#8B5CF6] hover:text-white border-none">
                <FaLinkedinIn size={14} />
              </a>
              <a className="btn btn-circle btn-sm bg-white text-[#001529] hover:bg-[#8B5CF6] hover:text-white border-none">
                <FaFacebookF size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>© 2025 SmartDeals. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
