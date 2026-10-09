import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface CardProps {
  hobbyId: number;
  hobbyName: string;
  hobbyImg: string;
  hobbyType: string;
  hobbyRateIcon?: IconDefinition;
  hobbyRatePoint?: number;
}

export const Cards: React.FC<CardProps> = ({
  hobbyId,
  hobbyName,
  hobbyImg,
  hobbyType,
  hobbyRateIcon = faStar,
  hobbyRatePoint = 4,
}) => {
  const [imgSrc, setImgSrc] = useState(hobbyImg);

  const fallbackMap: Record<string, string> = {
    Football: '/images/sports.svg',
    Kabaddi: '/images/sports.svg',
    Chess: '/images/sports.svg',
    Badminton: '/images/sports.svg',
    'Volley Ball': '/images/sports.svg',
    Cricket: '/images/sports.svg',
    Biryani: '/images/cooking.svg',
    Kabab: '/images/cooking.svg',
    'Matar Paneer': '/images/cooking.svg',
    'Shimla Mirch Payaz Masala': '/images/cooking.svg',
    'Fish Curry': '/images/cooking.svg',
    'Chicken Curry': '/images/cooking.svg',
    'The Secret Annex': '/images/books.svg',
    'Train to Pakistan': '/images/books.svg',
    'Half Girlfriend': '/images/books.svg',
    'The girl in room 105': '/images/books.svg',
    'You are the best wife': '/images/books.svg',
    'Revolution Twenty20': '/images/books.svg',
    Varanasi: '/images/travel.svg',
    Agra: '/images/travel.svg',
    Uttarakhand: '/images/travel.svg',
    Lucknow: '/images/travel.svg',
    Prayagraj: '/images/travel.svg',
    Mathura: '/images/travel.svg',
  };

  const handleImgError = () => {
    const fallback = fallbackMap[hobbyName] || '/images/sports.svg';
    setImgSrc(fallback);
  };

  const filledCount = Math.min(Math.max(hobbyRatePoint, 0), 5);
  const emptyCount = 5 - filledCount;

  return (
    <div className="w-full">
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200/80 overflow-hidden card-hover-lift h-full flex flex-col">
        {/* Image Container with Zoom effect */}
        <div className="img-zoom-container rounded-t-2xl relative h-48 w-full bg-slate-100">
          <img
            src={imgSrc}
            onError={handleImgError}
            alt={hobbyName}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Content Body */}
        <div className="p-4 flex flex-col justify-between flex-1">
          <div className="flex flex-col sm:flex-row items-center justify-between mb-2 gap-2">
            <span className="px-2.5 py-0.5 bg-[#f9004d]/10 text-[#f9004d] rounded-full text-xs font-bold tracking-wide border border-[#f9004d]/20">
              {hobbyType}
            </span>
            <div className="flex items-center gap-1" title={`${filledCount} out of 5 stars`}>
              {Array.from({ length: filledCount }).map((_, i) => (
                <FontAwesomeIcon
                  key={`star-filled-${hobbyId}-${i}`}
                  icon={hobbyRateIcon}
                  className="text-[#f9004d] text-xs"
                />
              ))}
              {Array.from({ length: emptyCount }).map((_, i) => (
                <FontAwesomeIcon
                  key={`star-empty-${hobbyId}-${i}`}
                  icon={hobbyRateIcon}
                  className="text-slate-300 text-xs"
                />
              ))}
            </div>
          </div>

          <h3 className="text-base font-bold text-slate-800 text-center mt-2 m-0">
            {hobbyName}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Cards;
