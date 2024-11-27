import React, { useState, useRef } from 'react';
import { heroes } from './data/heroes';
import { HeroButton } from './components/HeroButton';
import { RoleFilter } from './components/RoleFilter';
import { LoginModal } from './components/LoginModal';
import { Shield, Swords, Heart } from 'lucide-react'; // Import role icons


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

  const filteredHeroeEnabled = heroes.filter(hero => hero);

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

  const handleHeroClick = (heroId: string, enabled: boolean, event: React.MouseEvent) => {
    event.stopPropagation();

    const button = event.currentTarget as HTMLElement;
    const rect = button.getBoundingClientRect();
    console.log('click');
    // Center position calculation
    const position = {
      x: rect.left + (rect.width / 2) + window.scrollX, // Center horizontally
      y: rect.top+ window.scrollY// Position below the button
    };
    
    console.log('Modal position:', position); // Debug log

    if (enabled) {
      setModalPosition(position);
      setSelectedHero(heroId);
    }
  };

  const closeModal = () => {
    setSelectedHero(null);
    setModalPosition(null);
  };

  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem('isAuthenticated') === 'true';
  });

  // Add login handler
  const handleLogin = (hashedPassword: string) => {

    if (hashedPassword === import.meta.env.VITE_PASSWORD_HASH) {
      setIsAuthenticated(true);
      localStorage.setItem('isAuthenticated', 'true');
    } else {
      alert('No rizz!!');
    }
  };

  return (
    <div className="min-h-screen relative">
      {!isAuthenticated ? (
        <LoginModal onLogin={handleLogin} />
      ) : (

        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-12 px-4" onClick={(e) => {
          if ((e.target as HTMLElement).closest('.hero-button, .voicelines-modal') === null) {
            closeModal();
          }
        }}>
          <div
            className="fixed inset-0 bg-cover bg-center bg-no-repeat z-0"
            style={{
              backgroundImage: 'url("./images/background.jpg")', // Add your image to public/images
              backgroundSize: 'cover',
            }}
          >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>

          <div className="relative z-10  px-4">
            <div className="max-w-[90rem] mx-auto"> {/* Increased max width */}
              <div className="text-center mb-12">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <h1 className="text-6xl font-bold text-orange-500 ">MňaučinWatch</h1>
                </div>
              </div>
              {/* <RoleFilter selectedRole={selectedRole} onRoleSelect={setSelectedRole} /> */}
              {/* Role sections in columns */}
              <div className="flex flex-col lg:flex-row gap-16">
                {/* Tank Section */}
                <div className="flex-1">
                  <div className="flex items-center justify-center gap-3 mb-6"> {/* Added justify-center */}
                    <Shield className="w-16 h-16 text-gray-300" /> {/* Increased size */}
                    <h2 className="text-3xl font-bold text-white">Tank</h2>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"> {/* Added xl:grid-cols-4 */}
                    {filteredHeroes.filter(hero => hero.role === 'Tank').map(hero => (
                      <HeroButton
                        key={hero.id}
                        name={hero.name}
                        color={hero.color}
                        text={hero.name}
                        imageUrl={hero.imageUrl}
                        onClick={(e) => handleHeroClick(hero.id, hero.enabled, e)}
                        isPlaying={false}
                      >
                        {!hero.enabled && (
                          <div className="absolute inset-0 bg-gray-900 bg-opacity-75 rounded-lg flex items-center justify-center">
                            <span className="text-gray-400">Locked</span>
                          </div>
                        )}
                      </HeroButton>
                    ))}
                  </div>
                </div>

                {/* Damage Section */}
                <div className="flex-1">
                  <div className="flex items-center justify-center gap-3 mb-6">
                    <Swords className="w-16 h-16 text-red-400" />
                    <h2 className="text-3xl font-bold text-white">Damage</h2>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"> {/* Added xl:grid-cols-4 */}
                    {filteredHeroes.filter(hero => hero.role === 'Damage').map(hero => (
                      <HeroButton
                        key={hero.id}
                        name={hero.name}
                        color={hero.color}
                        text={hero.name}
                        imageUrl={hero.imageUrl}
                        onClick={(e) => handleHeroClick(hero.id, hero.enabled, e)}
                        isPlaying={false}
                        enabled={hero.enabled}
                      >
                        {!hero.enabled && (
                          <div className="absolute inset-0 bg-gray-900 bg-opacity-75 rounded-lg flex items-center justify-center">
                            <span className="text-gray-400">Locked</span>
                          </div>
                        )}
                      </HeroButton>
                    ))}
                  </div>
                </div>

                {/* Support Section */}
                <div className="flex-1">
                  <div className="flex items-center justify-center gap-3 mb-6">
                    <Heart className="w-16 h-16 text-yellow-400" />
                    <h2 className="text-3xl font-bold text-white">Support</h2>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"> {/* Added xl:grid-cols-4 */}
                    {filteredHeroes.filter(hero => hero.role === 'Support').map(hero => (
                      <HeroButton
                        key={hero.id}
                        name={hero.name}
                        color={hero.color}
                        text={hero.name}
                        imageUrl={hero.imageUrl}
                        onClick={(e) => handleHeroClick(hero.id, hero.enabled, e)}
                        isPlaying={false}
                        enabled={hero.enabled}
                      >
                        {!hero.enabled && (
                          <div className="absolute inset-0 bg-gray-900 bg-opacity-75 rounded-lg flex items-center justify-center">
                            <span className="text-gray-400">Locked</span>
                          </div>
                        )}
                      </HeroButton>
                    ))}
                  </div>
                </div>
              </div>
              {selectedHero && modalPosition && (
                <div
                  className="voicelines-modal absolute bg-gray-800 p-4 rounded-lg shadow-lg"
                  style={{
                    top: modalPosition.y + 8, // Position below the button with offset
                    left: modalPosition.x,
                    zIndex: 50,
                    minWidth: '200px',
                    transform: 'translate(-50%, 0)', // Center horizontally with offset
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
          <audio ref={audioRef} />
        </div>
      )}
    </div>
  );
}

export default App;