import React from 'react';
import { ReligiousSite } from '../types';
import { ArrowLeft, MapPin, Clock, Phone, Globe, Train, Plane, Bus, Star, Utensils, Hotel, Camera } from 'lucide-react';

interface SiteDetailProps {
  site: ReligiousSite;
  onBack: () => void;
}

const SiteDetail: React.FC<SiteDetailProps> = ({ site, onBack }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button 
            onClick={onBack}
            className="flex items-center text-orange-600 hover:text-orange-700 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Sites
          </button>
        </div>
      </div>

      {/* Pamphlet Layout */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Header Section */}
          <div className="bg-amber-900 text-white p-6">
            <div className="text-center">
              <h1 className="text-3xl font-bold tracking-wider">SANSKRITI DHAROHAR</h1>
              <div className="w-full h-px bg-white my-4"></div>
            </div>
          </div>

          {/* Temple Image Section */}
          <div className="p-6 bg-white">
            <div className="w-full h-80 rounded-lg overflow-hidden shadow-md">
              <img 
                src={site.image} 
                alt={site.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center mt-4">
              <h2 className="text-2xl font-bold text-amber-900">{site.name}</h2>
              <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium mt-2 ${site.typeColor}`}>
                {site.type}
              </span>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border-t border-gray-200">
            {/* Left Sidebar */}
            <div className="bg-gray-50 p-6 border-r border-gray-200">
              <div className="space-y-5">
                <div>
                  <h3 className="font-bold text-sm text-gray-800 mb-2 border-b border-gray-300 pb-1">Main Prasad</h3>
                  <p className="text-xs text-gray-600">{site.prasad || 'Traditional offerings available'}</p>
                </div>

                <div>
                  <h3 className="font-bold text-sm text-gray-800 mb-2 border-b border-gray-300 pb-1">Open Timings</h3>
                  <p className="text-xs text-gray-600">{site.timings || 'Daily 6:00 AM - 8:00 PM'}</p>
                </div>

                <div>
                  <h3 className="font-bold text-sm text-gray-800 mb-2 border-b border-gray-300 pb-1">Prayer Timing</h3>
                  <p className="text-xs text-gray-600">Morning Aarti: 6:00 AM<br/>Evening Aarti: 7:00 PM</p>
                </div>

                <div>
                  <h3 className="font-bold text-sm text-gray-800 mb-2 border-b border-gray-300 pb-1">Other Deities</h3>
                  <p className="text-xs text-gray-600">Various associated deities worshipped</p>
                </div>

                <div>
                  <h3 className="font-bold text-sm text-gray-800 mb-2 border-b border-gray-300 pb-1">Amenities Like</h3>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>→ Drinking Water</li>
                    <li>→ Puja Items</li>
                    <li>→ Shops</li>
                    <li>→ Restrooms</li>
                    {site.amenities?.slice(0, 4).map((amenity, index) => (
                      <li key={index}>→ {amenity}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-sm text-gray-800 mb-2 border-b border-gray-300 pb-1">Festival</h3>
                  <ul className="text-xs text-gray-600 space-y-1">
                    {site.festivals?.slice(0, 4).map((festival, index) => (
                      <li key={index}>• {festival}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-sm text-gray-800 mb-2 border-b border-gray-300 pb-1">Ceremonies Held</h3>
                  <p className="text-xs text-gray-600">Wedding ceremonies conducted with prior booking</p>
                </div>

                <div>
                  <h3 className="font-bold text-sm text-gray-800 mb-2 border-b border-gray-300 pb-1">Education Provided</h3>
                  <p className="text-xs text-gray-600">Religious education and cultural programs available</p>
                </div>

                <div>
                  <h3 className="font-bold text-sm text-gray-800 mb-2 border-b border-gray-300 pb-1">Donations</h3>
                  <p className="text-xs text-gray-600">Donations accepted for temple maintenance and services</p>
                </div>

                <div>
                  <h3 className="font-bold text-sm text-gray-800 mb-2 border-b border-gray-300 pb-1">Flowers Offered</h3>
                  <p className="text-xs text-gray-600">Marigold, Rose, Lotus, Jasmine, Hibiscus</p>
                </div>

                <div>
                  <h3 className="font-bold text-sm text-gray-800 mb-2 border-b border-gray-300 pb-1">Food Available for Devotees</h3>
                  <p className="text-xs text-gray-600">Free prasad distribution daily, Special langar on festivals</p>
                </div>
              </div>
            </div>

            {/* Center Content */}
            <div className="p-6">
              {/* Overview History */}
              <div className="mb-6">
                <h2 className="text-lg font-bold text-center mb-4 border-b-2 border-amber-300 pb-2">OVERVIEW HISTORY</h2>
                <div className="text-sm text-gray-700 leading-relaxed space-y-3">
                  <p>{site.description}</p>
                  
                  {site.specialFeatures && site.specialFeatures.length > 0 && (
                    <div>
                      <h4 className="font-semibold mb-2 text-amber-800">Historical Significance:</h4>
                      <ul className="space-y-1">
                        {site.specialFeatures.map((feature, index) => (
                          <li key={index} className="text-xs">• {feature}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div>
                    <h4 className="font-semibold mb-2 text-amber-800">Cultural Importance:</h4>
                    <p className="text-xs">This sacred site holds immense cultural and spiritual significance for devotees and visitors. The temple serves as a center for religious activities, cultural preservation, and community gatherings. Its architectural beauty and historical legacy make it an important heritage site.</p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 text-amber-800">Architectural Details:</h4>
                    <p className="text-xs">The monument showcases traditional architectural elements that reflect the rich cultural heritage of the region. The intricate carvings, structural design, and artistic elements represent centuries of craftsmanship and devotion.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="bg-gray-50 p-6 border-l border-gray-200">
              <div className="space-y-5">
                <div>
                  <h3 className="font-bold text-sm text-gray-800 mb-2 border-b border-gray-300 pb-1">Location</h3>
                  <div className="flex items-start mb-2">
                    <MapPin className="h-4 w-4 mr-2 text-orange-600 mt-0.5" />
                    <p className="text-xs text-gray-600">{site.location}, {site.state}</p>
                  </div>
                  <p className="text-xs text-gray-600 mb-1">Google Maps: Available for navigation</p>
                  <p className="text-xs text-gray-600 mb-1">Weather Details: Best visiting months are October to March</p>
                  <p className="text-xs text-gray-600">Sea Level: Varies by location</p>
                </div>

                <div>
                  <h3 className="font-bold text-sm text-gray-800 mb-2 border-b border-gray-300 pb-1">How to Reach</h3>
                  <div className="space-y-2">
                    <p className="text-xs font-medium text-gray-700">Nearest Bus Station:</p>
                    {site.nearestTransport?.bus && (
                      <div className="flex items-start">
                        <Bus className="h-3 w-3 mr-2 text-purple-600 mt-0.5" />
                        <p className="text-xs text-gray-600">{site.nearestTransport.bus}</p>
                      </div>
                    )}
                    
                    <p className="text-xs font-medium text-gray-700">Nearest Railway Station:</p>
                    {site.nearestTransport?.railway && (
                      <div className="flex items-start">
                        <Train className="h-3 w-3 mr-2 text-blue-600 mt-0.5" />
                        <p className="text-xs text-gray-600">{site.nearestTransport.railway}</p>
                      </div>
                    )}
                    
                    <p className="text-xs font-medium text-gray-700">Nearest Airport:</p>
                    {site.nearestTransport?.airport && (
                      <div className="flex items-start">
                        <Plane className="h-3 w-3 mr-2 text-green-600 mt-0.5" />
                        <p className="text-xs text-gray-600">{site.nearestTransport.airport}</p>
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-sm text-gray-800 mb-2 border-b border-gray-300 pb-1">Nearby Restaurants</h3>
                  {site.nearbyRestaurants && (
                    <ul className="text-xs text-gray-600 space-y-1">
                      {site.nearbyRestaurants.map((restaurant, index) => (
                        <li key={index}>• {restaurant}</li>
                      ))}
                    </ul>
                  )}
                </div>

                <div>
                  <h3 className="font-bold text-sm text-gray-800 mb-2 border-b border-gray-300 pb-1">Nearby Hotels</h3>
                  {site.nearbyHotels && (
                    <ul className="text-xs text-gray-600 space-y-1">
                      {site.nearbyHotels.map((hotel, index) => (
                        <li key={index}>• {hotel}</li>
                      ))}
                    </ul>
                  )}
                </div>

                <div>
                  <h3 className="font-bold text-sm text-gray-800 mb-2 border-b border-gray-300 pb-1">Nearby Non-religious or Religious Places to Go For</h3>
                  {site.nearbyAttractions && (
                    <ul className="text-xs text-gray-600 space-y-1">
                      {site.nearbyAttractions.map((attraction, index) => (
                        <li key={index}>• {attraction}</li>
                      ))}
                    </ul>
                  )}
                </div>

                <div>
                  <h3 className="font-bold text-sm text-gray-800 mb-2 border-b border-gray-300 pb-1">Famous Food That Can Be Tasted</h3>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Local Bengali delicacies</li>
                    <li>• Traditional sweets</li>
                    <li>• Street food specialties</li>
                    <li>• Regional cuisine</li>
                    <li>• Temple prasad</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-sm text-gray-800 mb-2 border-b border-gray-300 pb-1">Contact Details of the Monument</h3>
                  {site.contact && (
                    <div className="flex items-center mb-2">
                      <Phone className="h-3 w-3 mr-2 text-green-600" />
                      <p className="text-xs text-gray-600">{site.contact}</p>
                    </div>
                  )}
                  <p className="text-xs text-gray-600">Temple Office: Available during visiting hours</p>
                </div>

                <div>
                  <h3 className="font-bold text-sm text-gray-800 mb-2 border-b border-gray-300 pb-1">Website of the Monument if Available</h3>
                  {site.website ? (
                    <div className="flex items-center">
                      <Globe className="h-3 w-3 mr-2 text-blue-600" />
                      <a href={site.website} className="text-xs text-blue-600 hover:underline break-all">
                        {site.website}
                      </a>
                    </div>
                  ) : (
                    <p className="text-xs text-gray-600">Official website not available</p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-amber-900 text-white p-4 text-center border-t border-gray-200">
            <p className="text-sm">© 2025 Sanskriti Dharohar - Preserving India's Spiritual Heritage</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiteDetail;