import React, { useState, useRef } from 'react';
import { heroes } from './data/heroes';
import { HeroButton } from './components/HeroButton';
import { RoleFilter } from './components/RoleFilter';
import { Volume2 } from 'lucide-react';

function App() {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [currentAudio, setCurrentAudio] = useState<string>('');
  const [isPlaying, setIsPlaying] = useState(false);

  const filteredHeroes = selectedRole
    ? heroes.filter(hero => hero.role === selectedRole)
    : heroes;

  const playSound = (audioUrl: string) => {
    if (audioRef.current) {
      if (currentAudio === audioUrl && !audioRef.current.paused) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        setIsPlaying(false);
      } else {
        if (currentAudio !== audioUrl) {
          audioRef.current.src = audioUrl;
        }
        audioRef.current.play()
          .then(() => setIsPlaying(true))
          .catch(error => console.error('Error playing audio:', error));
        setCurrentAudio(audioUrl);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Volume2 className="w-8 h-8 text-orange-400" />
            <h1 className="text-4xl font-bold text-white">MňaučinWatch</h1>
          </div>
          <p className="text-gray-400">Click on the buttons to play hero voice lines</p>
        </div>

        <RoleFilter selectedRole={selectedRole} onRoleSelect={setSelectedRole} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredHeroes.flatMap(hero =>
            hero.voicelines.map((line, index) => (
              <HeroButton
                key={`${hero.id}-${index}`}
                name={hero.name}
                color={hero.color}
                text={hero.name}
                imageUrl={hero.imageUrl}
                onClick={() => playSound(line.audio)}
                isPlaying={isPlaying && currentAudio === line.audio}
              />
            ))
          )}
        </div>
      </div>
      <audio 
        ref={audioRef}
        onEnded={() => setIsPlaying(false)}
        onError={() => setIsPlaying(false)}
      />
    </div>
  );
}

export default App;