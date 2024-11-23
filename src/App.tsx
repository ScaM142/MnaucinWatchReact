import React, { useState, useRef } from 'react';
import { heroes } from './data/heroes';
import { HeroButton } from './components/HeroButton';
import { Volume2 } from 'lucide-react';
import { RoleFilter } from './components/RoleFilter';


function App() {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [selectedHero, setSelectedHero] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [currentAudio, setCurrentAudio] = useState<string>('');
  const [isPlaying, setIsPlaying] = useState(false);

  const filteredHeroeEnabled = heroes.filter(hero => hero.enabled);

  const filteredHeroes = selectedRole
    ? filteredHeroeEnabled.filter(hero => hero.role === selectedRole).filter(hero => hero.enabled)
    : filteredHeroeEnabled;

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
            <h1 className="text-4xl font-bold text-white">MňaučinWatch</h1>
          </div>
        </div>

        <RoleFilter selectedRole={selectedRole} onRoleSelect={setSelectedRole} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredHeroes.map(hero => (
            <HeroButton
              key={hero.id}
              name={hero.name}
              color={hero.color}
              text={hero.name}
              imageUrl={hero.imageUrl}
              onClick={() => setSelectedHero(hero.id)}
              isPlaying={false}
            />
          ))}
        </div>

        {selectedHero && (
          <div className="mt-8">
            <h2 className="text-2xl text-white mb-4">Select a voice line for {heroes.find(hero => hero.id === selectedHero)?.name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {heroes.find(hero => hero.id === selectedHero)?.voicelines.map((line, index) => (
                <button
                  key={index}
                  onClick={() => playSound(line.audio)}
                  className="p-4 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition"
                >
                  {line.text}
                </button>
              ))}
            </div>
          </div>
        )}
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