import React from 'react';

interface HeroButtonProps {
  name: string;
  color: string;
  text: string;
  imageUrl: string;
  onClick: (e: React.MouseEvent) => void;
  isPlaying: boolean;
  enabled?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export const HeroButton: React.FC<HeroButtonProps> = ({ 
  name, 
  color, 
  text, 
  imageUrl, 
  onClick, 
  isPlaying, 
  enabled = true,
  className,
  children 
}) => {
  return (
    <button
      onClick={enabled ? onClick : undefined}
      className={`
        flex items-center justify-start gap-4 
        p-1 rounded-lg bg-gradient-to-r ${color} 
        hover:opacity-75 transition-opacity duration-300
        w-full relative
        ${className}
      `}
    >
      <img
        src={imageUrl}                                              
        alt={name}
        className="w-25 h-25 rounded-lg"
      />
      {children}
    </button>
  );
};