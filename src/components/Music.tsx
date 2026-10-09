import React from 'react';
import { SPOTIFY_PLAYLISTS } from '../data/portfolioData';

export const Music: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {SPOTIFY_PLAYLISTS.map((playlist) => (
        <div key={playlist.id} className="w-full">
          <div className="bg-slate-900 p-3 rounded-2xl shadow-sm border border-slate-800 card-hover-lift h-full flex flex-col justify-center">
            <iframe
              className="rounded-xl w-full"
              title={playlist.title}
              src={playlist.src}
              width="100%"
              height="152"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              allowFullScreen
              loading="lazy"
              style={{ border: 'none' }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Music;
