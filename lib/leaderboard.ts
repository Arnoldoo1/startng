import type { Game } from './data';

export type BoardEntry = {
  rank: number;
  name: string;
  color: string;
  score: number;
  stats: Record<string, number>;
  you?: boolean;
};

const NAMES: [string, string][] = [
  ['Peter', '#17b890'],
  ['Oyetoke', '#2ec4b6'],
  ['Chloe', '#6f9bf0'],
  ['Dave', '#292a23'],
  ['Mark', '#b383ef'],
  ['Hamzat', '#292a23'],
  ['Trini', '#4b7bec'],
  ['Temi', '#f5a640'],
  ['Sade', '#db2967'],
  ['Bola', '#2f7d32'],
  ['Kofi', '#8e4fd6'],
  ['Zainab', '#e8590c'],
  ['Ife', '#0c6e5a'],
  ['Nneka', '#c0392b'],
  ['Tunde', '#346fdf'],
  ['Amara', '#a55eea'],
  ['Yusuf', '#0b7285'],
  ['Efe', '#d9480f'],
  ['Dami', '#5c940d'],
  ['Lola', '#c2255c'],
  ['Femi', '#1864ab'],
  ['Ada', '#6741d9'],
  ['Seyi', '#087f5b'],
  ['Kemi', '#e67700'],
  ['Tobi', '#364fc7'],
  ['Chidi', '#a61e4d'],
  ['Bisi', '#2b8a3e'],
  ['Niyi', '#5f3dc4'],
];

function hash(value: string): number {
  let h = 2166136261;
  for (let i = 0; i < value.length; i++) {
    h ^= value.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function rng(seed: number) {
  let s = seed || 1;
  return () => {
    s ^= s << 13;
    s ^= s >>> 17;
    s ^= s << 5;
    return ((s >>> 0) % 100000) / 100000;
  };
}

export function seedBoard(game: Game): BoardEntry[] {
  const rand = rng(hash(game.slug));
  const count = 5 + (hash(game.slug) % 4);
  const base = Math.max(12, Math.min(4200, Math.round(game.plays * 4.6 + 34)));
  const entries = Array.from({ length: count }, (_, i) => {
    const [name, color] = NAMES[(hash(game.slug) + i * 3) % NAMES.length];
    const factor = 1 - i * 0.115 - rand() * 0.04;
    const first = Math.max(1, Math.round(base * factor));
    const stats: Record<string, number> = {};
    game.leaderboard.forEach((col, ci) => {
      if (ci === 0) stats[col.key] = first;
      else {
        const mult = col.key.includes('time') ? 3.2 : ci === 1 ? 0.42 : 0.18;
        stats[col.key] = Math.max(0, Math.round(first * mult + rand() * 6));
      }
    });
    return {
      rank: i + 1,
      name,
      color,
      score: first,
      stats: game.leaderboard.length ? stats : { score: first },
    };
  });
  return entries;
}

export function boardFor(game: Game, mine?: { name: string; color: string; score: number; stats: Record<string, number> } | null): BoardEntry[] {
  const entries = seedBoard(game);
  if (!mine || !mine.score) return entries;
  const entry: BoardEntry = {
    rank: 0,
    name: mine.name,
    color: mine.color,
    score: mine.score,
    stats: mine.stats,
    you: true,
  };
  const first = game.leaderboard[0];
  const lowest = first?.order === 'lowest';
  entries.push(entry);
  entries.sort((a, b) => (lowest ? a.score - b.score : b.score - a.score));
  entries.forEach((e, i) => (e.rank = i + 1));
  return entries;
}

export function playerRank(game: Game, score: number): number {
  if (!score) return 0;
  const entries = seedBoard(game);
  const lowest = game.leaderboard[0]?.order === 'lowest';
  const ahead = entries.filter((e) => (lowest ? e.score < score : e.score > score)).length;
  return ahead + 1;
}

export function formatStat(value: number, format = 'number'): string {
  if (format === 'time') {
    const m = Math.floor(value / 60);
    const s = value % 60;
    return `${m}:${String(s).padStart(2, '0')}`;
  }
  return value.toLocaleString('en-NG');
}
