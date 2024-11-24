interface Hero {
  id: string;
  name: string;
  role: 'Tank' | 'Damage' | 'Support';
  color: string;
  imageUrl: string;
  voicelines: {
    text: string;
    audio: string;
  }[]
  enabled: boolean;
}

export const heroes: Hero[] = [

  {
    id: 'ana',
    name: 'Ana',
    role: 'Support',
    color: 'from-yellow-400 to-yellow-600',
    imageUrl: '/icons/ana.png',
    enabled: true,
    voicelines: [
      {
        text: "Vidik.",
        audio: '/sounds/ana1.mp3'
      },
      {
        text: "Vidik!",
        audio: '/sounds/ana2.mp3'
      }
    ]
  },
  {
    id: 'ashe',
    name: 'Ashe',
    role: 'Damage',
    color: 'from-red-400 to-red-600',
    imageUrl: '/icons/ashe.png',
    enabled: true,
    voicelines: [
      {
        text: "Bob!",
        audio: '/sounds/ashe1.mp3'
      }
    ]
  },
  {
    id: 'baptiste',
    name: 'Baptiste',
    role: 'Support',
    color: 'from-yellow-400 to-yellow-600',
    imageUrl: '/icons/baptiste.png',
    enabled: true,
    voicelines: [
      {
        text: "Vydrbanec ujo!",
        audio: '/sounds/baptiste1.mp3'
      }
    ]
  },
  {
    id: 'bastion',
    name: 'Bastion',
    role: 'Damage',
    color: 'from-red-400 to-red-600',
    imageUrl: '/icons/bastion.png',
    enabled: false,
    voicelines: [
      {
        text: "*Happy beeping*",
        audio: '/sounds/bastion1.mp3'
      }
    ]
  },
  {
    id: 'brigitte',
    name: 'Brigitte',
    role: 'Support',
    color: 'from-yellow-400 to-yellow-600',
    imageUrl: '/icons/brig.png',
    enabled: false,
    voicelines: [
      {
        text: "Rally to me!",
        audio: '/sounds/brig1.mp3'
      }
    ]
  },
  {
    id: 'doomfist',
    name: 'Doomfist',
    role: 'Tank',
    color: 'from-gray-400 to-gray-600',
    imageUrl: '/icons/doomfist.png',
    enabled: true,
    voicelines: [
      {
        text: "Meteorit",
        audio: '/sounds/doomfist1.mp3'
      }
    ]
  },
  {
    id: 'dva',
    name: 'D.Va',
    role: 'Tank',
    color: 'from-gray-400 to-gray-600',
    imageUrl: '/icons/dva.png',
    enabled: true,
    voicelines: [
      {
        text: "Is this EZ mode? ",
        audio: '/sounds/dva1.mp3'
      },
      {
        text: "Nerf this!",
        audio: '/sounds/dva2.mp3'
      }
    ]
  },
  {
    id: 'echo',
    name: 'Echo',
    role: 'Damage',
    color: 'from-red-400 to-red-600',
    imageUrl: '/icons/echo.png',
    enabled: false,
    voicelines: [
      {
        text: "Adapting to new threats.",
        audio: '/sounds/echo1.mp3'
      }
    ]
  },
  {
    id: 'genji',
    name: 'Genji',
    role: 'Damage',
    color: 'from-red-400 to-red-600',
    imageUrl: '/icons/genji.png',
    enabled: true,
    voicelines: [
      {
        text: "Judžin",
        audio: '/sounds/genji1.mp3'
      },
      {
        text: "Judžin Judžin ",
        audio: '/sounds/genji2.mp3'
      },
      {
        text: "Judžin no ken wo kurae!",
        audio: '/sounds/genji3.mp3'
      }
    ]
  },
  {
    id: 'hanzo',
    name: 'Hanzo',
    role: 'Damage',
    color: 'from-red-400 to-red-600',
    imageUrl: '/icons/hanzo.png',
    enabled: false,
    voicelines: [
      {
        text: "Ryuga waga teki wo kurau!",
        audio: '/sounds/hanzo1.mp3'
      }
    ]
  },
  {
    id: 'illari',
    name: 'Illari',
    role: 'Support',
    color: 'from-yellow-400 to-yellow-600',
    imageUrl: '/icons/ilari.png',
    enabled: true,
    voicelines: [
      {
        text: "Želary",
        audio: '/sounds/ilari1.mp3'
      }
    ]
  },
  {
    id: 'junker-queen',
    name: 'Junker Queen',
    role: 'Tank',
    color: 'from-gray-400 to-gray-600',
    imageUrl: '/icons/junkerqueen.png',
    enabled: false,
    voicelines: [
      {
        text: "Bow to your Queen!",
        audio: '/sounds/junkerqueen1.mp3'
      }
    ]
  },
  {
    id: 'junkrat',
    name: 'Junkrat',
    role: 'Damage',
    color: 'from-red-400 to-red-600',
    imageUrl: '/icons/junkrat.png',
    enabled: false,
    voicelines: [
      {
        text: "Fire in the hole!",
        audio: 'sounds/junkrat1.mp3'
      }
    ]
  },
  {
    id: 'kiriko',
    name: 'Kiriko',
    role: 'Support',
    color: 'from-yellow-400 to-yellow-600',
    imageUrl: '/icons/kiriko.png',
    enabled: true,
    voicelines: [
      {
        text: "Karate!",
        audio: '/sounds/kiriko1.mp3'
      },
      {
        text: "Karate",
        audio: '/sounds/kiriko2.mp3'
      },
      {
        text: "Katsune",
        audio: '/sounds/kiriko3.mp3'
      }
    ]
  },
  {
    id: 'lifeweaver',
    name: 'Lifeweaver',
    role: 'Support',
    color: 'from-yellow-400 to-yellow-600',
    imageUrl: '/icons/lifeweaver.png',
    enabled: true,
    voicelines: [
      {
        text: "Fangšuit!",
        audio: '/sounds/liveweaver1.mp3'
      }
    ]
  },
  {
    id: 'lucio',
    name: 'Lúcio',
    role: 'Support',
    color: 'from-yellow-400 to-yellow-600',
    imageUrl: '/icons/lucio.png',
    enabled: true,
    voicelines: [
      {
        text: "Oh, let's break it down!",
        audio: '/sounds/lucio1.mp3'
      },
      {
        text: "Drop the beat!",
        audio: '/sounds/lucio2.mp3'
      }
    ]
  },
  {
    id: 'mauga',
    name: 'Mauga',
    role: 'Tank',
    color: 'from-gray-400 to-gray-600',
    imageUrl: '/icons/mauga.png',
    enabled: true,
    voicelines: [
      {
        text: "Kiki!",
        audio: '/sounds/mauga1.mp3'
      },
      {
        text: "Kikiriki!",
        audio: '/sounds/mauga2.mp3'
      }
    ]
  },
  {
    id: 'mei',
    name: 'Mei',
    role: 'Damage',
    color: 'from-red-400 to-red-600',
    imageUrl: '/icons/mei.png',
    enabled: true,
    voicelines: [
      {
        text: "Tonzo bulshitto!",
        audio: '/sounds/mei1.mp3'
      }
    ]
  },
  {
    id: 'mercy',
    name: 'Mercy',
    role: 'Support',
    color: 'from-yellow-400 to-yellow-600',
    imageUrl: '/icons/mercy.png',
    enabled: true,
    voicelines: [
      {
        text: "Heroes never die!",
        audio: '/sounds/mercy1.mp3'
      },
      {
        text: "Heroes never die!",
        audio: '/sounds/mercy2.mp3'
      },
      {
        text: "Heroes never die!",
        audio: '/sounds/mercy3.mp3'
      }
    ]
  },
  {
    id: 'moira',
    name: 'Moira',
    role: 'Support',
    color: 'from-yellow-400 to-yellow-600',
    imageUrl: '/icons/moira.png',
    enabled: false,
    voicelines: [
      {
        text: "Brilliant!",
        audio: '/sounds/moira1.mp3'
      }
    ]
  },
  {
    id: 'orisa',
    name: 'Orisa',
    role: 'Tank',
    color: 'from-gray-400 to-gray-600',
    imageUrl: '/icons/orisa.png',
    enabled: true,
    voicelines: [
      {
        text: "Baail moore!",
        audio: '/sounds/orisa1.mp3'
      }
    ]
  },
  {
    id: 'pharah',
    name: 'Pharah',
    role: 'Damage',
    color: 'from-red-400 to-red-600',
    imageUrl: '/icons/pharah.png',
    enabled: true,
    voicelines: [
      {
        text: "Justice rains from above!",
        audio: '/sounds/pharah1.mp3'
      },
      {
        text: "Justiční stráž!",
        audio: '/sounds/pharah2.mp3'
      }
    ]
  },
  {
    id: 'reaper',
    name: 'Reaper',
    role: 'Damage',
    color: 'from-red-400 to-red-600',
    imageUrl: '/icons/reaper.png',
    enabled: false,
    voicelines: [
      {
        text: "Die die die!",
        audio: '/sounds/reaper1.mp3'
      }
    ]
  },
  {
    id: 'reinhardt',
    name: 'Reinhardt',
    role: 'Tank',
    color: 'from-gray-400 to-gray-600',
    imageUrl: '/icons/reinhardt.png',
    enabled: true,
    voicelines: [
      {
        text: "Hammer down!",
        audio: '/sounds/reinhardt1.mp3'
      },
    ]   
  },
  {
    id: 'roadhog',
    name: 'Roadhog',
    role: 'Tank',
    color: 'from-gray-400 to-gray-600',
    imageUrl: '/icons/roadhog.png',
    enabled: false,
    voicelines: [
      {
        text: "I'm a one man apocalypse.",
        audio: '/sounds/roadhog1.mp3'
      }
    ]
  },
  {
    id: 'sigma',
    name: 'Sigma',
    role: 'Tank',
    color: 'from-gray-400 to-gray-600',
    imageUrl: '/icons/sigma.png',
    enabled: true,
    voicelines: [
      {
        text: "What is that melody?",
        audio: '/sounds/sigma1.mp3'
      }
    ]
  },
  {
    id: 'sojourn',
    name: 'Sojourn',
    role: 'Damage',
    color: 'from-red-400 to-red-600',
    imageUrl: '/icons/soujourn.png',
    enabled: true,
    voicelines: [
      {
        text: "This ends now!",
        audio: '/sounds/soujourn1.mp3'
      }
    ]
  },
  {
    id: 'soldier-76',
    name: 'Soldier: 76',
    role: 'Damage',
    color: 'from-red-400 to-red-600',
    imageUrl: '/icons/soldier.png',
    enabled: true,
    voicelines: [
      {
        text: "I÷m man on a mission!",
        audio: '/sounds/soldier1.mp3'
      }
    ]
  },
  {
    id: 'sombra',
    name: 'Sombra',
    role: 'Damage',
    color: 'from-red-400 to-red-600',
    imageUrl: '/icons/sombra.png',
    enabled: true,
    voicelines: [
      {
        text: "Skibidi sombra",
        audio: '/sounds/sombra1.mp3'
      }
    ]
  },
  {
    id: 'symmetra',
    name: 'Symmetra',
    role: 'Damage',
    color: 'from-red-400 to-red-600',
    imageUrl: '/icons/symmetra.png',
    enabled: false,
    voicelines: [
      {
        text: "Perfect harmony.",
        audio: '/sounds/symmetra1.mp3'
      }
    ]
  },
  {
    id: 'torbjorn',
    name: 'Torbjörn',
    role: 'Damage',
    color: 'from-red-400 to-red-600',
    imageUrl: '/icons/torbjorn.png',
    enabled: true,
    voicelines: [
      {
        text: "My turret!",
        audio: '/sounds/torbjorn1.mp3'
      }
    ]
  },
  {
    id: 'tracer',
    name: 'Tracer',
    role: 'Damage',
    color: 'from-red-400 to-red-600',
    imageUrl: '/icons/tracer.png',
    enabled: false,
    voicelines: [
      {
        text: "Cheers love, the cavalry's here!",
        audio: '/sounds/tracer1.mp3'
      }
    ]
  },
  {
    id: 'venture',
    name: 'Venture',
    role: 'Damage',
    color: 'from-red-400 to-red-600',
    imageUrl: '/icons/venture.png',
    enabled: true,
    voicelines: [
      {
        text: "Excavation initiation!",
        audio: '/sounds/venture1.mp3'
      },
      {
        text: "Whopsi daisy",
        audio: '/sounds/venture2.mp3'
      }
    ]
  },
  {
    id: 'widowmaker',
    name: 'Widowmaker',
    role: 'Damage',
    color: 'from-red-400 to-red-600',
    imageUrl: '/icons/widowmaker.png',
    enabled: true,
    voicelines: [
      {
        text: "I got you in my sights.",
        audio: '/sounds/widowmaker1.mp3'
      }
    ]
  },
  {
    id: 'wrecking-ball',
    name: 'Wrecking Ball',
    role: 'Tank',
    color: 'from-gray-400 to-gray-600',
    imageUrl: '/icons/wreckingball.png',
    enabled: true,
    voicelines: [
      {
        text: "Like a wrecking ball",
        audio: '/sounds/wreckingball1.mp3'
      }
    ]
  },
  {
    id: 'zarya',
    name: 'Zarya',
    role: 'Tank',
    color: 'from-gray-400 to-gray-600',
    imageUrl: '/icons/zarya.png',
    enabled: true,
    voicelines: [
      {
        text: "Fire at will!",
        audio: '/sounds/zarya1.mp3'
      }
    ]
  },
  {
    id: 'zenyatta',
    name: 'Zenyatta',
    role: 'Support',
    color: 'from-yellow-400 to-yellow-600',
    imageUrl: '/icons/zenyatta.png',
    enabled: true,
    voicelines: [
      {
        text: "Into the Iris.",
        audio: '/sounds/zenyatta1.mp3'
      },
      {
        text: "Experience tranquility.",
        audio: '/sounds/zenyatta2.mp3'
      }
    ]
  }                                   
];