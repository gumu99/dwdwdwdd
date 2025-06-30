import React, { useState } from 'react';
import { Search, Menu, X } from 'lucide-react';

interface HeaderProps {
  onSearch: (query: string) => void;
  searchQuery: string;
}

const Header: React.FC<HeaderProps> = ({ onSearch, searchQuery }) => {
  const [showAboutModal, setShowAboutModal] = useState(false);

  return (
    <>
      <header className="bg-white shadow-sm border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <img 
                src="/WhatsApp Image 2025-05-25 at 19.50.57_c8490460.jpg" 
                alt="Sanskriti Dharohar Logo" 
                className="h-10 w-10 object-contain"
              />
              <div>
                <h1 className="text-2xl font-bold text-amber-800">Sanskriti</h1>
                <p className="text-sm text-amber-600 -mt-1">DHAROHAR</p>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-6">
              <nav className="flex space-x-6">
                <button 
                  onClick={() => setShowAboutModal(true)}
                  className="px-4 py-2 rounded-full bg-orange-100 text-orange-800 font-medium hover:bg-orange-200 transition-colors"
                >
                  About Us
                </button>
              </nav>
            </div>

            <button className="md:hidden">
              <Menu className="h-6 w-6 text-amber-800" />
            </button>
          </div>
        </div>
      </header>

      {/* About Us Modal */}
      {showAboutModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-amber-800">About Us</h2>
                <button 
                  onClick={() => setShowAboutModal(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              <div className="space-y-4 text-gray-700">
                <p className="text-lg font-medium text-amber-700">
                  Welcome to <strong>Sanskritic Dharohar</strong>, your digital gateway to India's sacred heritage.
                </p>
                
                <p>
                  We are dedicated to preserving and presenting the rich cultural and religious diversity of India by offering authentic, accessible, and detailed information about <strong>temples, mosques, churches, and gurudwaras</strong> across <strong>every state in India</strong>.
                </p>
                
                <p>
                  Our platform serves as a comprehensive guide for spiritual seekers, cultural explorers, pilgrims, and researchers alike. Whether you're planning a visit, exploring your faith, or simply curious about India's sacred spaces, you'll find everything you need—from historical insights and religious practices to amenities, festivals, location details, and local experiences.
                </p>
                
                <p>
                  We believe that spirituality and culture are deeply intertwined, and through this platform, we aim to foster understanding, respect, and connection among all communities.
                </p>
                
                <p className="text-amber-700 font-medium">
                  Let <strong>Sanskritic Dharohar</strong> be your companion in discovering the timeless spiritual landmarks that shape India's soul.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;