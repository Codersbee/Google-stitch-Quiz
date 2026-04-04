export interface User {
  name: string;
  xp: number;
  rank: number;
  avatar: string;
  country?: string;
  missions?: number;
  badge?: string;
}

export interface QuizQuestion {
  id: string;
  type: 'flag' | 'landmark';
  question: string;
  image: string;
  options: string[];
  correctAnswer: string;
}

export interface QuizResult {
  score: number;
  total: number;
  time: string;
  accuracy: number;
  improvement: number;
  xpEarned: number;
  newBadge?: string;
}

export type Screen = 'landing' | 'quiz' | 'results' | 'leaderboard';
