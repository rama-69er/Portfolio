import React from 'react';
import Cards from './Cards';
import { TRAVEL_HOBBIES } from '../data/portfolioData';

export const Travel: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {TRAVEL_HOBBIES.map((hobby) => (
        <Cards
          key={hobby.id}
          hobbyId={hobby.id}
          hobbyName={hobby.name}
          hobbyImg={hobby.img}
          hobbyType={hobby.type}
          hobbyRatePoint={hobby.ratePoint}
        />
      ))}
    </div>
  );
};

export default Travel;
