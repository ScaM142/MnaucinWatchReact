interface Hero {
  id: string;
  name: string;
  role: 'Tank' | 'Damage' | 'Support';
  color: string;
  imageUrl: string;
  voicelines: {
    text: string;
    audio: string;
  }[];
}

export const heroes: Hero[] = [
  {
    id: 'tracer',
    name: 'Tracer',
    role: 'Damage',
    color: 'from-orange-400 to-yellow-400',
    imageUrl: '/icons/tracer.png',
    voicelines: [
      {
        text: "Cheers love, the cavalry's here!",
        audio: 'https://cdn.pixabay.com/download/audio/2022/03/10/audio_c8c8a73467.mp3'
      },
      {
        text: "Ever get that feeling of déjà vu?",
        audio: 'https://cdn.pixabay.com/download/audio/2022/03/15/audio_c3b5cc3c44.mp3'
      }
    ]
  },
  {
    id: 'mercy',
    name: 'Mercy',
    role: 'Support',
    color: 'from-yellow-200 to-yellow-400',
    imageUrl: '/icons/mercy.png',
    voicelines: [
      {
        text: "Heroes never die!",
        audio: 'https://cdn.pixabay.com/download/audio/2022/03/19/audio_017a4edca6.mp3'
      },
      {
        text: "I'll be watching over you",
        audio: 'https://cdn.pixabay.com/download/audio/2022/03/25/audio_1c4a751f5e.mp3'
      }
    ]
  },
  {
    id: 'reinhardt',
    name: 'Reinhardt',
    role: 'Tank',
    color: 'from-gray-400 to-gray-600',
    imageUrl: '/icons/reinhardt.png',
    voicelines: [
      {
        text: "Hammer down!",
        audio: '/sounds/reinhardt1.mp3'
      },
    ]   
  }                                       
];