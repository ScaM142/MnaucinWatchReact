import React from 'react';

interface HeroButtonProps {
  name: string;
  color: string;
  text: string;
  imageUrl: string;
  onClick: (e: React.MouseEvent) => void;
  isPlaying: boolean;
  className?: string;
}

export const HeroButton: React.FC<HeroButtonProps> = ({ name, color, text, imageUrl, onClick, isPlaying }) => {
  return (
    <button
      onClick={onClick}
      className={`
    flex items-center justify-start gap-4 
    p-1 rounded-lg bg-gradient-to-r ${color} 
    hover:opacity-75 transition-opacity duration-300
    w-full
  `}
    >
      <img
        src={imageUrl}                                              
        alt={name}
        className="w-25 h-25" // Increased image size
      />
    </button>
  );
};