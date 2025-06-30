export interface ReligiousSite {
  id: string;
  name: string;
  type: 'Temple' | 'Mosque' | 'Church' | 'Gurudwara';
  typeColor: string;
  state: string;
  location: string;
  description: string;
  image: string;
  timings?: string;
  prasad?: string;
  amenities?: string[];
  festivals?: string[];
  contact?: string;
  website?: string;
  nearestTransport?: {
    airport?: string;
    railway?: string;
    bus?: string;
  };
  nearbyAttractions?: string[];
  nearbyHotels?: string[];
  nearbyRestaurants?: string[];
  specialFeatures?: string[];
}

export interface State {
  id: string;
  name: string;
  image: string;
}