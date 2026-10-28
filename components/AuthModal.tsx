'use client';

import { useEffect, useState } from 'react';
import { useApp } from './AppProvider';
import { CharacterAvatar } from './CharacterAvatar';
import {
  ACCESSORY_OPTIONS,
  CLOTH_COLORS,
  HAIR_COLORS,
  HAIR_OPTIONS,
  HAT_OPTIONS,
  SKIN_COLORS,
  randomCharacter,
  type Character,
} from '@/lib/character';

export function AuthModal() {
  const { authOpen, closeAuth, signIn } = useApp();
  const [step, setStep] = useState<'start' | 'create'>('start');
  const [name, setName] = useState('');
  const [character, setCharacter] = useState<Character>(randomCharacter);
  const [error, setError] = useState('');

  useEffect(() => {
    if (authOpen) {
      setStep('start');
      setName('');
      setError('');
      setCharacter(randomCharacter());
    }
  }, [authOpen]);

  useEffect(() => {
    if (!authOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') closeAuth(); };
    document.addEventListener('keydown', onKey);
    document.body.classList.add('modal-open');
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.classList.remove('modal-open');
    };
  }, [authOpen, closeAuth]);

  if (!authOpen) return null;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim().length < 2) {
      setError('Give your character a name (at least 2 letters).');
      return;
    }
    signIn(name, character);
  };

  const set = <K extends keyof Character,>(key: K, value: Character[K]) => setCharacter((c) => ({ ...c, [key]: value }));

  return (
    <div className="overlay" onClick={closeAuth}>
      <div className="auth-card" role="dialog" aria-modal="true" aria-labelledby="sign-in-title" onClick={(e) => e.stopPropagation()}>
        <div className="card-head">
          <div>
            <span className="mono eyebrow-small">{step === 'start' ? 'Your start.ng account' : 'Make it yours'}</span>
            <h3 id="sign-in-title">{step === 'start' ? 'Sign in to start.ng' : 'Who are you today?'}</h3>
          </div>
          <button type="button" className="link close" aria-label="Close" onClick={closeAuth}>✕</button>
        </div>

        {step === 'start' ? (
          <>
            <p className="note">Use a Google account. New here? Signing in creates your account and gives you a character that follows you into every game.</p>
            <button type="button" className="google-btn" onClick={() => setStep('create')}>
              <GoogleIcon /> Continue with Google
            </button>
            <div className="or"><span>or</span></div>
            <button type="button" className="ghost wide" onClick={() => { setName('Guest'); setStep('create'); }}>Make a character first</button>
            <p className="fineprint">We&apos;ll keep you signed in on this device. This is a demo account stored in your browser.</p>
          </>
        ) : (
          <form onSubmit={submit} className="character-form">
            <div className="character-top">
              <div className="character-preview">
                <CharacterAvatar character={character} size={116} />
                <button type="button" className="randomise" onClick={() => setCharacter(randomCharacter())}>↻ Surprise me</button>
              </div>
              <div className="character-name">
                <label htmlFor="character-name">Your character&apos;s name</label>
                <input id="character-name" value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g. Runner Tee" maxLength={28} autoFocus />
                <p>This name shows in every start.ng game.</p>
              </div>
            </div>

            <div className="builder-grid">
              <div className="builder-group">
                <span>Body</span>
                <div className="segmented">
                  {(['female', 'male'] as const).map((b) => (
                    <button type="button" key={b} className={character.body === b ? 'on' : ''} onClick={() => set('body', b)}>{b === 'female' ? 'Female' : 'Male'}</button>
                  ))}
                </div>
              </div>
              <div className="builder-group">
                <span>Top colour</span>
                <div className="swatches">
                  {CLOTH_COLORS.map((c) => <button type="button" key={c} aria-label={`Top ${c}`} className={character.primaryColor === c ? 'on' : ''} style={{ background: c }} onClick={() => set('primaryColor', c)} />)}
                </div>
              </div>
              <div className="builder-group">
                <span>Bottom colour</span>
                <div className="swatches">
                  {CLOTH_COLORS.map((c) => <button type="button" key={c} aria-label={`Bottom ${c}`} className={character.secondaryColor === c ? 'on' : ''} style={{ background: c }} onClick={() => set('secondaryColor', c)} />)}
                </div>
              </div>
              <div className="builder-group">
                <span>Skin</span>
                <div className="swatches">
                  {SKIN_COLORS.map((c) => <button type="button" key={c} aria-label={`Skin ${c}`} className={character.skinColor === c ? 'on' : ''} style={{ background: c }} onClick={() => set('skinColor', c)} />)}
                </div>
              </div>
              <div className="builder-group">
                <span>Hair</span>
                <select value={character.hair} onChange={(e) => set('hair', e.target.value as Character['hair'])}>
                  {HAIR_OPTIONS.map((h) => <option key={h} value={h}>{h}</option>)}
                </select>
              </div>
              <div className="builder-group">
                <span>Hair colour</span>
                <div className="swatches">
                  {HAIR_COLORS.map((c) => <button type="button" key={c} aria-label={`Hair ${c}`} className={character.hairColor === c ? 'on' : ''} style={{ background: c }} onClick={() => set('hairColor', c)} />)}
                </div>
              </div>
              <div className="builder-group">
                <span>Hat</span>
                <select value={character.hat} onChange={(e) => set('hat', e.target.value as Character['hat'])}>
                  {HAT_OPTIONS.map((h) => <option key={h} value={h}>{h}</option>)}
                </select>
              </div>
              <div className="builder-group">
                <span>Accessory</span>
                <select value={character.accessory} onChange={(e) => set('accessory', e.target.value as Character['accessory'])}>
                  {ACCESSORY_OPTIONS.map((h) => <option key={h} value={h}>{h}</option>)}
                </select>
              </div>
            </div>

            {error && <p className="form-error">{error}</p>}
            <div className="auth-actions">
              <button type="button" className="ghost" onClick={() => setStep('start')}>Back</button>
              <button type="submit" className="btn">Create my character</button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#4285F4" d="M21.6 12.2c0-.7-.1-1.5-.2-2.2H12v4.3h5.4a4.6 4.6 0 0 1-2 3v2.5h3.2c1.9-1.8 3-4.4 3-7.6z" />
      <path fill="#34A853" d="M12 22c2.7 0 5-.9 6.6-2.4l-3.2-2.5c-.9.6-2 .9-3.4.9-2.6 0-4.8-1.7-5.6-4.1H3.1v2.6A10 10 0 0 0 12 22z" />
      <path fill="#FBBC05" d="M6.4 13.9a6 6 0 0 1 0-3.8V7.5H3.1a10 10 0 0 0 0 9z" />
      <path fill="#EA4335" d="M12 6c1.5 0 2.8.5 3.8 1.5l2.8-2.8A10 10 0 0 0 3.1 7.5l3.3 2.6C7.2 7.7 9.4 6 12 6z" />
    </svg>
  );
}
