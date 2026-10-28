export function SunMarketScene({ complete = false }: { complete?: boolean }) {
  return (
    <svg
      className={`sm-scene${complete ? ' is-complete' : ''}`}
      viewBox="0 0 760 720"
      role="img"
      aria-label="An illustrated floating day market above Lagos, with sunlit stalls, a small danfo bus, bright paper lanterns, kites and a full sun."
    >
      <defs>
        <radialGradient id="sm-sun-halo" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffe58f" stopOpacity=".52" />
          <stop offset="45%" stopColor="#e8b86a" stopOpacity=".18" />
          <stop offset="100%" stopColor="#e8b86a" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="sm-sun" cx="36%" cy="30%" r="72%">
          <stop offset="0%" stopColor="#fffbe8" />
          <stop offset="58%" stopColor="#ffe08a" />
          <stop offset="100%" stopColor="#f5b63e" />
        </radialGradient>
        <linearGradient id="sm-rock" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e3ad7b" />
          <stop offset="42%" stopColor="#c47f5a" />
          <stop offset="100%" stopColor="#965a46" />
        </linearGradient>
        <linearGradient id="sm-grass" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#b9e8a8" />
          <stop offset="52%" stopColor="#79c98f" />
          <stop offset="100%" stopColor="#4b9e74" />
        </linearGradient>
        <linearGradient id="sm-path" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#f3c67e" />
          <stop offset="100%" stopColor="#c98e5f" />
        </linearGradient>
        <linearGradient id="sm-canopy-rose" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffb9bd" />
          <stop offset="100%" stopColor="#d96b7d" />
        </linearGradient>
        <linearGradient id="sm-canopy-gold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffe08a" />
          <stop offset="100%" stopColor="#e3a43d" />
        </linearGradient>
        <linearGradient id="sm-canopy-jade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#b9efcf" />
          <stop offset="100%" stopColor="#5cb78c" />
        </linearGradient>
        <linearGradient id="sm-cloud" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity=".5" />
          <stop offset="100%" stopColor="#dfeaf5" stopOpacity=".16" />
        </linearGradient>
        <linearGradient id="sm-bus" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffd96b" />
          <stop offset="100%" stopColor="#e9ab38" />
        </linearGradient>
        <radialGradient id="sm-lantern-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffd96b" stopOpacity=".9" />
          <stop offset="48%" stopColor="#f2b64a" stopOpacity=".35" />
          <stop offset="100%" stopColor="#f2b64a" stopOpacity="0" />
        </radialGradient>
        <filter id="sm-soft" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="10" />
        </filter>
        <filter id="sm-glow" x="-120%" y="-120%" width="340%" height="340%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="sm-grain" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency=".9" numOctaves="2" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
          <feComponentTransfer>
            <feFuncA type="table" tableValues="0 .06" />
          </feComponentTransfer>
        </filter>
      </defs>

      <g className="sm-scene-stars" fill="#c9862b">
        <circle className="sm-twinkle" cx="72" cy="92" r="1.7" style={{ animationDelay: '-.8s' }} />
        <circle className="sm-twinkle" cx="128" cy="58" r="1.1" style={{ animationDelay: '-2.2s' }} />
        <circle className="sm-twinkle" cx="214" cy="108" r="1.5" style={{ animationDelay: '-1.4s' }} />
        <circle className="sm-twinkle" cx="298" cy="58" r="1.1" style={{ animationDelay: '-3.1s' }} />
        <circle className="sm-twinkle" cx="704" cy="98" r="1.6" style={{ animationDelay: '-2.6s' }} />
        <circle className="sm-twinkle" cx="656" cy="198" r="1.2" style={{ animationDelay: '-.4s' }} />
        <circle className="sm-twinkle" cx="738" cy="272" r="1.4" style={{ animationDelay: '-3.8s' }} />
        <circle className="sm-twinkle" cx="112" cy="248" r="1.2" style={{ animationDelay: '-1.1s' }} />
        <circle className="sm-twinkle" cx="46" cy="318" r="1.6" style={{ animationDelay: '-2.9s' }} />
        <circle className="sm-twinkle" cx="240" cy="212" r="1.1" style={{ animationDelay: '-4.2s' }} />
        <circle className="sm-twinkle" cx="600" cy="318" r="1.3" style={{ animationDelay: '-1.8s' }} />
        <circle className="sm-twinkle" cx="720" cy="382" r="1.2" style={{ animationDelay: '-.9s' }} />
        <circle className="sm-twinkle" cx="88" cy="430" r="1.5" style={{ animationDelay: '-3.5s' }} />
        <circle className="sm-twinkle" cx="656" cy="458" r="1.1" style={{ animationDelay: '-2.1s' }} />
      </g>

      <g className="sm-constellation" fill="none" stroke="#c9862b" strokeWidth="1.1" opacity=".55">
        <path d="M78 120 119 92 166 122 144 166 94 158Z" strokeDasharray="2 8" />
        <path d="M166 122 205 101M144 166 181 188" strokeDasharray="2 8" />
        <circle cx="78" cy="120" r="2.2" fill="#c9862b" stroke="none" />
        <circle cx="119" cy="92" r="1.5" fill="#c9862b" stroke="none" />
        <circle cx="166" cy="122" r="2.1" fill="#c9862b" stroke="none" />
        <circle cx="144" cy="166" r="1.5" fill="#c9862b" stroke="none" />
        <circle cx="94" cy="158" r="1.3" fill="#c9862b" stroke="none" />
        <circle cx="205" cy="101" r="1.2" fill="#c9862b" stroke="none" />
        <circle cx="181" cy="188" r="1.2" fill="#c9862b" stroke="none" />
      </g>

      <g className="sm-sun-rails" aria-hidden="true">
        <g className="sm-sun-rays" stroke="#efae3c" strokeWidth="5" strokeLinecap="round" opacity=".55">
          <path d="M574 34V12M574 258v22M462 146h-22M686 146h22M494 66l-16-16M654 226l16 16M654 66l16-16M494 226l-16 16" />
        </g>
      </g>
      <g className="sm-sun-group">
        <circle cx="574" cy="146" r="148" fill="url(#sm-sun-halo)" className="sm-sun-halo" />
        <circle cx="574" cy="146" r="103" fill="url(#sm-sun-halo)" opacity=".6" />
        <circle cx="574" cy="146" r="78" fill="url(#sm-sun)" />
        <circle cx="574" cy="146" r="82" fill="none" stroke="#fff7d6" strokeOpacity=".38" />
      </g>

      <g className="sm-cloud sm-cloud-a" filter="url(#sm-soft)" opacity=".9">
        <ellipse cx="150" cy="338" rx="96" ry="25" fill="url(#sm-cloud)" />
        <ellipse cx="204" cy="326" rx="58" ry="18" fill="url(#sm-cloud)" />
        <ellipse cx="104" cy="328" rx="42" ry="14" fill="url(#sm-cloud)" />
      </g>
      <g className="sm-cloud sm-cloud-b" filter="url(#sm-soft)" opacity=".7">
        <ellipse cx="650" cy="568" rx="96" ry="26" fill="url(#sm-cloud)" />
        <ellipse cx="704" cy="552" rx="54" ry="18" fill="url(#sm-cloud)" />
        <ellipse cx="602" cy="556" rx="46" ry="15" fill="url(#sm-cloud)" />
      </g>
      <g className="sm-kite sm-kite-a" transform="translate(208 236) rotate(-7)">
        <path d="M0 0 27 30 0 60-27 30Z" fill="#ffb3b8" stroke="#9e5a30" strokeWidth="1.1" />
        <path d="M0 0v60M-27 30h54" stroke="#fff8e8" strokeOpacity=".75" strokeWidth="1.1" />
        <path d="M0 60c7 18 19 31 37 40" fill="none" stroke="#b77a3c" strokeWidth="1.1" />
        <path d="M23 82l-8 11 14-2M40 98l-9 12 15-2" fill="#9bd6b6" />
      </g>
      <g className="sm-kite sm-kite-b" transform="translate(676 304) rotate(9)" style={{ animationDelay: '-2.8s' }}>
        <path d="M0 0 22 25 0 50-22 25Z" fill="#ffd66e" stroke="#9e5a30" strokeWidth="1.1" />
        <path d="M0 0v50M-22 25h44" stroke="#fff8e8" strokeOpacity=".75" strokeWidth="1.1" />
        <path d="M0 50c6 16 16 27 31 34" fill="none" stroke="#b77a3c" strokeWidth="1.1" />
        <path d="M19 69l-7 10 12-2M34 82l-8 10 13-2" fill="#9fc7e8" />
      </g>
      <g className="sm-kite sm-kite-c" transform="translate(410 132) rotate(-12)" style={{ animationDelay: '-4.1s' }}>
        <path d="M0 0 17 19 0 38-17 19Z" fill="#b9efcf" stroke="#9e5a30" strokeWidth="1" />
        <path d="M0 0v38M-17 19h34" stroke="#fff8e8" strokeOpacity=".8" strokeWidth="1" />
        <path d="M0 38c4 12 12 20 23 25" fill="none" stroke="#b77a3c" strokeWidth="1" />
      </g>

      <g className="sm-float sm-bus-group">
        <ellipse cx="118" cy="392" rx="86" ry="21" fill="#c08a50" opacity=".12" filter="url(#sm-soft)" />
        <g transform="translate(64 318) rotate(-4)">
          <path d="M0 28c0-8 6-14 14-14h104c8 0 14 6 14 14v34H0Z" fill="url(#sm-bus)" />
          <path d="M8 30c0-5 4-9 9-9h91c5 0 9 4 9 9v6H8Z" fill="#5f7f9e" />
          <rect x="15" y="32" width="22" height="17" rx="3" fill="#9fc7e8" opacity=".9" />
          <rect x="42" y="32" width="22" height="17" rx="3" fill="#9fc7e8" opacity=".9" />
          <rect x="69" y="32" width="22" height="17" rx="3" fill="#9fc7e8" opacity=".9" />
          <rect x="96" y="32" width="22" height="17" rx="3" fill="#9fc7e8" opacity=".9" />
          <rect x="8" y="56" width="118" height="8" rx="2" fill="#b77a3c" opacity=".5" />
          <circle cx="28" cy="66" r="10" fill="#5f7f9e" />
          <circle cx="28" cy="66" r="4" fill="#ffe08a" />
          <circle cx="108" cy="66" r="10" fill="#5f7f9e" />
          <circle cx="108" cy="66" r="4" fill="#ffe08a" />
          <circle cx="132" cy="49" r="4" fill="#ffd96b" filter="url(#sm-glow)" />
          <path d="M4 14h126" stroke="#b77a3c" strokeWidth="2" strokeLinecap="round" />
        </g>
        <path d="M50 396c16 4 30-3 44-1 15 2 25 8 40 5" fill="none" stroke="#d7a56f" strokeOpacity=".18" strokeWidth="2" strokeLinecap="round" />
      </g>

      <g className="sm-float sm-island-main">
        <ellipse cx="392" cy="668" rx="196" ry="22" fill="#9b6a4c" opacity=".16" filter="url(#sm-soft)" />
        <path
          d="M198 464c24 76 62 133 118 169 38 24 90 27 135 2 55-30 91-99 113-176Z"
          fill="url(#sm-rock)"
        />
        <path d="M227 492c31 55 66 92 112 113 27 13 58 16 88 8" fill="none" stroke="#b98458" strokeOpacity=".22" strokeWidth="2" />
        <path d="M276 520c-8 35-2 67 18 92M451 510c22 27 34 60 34 94M353 538c-4 39-1 68 9 94" fill="none" stroke="#8b533d" strokeOpacity=".45" strokeWidth="3" strokeLinecap="round" />
        <path d="M296 628c8 14 22 18 33 8M422 616c-7 18 4 28 20 24" fill="none" stroke="#b07a55" strokeOpacity=".25" strokeWidth="2" />
        <path
          d="M184 464c17-35 70-50 121-42 41-15 104-15 147 2 48-6 92 16 114 49 10 16 3 31-22 37-61 13-104 6-153 16-62 13-132 12-180-6-28-10-38-35-27-56Z"
          fill="url(#sm-grass)"
        />
        <path d="M209 462c35-18 77-21 121-11 44-12 101-12 148 2 31 1 57 9 74 21-30 8-66 8-103 13-61 8-127 8-187-2-24-4-42-12-53-23Z" fill="#dff6c9" opacity=".18" />
        <path d="M286 511c37-15 82-17 124-5 30 8 58 8 85 2" fill="none" stroke="url(#sm-path)" strokeWidth="18" strokeLinecap="round" />
        <path d="M286 511c37-15 82-17 124-5 30 8 58 8 85 2" fill="none" stroke="#fff0c2" strokeOpacity=".23" strokeWidth="2" strokeLinecap="round" />
        <path d="M493 494c28 32 53 65 67 103" fill="none" stroke="url(#sm-path)" strokeWidth="12" strokeLinecap="round" opacity=".8" />
        <g fill="#8d5a3d" opacity=".55">
          <rect x="242" y="449" width="7" height="20" rx="2" />
          <rect x="527" y="449" width="7" height="22" rx="2" />
          <rect x="365" y="438" width="6" height="24" rx="2" />
        </g>
      </g>

      <g className="sm-float sm-island-side">
        <ellipse cx="104" cy="586" rx="82" ry="14" fill="#9b6a4c" opacity=".14" filter="url(#sm-soft)" />
        <path d="M32 498c13 46 36 78 69 95 19 10 43 9 58-3 22-18 37-50 45-92Z" fill="url(#sm-rock)" />
        <path d="M27 498c12-22 45-32 77-27 27-8 60-2 76 18 7 9 3 19-12 23-44 11-94 10-130 0-13-4-16-9-11-14Z" fill="url(#sm-grass)" />
        <path d="M49 489c26-8 56-8 80-2 12 1 21 4 28 8-25 5-54 5-79 1-15-2-24-4-29-7Z" fill="#dff6c9" opacity=".18" />
        <g transform="translate(56 444)">
          <path d="M0 42h58v19H0Z" fill="#4b3f50" />
          <path d="M8 42V18h42v24" fill="none" stroke="#c9862b" strokeWidth="2" />
          <path d="M2 17 29 2l27 15Z" fill="url(#sm-canopy-gold)" />
          <rect x="23" y="28" width="12" height="14" rx="2" fill="#fff8e8" opacity=".74" />
          <circle cx="29" cy="48" r="12" fill="url(#sm-lantern-glow)" />
          <circle cx="29" cy="48" r="3" fill="#ffd96b" />
        </g>
        <circle cx="118" cy="472" r="3" fill="#ffd96b" filter="url(#sm-glow)" />
      </g>

      <g className="sm-bridge">
        <path d="M181 476c-25 18-53 33-86 37" fill="none" stroke="#8e5e5d" strokeWidth="4" strokeLinecap="round" />
        <path d="M181 484c-25 18-53 31-86 35" fill="none" stroke="#4b3b5a" strokeWidth="8" strokeLinecap="round" opacity=".8" />
        <g stroke="#e8b86a" strokeWidth="1.4" opacity=".7">
          <path d="M160 476v-17M132 489v-16M104 496v-15" />
        </g>
        <path d="M160 459c-19 6-39 13-56 21" fill="none" stroke="#c9862b" strokeWidth="1.1" opacity=".45" />
      </g>

      <g className="sm-stall sm-stall-back">
        <g transform="translate(290 395)">
          <path d="M0 60h82v24H0Z" fill="#f7e4c4" />
          <path d="M5 60V30h72v30" fill="none" stroke="#b98052" strokeWidth="2" opacity=".55" />
          <path d="M0 30 41 4l41 26Z" fill="url(#sm-canopy-jade)" />
          <path d="M0 30c12 8 25 8 38 0 13 8 26 8 44 0" fill="none" stroke="#fff6e8" strokeOpacity=".35" strokeWidth="2" />
          <rect x="12" y="43" width="20" height="16" rx="2" fill="#fff8e8" opacity=".55" />
          <rect x="50" y="43" width="20" height="16" rx="2" fill="#fff8e8" opacity=".45" />
          <circle cx="72" cy="34" r="3" fill="#ffd96b" filter="url(#sm-glow)" />
        </g>
      </g>

      <g className="sm-stall sm-stall-main">
        <g transform="translate(342 362)">
          <path d="M-8 92h104v34H-8Z" fill="#fff1d6" />
          <path d="M0 92V38h88v54" fill="none" stroke="#d5bd91" strokeWidth="2.2" />
          <path d="M-14 40 44 0l58 40Z" fill="url(#sm-canopy-rose)" />
          <path d="M-14 40c15 10 29 10 44 0 15 10 30 10 44 0 10 7 20 8 30 0" fill="none" stroke="#fff7f0" strokeOpacity=".5" strokeWidth="2.5" />
          <path d="M10 40v52M32 40v52M54 40v52M76 40v52" stroke="#c9897b" strokeWidth="1.1" opacity=".5" />
          <rect x="6" y="58" width="30" height="28" rx="2" fill="#fff8e8" opacity=".68" />
          <rect x="52" y="58" width="30" height="28" rx="2" fill="#fff8e8" opacity=".5" />
          <path d="M6 72h30M52 72h30" stroke="#8d4f4a" strokeWidth="1" opacity=".45" />
          <path d="M44 92V78" stroke="#4b3f50" strokeWidth="3" />
          <circle cx="44" cy="102" r="3" fill="#ffd96b" filter="url(#sm-glow)" />
          <g className="sm-sway" transform="translate(88 39)">
            <path d="M0 0v14" stroke="#e8b86a" strokeWidth="1.5" />
            <circle cx="0" cy="21" r="11" fill="url(#sm-lantern-glow)" />
            <path d="M-4 14h8l3 12H-7Z" fill="#ffe08a" />
            <path d="M-4 14h8" stroke="#b77a3c" strokeWidth="2" />
          </g>
        </g>
      </g>

      <g className="sm-stall sm-stall-right">
        <g transform="translate(456 414)">
          <path d="M0 56h74v25H0Z" fill="#f5dfbf" />
          <path d="M5 56V30h64v26" fill="none" stroke="#b98052" strokeWidth="2" opacity=".55" />
          <path d="M0 30 37 6l37 24Z" fill="url(#sm-canopy-gold)" />
          <path d="M0 30c12 8 25 8 37 0 12 8 25 8 37 0" fill="none" stroke="#fff8e8" strokeOpacity=".45" strokeWidth="2" />
          <rect x="12" y="40" width="19" height="16" rx="2" fill="#fff8e8" opacity=".5" />
          <rect x="44" y="40" width="19" height="16" rx="2" fill="#fff8e8" opacity=".45" />
          <circle cx="62" cy="26" r="3" fill="#ffd96b" filter="url(#sm-glow)" />
        </g>
      </g>

      <g className="sm-lantern-string">
        <path d="M318 340c44 27 94 34 144 22 28-7 51-4 70 9" fill="none" stroke="#c08a50" strokeWidth="1.2" opacity=".55" />
        <g className="sm-sway" style={{ transformOrigin: '350px 352px', animationDelay: '-1.2s' }}>
          <path d="M350 352v14" stroke="#c08a50" strokeWidth="1.1" />
          <circle cx="350" cy="378" r="14" fill="url(#sm-lantern-glow)" />
          <path d="M344 366h12l4 13h-20Z" fill="#ffe08a" />
        </g>
        <g className="sm-sway" style={{ transformOrigin: '402px 359px', animationDelay: '-2.6s' }}>
          <path d="M402 359v12" stroke="#c08a50" strokeWidth="1.1" />
          <circle cx="402" cy="383" r="14" fill="url(#sm-lantern-glow)" />
          <path d="M396 371h12l4 13h-20Z" fill="#ffb3b8" />
        </g>
        <g className="sm-sway" style={{ transformOrigin: '458px 359px', animationDelay: '-.6s' }}>
          <path d="M458 359v14" stroke="#c08a50" strokeWidth="1.1" />
          <circle cx="458" cy="385" r="14" fill="url(#sm-lantern-glow)" />
          <path d="M452 373h12l4 13h-20Z" fill="#b9efcf" />
        </g>
        <g className="sm-sway" style={{ transformOrigin: '514px 354px', animationDelay: '-1.9s' }}>
          <path d="M514 354v12" stroke="#c08a50" strokeWidth="1.1" />
          <circle cx="514" cy="378" r="14" fill="url(#sm-lantern-glow)" />
          <path d="M508 366h12l4 13h-20Z" fill="#ffe08a" />
        </g>
      </g>

      <g className="sm-tree sm-tree-left">
        <path d="M234 484c-2-25 1-44 7-64M241 420c-8-12-16-19-27-23M241 431c11-13 21-19 34-21M241 447c-7-8-14-12-22-14" fill="none" stroke="#8b5a3c" strokeWidth="5" strokeLinecap="round" />
        <g fill="#7fcf9b">
          <circle cx="209" cy="393" r="17" opacity=".9" />
          <circle cx="233" cy="373" r="22" opacity=".8" />
          <circle cx="263" cy="402" r="18" opacity=".85" />
          <circle cx="224" cy="414" r="15" opacity=".7" />
          <circle cx="270" cy="423" r="11" opacity=".7" />
        </g>
        <g fill="#e8fbe3" opacity=".55">
          <circle cx="225" cy="384" r="5" />
          <circle cx="253" cy="395" r="4" />
          <circle cx="215" cy="403" r="3" />
        </g>
        <circle className="sm-twinkle" cx="248" cy="381" r="2" fill="#ffd96b" />
      </g>

      <g className="sm-tree sm-tree-right">
        <path d="M548 492c5-21 7-38 3-55M551 437c-8-11-17-17-27-20M551 447c9-12 18-17 30-18" fill="none" stroke="#8b5a3c" strokeWidth="4" strokeLinecap="round" />
        <g fill="#79c98f">
          <circle cx="518" cy="409" r="14" opacity=".8" />
          <circle cx="545" cy="397" r="18" opacity=".8" />
          <circle cx="574" cy="420" r="14" opacity=".75" />
        </g>
        <circle className="sm-twinkle" cx="548" cy="400" r="1.8" fill="#ffd96b" style={{ animationDelay: '-2s' }} />
      </g>

      <g className="sm-people">
        <g transform="translate(321 482)">
          <circle cx="0" cy="-9" r="5" fill="#ffe08a" />
          <path d="M0-3v13M0 2l-7 7M0 2l7 7M0 10l-5 10M0 10l5 10" stroke="#4b3f50" strokeWidth="3" strokeLinecap="round" />
        </g>
        <g transform="translate(433 482)">
          <circle cx="0" cy="-9" r="5" fill="#ffb9bd" />
          <path d="M0-3v13M0 2l-7 7M0 2l7 7M0 10l-5 10M0 10l5 10" stroke="#4b3f50" strokeWidth="3" strokeLinecap="round" />
        </g>
        <g transform="translate(378 512)">
          <circle cx="0" cy="-8" r="4.4" fill="#b9efcf" />
          <path d="M0-3v11M0 1l-6 6M0 1l6 6M0 8l-4 8M0 8l4 8" stroke="#4b3f50" strokeWidth="2.6" strokeLinecap="round" />
        </g>
      </g>

      <g className="sm-floating-lanterns">
        <g className="sm-float sm-lantern-one">
          <circle cx="292" cy="196" r="24" fill="url(#sm-lantern-glow)" />
          <path d="M286 182h12l4 17h-20Z" fill="#ffe08a" />
          <path d="M286 182h12" stroke="#b77a3c" strokeWidth="2" />
          <path d="M292 200v8" stroke="#b77a3c" strokeWidth="1" />
        </g>
        <g className="sm-float sm-lantern-two" style={{ animationDelay: '-2.2s' }}>
          <circle cx="662" cy="244" r="18" fill="url(#sm-lantern-glow)" />
          <path d="M657 233h10l3 13h-16Z" fill="#ffb3b8" />
        </g>
        <g className="sm-float sm-lantern-three" style={{ animationDelay: '-3.7s' }}>
          <circle cx="470" cy="242" r="13" fill="url(#sm-lantern-glow)" />
          <path d="M466 233h8l2 10h-12Z" fill="#b9efcf" />
        </g>
      </g>

      <g className="sm-complete-constellation" aria-hidden="true">
        <path d="M574 56 614 22 660 48 646 96 596 102Z" fill="none" stroke="#c9862b" strokeWidth="1.2" strokeDasharray="2 7" opacity=".65" />
        <circle cx="574" cy="56" r="2.4" fill="#ffd96b" />
        <circle cx="614" cy="22" r="1.8" fill="#ffd96b" />
        <circle cx="660" cy="48" r="2.2" fill="#ffd96b" />
        <circle cx="646" cy="96" r="1.7" fill="#ffd96b" />
        <circle cx="596" cy="102" r="2" fill="#ffd96b" />
      </g>

      <g className="sm-foreground-cloud" filter="url(#sm-soft)" opacity=".6">
        <ellipse cx="380" cy="704" rx="260" ry="34" fill="url(#sm-cloud)" />
        <ellipse cx="642" cy="694" rx="130" ry="24" fill="url(#sm-cloud)" />
        <ellipse cx="118" cy="698" rx="120" ry="22" fill="url(#sm-cloud)" />
      </g>
    </svg>
  );
}
