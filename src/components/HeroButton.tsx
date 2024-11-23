import React from 'react';

interface HeroButtonProps {
  name: string;
  color: string;
  text: string;
  imageUrl: string;
  onClick: () => void;
  isPlaying: boolean;
}

export const HeroButton: React.FC<HeroButtonProps> = ({ name, color, text, imageUrl, onClick, isPlaying }) => {
  return (
    <button
      onClick={onClick}
      className={`relative flex items-center justify-center p-4 rounded-lg bg-gradient-to-r ${color} hover:opacity-75 transition-opacity duration-300`}
    >
      <img src={imageUrl} alt={name} className="w-16 h-16 rounded-full mr-4" />
      <span className="text-white">{text}</span>
      {isPlaying && <span className="absolute top-0 right-0 p-1 bg-red-500 rounded-full">Playing</span>}
    </button>
  );
};