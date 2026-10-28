'use client';

import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';
import type { Game } from '@/lib/site';
import { useApp } from './AppProvider';
import { CharacterAvatar } from './CharacterAvatar';
import { playerRank } from '@/lib/leaderboard';
import { tournamentKey, TOURNAMENT_GAMES, weeksPoints } from '@/lib/tournament';

type Phase = 'ready' | 'playing' | 'over';
type Mode = 'runner' | 'catcher' | 'timing';
type Obj = { x: number; y: number; lane: number; progress: number; kind: 'bad' | 'good'; vy: number; rot: number };
type Engine = {
  mode: Mode;
  w: number;
  h: number;
  t: number;
  last: number;
  lane: number;
  laneX: number;
  playerX: number;
  score: number;
  coins: number;
  lives: number;
  time: number;
  speed: number;
  spawn: number;
  objs: Obj[];
  pointer: number;
  dir: number;
  target: number;
  targetW: number;
  round: number;
  roundScore: number;
  flash: number;
  over: boolean;
};

const COLORS = [
  ['#071c2b', '#1f6feb', '#7cd9ff', '#d8fd71'],
  ['#2a0b16', '#db2967', '#ffb3c9', '#ffd166'],
  ['#1b2a08', '#6a9e18', '#d8fd71', '#f6f5ee'],
  ['#2a1804', '#d35400', '#ffd166', '#f6f5ee'],
  ['#24103d', '#8e4fd6', '#f0c7ff', '#d8fd71'],
];

function modeFor(game: Game): Mode {
  const s = game.slug;
  if (['lanedash','lagos-run','naira-run','temple-runner','cybertron-runner','neon-drift','danfo-make-way','jollof-rush','orbit-run'].includes(s)) return 'runner';
  if (['naija-penalty','stack','dusk-stack','tic-tac-toe','connect-4'].includes(s)) return 'timing';
  if (game.categories.includes('Catch and dodge') || game.categories.includes('Coin collecting') || ['suya-catcher','coin-catcher','market-dash','orb-rush','balloon-funride'].includes(s)) return 'catcher';
  if (game.categories.includes('Endless runners') || game.categories.includes('Racing and driving')) return 'runner';
  return 'catcher';
}

function themeFor(game: Game) {
  const n = [...game.slug].reduce((a, c) => a + c.charCodeAt(0), 0);
  return COLORS[n % COLORS.length];
}

export function PlayGame({ game, tournament, challenge }: { game: Game; tournament?: boolean; challenge?: boolean }) {
  const { user, scores, saveScore, currentTournamentEntered, recordTournamentGame, openAuth, markChallenge, notify } = useApp();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const engineRef = useRef<Engine | null>(null);
  const rafRef = useRef(0);
  const [phase, setPhase] = useState<Phase>('ready');
  const [hud, setHud] = useState({ score: 0, lives: 3, round: 1, time: 0, coins: 0 });
  const [final, setFinal] = useState({ score: 0, coins: 0, points: 0, best: false });
  const mode = modeFor(game);
  const theme = themeFor(game);
  const points = final.points;

  const draw = useCallback((e: Engine) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const { w, h } = e;
    const [dark, mid, light, accent] = theme;

    const sky = ctx.createLinearGradient(0, 0, 0, h);
    sky.addColorStop(0, dark);
    sky.addColorStop(1, mid);
    ctx.fillStyle = sky;
    ctx.fillRect(0, 0, w, h);

    // sun / glow
    ctx.globalAlpha = 0.22;
    ctx.fillStyle = light;
    ctx.beginPath();
    ctx.arc(w * 0.78, h * 0.2, Math.min(w, h) * 0.18, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalAlpha = 1;

    // skyline
    ctx.fillStyle = 'rgba(0,0,0,.28)';
    for (let i = 0; i < 14; i++) {
      const bw = w / 12;
      const bh = (Math.sin(i * 2.1) * 0.5 + 0.5) * h * 0.22 + h * 0.05;
      ctx.fillRect(i * bw - bw * 0.2, h * 0.55 - bh, bw * 0.8, bh);
    }

    if (e.mode === 'runner') drawRunner(ctx, e, theme, game);
    else if (e.mode === 'catcher') drawCatcher(ctx, e, theme, game, user?.character);
    else drawTiming(ctx, e, theme, game);

    // flash
    if (e.flash > 0) {
      ctx.fillStyle = `rgba(216,253,113,${e.flash * 0.25})`;
      ctx.fillRect(0, 0, w, h);
    }

    // stage watermark
    ctx.fillStyle = 'rgba(255,255,255,.38)';
    ctx.font = `700 ${Math.max(10, w * 0.012)}px ui-monospace, monospace`;
    ctx.fillText(`start.ng / ${game.slug}`, w * 0.025, h * 0.965);
  }, [game, theme, user]);

  const drawRunner = (ctx: CanvasRenderingContext2D, e: Engine, th: string[], game: Game) => {
    const { w, h } = e;
    const horizon = h * 0.3;
    ctx.fillStyle = 'rgba(16,18,12,.55)';
    ctx.beginPath();
    ctx.moveTo(w * 0.44, horizon);
    ctx.lineTo(w * 0.56, horizon);
    ctx.lineTo(w * 0.98, h);
    ctx.lineTo(w * 0.02, h);
    ctx.closePath();
    ctx.fill();
    // lane lines
    ctx.strokeStyle = 'rgba(255,255,255,.35)';
    ctx.lineWidth = Math.max(1, w * 0.002);
    for (const lane of [-0.5, 0.5]) {
      ctx.beginPath();
      ctx.moveTo(w * 0.5 + lane * w * 0.07, horizon);
      ctx.lineTo(w * 0.5 + lane * w * 0.62, h);
      ctx.stroke();
    }
    for (let i = 1; i < 6; i++) {
      const t = (i / 6 + (e.t * (0.35 + e.speed * 0.2)) % (1 / 6)) % 1;
      const y = horizon + (h - horizon) * t * t;
      ctx.strokeStyle = `rgba(255,255,255,${0.05 + t * 0.2})`;
      ctx.beginPath();
      ctx.moveTo(w * 0.44 - t * w * 0.42, y);
      ctx.lineTo(w * 0.56 + t * w * 0.42, y);
      ctx.stroke();
    }

    // objects
    e.objs.forEach((o) => {
      const t = Math.max(0, Math.min(1, o.progress));
      const y = horizon + (h * 0.97 - horizon) * Math.pow(t, 1.55);
      const spread = w * 0.07 + w * 0.55 * t;
      const x = w * 0.5 + (o.lane - 1) * spread;
      const size = w * (0.035 + t * 0.09);
      if (o.kind === 'good') {
        ctx.fillStyle = '#f5c542';
        ctx.beginPath();
        ctx.arc(x, y - size * 0.5, size * 0.42, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#292a23';
        ctx.font = `800 ${size * 0.5}px Helvetica, sans-serif`;
        ctx.textAlign = 'center';
        ctx.fillText('₦', x, y - size * 0.33);
        ctx.textAlign = 'left';
      } else {
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(o.rot);
        ctx.fillStyle = th[2];
        roundRect(ctx, -size * 0.55, -size * 0.45, size * 1.1, size * 0.85, size * 0.14);
        ctx.fill();
        ctx.fillStyle = 'rgba(0,0,0,.36)';
        ctx.fillRect(-size * 0.35, -size * 0.25, size * 0.7, size * 0.2);
        ctx.fillStyle = '#10110e';
        ctx.beginPath();
        ctx.arc(-size * 0.28, size * 0.42, size * 0.18, 0, Math.PI * 2);
        ctx.arc(size * 0.28, size * 0.42, size * 0.18, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    });

    // player
    const px = w * 0.5 + (e.lane - 1) * w * 0.24;
    const py = h * 0.86;
    drawPerson(ctx, px, py, w * 0.09, user?.character, th, Math.sin(e.t * 9) * (e.speed > 0.35 ? 1 : 0));
    // speed streaks
    ctx.strokeStyle = 'rgba(255,255,255,.18)';
    for (let i = 0; i < 6; i++) {
      const y = h * (0.4 + i * 0.1);
      const len = w * (0.02 + (i % 3) * 0.015);
      ctx.beginPath();
      ctx.moveTo(w * 0.06, y);
      ctx.lineTo(w * 0.06 + len, y);
      ctx.stroke();
    }
  };

  const drawCatcher = (ctx: CanvasRenderingContext2D, e: Engine, th: string[], game: Game, character: any) => {
    const { w, h } = e;
    // ground
    ctx.fillStyle = 'rgba(0,0,0,.22)';
    ctx.fillRect(0, h * 0.82, w, h * 0.18);
    // items
    e.objs.forEach((o) => {
      const x = o.x * w;
      const y = o.y * h;
      const size = Math.min(w, h) * 0.06;
      if (o.kind === 'good') {
        ctx.fillStyle = '#f5c542';
        ctx.beginPath();
        ctx.arc(x, y, size * 0.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#292a23';
        ctx.font = `800 ${size * 0.42}px Helvetica, sans-serif`;
        ctx.textAlign = 'center';
        ctx.fillText('₦', x, y + size * 0.15);
        ctx.textAlign = 'left';
      } else {
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(o.rot);
        ctx.fillStyle = '#db2967';
        ctx.beginPath();
        ctx.arc(0, 0, size * 0.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = '#292a23';
        ctx.lineWidth = size * 0.1;
        ctx.beginPath();
        ctx.moveTo(-size * 0.2, -size * 0.2);
        ctx.lineTo(size * 0.2, size * 0.2);
        ctx.moveTo(size * 0.2, -size * 0.2);
        ctx.lineTo(-size * 0.2, size * 0.2);
        ctx.stroke();
        ctx.restore();
      }
    });
    // basket
    const bx = e.playerX * w;
    const by = h * 0.82;
    const bw = w * 0.2;
    ctx.fillStyle = character?.primaryColor ?? th[3];
    ctx.beginPath();
    ctx.moveTo(bx - bw / 2, by);
    ctx.lineTo(bx + bw / 2, by);
    ctx.lineTo(bx + bw * 0.38, by + h * 0.1);
    ctx.lineTo(bx - bw * 0.38, by + h * 0.1);
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = '#292a23';
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.strokeStyle = 'rgba(41,42,35,.35)';
    for (let i = 1; i < 4; i++) {
      ctx.beginPath();
      ctx.moveTo(bx - bw / 2 + (bw * i) / 4, by);
      ctx.lineTo(bx - bw * 0.38 + (bw * 0.76 * i) / 4, by + h * 0.1);
      ctx.stroke();
    }
    // little character behind basket
    drawPerson(ctx, bx, by - h * 0.055, w * 0.055, character, th, 0);
  };

  const drawTiming = (ctx: CanvasRenderingContext2D, e: Engine, th: string[], game: Game) => {
    const { w, h } = e;
    const bx = w * 0.12;
    const bw = w * 0.76;
    const by = h * 0.56;
    ctx.fillStyle = 'rgba(0,0,0,.3)';
    roundRect(ctx, bx, by, bw, h * 0.08, h * 0.04);
    ctx.fill();
    // target
    const tx = bx + (e.target - e.targetW / 2) * bw;
    ctx.fillStyle = th[3];
    roundRect(ctx, tx, by, e.targetW * bw, h * 0.08, h * 0.04);
    ctx.fill();
    // pointer
    const px = bx + e.pointer * bw;
    ctx.fillStyle = '#f6f5ee';
    ctx.fillRect(px - 2, by - h * 0.035, 4, h * 0.15);
    ctx.beginPath();
    ctx.arc(px, by - h * 0.04, h * 0.018, 0, Math.PI * 2);
    ctx.fill();
    // labels
    ctx.fillStyle = 'rgba(255,255,255,.65)';
    ctx.font = `700 ${Math.max(11, w * 0.014)}px ui-monospace, monospace`;
    ctx.fillText(`ROUND ${Math.min(e.round, 5)} / 5`, bx, by - h * 0.1);
    ctx.fillText('STOP IN THE LIME', bx, by + h * 0.17);
    // character on the left
    drawPerson(ctx, w * 0.5, h * 0.82, w * 0.08, user?.character, th, 0);
    // big reactive number
    ctx.fillStyle = 'rgba(255,255,255,.1)';
    ctx.font = `800 ${Math.min(w, h) * 0.36}px Helvetica, sans-serif`;
    ctx.textAlign = 'center';
    ctx.fillText(String(Math.round(e.roundScore || 0)), w * 0.5, h * 0.48);
    ctx.textAlign = 'left';
  };

  const loop = useCallback((time: number) => {
    const e = engineRef.current;
    const canvas = canvasRef.current;
    if (!e || !canvas) return;
    const dt = Math.min(0.05, (time - e.last) / 1000 || 0.016);
    e.last = time;
    e.t += dt;
    if (e.flash > 0) e.flash = Math.max(0, e.flash - dt * 2);

    if (!e.over) {
      if (e.mode === 'runner') {
        e.laneX += (e.lane - e.laneX) * Math.min(1, dt * 12);
        e.speed = Math.min(1.25, e.speed + dt * 0.012);
        e.time += dt;
        e.score += dt * (18 + e.speed * 26);
        e.spawn -= dt;
        if (e.spawn <= 0) {
          e.spawn = Math.max(0.28, 0.78 - e.speed * 0.3);
          const lane = Math.floor(Math.random() * 3);
          const good = Math.random() < 0.22;
          e.objs.push({ x: 0, y: 0, lane, progress: 0, kind: good ? 'good' : 'bad', vy: 0, rot: (Math.random() - 0.5) * 0.2 });
        }
        for (const o of e.objs) o.progress += dt * (0.3 + e.speed * 0.26);
        const before = e.objs.length;
        e.objs = e.objs.filter((o) => {
          if (o.progress >= 0.88 && o.progress <= 1.04) {
            if (Math.abs(o.lane - e.lane) < 0.5) {
              if (o.kind === 'good') { e.score += 25; e.coins += 1; e.flash = 1; }
              else { endRun(e); }
              return false;
            }
          }
          return o.progress < 1.1;
        });
        if (e.objs.length !== before && e.flash === 0) e.flash = 0.15;
      } else if (e.mode === 'catcher') {
        const left = keys.current.left ? 1 : 0;
        const right = keys.current.right ? 1 : 0;
        e.playerX = Math.max(0.1, Math.min(0.9, e.playerX + (right - left) * dt * 0.85));
        e.time += dt;
        e.score += dt * 6;
        e.spawn -= dt;
        if (e.spawn <= 0) {
          e.spawn = Math.max(0.28, 0.62 - e.speed * 0.18);
          e.objs.push({ x: 0.1 + Math.random() * 0.8, y: -0.08, lane: 0, progress: 0, kind: Math.random() < 0.72 ? 'good' : 'bad', vy: 0.18 + e.speed * 0.14 + Math.random() * 0.06, rot: Math.random() * 3 });
        }
        for (const o of e.objs) { o.y += dt * o.vy; o.rot += dt * 2; }
        const remaining: Obj[] = [];
        for (const o of e.objs) {
          if (o.y > 0.8 && o.y < 0.94 && Math.abs(o.x - e.playerX) < 0.115) {
            if (o.kind === 'good') { e.score += 20; e.coins += 1; e.flash = 1; }
            else { e.lives -= 1; e.flash = 1; if (e.lives <= 0) { endRun(e); } }
          } else if (o.y < 1.05) remaining.push(o);
        }
        e.objs = remaining;
        e.speed = Math.min(1.4, e.speed + dt * 0.015);
        if (e.time > 60) endRun(e);
      } else {
        e.pointer += e.dir * dt * (0.7 + e.round * 0.12);
        if (e.pointer > 1) { e.pointer = 1; e.dir = -1; }
        if (e.pointer < 0) { e.pointer = 0; e.dir = 1; }
        e.time += dt;
      }
    }

    draw(e);

    if (!e.over) setHud((prev) => {
      const next = { score: Math.floor(e.score), lives: e.lives, round: e.round, time: Math.floor(e.time), coins: e.coins };
      return prev.score === next.score && prev.lives === next.lives && prev.round === next.round && prev.time === next.time && prev.coins === next.coins ? prev : next;
    });
    if (!e.over) rafRef.current = requestAnimationFrame(loop);
  }, [draw]);

  const stopLoop = () => { cancelAnimationFrame(rafRef.current); };

  const endRun = (e: Engine) => {
    if (e.over) return;
    e.over = true;
    stopLoop();
    const score = Math.max(1, Math.floor(e.score));
    const stats: Record<string, number> = {};
    game.leaderboard.forEach((col, i) => {
      if (i === 0) stats[col.key] = score;
      else if (i === 1) stats[col.key] = e.mode === 'catcher' ? e.coins : e.mode === 'timing' ? e.round : Math.floor(e.t * 10);
      else stats[col.key] = Math.floor(e.time);
    });
    saveScore(game.slug, stats);
    let pts = 0;
    if (tournament && currentTournamentEntered) {
      const idx = TOURNAMENT_GAMES.indexOf(game.slug);
      pts = weeksPoints(score, idx < 0 ? 0 : idx);
      recordTournamentGame(game.slug, pts, score);
    }
    if (challenge && score >= 59) markChallenge(tournamentKey());
    const isBest = score > (scores[game.slug]?.score ?? 0);
    setFinal({ score, coins: e.coins, points: pts, best: isBest });
    setPhase('over');
    setHud((h) => ({ ...h, score }));
  };

  const endRef = useRef(endRun);
  endRef.current = endRun;

  const begin = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const mode = modeFor(game);
    engineRef.current = {
      mode, w: rect.width, h: rect.height, t: 0, last: performance.now(),
      lane: 1, laneX: 1, playerX: 0.5, score: 0, coins: 0, lives: 3, time: 0,
      speed: 0.32, spawn: 0.5, objs: [], pointer: 0.2, dir: 1, target: 0.5, targetW: 0.16,
      round: 1, roundScore: 0, flash: 0, over: false,
    };
    setFinal({ score: 0, coins: 0, points: 0, best: false });
    setHud({ score: 0, lives: 3, round: 1, time: 0, coins: 0 });
    setPhase('playing');
    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(loop);
  };

  useEffect(() => {
    if (phase !== 'playing') return;
    const onKey = (ev: KeyboardEvent) => {
      const e = engineRef.current;
      if (!e) return;
      if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', ' ', 'Spacebar', 'a', 'd'].includes(ev.key)) ev.preventDefault();
      if (ev.key === 'ArrowLeft' || ev.key === 'a' || ev.key === 'A') { keys.current.left = true; if (e.mode === 'runner' && !ev.repeat) e.lane = Math.max(0, e.lane - 1); }
      if (ev.key === 'ArrowRight' || ev.key === 'd' || ev.key === 'D') { keys.current.right = true; if (e.mode === 'runner' && !ev.repeat) e.lane = Math.min(2, e.lane + 1); }
      if (ev.key === ' ' || ev.key === 'Spacebar' || ev.key === 'Enter') {
        if (e.mode === 'timing' && !ev.repeat) stopTiming(e);
        if (e.mode === 'runner' && !ev.repeat) e.lane = Math.min(2, e.lane + 1);
      }
    };
    const onUp = (ev: KeyboardEvent) => {
      if (['ArrowLeft', 'a', 'A'].includes(ev.key)) keys.current.left = false;
      if (['ArrowRight', 'd', 'D'].includes(ev.key)) keys.current.right = false;
    };
    window.addEventListener('keydown', onKey);
    window.addEventListener('keyup', onUp);
    return () => { window.removeEventListener('keydown', onKey); window.removeEventListener('keyup', onUp); };
  }, [phase]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      canvas.width = Math.round(rect.width * dpr);
      canvas.height = Math.round(rect.height * dpr);
      const ctx = canvas.getContext('2d');
      ctx?.setTransform(dpr, 0, 0, dpr, 0, 0);
      const e = engineRef.current;
      if (e) {
        e.w = rect.width;
        e.h = rect.height;
      } else {
        engineRef.current = makeIdle(rect.width, rect.height, mode);
        draw(engineRef.current);
      }
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    return () => { ro.disconnect(); cancelAnimationFrame(rafRef.current); };
  }, [draw, mode]);

  const stopTiming = (e: Engine) => {
    const dist = Math.abs(e.pointer - e.target);
    const hit = Math.max(0, 1 - dist / Math.max(0.09, e.targetW / 2));
    const gained = Math.round(hit * 100 + (hit > 0.94 ? 50 : 0));
    e.score += gained;
    e.roundScore = gained;
    e.flash = 1;
    e.round += 1;
    if (e.round > 5) { endRef.current(e); return; }
    e.targetW = Math.max(0.075, e.targetW - 0.014);
    e.target = 0.18 + Math.random() * 0.64;
    e.dir = Math.random() > 0.5 ? 1 : -1;
  };

  const move = (dir: -1 | 1) => {
    const e = engineRef.current;
    if (!e || phase !== 'playing') return;
    if (e.mode === 'runner') e.lane = Math.max(0, Math.min(2, e.lane + dir));
    else if (e.mode === 'catcher') e.playerX = Math.max(0.1, Math.min(0.9, e.playerX + dir * 0.08));
    else stopTiming(e);
  };

  const action = () => {
    const e = engineRef.current;
    if (!e || phase !== 'playing') return;
    if (e.mode === 'timing') stopTiming(e);
    if (e.mode === 'runner') e.lane = Math.min(2, e.lane + 1);
  };

  const shareUrl = typeof window !== 'undefined' ? `${window.location.origin}/games/${game.slug}` : `https://start.ng/games/${game.slug}`;
  const shareText = `I scored ${final.score} on ${game.title}${tournament && points ? ` and earned ${points} tournament points` : ''}. Can you beat me?`;

  return (
    <div className="play-page">
      <div className="play-top">
        <Link className="back" href={`/games/${game.slug}`}>← start.ng</Link>
        <span className="mid">{game.title} · {mode === 'runner' ? 'Endless run' : mode === 'catcher' ? 'Catch and dodge' : 'Stop the meter'}</span>
        {user ? (
          <span className="player-chip"><CharacterAvatar character={user.character} size={26} />{user.name}</span>
        ) : (
          <button type="button" className="hud-pill" onClick={openAuth} style={{ pointerEvents: 'auto' }}>Sign in to save</button>
        )}
      </div>

      <div className="game-stage-wrap">
        <div className="game-stage">
          <canvas ref={canvasRef} aria-label={`${game.title} playable game`} />
          <div className="play-hud">
            <div className="row">
              <span className="hud-pill">Score <b>{hud.score}</b>{mode === 'catcher' && <> · Coins <b>{hud.coins}</b></>}</span>
              <span className="hud-pill">
                {mode === 'runner' && <>Speed <b>{Math.min(9, Math.floor(engineRef.current?.speed ? engineRef.current.speed * 7 : 2))}</b></>}
                {mode === 'catcher' && <>Lives <b>{'♥'.repeat(Math.max(0, hud.lives))}</b></>}
                {mode === 'timing' && <>Round <b>{Math.min(5, hud.round)}/5</b></>}
                {tournament && currentTournamentEntered && <span className="play-tourney" style={{ marginLeft: 8 }}>Tournament</span>}
              </span>
            </div>
            <div className="row"><span /></div>
          </div>

          {phase === 'ready' && (
            <div className="play-overlay">
              <div className="play-card">
                <p className="eyebrow-small">start.ng arcade</p>
                <h1>{game.title}</h1>
                <p>{game.description}</p>
                <p style={{ fontSize: '.78rem', color: '#6b6c63', marginBottom: 14 }}>
                  {mode === 'runner' ? '← → to switch lanes. Dodge the traffic, grab the naira.' : mode === 'catcher' ? '← → to move. Catch the good stuff, dodge the rest.' : 'Tap STOP when the pointer is in the lime zone.'}
                </p>
                {tournament && !currentTournamentEntered && <p style={{ color: '#b3261e', fontSize: '.8rem' }}>Enter the tournament first to earn points from this run.</p>}
                <div className="actions">
                  <button type="button" className="btn" onClick={begin}>Play now</button>
                  <Link className="ghost" href={`/games/${game.slug}`}>Back to game</Link>
                </div>
                {!user && <button type="button" className="link" style={{ marginTop: 12, fontSize: '.76rem', color: '#6b6c63' }} onClick={openAuth}>Sign in to keep your score</button>}
              </div>
            </div>
          )}

          {phase === 'playing' && (
            <div className="play-controls" style={{ position: 'absolute', left: 0, right: 0, bottom: 8, padding: 8, pointerEvents: 'auto' }}>
              {mode === 'timing' ? (
                <button type="button" onPointerDown={action}>STOP</button>
              ) : (
                <>
                  <button type="button" onPointerDown={() => move(-1)} aria-label="Move left">←</button>
                  <button type="button" onPointerDown={() => move(1)} aria-label="Move right">→</button>
                </>
              )}
            </div>
          )}

          {phase === 'over' && (
            <div className="play-overlay">
              <div className="play-card">
                <p className="eyebrow-small">{final.best ? 'New personal best' : 'Run saved'}</p>
                <h1>{final.best ? 'That is your best yet.' : 'Good run.'}</h1>
                <div className="score-big">{final.score.toLocaleString()}</div>
                <div className="rank">#{playerRank(game, final.score)} on {game.title}{points ? ` · +${points} tournament points` : ''}</div>
                {!user && <p style={{ color: '#b3261e', fontSize: '.8rem' }}>Sign in next time to keep this score on the board.</p>}
                <div className="actions">
                  <button type="button" className="btn" onClick={begin}>Play again</button>
                  <a className="ghost" href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noreferrer">Share on X</a>
                </div>
                <div className="actions" style={{ marginTop: 8 }}>
                  <Link className="link" href={`/games/${game.slug}`} style={{ fontSize: '.78rem', color: '#6b6c63' }}>Back to game page</Link>
                  <Link className="link" href="/games" style={{ fontSize: '.78rem', color: '#6b6c63' }}>More games</Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="play-help">Signed-in players keep their best run. Guests can play too. {challenge ? 'Daily challenge: reach 59.' : ''}</div>
    </div>
  );
}

const keys = { current: { left: false, right: false } };

function makeIdle(w: number, h: number, mode: Mode): Engine {
  return { mode, w, h, t: 0, last: performance.now(), lane: 1, laneX: 1, playerX: 0.5, score: 0, coins: 0, lives: 3, time: 0, speed: 0.32, spawn: 0.5, objs: [], pointer: 0.2, dir: 1, target: 0.5, targetW: 0.16, round: 1, roundScore: 0, flash: 0, over: true };
}

function roundRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

function drawPerson(ctx: CanvasRenderingContext2D, x: number, y: number, s: number, character: any, th: string[], swing: number) {
  const skin = character?.skinColor ?? '#8d5524';
  const top = character?.primaryColor ?? th[3];
  const bottom = character?.secondaryColor ?? '#292a23';
  ctx.save();
  ctx.translate(x, y);
  // shadow
  ctx.fillStyle = 'rgba(0,0,0,.25)';
  ctx.beginPath();
  ctx.ellipse(0, s * 0.48, s * 0.38, s * 0.12, 0, 0, Math.PI * 2);
  ctx.fill();
  // legs
  ctx.strokeStyle = bottom;
  ctx.lineWidth = s * 0.15;
  ctx.lineCap = 'round';
  ctx.beginPath(); ctx.moveTo(-s * 0.16, s * 0.14); ctx.lineTo(-s * 0.16 - swing * s * 0.1, s * 0.48); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(s * 0.16, s * 0.14); ctx.lineTo(s * 0.16 + swing * s * 0.1, s * 0.48); ctx.stroke();
  // body
  ctx.fillStyle = top;
  roundRect(ctx, -s * 0.26, -s * 0.24, s * 0.52, s * 0.45, s * 0.12);
  ctx.fill();
  // arms
  ctx.strokeStyle = skin;
  ctx.lineWidth = s * 0.1;
  ctx.beginPath(); ctx.moveTo(-s * 0.25, -s * 0.13); ctx.lineTo(-s * 0.4, s * 0.1 + swing * s * 0.06); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(s * 0.25, -s * 0.13); ctx.lineTo(s * 0.4, s * 0.1 - swing * s * 0.06); ctx.stroke();
  // head
  ctx.fillStyle = skin;
  ctx.beginPath(); ctx.arc(0, -s * 0.38, s * 0.22, 0, Math.PI * 2); ctx.fill();
  // hair
  ctx.fillStyle = character?.hairColor ?? '#17120f';
  ctx.beginPath(); ctx.arc(0, -s * 0.46, s * 0.2, Math.PI, Math.PI * 2); ctx.fill();
  // eyes
  ctx.fillStyle = '#10110e';
  ctx.beginPath(); ctx.arc(-s * 0.07, -s * 0.38, s * 0.022, 0, Math.PI * 2); ctx.arc(s * 0.07, -s * 0.38, s * 0.022, 0, Math.PI * 2); ctx.fill();
  ctx.restore();
}
