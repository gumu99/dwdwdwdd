import React from 'react';
import { ReligiousSite } from '../types';
import { MapPin, Clock, Phone } from 'lucide-react';

interface SiteCardProps {
  site: ReligiousSite;
  onClick: (siteId: string) => void;
}

const SiteCard: React.FC<SiteCardProps> = ({ site, onClick }) => {
  return (
    <div 
      onClick={() => onClick(site.id)}
      className="group cursor-pointer bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={site.image} 
          alt={site.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${site.typeColor}`}>
            {site.type}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
          {site.name}
        </h3>
        
        <div className="flex items-center text-gray-600 mb-3">
          <MapPin className="h-4 w-4 mr-2" />
          <span className="text-sm">{site.location}</span>
        </div>
        
        {site.timings && (
          <div className="flex items-center text-gray-600 mb-3">
            <Clock className="h-4 w-4 mr-2" />
            <span className="text-sm">{site.timings}</span>
          </div>
        )}
        
        <p className="text-gray-700 text-sm line-clamp-3">
          {site.description}
        </p>
      </div>
    </div>
  );
};

export default SiteCard;