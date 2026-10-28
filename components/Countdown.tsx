'use client';

import { useEffect, useState } from 'react';
import { countdownLabel } from '@/lib/tournament';

export function Countdown({ endsAt, prefix = '' }: { endsAt: string; prefix?: string }) {
  const [label, setLabel] = useState('');
  useEffect(() => {
    const end = new Date(endsAt).getTime();
    const tick = () => setLabel(countdownLabel(end - Date.now()));
    tick();
    const timer = setInterval(tick, 1000);
    return () => clearInterval(timer);
  }, [endsAt]);
  return <span suppressHydrationWarning>{label ? `${prefix}${label}` : `${prefix}—`}</span>;
}

export function useNow(intervalMs = 1000) {
  const [now, setNow] = useState<number | null>(null);
  useEffect(() => {
    setNow(Date.now());
    const timer = setInterval(() => setNow(Date.now()), intervalMs);
    return () => clearInterval(timer);
  }, [intervalMs]);
  return now;
}
