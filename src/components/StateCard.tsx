import React from 'react';
import { State } from '../types';

interface StateCardProps {
  state: State;
  onClick: (stateId: string) => void;
}

const StateCard: React.FC<StateCardProps> = ({ state, onClick }) => {
  return (
    <div 
      onClick={() => onClick(state.id)}
      className="group cursor-pointer bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={state.image} 
          alt={state.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl font-bold text-white">{state.name}</h3>
        </div>
      </div>
    </div>
  );
};

export default StateCard;