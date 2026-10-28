export const TOURNAMENT_GAMES = ['riftsync', 'go-slow-danfo', 'follow-follow', 'balloon-funride', 'danfo-defense'];

export const TOURNAMENT_POINTS = [10, 7, 5, 3, 1];

export const PAST_WINNERS = [
  { date: 'Tue, Oct 27', name: 'No one played', points: 0, color: '' },
  { date: 'Mon, Oct 26', name: 'No one played', points: 0, color: '' },
  { date: 'Sun, Oct 25', name: 'No one played', points: 0, color: '' },
  { date: 'Sat, Oct 24', name: 'No one played', points: 0, color: '' },
  { date: 'Fri, Oct 23', name: 'No one played', points: 0, color: '' },
  { date: 'Thu, Oct 22', name: 'Oyetoke', points: 27, color: '#2ec4b6' },
  { date: 'Wed, Oct 21', name: 'Peter', points: 40, color: '#17b890' },
];

export const ALL_TIME = [
  { rank: 1, name: 'Peter', color: '#17b890', days: 1, firsts: 4, points: 40 },
  { rank: 2, name: 'Oyetoke', color: '#2ec4b6', days: 1, firsts: 2, points: 27 },
  { rank: 3, name: 'Chloe', color: '#6f9bf0', days: 0, firsts: 1, points: 24 },
  { rank: 4, name: 'Dave', color: '#292a23', days: 0, firsts: 1, points: 10 },
  { rank: 5, name: 'Mark', color: '#b383ef', days: 0, firsts: 1, points: 10 },
  { rank: 6, name: 'Hamzat', color: '#292a23', days: 0, firsts: 0, points: 5 },
];

export const THIS_WEEK = [
  { rank: 1, name: 'Oyetoke', color: '#2ec4b6', days: 1, firsts: 1, points: 27 },
  { rank: 2, name: 'Chloe', color: '#6f9bf0', days: 0, firsts: 1, points: 24 },
  { rank: 3, name: 'Peter', color: '#17b890', days: 0, firsts: 1, points: 20 },
  { rank: 4, name: 'Dave', color: '#292a23', days: 0, firsts: 1, points: 10 },
  { rank: 5, name: 'Hamzat', color: '#292a23', days: 0, firsts: 0, points: 5 },
];

export function watNow(): Date {
  const now = new Date();
  return new Date(now.getTime() + (now.getTimezoneOffset() + 60) * 60000);
}

// The next 6:00 PM in Nigeria (WAT, UTC+1), returned as a real UTC timestamp.
export function nextTournamentEnd(from = new Date()): Date {
  const wat = new Date(from.getTime() + 3600000);
  const y = wat.getUTCFullYear();
  const m = wat.getUTCMonth();
  const d = wat.getUTCDate();
  let end = Date.UTC(y, m, d, 18 - 1, 0, 0);
  if (end <= from.getTime()) end += 86400000;
  return new Date(end);
}

export function nextChallengeEnd(from = new Date()): Date {
  const wat = new Date(from.getTime() + 3600000);
  const y = wat.getUTCFullYear();
  const m = wat.getUTCMonth();
  const d = wat.getUTCDate();
  let end = Date.UTC(y, m, d + 1, 0 - 1, 0, 0);
  if (end <= from.getTime()) end += 86400000;
  return new Date(end);
}

export function tournamentKey(date = new Date()): string {
  const wat = new Date(date.getTime() + 3600000);
  return `${wat.getUTCFullYear()}-${String(wat.getUTCMonth() + 1).padStart(2, '0')}-${String(wat.getUTCDate()).padStart(2, '0')}`;
}

export function countdownParts(ms: number) {
  const total = Math.max(0, Math.floor(ms / 1000));
  return {
    days: Math.floor(total / 86400),
    hours: Math.floor((total % 86400) / 3600),
    minutes: Math.floor((total % 3600) / 60),
    seconds: total % 60,
  };
}

export function countdownLabel(ms: number): string {
  const p = countdownParts(ms);
  if (p.days > 0) return `${p.days}d ${p.hours}h left`;
  if (p.hours > 0) return `${p.hours}h ${p.minutes}m left`;
  return `${p.minutes}m ${p.seconds}s left`;
}

export function nigerianTime(date: Date): string {
  return new Intl.DateTimeFormat('en-NG', {
    timeZone: 'Africa/Lagos',
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  }).format(date);
}

export function weeksPoints(score: number, gameIndex: number): number {
  const threshold = [180, 130, 95, 60, 30][gameIndex % 5];
  if (score >= threshold) return 10;
  if (score >= threshold * 0.75) return 7;
  if (score >= threshold * 0.5) return 5;
  if (score >= threshold * 0.25) return 3;
  return 1;
}
