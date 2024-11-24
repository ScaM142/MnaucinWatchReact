import React, { useState, useRef } from 'react';
import { heroes } from './data/heroes';
import { HeroButton } from './components/HeroButton';
import { RoleFilter } from './components/RoleFilter';

interface Position {
  x: number;
  y: number;
}
function App() {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [selectedHero, setSelectedHero] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [currentAudio, setCurrentAudio] = useState<string>('');
  const [isPlaying, setIsPlaying] = useState(false);
  const [modalPosition, setModalPosition] = useState<Position | null>(null);

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
  
  const handleHeroClick = (heroId: string, event: React.MouseEvent) => {
    event.stopPropagation();
  
    const button = event.currentTarget as HTMLElement;
    const rect = button.getBoundingClientRect();
    
    // Center position calculation
    const position = {
      x: rect.left + (rect.width / 2), // Center horizontally
      y: rect.bottom + window.scrollY
    };
  
    console.log('Modal position:', position); // Debug log
    
    setModalPosition(position);
    setSelectedHero(heroId);
  };

  const closeModal = () => {
    setSelectedHero(null);
    setModalPosition(null);
  };

  return (
    <div className="min-h-screen relative">

      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-12 px-4" onClick={(e) => {
        if ((e.target as HTMLElement).closest('.hero-button, .voicelines-modal') === null) {
          closeModal();
        }
      }}>
        <div 
          className="fixed inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{
            backgroundImage: 'url("/images/background.jpg")', // Add your image to public/images
            backgroundSize: 'cover',
          }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      <div className="relative z-10 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <h1 className="text-4xl font-bold text-white">MňaučinWatch</h1>
            </div>
          </div>

          <RoleFilter selectedRole={selectedRole} onRoleSelect={setSelectedRole} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 relative">
            {filteredHeroes.map(hero => (
              <HeroButton
                key={hero.id}
                name={hero.name}
                color={hero.color}
                text={hero.name}
                imageUrl={hero.imageUrl}
                onClick={(e) => handleHeroClick(hero.id, e)}
                isPlaying={false}
                className="hero-button"
              />
            ))}

            {selectedHero && modalPosition && (
              <div 
                className="voicelines-modal fixed bg-gray-800 p-4 rounded-lg shadow-lg"
                style={{
                  top: modalPosition?.y ?? 0,
                  left: modalPosition?.x ?? 0,
                  zIndex: 50,
                  minWidth: '200px',
                  transform: 'translate(-50%, 8px)', // Center horizontally with offset
                  border: '1px solid rgba(255,255,255,0.1)'
                }}
              >
                <div className="grid gap-2">
                  {heroes.find(h => h.id === selectedHero)?.voicelines.map((line, index) => (
                    <button
                      key={index}
                      onClick={(e) => {
                        e.stopPropagation();
                        playSound(line.audio);
                      }}
                      className="p-2 bg-gray-700 text-white rounded hover:bg-gray-600 
                                transition text-left w-full"
                    >
                      {line.text}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        </div>
        <audio ref={audioRef} />
      </div>
    </div>
  );
}

export default App;