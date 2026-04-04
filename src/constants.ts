import { QuizQuestion, User } from './types';

export const MOCK_USER: User = {
  name: 'Leo "The Brave"',
  xp: 2450,
  rank: 42,
  avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=100',
};

export const LEADERBOARD_DATA: User[] = [
  {
    name: 'Alex "The Compass" Rivera',
    xp: 12840,
    rank: 1,
    avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=100',
    country: '🇬🇧',
    missions: 42,
    badge: 'Ocean Master'
  },
  {
    name: 'Sarah Explorer',
    xp: 11200,
    rank: 2,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100',
    country: '🇨🇦'
  },
  {
    name: 'Kenji Sato',
    xp: 10950,
    rank: 3,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100',
    country: '🇯🇵'
  },
  {
    name: 'Amina Al-Fayed',
    xp: 9400,
    rank: 4,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100',
    country: '🇪🇬'
  },
  {
    name: 'Mateo Silva',
    xp: 8120,
    rank: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100',
    country: '🇧🇷'
  }
];

export const WORLD_QUIZ: QuizQuestion[] = [
  {
    id: '1',
    type: 'flag',
    question: 'Which country does this flag belong to?',
    image: 'https://images.unsplash.com/photo-1550733231-6f2c7703430e?auto=format&fit=crop&q=80&w=600', // Brazil
    options: ['Brazil', 'Argentina', 'Chile', 'Peru'],
    correctAnswer: 'Brazil'
  },
  {
    id: '2',
    type: 'flag',
    question: 'Which country does this flag belong to?',
    image: 'https://images.unsplash.com/photo-1526481280693-3bfa75ac88b1?auto=format&fit=crop&q=80&w=600', // Japan
    options: ['China', 'South Korea', 'Japan', 'Vietnam'],
    correctAnswer: 'Japan'
  },
  {
    id: '3',
    type: 'flag',
    question: 'Which country does this flag belong to?',
    image: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&q=80&w=600', // Italy
    options: ['France', 'Italy', 'Ireland', 'Mexico'],
    correctAnswer: 'Italy'
  }
];
