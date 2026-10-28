'use client';

import React, { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { DEFAULT_CHARACTER, accountFromName, randomCharacter, type Character, type User } from '@/lib/character';
import { tournamentKey } from '@/lib/tournament';

export type ScoreRecord = {
  score: number;
  stats: Record<string, number>;
  at: string;
};

export type TournamentState = {
  key: string;
  entered: boolean;
  games: Record<string, { score: number; points: number }>;
};

export type CustomTournament = {
  code: string;
  name: string;
  games: string[];
  endsAt: string;
  createdAt: string;
  host: string;
  durationHours: number;
};

export type Submission = {
  id: string;
  name: string;
  url: string;
  by: string;
  description: string;
  categories: string[];
  submittedAt: string;
  status: 'pending';
};

type State = {
  user: User | null;
  favorites: string[];
  ratings: Record<string, number>;
  scores: Record<string, ScoreRecord>;
  tournament: TournamentState;
  customTournaments: CustomTournament[];
  submissions: Submission[];
  email: string;
  challengeDone: string[];
};

const initialState: State = {
  user: null,
  favorites: [],
  ratings: {},
  scores: {},
  tournament: { key: tournamentKey(), entered: false, games: {} },
  customTournaments: [],
  submissions: [],
  email: '',
  challengeDone: [],
};

type Toast = { id: number; message: string } | null;

type ContextValue = State & {
  hydrated: boolean;
  isSignedIn: boolean;
  currentTournamentEntered: boolean;
  toast: Toast;
  authOpen: boolean;
  openAuth: () => void;
  closeAuth: () => void;
  notify: (message: string) => void;
  signIn: (name: string, character?: Character) => void;
  signOut: () => void;
  updateUser: (patch: Partial<Pick<User, 'name' | 'account'>> & { character?: Character }) => void;
  toggleFavorite: (slug: string) => void;
  isFavorite: (slug: string) => boolean;
  rateGame: (slug: string, rating: number) => void;
  saveScore: (slug: string, stats: Record<string, number>) => void;
  enterTournament: () => void;
  recordTournamentGame: (slug: string, points: number, score: number) => void;
  createTournament: (name: string, games: string[], durationHours: number) => CustomTournament;
  addSubmission: (data: Omit<Submission, 'id' | 'submittedAt' | 'status'>) => void;
  subscribeEmail: (email: string) => void;
  markChallenge: (date: string) => void;
};

const AppContext = createContext<ContextValue | null>(null);
const STORAGE_KEY = 'startng:v1';

function readState(): State {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return initialState;
    const parsed = JSON.parse(raw);
    return { ...initialState, ...parsed, tournament: { ...initialState.tournament, ...(parsed.tournament || {}) } };
  } catch {
    return initialState;
  }
}

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<State>(initialState);
  const [hydrated, setHydrated] = useState(false);
  const [toast, setToast] = useState<Toast>(null);
  const [authOpen, setAuthOpen] = useState(false);
  const toastId = useRef(0);

  useEffect(() => {
    setState(readState());
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {}
  }, [state, hydrated]);

  const notify = useCallback((message: string) => {
    setToast({ id: ++toastId.current, message });
  }, []);

  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => setToast(null), 3200);
    return () => clearTimeout(timer);
  }, [toast]);

  const signIn = useCallback((name: string, character?: Character) => {
    setState((prev) => {
      const clean = name.trim().slice(0, 28) || 'Player';
      const user: User = prev.user
        ? { ...prev.user, name: clean, account: prev.user.account || accountFromName(clean), character: character ?? prev.user.character }
        : {
            id: Math.floor(100000 + Math.random() * 899999),
            name: clean,
            account: accountFromName(clean),
            character: character ?? randomCharacter(),
            joined: new Date().toISOString(),
          };
      return { ...prev, user };
    });
    setAuthOpen(false);
    notify(`Welcome, ${name.trim() || 'Player'}.`);
  }, [notify]);

  const signOut = useCallback(() => {
    setState((prev) => ({ ...prev, user: null }));
    notify('Signed out. See you soon.');
  }, [notify]);

  const updateUser = useCallback((patch: Partial<Pick<User, 'name' | 'account'>> & { character?: Character }) => {
    setState((prev) => {
      if (!prev.user) return prev;
      const nextName = (patch.name ?? prev.user.name).trim().slice(0, 28) || prev.user.name;
      return {
        ...prev,
        user: {
          ...prev.user,
          ...patch,
          name: nextName,
          account: (patch.account ?? prev.user.account).trim().slice(0, 28) || prev.user.account,
          character: patch.character ?? prev.user.character,
        },
      };
    });
    notify('Character saved.');
  }, [notify]);

  const toggleFavorite = useCallback((slug: string) => {
    setState((prev) => {
      const has = prev.favorites.includes(slug);
      return { ...prev, favorites: has ? prev.favorites.filter((s) => s !== slug) : [...prev.favorites, slug] };
    });
  }, []);

  const isFavorite = useCallback((slug: string) => state.favorites.includes(slug), [state.favorites]);

  const rateGame = useCallback((slug: string, rating: number) => {
    setState((prev) => ({ ...prev, ratings: { ...prev.ratings, [slug]: rating } }));
    notify(`Rated ${rating} star${rating === 1 ? '' : 's'}. Thanks!`);
  }, [notify]);

  const saveScore = useCallback((slug: string, stats: Record<string, number>) => {
    const score = Math.max(0, Math.round(Number(Object.values(stats)[0] ?? 0)));
    if (!score) return;
    setState((prev) => {
      const current = prev.scores[slug];
      if (current && current.score >= score) return prev;
      return { ...prev, scores: { ...prev.scores, [slug]: { score, stats, at: new Date().toISOString() } } };
    });
  }, []);

  const enterTournament = useCallback(() => {
    setState((prev) => ({ ...prev, tournament: { ...prev.tournament, key: tournamentKey(), entered: true } }));
    notify('You are in. Play a tournament game to score.');
  }, [notify]);

  const recordTournamentGame = useCallback((slug: string, points: number, score: number) => {
    setState((prev) => {
      const key = tournamentKey();
      const base = prev.tournament.key === key ? prev.tournament : { key, entered: prev.tournament.entered, games: {} };
      const existing = base.games[slug];
      const best = !existing || points > existing.points || (points === existing.points && score > existing.score)
        ? { score, points }
        : existing;
      return { ...prev, tournament: { ...base, key, games: { ...base.games, [slug]: best } } };
    });
  }, []);

  const createTournament = useCallback((name: string, games: string[], durationHours: number) => {
    const code = Array.from({ length: 6 }, () => 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'[Math.floor(Math.random() * 32)]).join('');
    const t: CustomTournament = {
      code,
      name: name.trim() || 'Friends tournament',
      games,
      durationHours,
      endsAt: new Date(Date.now() + durationHours * 3600000).toISOString(),
      createdAt: new Date().toISOString(),
      host: 'You',
    };
    setState((prev) => ({ ...prev, customTournaments: [t, ...prev.customTournaments] }));
    return t;
  }, []);

  const addSubmission = useCallback((data: Omit<Submission, 'id' | 'submittedAt' | 'status'>) => {
    const submission: Submission = {
      ...data,
      id: Math.random().toString(36).slice(2, 10),
      submittedAt: new Date().toISOString(),
      status: 'pending',
    };
    setState((prev) => ({ ...prev, submissions: [submission, ...prev.submissions] }));
    notify('Game submitted. We will take a look.');
  }, [notify]);

  const subscribeEmail = useCallback((email: string) => {
    setState((prev) => ({ ...prev, email }));
    notify('You are on the list. One email at 6 PM.');
  }, [notify]);

  const markChallenge = useCallback((date: string) => {
    setState((prev) => ({
      ...prev,
      challengeDone: prev.challengeDone.includes(date) ? prev.challengeDone : [...prev.challengeDone, date],
    }));
  }, []);

  const currentTournamentEntered = state.tournament.key === tournamentKey() && state.tournament.entered;

  const value = useMemo<ContextValue>(() => ({
    ...state,
    hydrated,
    isSignedIn: Boolean(state.user),
    currentTournamentEntered,
    toast,
    authOpen,
    openAuth: () => setAuthOpen(true),
    closeAuth: () => setAuthOpen(false),
    notify,
    signIn,
    signOut,
    updateUser,
    toggleFavorite,
    isFavorite,
    rateGame,
    saveScore,
    enterTournament,
    recordTournamentGame,
    createTournament,
    addSubmission,
    subscribeEmail,
    markChallenge,
  }), [state, hydrated, currentTournamentEntered, toast, authOpen, notify, signIn, signOut, updateUser, toggleFavorite, isFavorite, rateGame, saveScore, enterTournament, recordTournamentGame, createTournament, addSubmission, subscribeEmail, markChallenge]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp(): ContextValue {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used inside AppProvider');
  return ctx;
}
