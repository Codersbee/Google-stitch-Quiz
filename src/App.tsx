/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Compass, 
  Trophy, 
  Medal, 
  User as UserIcon, 
  ArrowRight, 
  Timer, 
  Target, 
  TrendingUp, 
  Star, 
  CheckCircle2, 
  Circle,
  Map as MapIcon,
  HelpCircle,
  Share2,
  Play,
  BookOpen,
  ChevronLeft,
  Zap
} from 'lucide-react';
import { Screen, QuizQuestion, QuizResult } from './types';
import { MOCK_USER, LEADERBOARD_DATA, WORLD_QUIZ } from './constants';

// --- Shared Components ---

const TopBar = ({ xp, onNavigate }: { xp: number, onNavigate: (s: Screen) => void }) => (
  <header className="fixed top-0 w-full z-50 glass-panel shadow-[0_12px_40px_rgba(35,44,81,0.06)] flex justify-between items-center px-6 py-4">
    <div 
      className="text-2xl font-black text-primary tracking-tight font-headline cursor-pointer italic"
      onClick={() => onNavigate('landing')}
    >
      GeoExplorer
    </div>
    <div className="flex items-center gap-4">
      <nav className="hidden md:flex gap-8 mr-8">
        <button onClick={() => onNavigate('landing')} className="text-on-surface-variant font-headline font-bold hover:text-primary transition-colors">Explore</button>
        <button onClick={() => onNavigate('quiz')} className="text-primary font-headline font-bold border-b-2 border-primary">Quizzes</button>
        <button onClick={() => onNavigate('leaderboard')} className="text-on-surface-variant font-headline font-bold hover:text-primary transition-colors">Badges</button>
      </nav>
      <div className="bg-primary-container/30 px-4 py-1.5 rounded-full flex items-center gap-2">
        <Star className="w-4 h-4 text-primary fill-primary" />
        <span className="font-headline font-bold text-lg text-primary">{xp.toLocaleString()} XP</span>
      </div>
      <div className="hover:scale-105 transition-transform cursor-pointer">
        <UserIcon className="text-primary w-8 h-8" />
      </div>
    </div>
  </header>
);

const BottomNav = ({ current, onNavigate }: { current: Screen, onNavigate: (s: Screen) => void }) => (
  <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-6 pt-3 glass-panel shadow-[0_-10px_40px_rgba(35,44,81,0.08)] md:hidden">
    <button onClick={() => onNavigate('landing')} className={`flex flex-col items-center gap-1 ${current === 'landing' ? 'text-primary' : 'text-on-surface-variant'}`}>
      <Compass className="w-6 h-6" />
      <span className="text-[10px] font-bold uppercase">Explore</span>
    </button>
    <button onClick={() => onNavigate('quiz')} className={`flex flex-col items-center gap-1 ${current === 'quiz' ? 'bg-primary text-white p-3 rounded-full -mt-8 shadow-lg' : 'text-on-surface-variant'}`}>
      <HelpCircle className="w-6 h-6" />
      <span className="text-[10px] font-bold uppercase">Quizzes</span>
    </button>
    <button onClick={() => onNavigate('leaderboard')} className={`flex flex-col items-center gap-1 ${current === 'leaderboard' ? 'text-primary' : 'text-on-surface-variant'}`}>
      <Trophy className="w-6 h-6" />
      <span className="text-[10px] font-bold uppercase">Badges</span>
    </button>
    <button className="flex flex-col items-center gap-1 text-on-surface-variant">
      <UserIcon className="w-6 h-6" />
      <span className="text-[10px] font-bold uppercase">Profile</span>
    </button>
  </nav>
);

// --- Screen Components ---

const LandingScreen = ({ onStartQuiz }: { onStartQuiz: () => void, key?: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    className="pt-28 pb-32 px-6 max-w-7xl mx-auto"
  >
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      <div className="lg:col-span-5 space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary-container text-secondary font-headline font-bold text-sm">
          <Compass className="w-4 h-4" />
          NEW EXPEDITION AVAILABLE
        </div>
        <h1 className="text-6xl md:text-7xl font-headline font-extrabold text-on-surface leading-tight tracking-tight">
          World <span className="text-primary italic">Explorer</span> Quiz
        </h1>
        <p className="text-xl text-on-surface-variant font-medium max-w-lg">
          Discover amazing places, fun facts, and flags from around the globe!
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button 
            onClick={onStartQuiz}
            className="px-10 py-5 bg-gradient-to-br from-primary to-primary-container text-white rounded-xl font-headline font-extrabold text-xl shadow-lg hover:scale-[1.03] active:scale-95 transition-all flex items-center justify-center gap-3"
          >
            Start Quiz <ArrowRight className="w-6 h-6" />
          </button>
          <button className="px-10 py-5 bg-white/40 border border-white/20 backdrop-blur-md text-primary rounded-xl font-headline font-bold text-xl hover:bg-white/60 transition-all">
            Daily Challenge
          </button>
        </div>
        <div className="flex items-center gap-6 pt-4">
          <div className="flex -space-x-3">
            {[1, 2, 3].map(i => (
              <img 
                key={i}
                src={`https://i.pravatar.cc/100?img=${i + 10}`} 
                className="w-12 h-12 rounded-full border-4 border-white"
                alt="User"
              />
            ))}
          </div>
          <div className="text-sm font-bold text-on-surface-variant">
            <span className="text-primary">+4.2k</span> explorers active now
          </div>
        </div>
      </div>

      <div className="lg:col-span-7 relative">
        <div className="absolute inset-0 bg-primary-container/20 rounded-full blur-[100px] -z-10 transform scale-110"></div>
        <div className="relative bg-white/40 p-4 rounded-xl border-4 border-white shadow-2xl overflow-hidden glass-panel">
          <img 
            src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&q=80&w=800" 
            className="w-full h-auto rounded-lg object-cover aspect-[4/3]"
            alt="World Map"
          />
          <div className="absolute top-8 left-8 bg-white p-4 rounded-lg shadow-xl flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-tertiary-container flex items-center justify-center text-white">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <div className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Destination</div>
              <div className="text-sm font-black text-on-surface">Great Barrier Reef</div>
            </div>
          </div>
          <div className="absolute bottom-8 right-8 bg-white p-4 rounded-lg shadow-xl flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-secondary">
              <Medal className="w-6 h-6" />
            </div>
            <div>
              <div className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">New Badge</div>
              <div className="text-sm font-black text-on-surface">Ocean Master</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <section className="mt-32">
      <h2 className="text-3xl font-headline font-extrabold text-on-surface mb-12">Level up your geography skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { icon: MapIcon, title: 'Interactive Maps', desc: 'Zoom into specific regions and discover hidden secrets.', color: 'bg-primary' },
          { icon: HelpCircle, title: 'Fun Fact Challenges', desc: 'Learn about animals, local foods, and traditions.', color: 'bg-secondary' },
          { icon: Medal, title: 'Badge System', desc: 'Collect limited edition badges as you master the globe.', color: 'bg-tertiary' }
        ].map((feat, i) => (
          <div key={i} className="p-8 rounded-xl bg-white/40 border border-white/20 glass-panel hover:scale-[1.02] transition-transform flex flex-col gap-6">
            <div className={`w-14 h-14 rounded-2xl ${feat.color} flex items-center justify-center text-white shadow-lg`}>
              <feat.icon className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-2xl font-headline font-extrabold text-on-surface mb-3">{feat.title}</h3>
              <p className="text-on-surface-variant font-medium leading-relaxed">{feat.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  </motion.div>
);

const QuizScreen = ({ questions, onComplete }: { questions: QuizQuestion[], onComplete: (res: QuizResult) => void, key?: string }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [startTime] = useState(Date.now());

  const current = questions[currentIdx];
  const progress = ((currentIdx + 1) / questions.length) * 100;

  const handleNext = () => {
    if (selected === current.correctAnswer) setScore(s => s + 1);
    
    if (currentIdx < questions.length - 1) {
      setCurrentIdx(i => i + 1);
      setSelected(null);
    } else {
      const duration = Math.floor((Date.now() - startTime) / 1000);
      const minutes = Math.floor(duration / 60);
      const seconds = duration % 60;
      onComplete({
        score: score + (selected === current.correctAnswer ? 1 : 0),
        total: questions.length,
        time: `${minutes}:${seconds.toString().padStart(2, '0')}`,
        accuracy: Math.round(((score + (selected === current.correctAnswer ? 1 : 0)) / questions.length) * 100),
        improvement: 12,
        xpEarned: 400,
        newBadge: 'Ocean Master'
      });
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24 px-6 max-w-4xl mx-auto w-full flex flex-col items-center"
    >
      <div className="w-full mb-12 flex flex-col gap-2">
        <div className="flex justify-between items-center font-headline font-bold text-primary px-2">
          <span className="text-sm uppercase tracking-widest">Quest Progress</span>
          <span className="bg-primary text-white px-3 py-1 rounded-full text-xs">{currentIdx + 1}/{questions.length}</span>
        </div>
        <div className="w-full h-3 bg-white/40 rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            className="h-full bg-gradient-to-r from-primary to-primary-container rounded-full"
          />
        </div>
      </div>

      <h1 className="font-headline font-extrabold text-4xl md:text-5xl text-on-surface text-center mb-10 tracking-tight">
        {current.question}
      </h1>

      <div className="relative w-full max-w-2xl mb-12">
        <div className="bg-white p-6 rounded-xl shadow-2xl transform hover:rotate-1 transition-transform">
          <div className="aspect-[3/2] rounded-lg overflow-hidden border-[8px] border-surface">
            <img src={current.image} className="w-full h-full object-cover" alt="Question" />
          </div>
        </div>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {current.options.map((opt, i) => (
          <button
            key={opt}
            onClick={() => setSelected(opt)}
            className={`group relative flex items-center justify-between p-6 rounded-full shadow-md transition-all duration-300 ${
              selected === opt 
                ? 'bg-primary text-white shadow-primary/30 scale-[1.02]' 
                : 'bg-white text-on-surface hover:bg-surface-container-low'
            }`}
          >
            <div className="flex items-center gap-5">
              <span className={`w-12 h-12 flex items-center justify-center rounded-full font-headline font-black text-xl ${
                selected === opt ? 'bg-white/20' : 'bg-surface-container-high text-primary'
              }`}>
                {String.fromCharCode(65 + i)}
              </span>
              <span className="font-headline font-bold text-2xl">{opt}</span>
            </div>
            {selected === opt ? <CheckCircle2 className="w-8 h-8" /> : <Circle className="w-8 h-8 opacity-0 group-hover:opacity-100" />}
          </button>
        ))}
      </div>

      <div className="w-full flex justify-between items-center mt-auto">
        <button 
          disabled={currentIdx === 0}
          onClick={() => setCurrentIdx(i => i - 1)}
          className="flex items-center gap-2 text-on-surface-variant font-headline font-bold hover:text-primary transition-colors disabled:opacity-30"
        >
          <ChevronLeft className="w-6 h-6" /> PREVIOUS
        </button>
        <button 
          disabled={!selected}
          onClick={handleNext}
          className="bg-gradient-to-br from-primary to-primary-container text-white px-12 py-5 rounded-full font-headline font-black text-xl shadow-lg hover:scale-105 active:scale-95 transition-all disabled:opacity-50"
        >
          {currentIdx === questions.length - 1 ? 'FINISH QUEST' : 'NEXT QUESTION'}
        </button>
      </div>
    </motion.div>
  );
};

const ResultsScreen = ({ result, onRestart, onNext }: { result: QuizResult, onRestart: () => void, onNext: () => void, key?: string }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    className="pt-28 pb-32 px-6 max-w-4xl mx-auto flex flex-col items-center"
  >
    <div className="text-center mb-12 relative">
      <motion.div 
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute -top-10 left-1/4"
      >
        <Star className="w-10 h-10 text-tertiary-container fill-tertiary-container" />
      </motion.div>
      <h1 className="font-headline text-6xl md:text-7xl font-extrabold text-primary mb-4 tracking-tighter">Congratulations!</h1>
      <p className="text-xl text-on-surface-variant font-medium">You've mastered the mysteries of the deep blue.</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-12">
      <div className="bg-white p-10 rounded-xl flex flex-col items-center justify-center shadow-xl">
        <span className="text-on-surface-variant font-headline font-bold uppercase tracking-widest text-xs mb-6">Your Expedition Score</span>
        <div className="text-8xl md:text-9xl font-headline font-black text-on-surface leading-none flex items-baseline">
          {result.score} <span className="text-4xl text-on-surface-variant/40 font-bold mx-2">/</span> <span className="text-4xl text-on-surface-variant/40 font-bold">{result.total}</span>
        </div>
        <div className="mt-8 flex items-center gap-2 bg-secondary-container/30 px-6 py-2 rounded-full">
          <Zap className="w-5 h-5 text-secondary fill-secondary" />
          <span className="text-secondary font-headline font-bold">+{result.xpEarned} XP Earned</span>
        </div>
      </div>

      <div className="bg-surface-container-highest p-10 rounded-xl flex flex-col items-center justify-center text-center shadow-xl">
        <div className="mb-4 bg-tertiary-container/20 text-tertiary px-4 py-1 rounded-full font-headline font-bold text-xs uppercase tracking-widest">New Badge Earned!</div>
        <div className="relative w-40 h-40 mb-6 flex items-center justify-center">
          <div className="absolute inset-0 bg-white rounded-full shadow-lg scale-90"></div>
          <div className="absolute inset-2 border-4 border-dashed border-tertiary-container rounded-full animate-[spin_10s_linear_infinite]"></div>
          <Medal className="w-24 h-24 text-tertiary-container relative z-10" />
        </div>
        <h3 className="font-headline text-2xl font-extrabold text-on-surface mb-2">{result.newBadge}</h3>
        <p className="text-on-surface-variant text-sm px-4">Awarded for identifying 80% of marine species correctly.</p>
      </div>

      <div className="md:col-span-2 bg-white/40 p-8 rounded-xl flex flex-wrap justify-around items-center gap-8 glass-panel">
        {[
          { icon: Timer, val: result.time, label: 'Completion Time', color: 'text-primary' },
          { icon: Target, val: `${result.accuracy}%`, label: 'Accuracy Rate', color: 'text-secondary' },
          { icon: TrendingUp, val: `+${result.improvement}%`, label: 'vs Last Attempt', color: 'text-tertiary' }
        ].map((stat, i) => (
          <div key={i} className="flex items-center gap-4">
            <div className={`w-12 h-12 rounded-full ${stat.color} bg-current/10 flex items-center justify-center`}>
              <stat.icon className="w-6 h-6" />
            </div>
            <div>
              <div className="text-on-surface font-bold font-headline">{stat.val}</div>
              <div className="text-xs text-on-surface-variant font-medium">{stat.label}</div>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="flex flex-col md:flex-row gap-6 w-full max-w-md">
      <button 
        onClick={onNext}
        className="flex-1 bg-gradient-to-r from-primary to-primary-container text-white py-5 rounded-xl font-headline font-extrabold text-lg shadow-lg hover:scale-[1.03] active:scale-95 transition-all flex items-center justify-center gap-2"
      >
        Next Expedition <ArrowRight className="w-6 h-6" />
      </button>
      <button 
        onClick={onRestart}
        className="flex-1 bg-white/60 text-primary py-5 rounded-xl font-headline font-bold text-lg hover:bg-white transition-all"
      >
        Try Again
      </button>
    </div>
  </motion.div>
);

const LeaderboardScreen = ({ user }: { user: typeof MOCK_USER, key?: string }) => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="pt-28 pb-40 px-6 max-w-4xl mx-auto"
  >
    <section className="mb-12 text-center md:text-left relative">
      <h1 className="font-headline font-extrabold text-5xl md:text-6xl text-on-surface leading-tight mb-4">
        Global Top <span className="text-primary italic">Explorers</span>
      </h1>
      <p className="text-on-surface-variant text-lg max-w-xl">
        The world's sharpest minds competing for the ultimate title. Will you be the next legendary cartographer?
      </p>
    </section>

    <div className="bg-gradient-to-br from-primary to-primary-container p-1 rounded-[3rem] shadow-2xl mb-12">
      <div className="bg-white rounded-[2.8rem] p-8 md:p-10 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
        <div className="relative">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-tertiary-container p-1 bg-white overflow-hidden shadow-xl">
            <img src={LEADERBOARD_DATA[0].avatar} className="w-full h-full object-cover" alt="Top Explorer" />
          </div>
          <div className="absolute -top-4 -right-2 bg-tertiary-container text-white p-3 rounded-full shadow-lg rotate-12">
            <Medal className="w-8 h-8" />
          </div>
        </div>
        <div className="flex-1 text-center md:text-left z-10">
          <div className="flex flex-col md:flex-row items-center gap-3 mb-2">
            <h2 className="font-headline font-bold text-3xl text-on-surface">{LEADERBOARD_DATA[0].name}</h2>
            <span className="text-2xl">{LEADERBOARD_DATA[0].country}</span>
          </div>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <div className="flex items-center gap-2 text-primary font-bold bg-primary/5 px-4 py-2 rounded-full">
              <Trophy className="w-5 h-5" />
              <span className="text-xl">{LEADERBOARD_DATA[0].xp.toLocaleString()} XP</span>
            </div>
            <div className="flex items-center gap-2 text-secondary font-bold bg-secondary/5 px-4 py-2 rounded-full">
              <Compass className="w-5 h-5" />
              <span>{LEADERBOARD_DATA[0].missions} Missions</span>
            </div>
          </div>
        </div>
        <div className="hidden lg:block text-right">
          <span className="block text-primary/10 font-black text-8xl italic">#1</span>
        </div>
      </div>
    </div>

    <div className="space-y-4">
      {LEADERBOARD_DATA.slice(1).map((entry) => (
        <div key={entry.rank} className="group bg-white/40 hover:bg-white transition-all duration-300 rounded-2xl p-5 flex items-center gap-4 md:gap-8 glass-panel">
          <span className="font-headline font-black text-2xl text-on-surface-variant w-8">{entry.rank}</span>
          <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-sm group-hover:scale-110 transition-transform">
            <img src={entry.avatar} className="w-full h-full object-cover" alt={entry.name} />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-lg text-on-surface">{entry.name}</h3>
            <p className="text-sm text-on-surface-variant flex items-center gap-1">
              <span>{entry.country}</span> • {entry.xp.toLocaleString()} XP
            </p>
          </div>
          <button className="bg-white/50 px-6 py-2 rounded-full font-bold text-primary group-hover:bg-primary group-hover:text-white transition-all">
            View
          </button>
        </div>
      ))}
    </div>

    <div className="fixed bottom-24 left-1/2 -translate-x-1/2 w-[calc(100%-3rem)] max-w-2xl z-40">
      <div className="bg-on-surface text-white p-6 rounded-2xl shadow-2xl flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="bg-primary/20 p-3 rounded-full">
            <span className="font-headline font-black text-xl text-primary-container">#{user.rank}</span>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-primary-container font-bold">Your Current Rank</p>
            <h4 className="font-headline font-bold text-lg">{user.name}</h4>
          </div>
        </div>
        <div className="text-right">
          <p className="text-primary-container font-bold text-xl">{user.xp.toLocaleString()} XP</p>
          <p className="text-xs text-white/50">Next rank in 150 XP</p>
        </div>
      </div>
    </div>
  </motion.div>
);

// --- Main App ---

export default function App() {
  const [screen, setScreen] = useState<Screen>('landing');
  const [user, setUser] = useState(MOCK_USER);
  const [result, setResult] = useState<QuizResult | null>(null);

  const handleQuizComplete = (res: QuizResult) => {
    setResult(res);
    setUser(u => ({ ...u, xp: u.xp + res.xpEarned }));
    setScreen('results');
  };

  return (
    <div className="min-h-screen topo-bg">
      <TopBar xp={user.xp} onNavigate={setScreen} />
      
      <main className="min-h-screen">
        <AnimatePresence mode="wait">
          {screen === 'landing' && (
            <LandingScreen key="landing" onStartQuiz={() => setScreen('quiz')} />
          )}
          {screen === 'quiz' && (
            <QuizScreen key="quiz" questions={WORLD_QUIZ} onComplete={handleQuizComplete} />
          )}
          {screen === 'results' && result && (
            <ResultsScreen 
              key="results" 
              result={result} 
              onRestart={() => setScreen('quiz')}
              onNext={() => setScreen('leaderboard')}
            />
          )}
          {screen === 'leaderboard' && (
            <LeaderboardScreen key="leaderboard" user={user} />
          )}
        </AnimatePresence>
      </main>

      <BottomNav current={screen} onNavigate={setScreen} />

      <footer className="hidden md:block w-full py-12 px-8 bg-white/20 backdrop-blur-md mt-12 border-t border-white/20">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 max-w-7xl mx-auto">
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="text-primary font-black text-xl uppercase italic font-headline">
              GeoExplorer
            </div>
            <p className="text-sm text-on-surface-variant">© 2024 Digital Explorer Field Kit</p>
          </div>
          <div className="flex gap-8">
            <a href="#" className="text-sm text-on-surface-variant hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-on-surface-variant hover:text-primary transition-colors">Parents' Portal</a>
            <a href="#" className="text-sm text-on-surface-variant hover:text-primary transition-colors">Safety First</a>
          </div>
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-white/40 flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors cursor-pointer">
              <Share2 className="w-5 h-5" />
            </div>
            <div className="w-10 h-10 rounded-full bg-white/40 flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors cursor-pointer">
              <HelpCircle className="w-5 h-5" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
