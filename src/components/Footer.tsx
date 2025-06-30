import React from 'react';
import { Instagram, Youtube, Twitter, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-amber-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <img 
                src="/WhatsApp Image 2025-05-25 at 19.50.57_c8490460.jpg" 
                alt="Sanskriti Dharohar Logo" 
                className="h-12 w-12 object-contain"
              />
              <div>
                <h2 className="text-2xl font-bold">Sanskriti</h2>
                <p className="text-amber-200">DHAROHAR</p>
              </div>
            </div>
            <p className="text-amber-100 mb-6 max-w-md">
              Discover and explore the rich religious heritage of India. From ancient temples to historic mosques, 
              churches, and gurudwaras - experience the spiritual diversity of our nation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-amber-800 p-2 rounded-full hover:bg-amber-700 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-amber-800 p-2 rounded-full hover:bg-amber-700 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="bg-amber-800 p-2 rounded-full hover:bg-amber-700 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-amber-800 p-2 rounded-full hover:bg-amber-700 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-amber-200 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-amber-200 hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="text-amber-200 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-amber-200 hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-3 text-amber-300" />
                <span className="text-amber-200 text-sm">sansritidharohar@gmail.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-3 text-amber-300" />
                <span className="text-amber-200 text-sm">+91 98765 43210</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-amber-800 mt-8 pt-8 text-center">
          <p className="text-amber-200 text-sm">
            © 2025 Sanskriti Dharohar. All rights reserved. Preserving India's spiritual heritage.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;