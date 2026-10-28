'use client';

import React, { useId } from 'react';
import type { Character } from '@/lib/character';

export function CharacterAvatar({ character, size = 48, className = '' }: { character: Character; size?: number; className?: string }) {
  const id = useId().replace(/:/g, '');
  const c = character;
  const hairPath = () => {
    switch (c.hair) {
      case 'afro':
        return <circle cx="60" cy="48" r="30" fill={c.hairColor} />;
      case 'braids':
        return (
          <g fill={c.hairColor}>
            <path d="M30 54c0-22 13-32 30-32s30 10 30 32c0 8-4 12-8 14 0-14-7-22-22-22s-22 8-22 22c-4-2-8-6-8-14z" />
            <path d="M30 62c-2 20-1 26 3 30 4 3 7-1 6-8l-3-22z" />
            <path d="M90 62c2 20 1 26-3 30-4 3-7-1-6-8l3-22z" />
          </g>
        );
      case 'bun':
        return (
          <g fill={c.hairColor}>
            <circle cx="60" cy="26" r="13" />
            <path d="M30 54c0-20 13-30 30-30s30 10 30 30c0 7-4 11-8 13 0-13-7-21-22-21s-22 8-22 21c-4-2-8-6-8-13z" />
          </g>
        );
      case 'ponytail':
        return (
          <g fill={c.hairColor}>
            <path d="M30 54c0-20 13-30 30-30s30 10 30 30c0 7-4 11-8 13 0-13-7-21-22-21s-22 8-22 21c-4-2-8-6-8-13z" />
            <path d="M85 45c12 4 17 15 14 27-3 10-11 14-16 10-4-4 1-8 3-15 2-8-3-16-1-22z" />
          </g>
        );
      case 'dreads':
        return (
          <g stroke={c.hairColor} strokeWidth="6" strokeLinecap="round">
            <path d="M32 56c0-20 12-32 28-32s28 12 28 32" fill="none" />
            <path d="M28 56v24M36 50v34M44 45v40M52 43v42M60 42v44M68 43v42M76 45v40M84 50v34M92 56v24" />
          </g>
        );
      case 'bald':
        return null;
      default:
        return <path d="M31 55c0-20 13-31 29-31s29 11 29 31c0 8-4 12-8 13-1-14-8-22-21-22s-20 8-21 22c-4-1-8-5-8-13z" fill={c.hairColor} />;
    }
  };

  const hat = () => {
    switch (c.hat) {
      case 'cap':
        return (
          <g>
            <path d="M32 45c1-19 12-29 28-29s27 10 28 29z" fill={c.primaryColor} stroke="#292a23" strokeWidth="2" />
            <path d="M84 43c9 0 15 3 15 7s-7 6-18 5z" fill={c.primaryColor} stroke="#292a23" strokeWidth="2" />
            <circle cx="60" cy="19" r="3" fill="#292a23" />
          </g>
        );
      case 'beanie':
        return (
          <g>
            <path d="M31 48c0-20 13-32 29-32s29 12 29 32" fill={c.primaryColor} stroke="#292a23" strokeWidth="2" />
            <rect x="29" y="43" width="62" height="12" rx="6" fill={c.primaryColor} stroke="#292a23" strokeWidth="2" />
          </g>
        );
      case 'tophat':
        return (
          <g>
            <rect x="38" y="0" width="44" height="38" rx="3" fill={c.hairColor} />
            <rect x="26" y="36" width="68" height="9" rx="4" fill={c.hairColor} />
            <rect x="38" y="22" width="44" height="6" fill={c.primaryColor} />
          </g>
        );
      case 'crown':
        return (
          <g>
            <path d="M36 36l3-24 12 10 9-16 9 16 12-10 3 24z" fill="#f5c542" stroke="#8a6d00" strokeWidth="2" />
            <circle cx="60" cy="30" r="2.5" fill="#db2967" />
          </g>
        );
      default:
        return null;
    }
  };

  return (
    <svg width={size} height={size} viewBox="0 0 120 120" className={className} aria-hidden="true" style={{ display: 'block' }}>
      <defs>
        <clipPath id={`clip-${id}`}><circle cx="60" cy="60" r="58" /></clipPath>
        <linearGradient id={`bg-${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={c.primaryColor} />
          <stop offset="1" stopColor={c.secondaryColor} />
        </linearGradient>
      </defs>
      <circle cx="60" cy="60" r="59" fill={`url(#bg-${id})`} />
      <g clipPath={`url(#clip-${id})`}>
        <circle cx="60" cy="112" r="42" fill={c.secondaryColor} opacity=".55" />
        <path d="M22 120c2-26 17-38 38-38s36 12 38 38z" fill={c.primaryColor} />
        <rect x="53" y="73" width="14" height="15" rx="6" fill={c.skinColor} />
        <ellipse cx="60" cy="57" rx="30" ry="32" fill={c.skinColor} />
        {hairPath()}
        <ellipse cx="44" cy="83" rx="9" ry="10" fill={c.primaryColor} />
        <ellipse cx="76" cy="83" rx="9" ry="10" fill={c.primaryColor} />
        {c.accessory === 'earrings' && (
          <g fill="#f5c542" stroke="#8a6d00" strokeWidth="1.5">
            <circle cx="31" cy="65" r="4" /><circle cx="89" cy="65" r="4" />
          </g>
        )}
        {c.accessory === 'glasses' && (
          <g fill="none" stroke="#292a23" strokeWidth="2.5">
            <rect x="37" y="50" width="18" height="14" rx="6" /><rect x="65" y="50" width="18" height="14" rx="6" />
            <path d="M55 56h10M30 54h7M83 54h7" />
          </g>
        )}
        <g fill="#292a23">
          <ellipse cx="47" cy="57" rx="2.4" ry="3" /><ellipse cx="73" cy="57" rx="2.4" ry="3" />
        </g>
        <path d="M55 69c2 4 8 4 10 0" fill="none" stroke="#292a23" strokeWidth="2" strokeLinecap="round" />
        {c.accessory === 'beard' && (
          <path d="M38 68c2 17 10 24 22 24s20-7 22-24c-8 10-36 10-44 0z" fill={c.hairColor} opacity=".92" />
        )}
        {c.accessory === 'scarf' && (
          <path d="M38 87c12 8 32 8 44 0l4 10c-14 9-38 9-52 0z" fill="#f5c542" />
        )}
        {c.body === 'female' && <circle cx="60" cy="96" r="3" fill="#f5c542" />}
        {hat()}
      </g>
      <circle cx="60" cy="60" r="57" fill="none" stroke="rgba(41,42,35,.18)" strokeWidth="2" />
    </svg>
  );
}
