import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import StateCard from './components/StateCard';
import SiteCard from './components/SiteCard';
import SiteDetail from './components/SiteDetail';
import Footer from './components/Footer';
import { states } from './data/states';
import { westBengalSites } from './data/westBengalSites';
import { ReligiousSite } from './types';

type View = 'home' | 'state' | 'detail';

function App() {
  const [currentView, setCurrentView] = useState<View>('home');
  const [selectedState, setSelectedState] = useState<string>('');
  const [selectedSite, setSelectedSite] = useState<ReligiousSite | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState<string>('');

  // For now, we only have West Bengal data
  const getSitesForState = (stateId: string): ReligiousSite[] => {
    if (stateId === 'west-bengal') {
      return westBengalSites;
    }
    return []; // Other states will be empty for now
  };

  const filteredSites = useMemo(() => {
    const sites = getSitesForState(selectedState);
    return sites.filter(site => {
      const matchesSearch = site.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           site.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           site.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesType = !typeFilter || site.type === typeFilter;
      return matchesSearch && matchesType;
    });
  }, [selectedState, searchQuery, typeFilter]);

  const handleStateSelect = (stateId: string) => {
    setSelectedState(stateId);
    setCurrentView('state');
    setSearchQuery('');
    setTypeFilter('');
  };

  const handleSiteSelect = (siteId: string) => {
    const sites = getSitesForState(selectedState);
    const site = sites.find(s => s.id === siteId);
    if (site) {
      setSelectedSite(site);
      setCurrentView('detail');
    }
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    setSelectedState('');
    setSearchQuery('');
    setTypeFilter('');
  };

  const handleBackToState = () => {
    setCurrentView('state');
    setSelectedSite(null);
  };

  const renderTypeFilters = () => {
    const types = ['Temple', 'Mosque', 'Church', 'Gurudwara'];
    return (
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        <button
          onClick={() => setTypeFilter('')}
          className={`px-6 py-2 rounded-full font-medium transition-all ${
            !typeFilter 
              ? 'bg-orange-600 text-white shadow-lg' 
              : 'bg-white text-gray-700 border border-gray-300 hover:border-orange-300'
          }`}
        >
          All
        </button>
        {types.map(type => (
          <button
            key={type}
            onClick={() => setTypeFilter(type)}
            className={`px-6 py-2 rounded-full font-medium transition-all ${
              typeFilter === type
                ? 'bg-orange-600 text-white shadow-lg'
                : 'bg-white text-gray-700 border border-gray-300 hover:border-orange-300'
            }`}
          >
            {type}
          </button>
        ))}
      </div>
    );
  };

  if (currentView === 'detail' && selectedSite) {
    return <SiteDetail site={selectedSite} onBack={handleBackToState} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50">
      <Header onSearch={setSearchQuery} searchQuery={searchQuery} />
      
      {currentView === 'home' && (
        <>
          {/* Hero Section */}
          <section className="relative py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-8">
                <img 
                  src="/WhatsApp Image 2025-05-25 at 19.50.57_c8490460.jpg" 
                  alt="Sanskriti Dharohar Logo" 
                  className="h-20 w-20 mx-auto mb-6 object-contain"
                />
                <h1 className="text-5xl md:text-6xl font-bold text-amber-900 mb-4">
                  Sanskriti
                </h1>
                <p className="text-2xl text-amber-700 mb-8">DHAROHAR</p>
                <p className="text-xl text-gray-700 mb-12 max-w-2xl mx-auto">
                  Discover India's rich religious heritage. Explore temples, mosques, churches, and gurudwaras 
                  across different states with detailed information and beautiful imagery.
                </p>
              </div>
              
              <SearchBar onSearch={setSearchQuery} searchQuery={searchQuery} />
            </div>
          </section>

          {/* States Grid */}
          <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Explore by State
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {states.map(state => (
                  <StateCard 
                    key={state.id} 
                    state={state} 
                    onClick={handleStateSelect}
                  />
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {currentView === 'state' && (
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <button 
                onClick={handleBackToHome}
                className="text-orange-600 hover:text-orange-700 font-medium mb-4"
              >
                ← Back to States
              </button>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {states.find(s => s.id === selectedState)?.name} Religious Sites
              </h1>
              <SearchBar onSearch={setSearchQuery} searchQuery={searchQuery} />
            </div>

            {renderTypeFilters()}

            {filteredSites.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-xl text-gray-600">
                  {selectedState === 'west-bengal' 
                    ? 'No sites found matching your search criteria.'
                    : 'Content for this state is coming soon. Currently, we have detailed information for West Bengal.'}
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredSites.map(site => (
                  <SiteCard 
                    key={site.id} 
                    site={site} 
                    onClick={handleSiteSelect}
                  />
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}

export default App;