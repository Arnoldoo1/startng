'use client';

import Link from 'next/link';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useApp } from './AppProvider';
import { CharacterAvatar } from './CharacterAvatar';
import { GUEST_CHARACTER, type Character } from '@/lib/character';

type Person = {
  id: number;
  name: string;
  character: Character;
  x: number;
  y: number;
  tx: number;
  ty: number;
  vx: number;
  vy: number;
  moving: boolean;
  wave: number;
  message: string;
  messageUntil: number;
  speed: number;
};

const WORLD = { w: 1800, h: 1100 };

const NPCS: [string, Character, string][] = [
  ['Trini', { body: 'female', primaryColor: '#4b7bec', secondaryColor: '#2b2f4a', skinColor: '#8d5524', hairColor: '#17120f', hair: 'braids', hat: 'none', accessory: 'earrings' }, 'Anyone up for a race?'],
  ['Hamzat', { body: 'male', primaryColor: '#d8fd71', secondaryColor: '#292a23', skinColor: '#6b3f24', hairColor: '#17120f', hair: 'short', hat: 'cap', accessory: 'glasses' }, 'I made a new game. Come see.'],
  ['Chloe', { body: 'female', primaryColor: '#db2967', secondaryColor: '#f6f5ee', skinColor: '#eab08a', hairColor: '#5a3825', hair: 'bun', hat: 'none', accessory: 'scarf' }, 'The fountain is my favourite spot.'],
  ['Dave', { body: 'male', primaryColor: '#292a23', secondaryColor: '#6b6c63', skinColor: '#4a2b17', hairColor: '#17120f', hair: 'afro', hat: 'none', accessory: 'beard' }, 'Tournament later? I am in.'],
  ['Sade', { body: 'female', primaryColor: '#f5a640', secondaryColor: '#0c6e5a', skinColor: '#a9633b', hairColor: '#17120f', hair: 'dreads', hat: 'none', accessory: 'earrings' }, 'I just beat my high score.'],
  ['Kofi', { body: 'male', primaryColor: '#8e4fd6', secondaryColor: '#2b0b16', skinColor: '#6b3f24', hairColor: '#2d1b0e', hair: 'dreads', hat: 'crown', accessory: 'none' }, 'This place is always busy.'],
  ['Ife', { body: 'female', primaryColor: '#2ec4b6', secondaryColor: '#292a23', skinColor: '#8d5524', hairColor: '#c2a17a', hair: 'ponytail', hat: 'beanie', accessory: 'backpack' }, 'Meet you by the stage.'],
  ['Zainab', { body: 'female', primaryColor: '#e8590c', secondaryColor: '#4b7bec', skinColor: '#c68642', hairColor: '#17120f', hair: 'braids', hat: 'none', accessory: 'glasses' }, 'Wave if you can see me!'],
];

function makeNpcs(now: number): Person[] {
  return NPCS.map(([name, character, message], i) => ({
    id: i + 1, name, character,
    x: 300 + ((i * 197) % 1200), y: 280 + ((i * 131) % 600),
    tx: 300 + ((i * 271) % 1200), ty: 260 + ((i * 173) % 640),
    vx: 0, vy: 0, moving: false, wave: 0, message: '', messageUntil: 0, speed: 26 + (i % 3) * 8,
  }));
}

function shade(hex: string, amount: number): string {
  const h = hex.replace('#', '');
  const num = parseInt(h.length === 3 ? h.split('').map((c) => c + c).join('') : h, 16);
  const r = Math.max(0, Math.min(255, (num >> 16) + amount));
  const g = Math.max(0, Math.min(255, ((num >> 8) & 255) + amount));
  const b = Math.max(0, Math.min(255, (num & 255) + amount));
  return `rgb(${r},${g},${b})`;
}

export function Hangout() {
  const { user, openAuth } = useApp();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef({ x: 900, y: 700, vx: 0, vy: 0, facing: 0, wave: 0 });
  const npcsRef = useRef<Person[]>([]);
  const keys = useRef<Record<string, boolean>>({});
  const camera = useRef({ x: 0, y: 0 });
  const chatLog = useRef<{ name: string; text: string; at: number }[]>([]);
  const [chat, setChat] = useState('');
  const [messages, setMessages] = useState<{ name: string; text: string; at: number }[]>([]);
  const [people, setPeople] = useState<string[]>([]);
  const [hydrated, setHydrated] = useState(false);
  const chatInputRef = useRef<HTMLInputElement>(null);
  const me: Person = useMemo(() => ({
    id: 0,
    name: user?.name ?? 'Guest',
    character: user?.character ?? GUEST_CHARACTER,
    x: playerRef.current.x,
    y: playerRef.current.y,
    tx: 0, ty: 0, vx: 0, vy: 0, moving: false, wave: 0, message: '', messageUntil: 0, speed: 170,
  }), [user?.name, user?.character]);

  useEffect(() => {
    if (!npcsRef.current.length) npcsRef.current = makeNpcs(Date.now());
    setPeople(['You', ...NPCS.slice(0, 5).map(([n]) => n)]);
    setHydrated(true);
  }, []);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const rect = canvas.getBoundingClientRect();
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    if (canvas.width !== Math.round(rect.width * dpr) || canvas.height !== Math.round(rect.height * dpr)) {
      canvas.width = Math.round(rect.width * dpr);
      canvas.height = Math.round(rect.height * dpr);
    }
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const vw = rect.width;
    const vh = rect.height;
    const scale = Math.max(0.62, Math.min(1.05, vw / 1200));
    const p = playerRef.current;
    camera.current.x += ((p.x - vw / (2 * scale)) - camera.current.x) * 0.08;
    camera.current.y += ((p.y - vh / (2 * scale)) - camera.current.y) * 0.08;
    camera.current.x = Math.max(0, Math.min(WORLD.w - vw / scale, camera.current.x));
    camera.current.y = Math.max(0, Math.min(WORLD.h - vh / scale, camera.current.y));

    ctx.fillStyle = '#6fb96d';
    ctx.fillRect(0, 0, vw, vh);
    ctx.save();
    ctx.scale(scale, scale);
    ctx.translate(-camera.current.x, -camera.current.y);

    // grass texture
    ctx.fillStyle = '#78c273';
    ctx.fillRect(0, 0, WORLD.w, WORLD.h);
    for (let i = 0; i < 1100; i++) {
      const x = (i * 137.5) % WORLD.w;
      const y = (i * 271.3) % WORLD.h;
      ctx.fillStyle = i % 3 === 0 ? 'rgba(255,255,255,.10)' : 'rgba(30,90,45,.14)';
      ctx.fillRect(x, y, 3, 7);
    }
    // paths
    ctx.strokeStyle = '#e7d7b5';
    ctx.lineWidth = 88;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(0, 620); ctx.bezierCurveTo(380, 560, 600, 690, 900, 600);
    ctx.bezierCurveTo(1200, 510, 1390, 610, WORLD.w, 540);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(860, 0); ctx.bezierCurveTo(830, 320, 980, 520, 910, WORLD.h);
    ctx.stroke();
    ctx.strokeStyle = 'rgba(120,90,50,.22)';
    ctx.lineWidth = 4;
    ctx.setLineDash([16, 20]);
    ctx.stroke();
    ctx.setLineDash([]);

    // fountain plaza
    ctx.fillStyle = '#d9c8a5';
    ctx.beginPath(); ctx.arc(900, 560, 185, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#b7d9e8';
    ctx.beginPath(); ctx.arc(900, 560, 120, 0, Math.PI * 2); ctx.fill();
    ctx.strokeStyle = '#f3e7c9'; ctx.lineWidth = 12;
    ctx.beginPath(); ctx.arc(900, 560, 132, 0, Math.PI * 2); ctx.stroke();
    const t = Date.now() / 650;
    for (let i = 0; i < 10; i++) {
      const a = i * 0.9 + t;
      ctx.fillStyle = 'rgba(255,255,255,.55)';
      ctx.beginPath();
      ctx.arc(900 + Math.cos(a) * 70, 560 + Math.sin(a) * 70 - 25 - Math.sin(t * 2 + i) * 26, 5, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.fillStyle = '#e7d7b5';
    ctx.beginPath(); ctx.arc(900, 560, 34, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#f8f1dc';
    ctx.beginPath(); ctx.arc(900, 548, 12, 0, Math.PI * 2); ctx.fill();

    // stage
    drawStage(ctx, 1380, 790);
    // trees
    [[230, 230], [520, 180], [1150, 210], [1580, 270], [310, 880], [680, 920], [1270, 970], [1660, 880], [160, 560], [1740, 620]].forEach(([x, y], i) => drawTree(ctx, x, y, 0.8 + (i % 3) * 0.18, i));
    // benches
    [[730, 440], [1080, 690], [430, 640], [1450, 500]].forEach(([x, y], i) => drawBench(ctx, x, y, i % 2));
    // lamps
    [[620, 430], [1170, 500], [1040, 860], [380, 760]].forEach(([x, y]) => drawLamp(ctx, x, y));
    // sign
    drawSign(ctx, 760, 860);

    // npcs
    const now = Date.now();
    for (const n of npcsRef.current) {
      if (n.message && now > n.messageUntil) n.message = '';
      drawCharacter(ctx, n.x, n.y, n.character, n.name, n.moving, n.wave > 0, n.message);
    }
    // player
    if (p.wave > 0 && now > p.wave) p.wave = 0;
    const pl = {
      ...me,
      x: p.x, y: p.y,
      moving: Math.abs(p.vx) + Math.abs(p.vy) > 4,
      wave: p.wave,
      message: chatLog.current.find((m) => m.name === 'You' && m.at > now - 4200)?.text ?? '',
    };
    ctx.save();
    ctx.strokeStyle = 'rgba(216,253,113,.9)';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.ellipse(p.x, p.y + 24, 30, 13, 0, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
    drawCharacter(ctx, p.x, p.y, me.character, me.name, pl.moving, p.wave > 0, pl.message, true);

    ctx.restore();

    // subtle vignette
    const g = ctx.createRadialGradient(vw / 2, vh / 2, Math.min(vw, vh) * 0.35, vw / 2, vh / 2, Math.max(vw, vh) * 0.8);
    g.addColorStop(0, 'rgba(0,0,0,0)');
    g.addColorStop(1, 'rgba(15,25,12,.3)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, vw, vh);
  }, [me]);

  useEffect(() => {
    if (!hydrated) return;
    let raf = 0;
    let last = performance.now();
    const step = (time: number) => {
      const dt = Math.min(0.04, (time - last) / 1000 || 0.016);
      last = time;
      const p = playerRef.current;
      const k = keys.current;
      let dx = (k.ArrowRight || k.d || k.D ? 1 : 0) - (k.ArrowLeft || k.a || k.A ? 1 : 0);
      let dy = (k.ArrowDown || k.s || k.S ? 1 : 0) - (k.ArrowUp || k.w || k.W ? 1 : 0);
      if (dx && dy) { dx *= 0.707; dy *= 0.707; }
      const run = k.Shift ? 1.65 : 1;
      p.vx += (dx * 200 * run - p.vx) * Math.min(1, dt * 12);
      p.vy += (dy * 200 * run - p.vy) * Math.min(1, dt * 12);
      p.x = Math.max(70, Math.min(WORLD.w - 70, p.x + p.vx * dt));
      p.y = Math.max(170, Math.min(WORLD.h - 70, p.y + p.vy * dt));
      if (Math.abs(p.vx) + Math.abs(p.vy) > 4) p.facing = Math.atan2(p.vy, p.vx);

      // npcs wander
      for (const n of npcsRef.current) {
        if (Math.hypot(n.tx - n.x, n.ty - n.y) < 20) {
          n.tx = 160 + Math.random() * (WORLD.w - 320);
          n.ty = 220 + Math.random() * (WORLD.h - 380);
        }
        const ax = n.tx - n.x;
        const ay = n.ty - n.y;
        const len = Math.hypot(ax, ay) || 1;
        n.vx += ((ax / len) * n.speed - n.vx) * Math.min(1, dt * 2);
        n.vy += ((ay / len) * n.speed - n.vy) * Math.min(1, dt * 2);
        n.x += n.vx * dt;
        n.y += n.vy * dt;
        n.moving = Math.abs(n.vx) + Math.abs(n.vy) > 6;
        if (Math.hypot(n.x - p.x, n.y - p.y) < 90 && Math.random() < dt * 0.6) {
          n.message = n.message || ['Hello!', 'Nice character.', 'Come to the stage.', 'One more game?'][Math.floor(Math.random() * 4)];
          n.messageUntil = Date.now() + 2600;
        }
      }
      draw();
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [hydrated, draw]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      keys.current[e.key] = true;
      keys.current[e.key.toLowerCase()] = true;
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', ' '].includes(e.key)) e.preventDefault();
      if (e.key === 'Enter' && document.activeElement?.tagName !== 'INPUT') { e.preventDefault(); chatInputRef.current?.focus(); }
      if (e.key === ' ') {
        playerRef.current.wave = Date.now() + 900;
        for (const n of npcsRef.current) {
          if (Math.hypot(n.x - playerRef.current.x, n.y - playerRef.current.y) < 320) {
            n.wave = Date.now() + 900;
            n.message = '👋';
            n.messageUntil = Date.now() + 1600;
          }
        }
      }
    };
    const onUp = (e: KeyboardEvent) => { keys.current[e.key] = false; keys.current[e.key.toLowerCase()] = false; };
    const onBlur = () => { keys.current = {}; };
    window.addEventListener('keydown', onKey);
    window.addEventListener('keyup', onUp);
    window.addEventListener('blur', onBlur);
    return () => { window.removeEventListener('keydown', onKey); window.removeEventListener('keyup', onUp); window.removeEventListener('blur', onBlur); };
  }, []);

  const send = (e: React.FormEvent) => {
    e.preventDefault();
    const text = chat.trim().slice(0, 90);
    if (!text) return;
    setChat('');
    chatLog.current.push({ name: 'You', text, at: Date.now() });
    setMessages(chatLog.current.slice(-3));
    const p = playerRef.current;
    for (const n of npcsRef.current) {
      if (Math.hypot(n.x - p.x, n.y - p.y) < 260) {
        const replies = ['Nice one!', 'Ha! True.', 'Come play the new game.', 'Wave back if you can see me.', 'I am on the leaderboard. Are you?'];
        n.message = replies[Math.floor(Math.random() * replies.length)];
        n.messageUntil = Date.now() + 3200;
        setTimeout(() => {
          chatLog.current.push({ name: n.name, text: n.message, at: Date.now() });
          setMessages(chatLog.current.slice(-3));
        }, 900);
      }
    }
  };

  const mobile = (dx: number, dy: number, down: boolean) => {
    const k = dx < 0 ? 'ArrowLeft' : dx > 0 ? 'ArrowRight' : dy < 0 ? 'ArrowUp' : 'ArrowDown';
    keys.current[k] = down;
  };

  return (
    <div className="hangout-page">
      <div className="play-top" style={{ background: '#173d24', borderColor: 'rgba(255,255,255,.12)' }}>
        <Link className="back" href="/">← start.ng</Link>
        <span className="mid">The Hangout · the park is open</span>
        {user ? <span className="player-chip"><CharacterAvatar character={user.character} size={26} />{user.name}</span> : <button type="button" className="hud-pill" onClick={openAuth} style={{ pointerEvents: 'auto' }}>Sign in</button>}
      </div>
      <div className="hangout-shell" ref={wrapRef}>
        <canvas ref={canvasRef} aria-label="The Hangout, a walkable start.ng park" />
        <div className="hangout-hud">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12 }}>
            <div className="hangout-title">
              <b>The Hangout</b>
              <span>Walk around, wave and meet the community.</span>
              {messages.length > 0 && <div className="hangout-log">{messages.map((m, i) => <div key={`${m.at}-${i}`}><b>{m.name}</b> {m.text}</div>)}</div>}
            </div>
            <div className="hangout-people" aria-label="People in the park">
              <b>{people.length} here now</b>
              {people.map((n) => <span key={n}>{n}</span>)}
            </div>
          </div>
          <div className="hangout-controls">
            <div className="hangout-keys">
              <kbd>WASD</kbd> / <kbd>arrows</kbd> walk · <kbd>Shift</kbd> run<br />
              <kbd>Space</kbd> wave · <kbd>Enter</kbd> chat
            </div>
            <form className="hangout-chat" onSubmit={send}>
              <input ref={chatInputRef} value={chat} onChange={(e) => setChat(e.target.value)} placeholder={user ? `Say something, ${user.name}…` : 'Say something…'} maxLength={90} aria-label="Chat message" />
              <button type="submit">Say</button>
            </form>
          </div>
        </div>
        <div className="hangout-mobile" aria-label="Walk controls">
          <button type="button" onPointerDown={() => mobile(0, -1, true)} onPointerUp={() => mobile(0, -1, false)} onPointerLeave={() => mobile(0, -1, false)}>↑</button>
          <button type="button" onPointerDown={() => mobile(0, 1, true)} onPointerUp={() => mobile(0, 1, false)} onPointerLeave={() => mobile(0, 1, false)}>↓</button>
          <button type="button" onPointerDown={() => mobile(-1, 0, true)} onPointerUp={() => mobile(-1, 0, false)} onPointerLeave={() => mobile(-1, 0, false)}>←</button>
          <button type="button" onPointerDown={() => mobile(1, 0, true)} onPointerUp={() => mobile(1, 0, false)} onPointerLeave={() => mobile(1, 0, false)}>→</button>
        </div>
      </div>
    </div>
  );
}

function drawTree(ctx: CanvasRenderingContext2D, x: number, y: number, s: number, i: number) {
  ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
  ctx.fillStyle = 'rgba(0,0,0,.18)';
  ctx.beginPath(); ctx.ellipse(0, 10, 44, 13, 0, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = '#7a4f24';
  ctx.fillRect(-7, -30, 14, 42);
  ctx.fillStyle = i % 2 ? '#246b38' : '#2d7d42';
  ctx.beginPath(); ctx.arc(-22, -52, 32, 0, Math.PI * 2); ctx.arc(20, -57, 35, 0, Math.PI * 2); ctx.arc(0, -82, 36, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = 'rgba(255,255,255,.12)';
  ctx.beginPath(); ctx.arc(-18, -66, 17, 0, Math.PI * 2); ctx.fill();
  ctx.restore();
}

function drawBench(ctx: CanvasRenderingContext2D, x: number, y: number, flip: number) {
  ctx.save(); ctx.translate(x, y);
  ctx.fillStyle = 'rgba(0,0,0,.16)'; ctx.beginPath(); ctx.ellipse(0, 12, 42, 9, 0, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = '#7b4d24'; ctx.fillRect(-32, -2, 64, 9); ctx.fillRect(-28, -13, 56, 8);
  ctx.fillStyle = '#4b4034'; ctx.fillRect(-26, 7, 5, 12); ctx.fillRect(21, 7, 5, 12);
  ctx.fillStyle = '#9a6a37'; ctx.fillRect(-30, 2, 60, 2);
  ctx.restore();
  void flip;
}

function drawLamp(ctx: CanvasRenderingContext2D, x: number, y: number) {
  ctx.save(); ctx.translate(x, y);
  ctx.fillStyle = 'rgba(0,0,0,.2)'; ctx.beginPath(); ctx.ellipse(0, 6, 12, 4, 0, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = '#3d4038'; ctx.fillRect(-2, -70, 4, 76);
  ctx.fillStyle = '#d8fd71'; ctx.beginPath(); ctx.arc(0, -74, 10, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = 'rgba(216,253,113,.16)'; ctx.beginPath(); ctx.arc(0, -74, 24, 0, Math.PI * 2); ctx.fill();
  ctx.restore();
}

function drawStage(ctx: CanvasRenderingContext2D, x: number, y: number) {
  ctx.save(); ctx.translate(x, y);
  ctx.fillStyle = 'rgba(0,0,0,.22)'; ctx.beginPath(); ctx.ellipse(0, 20, 150, 38, 0, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = '#2b2f4a'; ctx.fillRect(-150, -20, 300, 40);
  ctx.fillStyle = '#f5a640'; ctx.fillRect(-150, -36, 300, 16);
  ctx.fillStyle = '#db2967'; ctx.fillRect(-150, -44, 300, 8);
  ctx.fillStyle = '#10110e'; ctx.fillRect(-120, -96, 240, 60);
  ctx.fillStyle = '#d8fd71'; ctx.font = '800 22px Helvetica, sans-serif'; ctx.textAlign = 'center'; ctx.fillText('THE HANGOUT', 0, -58); ctx.textAlign = 'left';
  for (const lx of [-110, 110]) {
    ctx.fillStyle = '#3d4038'; ctx.fillRect(lx - 2, -150, 4, 54);
    ctx.fillStyle = '#f5a640'; ctx.beginPath(); ctx.arc(lx, -154, 9, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = 'rgba(245,166,64,.2)'; ctx.beginPath(); ctx.arc(lx, -154, 24, 0, Math.PI * 2); ctx.fill();
  }
  ctx.restore();
}

function drawSign(ctx: CanvasRenderingContext2D, x: number, y: number) {
  ctx.save(); ctx.translate(x, y);
  ctx.fillStyle = '#7b4d24'; ctx.fillRect(-4, -40, 8, 50);
  ctx.fillStyle = '#fffefa'; ctx.strokeStyle = '#292a23'; ctx.lineWidth = 3;
  ctx.beginPath(); ctx.roundRect(-42, -86, 84, 48, 8); ctx.fill(); ctx.stroke();
  ctx.fillStyle = '#292a23'; ctx.font = '700 13px Helvetica, sans-serif'; ctx.textAlign = 'center';
  ctx.fillText('GOOD VIBES', 0, -66); ctx.fillText('GOOD GAMES', 0, -50); ctx.textAlign = 'left';
  ctx.restore();
}

function drawCharacter(ctx: CanvasRenderingContext2D, x: number, y: number, c: Character, name: string, moving: boolean, waving: boolean, message: string, isYou = false) {
  ctx.save(); ctx.translate(x, y);
  const bob = moving ? Math.sin(Date.now() / 120) * 2 : 0;
  ctx.fillStyle = 'rgba(0,0,0,.24)';
  ctx.beginPath(); ctx.ellipse(0, 26, 21, 7, 0, 0, Math.PI * 2); ctx.fill();
  // legs
  ctx.strokeStyle = c.secondaryColor; ctx.lineWidth = 7; ctx.lineCap = 'round';
  const swing = moving ? Math.sin(Date.now() / 120) * 6 : 0;
  ctx.beginPath(); ctx.moveTo(-6, 8); ctx.lineTo(-7 + swing, 24); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(6, 8); ctx.lineTo(7 - swing, 24); ctx.stroke();
  // body
  ctx.fillStyle = c.primaryColor;
  ctx.beginPath(); ctx.roundRect(-13, -13, 26, 26, 7); ctx.fill();
  // arms
  ctx.strokeStyle = c.skinColor; ctx.lineWidth = 5;
  ctx.beginPath(); ctx.moveTo(-12, -7); ctx.lineTo(-19, 5); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(12, -7); ctx.lineTo(waving ? 23 : 19, waving ? -24 : 5); ctx.stroke();
  // head
  ctx.fillStyle = c.skinColor; ctx.beginPath(); ctx.arc(0, -25 + bob, 12, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = c.hairColor;
  if (c.hair === 'afro') { ctx.beginPath(); ctx.arc(0, -29 + bob, 15, 0, Math.PI * 2); ctx.fill(); }
  else if (c.hair === 'braids') { ctx.beginPath(); ctx.arc(0, -28 + bob, 12, Math.PI, Math.PI * 2); ctx.fill(); ctx.fillRect(-14, -30, 4, 20); ctx.fillRect(10, -30, 4, 20); }
  else if (c.hair === 'bun') { ctx.beginPath(); ctx.arc(0, -28 + bob, 12, Math.PI, Math.PI * 2); ctx.fill(); ctx.beginPath(); ctx.arc(0, -43 + bob, 7, 0, Math.PI * 2); ctx.fill(); }
  else if (c.hair !== 'bald') { ctx.beginPath(); ctx.arc(0, -29 + bob, 12, Math.PI, Math.PI * 2); ctx.fill(); }
  if (c.hat === 'crown') { ctx.fillStyle = '#f5c542'; ctx.beginPath(); ctx.moveTo(-10, -36 + bob); ctx.lineTo(-8, -48 + bob); ctx.lineTo(-2, -41 + bob); ctx.lineTo(2, -50 + bob); ctx.lineTo(6, -41 + bob); ctx.lineTo(11, -48 + bob); ctx.lineTo(10, -36 + bob); ctx.fill(); }
  if (c.hat === 'cap') { ctx.fillStyle = c.primaryColor; ctx.beginPath(); ctx.arc(0, -31 + bob, 12, Math.PI, Math.PI * 2); ctx.fill(); ctx.fillRect(0, -33 + bob, 16, 4); }
  if (c.accessory === 'glasses') { ctx.strokeStyle = '#292a23'; ctx.lineWidth = 2; ctx.strokeRect(-9, -28 + bob, 7, 5); ctx.strokeRect(2, -28 + bob, 7, 5); ctx.beginPath(); ctx.moveTo(-2, -25 + bob); ctx.lineTo(2, -25 + bob); ctx.stroke(); }
  // name
  ctx.fillStyle = isYou ? '#d8fd71' : '#fffefa';
  ctx.font = '700 12px Helvetica, sans-serif'; ctx.textAlign = 'center';
  ctx.fillText(isYou ? `${name} (you)` : name, 0, -62 + bob);
  if (message) {
    ctx.font = '600 12px Helvetica, sans-serif';
    const tw = Math.min(200, ctx.measureText(message).width + 20);
    ctx.fillStyle = '#fffefa';
    ctx.beginPath(); ctx.roundRect(-tw / 2, -105 + bob, tw, 28, 12); ctx.fill();
    ctx.fillStyle = '#292a23'; ctx.fillText(message, 0, -87 + bob);
  }
  ctx.textAlign = 'left';
  ctx.restore();
}
