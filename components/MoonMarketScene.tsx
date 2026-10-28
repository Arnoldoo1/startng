export function MoonMarketScene({ complete = false }: { complete?: boolean }) {
  return (
    <svg
      className={`mm-scene${complete ? ' is-complete' : ''}`}
      viewBox="0 0 760 720"
      role="img"
      aria-label="An illustrated floating night market above Lagos, with lantern-lit stalls, a small danfo bus and a full moon."
    >
      <defs>
        <radialGradient id="mm-moon-halo" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffe6a6" stopOpacity=".52" />
          <stop offset="45%" stopColor="#e8b86a" stopOpacity=".18" />
          <stop offset="100%" stopColor="#e8b86a" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="mm-moon" cx="36%" cy="30%" r="72%">
          <stop offset="0%" stopColor="#fff7dd" />
          <stop offset="58%" stopColor="#f6e7c1" />
          <stop offset="100%" stopColor="#dcbf8c" />
        </radialGradient>
        <linearGradient id="mm-rock" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#5b4b6d" />
          <stop offset="42%" stopColor="#3d3352" />
          <stop offset="100%" stopColor="#211b38" />
        </linearGradient>
        <linearGradient id="mm-grass" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#8fc8a8" />
          <stop offset="52%" stopColor="#5f9a87" />
          <stop offset="100%" stopColor="#3d6f68" />
        </linearGradient>
        <linearGradient id="mm-path" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#d9b27a" />
          <stop offset="100%" stopColor="#a9785a" />
        </linearGradient>
        <linearGradient id="mm-canopy-rose" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f0b3ad" />
          <stop offset="100%" stopColor="#bd6f78" />
        </linearGradient>
        <linearGradient id="mm-canopy-gold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f4d18e" />
          <stop offset="100%" stopColor="#d0954e" />
        </linearGradient>
        <linearGradient id="mm-canopy-jade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#b7dfc4" />
          <stop offset="100%" stopColor="#6fa58a" />
        </linearGradient>
        <linearGradient id="mm-cloud" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#b7b8dc" stopOpacity=".5" />
          <stop offset="100%" stopColor="#6e709b" stopOpacity=".16" />
        </linearGradient>
        <linearGradient id="mm-bus" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f6d67d" />
          <stop offset="100%" stopColor="#dc9f4b" />
        </linearGradient>
        <radialGradient id="mm-lantern-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffe4a3" stopOpacity=".9" />
          <stop offset="48%" stopColor="#efb968" stopOpacity=".35" />
          <stop offset="100%" stopColor="#efb968" stopOpacity="0" />
        </radialGradient>
        <filter id="mm-soft" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="10" />
        </filter>
        <filter id="mm-glow" x="-120%" y="-120%" width="340%" height="340%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="mm-grain" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency=".9" numOctaves="2" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
          <feComponentTransfer>
            <feFuncA type="table" tableValues="0 .06" />
          </feComponentTransfer>
        </filter>
      </defs>

      <g className="mm-scene-stars" fill="#f6e7c1">
        <circle className="mm-twinkle" cx="72" cy="92" r="1.7" style={{ animationDelay: '-.8s' }} />
        <circle className="mm-twinkle" cx="128" cy="58" r="1.1" style={{ animationDelay: '-2.2s' }} />
        <circle className="mm-twinkle" cx="214" cy="108" r="1.5" style={{ animationDelay: '-1.4s' }} />
        <circle className="mm-twinkle" cx="298" cy="58" r="1.1" style={{ animationDelay: '-3.1s' }} />
        <circle className="mm-twinkle" cx="704" cy="98" r="1.6" style={{ animationDelay: '-2.6s' }} />
        <circle className="mm-twinkle" cx="656" cy="198" r="1.2" style={{ animationDelay: '-.4s' }} />
        <circle className="mm-twinkle" cx="738" cy="272" r="1.4" style={{ animationDelay: '-3.8s' }} />
        <circle className="mm-twinkle" cx="112" cy="248" r="1.2" style={{ animationDelay: '-1.1s' }} />
        <circle className="mm-twinkle" cx="46" cy="318" r="1.6" style={{ animationDelay: '-2.9s' }} />
        <circle className="mm-twinkle" cx="240" cy="212" r="1.1" style={{ animationDelay: '-4.2s' }} />
        <circle className="mm-twinkle" cx="600" cy="318" r="1.3" style={{ animationDelay: '-1.8s' }} />
        <circle className="mm-twinkle" cx="720" cy="382" r="1.2" style={{ animationDelay: '-.9s' }} />
        <circle className="mm-twinkle" cx="88" cy="430" r="1.5" style={{ animationDelay: '-3.5s' }} />
        <circle className="mm-twinkle" cx="656" cy="458" r="1.1" style={{ animationDelay: '-2.1s' }} />
      </g>

      <g className="mm-constellation" fill="none" stroke="#e8b86a" strokeWidth="1.1" opacity=".55">
        <path d="M78 120 119 92 166 122 144 166 94 158Z" strokeDasharray="2 8" />
        <path d="M166 122 205 101M144 166 181 188" strokeDasharray="2 8" />
        <circle cx="78" cy="120" r="2.2" fill="#f6e7c1" stroke="none" />
        <circle cx="119" cy="92" r="1.5" fill="#f6e7c1" stroke="none" />
        <circle cx="166" cy="122" r="2.1" fill="#f6e7c1" stroke="none" />
        <circle cx="144" cy="166" r="1.5" fill="#f6e7c1" stroke="none" />
        <circle cx="94" cy="158" r="1.3" fill="#f6e7c1" stroke="none" />
        <circle cx="205" cy="101" r="1.2" fill="#f6e7c1" stroke="none" />
        <circle cx="181" cy="188" r="1.2" fill="#f6e7c1" stroke="none" />
      </g>

      <g className="mm-moon-group">
        <circle cx="574" cy="146" r="148" fill="url(#mm-moon-halo)" className="mm-moon-halo" />
        <circle cx="574" cy="146" r="103" fill="url(#mm-moon-halo)" opacity=".6" />
        <circle cx="574" cy="146" r="78" fill="url(#mm-moon)" />
        <g fill="#cdb181" opacity=".32">
          <circle cx="548" cy="124" r="9" />
          <circle cx="594" cy="112" r="5.5" />
          <circle cx="602" cy="162" r="12" />
          <circle cx="560" cy="176" r="5" />
          <circle cx="530" cy="152" r="3.5" />
          <circle cx="586" cy="188" r="3.8" />
        </g>
        <circle cx="574" cy="146" r="82" fill="none" stroke="#fff2c9" strokeOpacity=".38" />
      </g>

      <g className="mm-cloud mm-cloud-a" filter="url(#mm-soft)" opacity=".9">
        <ellipse cx="150" cy="338" rx="96" ry="25" fill="url(#mm-cloud)" />
        <ellipse cx="204" cy="326" rx="58" ry="18" fill="url(#mm-cloud)" />
        <ellipse cx="104" cy="328" rx="42" ry="14" fill="url(#mm-cloud)" />
      </g>
      <g className="mm-cloud mm-cloud-b" filter="url(#mm-soft)" opacity=".7">
        <ellipse cx="650" cy="568" rx="96" ry="26" fill="url(#mm-cloud)" />
        <ellipse cx="704" cy="552" rx="54" ry="18" fill="url(#mm-cloud)" />
        <ellipse cx="602" cy="556" rx="46" ry="15" fill="url(#mm-cloud)" />
      </g>

      <g className="mm-float mm-bus-group">
        <ellipse cx="118" cy="392" rx="86" ry="21" fill="#fff3cf" opacity=".06" filter="url(#mm-soft)" />
        <g transform="translate(64 318) rotate(-4)">
          <path d="M0 28c0-8 6-14 14-14h104c8 0 14 6 14 14v34H0Z" fill="url(#mm-bus)" />
          <path d="M8 30c0-5 4-9 9-9h91c5 0 9 4 9 9v6H8Z" fill="#202546" />
          <rect x="15" y="32" width="22" height="17" rx="3" fill="#9fc7e8" opacity=".9" />
          <rect x="42" y="32" width="22" height="17" rx="3" fill="#9fc7e8" opacity=".9" />
          <rect x="69" y="32" width="22" height="17" rx="3" fill="#9fc7e8" opacity=".9" />
          <rect x="96" y="32" width="22" height="17" rx="3" fill="#9fc7e8" opacity=".9" />
          <rect x="8" y="56" width="118" height="8" rx="2" fill="#8e5e34" opacity=".5" />
          <circle cx="28" cy="66" r="10" fill="#202546" />
          <circle cx="28" cy="66" r="4" fill="#f4d18e" />
          <circle cx="108" cy="66" r="10" fill="#202546" />
          <circle cx="108" cy="66" r="4" fill="#f4d18e" />
          <circle cx="132" cy="49" r="4" fill="#ffe4a3" filter="url(#mm-glow)" />
          <path d="M4 14h126" stroke="#b47639" strokeWidth="2" strokeLinecap="round" />
        </g>
        <path d="M50 396c16 4 30-3 44-1 15 2 25 8 40 5" fill="none" stroke="#c2c4e0" strokeOpacity=".18" strokeWidth="2" strokeLinecap="round" />
      </g>

      <g className="mm-float mm-island-main">
        <ellipse cx="392" cy="668" rx="196" ry="22" fill="#060817" opacity=".5" filter="url(#mm-soft)" />
        <path
          d="M198 464c24 76 62 133 118 169 38 24 90 27 135 2 55-30 91-99 113-176Z"
          fill="url(#mm-rock)"
        />
        <path d="M227 492c31 55 66 92 112 113 27 13 58 16 88 8" fill="none" stroke="#79688b" strokeOpacity=".22" strokeWidth="2" />
        <path d="M276 520c-8 35-2 67 18 92M451 510c22 27 34 60 34 94M353 538c-4 39-1 68 9 94" fill="none" stroke="#17122a" strokeOpacity=".45" strokeWidth="3" strokeLinecap="round" />
        <path d="M296 628c8 14 22 18 33 8M422 616c-7 18 4 28 20 24" fill="none" stroke="#9b86ad" strokeOpacity=".25" strokeWidth="2" />
        <path
          d="M184 464c17-35 70-50 121-42 41-15 104-15 147 2 48-6 92 16 114 49 10 16 3 31-22 37-61 13-104 6-153 16-62 13-132 12-180-6-28-10-38-35-27-56Z"
          fill="url(#mm-grass)"
        />
        <path d="M209 462c35-18 77-21 121-11 44-12 101-12 148 2 31 1 57 9 74 21-30 8-66 8-103 13-61 8-127 8-187-2-24-4-42-12-53-23Z" fill="#a8d4b8" opacity=".18" />
        <path d="M286 511c37-15 82-17 124-5 30 8 58 8 85 2" fill="none" stroke="url(#mm-path)" strokeWidth="18" strokeLinecap="round" />
        <path d="M286 511c37-15 82-17 124-5 30 8 58 8 85 2" fill="none" stroke="#f0d19b" strokeOpacity=".23" strokeWidth="2" strokeLinecap="round" />
        <path d="M493 494c28 32 53 65 67 103" fill="none" stroke="url(#mm-path)" strokeWidth="12" strokeLinecap="round" opacity=".8" />
        <g fill="#223051" opacity=".55">
          <rect x="242" y="449" width="7" height="20" rx="2" />
          <rect x="527" y="449" width="7" height="22" rx="2" />
          <rect x="365" y="438" width="6" height="24" rx="2" />
        </g>
      </g>

      <g className="mm-float mm-island-side">
        <ellipse cx="104" cy="586" rx="82" ry="14" fill="#060817" opacity=".4" filter="url(#mm-soft)" />
        <path d="M32 498c13 46 36 78 69 95 19 10 43 9 58-3 22-18 37-50 45-92Z" fill="url(#mm-rock)" />
        <path d="M27 498c12-22 45-32 77-27 27-8 60-2 76 18 7 9 3 19-12 23-44 11-94 10-130 0-13-4-16-9-11-14Z" fill="url(#mm-grass)" />
        <path d="M49 489c26-8 56-8 80-2 12 1 21 4 28 8-25 5-54 5-79 1-15-2-24-4-29-7Z" fill="#a8d4b8" opacity=".18" />
        <g transform="translate(56 444)">
          <path d="M0 42h58v19H0Z" fill="#2b2748" />
          <path d="M8 42V18h42v24" fill="none" stroke="#e8b86a" strokeWidth="2" />
          <path d="M2 17 29 2l27 15Z" fill="url(#mm-canopy-gold)" />
          <rect x="23" y="28" width="12" height="14" rx="2" fill="#f6e7c1" opacity=".74" />
          <circle cx="29" cy="48" r="12" fill="url(#mm-lantern-glow)" />
          <circle cx="29" cy="48" r="3" fill="#ffe4a3" />
        </g>
        <circle cx="118" cy="472" r="3" fill="#ffe4a3" filter="url(#mm-glow)" />
      </g>

      <g className="mm-bridge">
        <path d="M181 476c-25 18-53 33-86 37" fill="none" stroke="#8e5e5d" strokeWidth="4" strokeLinecap="round" />
        <path d="M181 484c-25 18-53 31-86 35" fill="none" stroke="#4b3b5a" strokeWidth="8" strokeLinecap="round" opacity=".8" />
        <g stroke="#e8b86a" strokeWidth="1.4" opacity=".7">
          <path d="M160 476v-17M132 489v-16M104 496v-15" />
        </g>
        <path d="M160 459c-19 6-39 13-56 21" fill="none" stroke="#e8b86a" strokeWidth="1.1" opacity=".45" />
      </g>

      <g className="mm-stall mm-stall-back">
        <g transform="translate(290 395)">
          <path d="M0 60h82v24H0Z" fill="#3a3157" />
          <path d="M5 60V30h72v30" fill="none" stroke="#b9a8c9" strokeWidth="2" opacity=".55" />
          <path d="M0 30 41 4l41 26Z" fill="url(#mm-canopy-jade)" />
          <path d="M0 30c12 8 25 8 38 0 13 8 26 8 44 0" fill="none" stroke="#e8d6ef" strokeOpacity=".35" strokeWidth="2" />
          <rect x="12" y="43" width="20" height="16" rx="2" fill="#f6e7c1" opacity=".55" />
          <rect x="50" y="43" width="20" height="16" rx="2" fill="#f6e7c1" opacity=".45" />
          <circle cx="72" cy="34" r="3" fill="#ffe4a3" filter="url(#mm-glow)" />
        </g>
      </g>

      <g className="mm-stall mm-stall-main">
        <g transform="translate(342 362)">
          <path d="M-8 92h104v34H-8Z" fill="#41345d" />
          <path d="M0 92V38h88v54" fill="none" stroke="#d5bd91" strokeWidth="2.2" />
          <path d="M-14 40 44 0l58 40Z" fill="url(#mm-canopy-rose)" />
          <path d="M-14 40c15 10 29 10 44 0 15 10 30 10 44 0 10 7 20 8 30 0" fill="none" stroke="#f8ded4" strokeOpacity=".5" strokeWidth="2.5" />
          <path d="M10 40v52M32 40v52M54 40v52M76 40v52" stroke="#d9a9a2" strokeWidth="1.1" opacity=".5" />
          <rect x="6" y="58" width="30" height="28" rx="2" fill="#f6e7c1" opacity=".68" />
          <rect x="52" y="58" width="30" height="28" rx="2" fill="#f6e7c1" opacity=".5" />
          <path d="M6 72h30M52 72h30" stroke="#7a4b58" strokeWidth="1" opacity=".45" />
          <path d="M44 92V78" stroke="#2b2748" strokeWidth="3" />
          <circle cx="44" cy="102" r="3" fill="#ffe4a3" filter="url(#mm-glow)" />
          <g className="mm-sway" transform="translate(88 39)">
            <path d="M0 0v14" stroke="#e8b86a" strokeWidth="1.5" />
            <circle cx="0" cy="21" r="11" fill="url(#mm-lantern-glow)" />
            <path d="M-4 14h8l3 12H-7Z" fill="#f4d18e" />
            <path d="M-4 14h8" stroke="#b47639" strokeWidth="2" />
          </g>
        </g>
      </g>

      <g className="mm-stall mm-stall-right">
        <g transform="translate(456 414)">
          <path d="M0 56h74v25H0Z" fill="#3b3058" />
          <path d="M5 56V30h64v26" fill="none" stroke="#b9a8c9" strokeWidth="2" opacity=".55" />
          <path d="M0 30 37 6l37 24Z" fill="url(#mm-canopy-gold)" />
          <path d="M0 30c12 8 25 8 37 0 12 8 25 8 37 0" fill="none" stroke="#fff1c9" strokeOpacity=".45" strokeWidth="2" />
          <rect x="12" y="40" width="19" height="16" rx="2" fill="#f6e7c1" opacity=".5" />
          <rect x="44" y="40" width="19" height="16" rx="2" fill="#f6e7c1" opacity=".45" />
          <circle cx="62" cy="26" r="3" fill="#ffe4a3" filter="url(#mm-glow)" />
        </g>
      </g>

      <g className="mm-lantern-string">
        <path d="M318 340c44 27 94 34 144 22 28-7 51-4 70 9" fill="none" stroke="#dfba7d" strokeWidth="1.2" opacity=".55" />
        <g className="mm-sway" style={{ transformOrigin: '350px 352px', animationDelay: '-1.2s' }}>
          <path d="M350 352v14" stroke="#dfba7d" strokeWidth="1.1" />
          <circle cx="350" cy="378" r="14" fill="url(#mm-lantern-glow)" />
          <path d="M344 366h12l4 13h-20Z" fill="#f4d18e" />
        </g>
        <g className="mm-sway" style={{ transformOrigin: '402px 359px', animationDelay: '-2.6s' }}>
          <path d="M402 359v12" stroke="#dfba7d" strokeWidth="1.1" />
          <circle cx="402" cy="383" r="14" fill="url(#mm-lantern-glow)" />
          <path d="M396 371h12l4 13h-20Z" fill="#efb3a6" />
        </g>
        <g className="mm-sway" style={{ transformOrigin: '458px 359px', animationDelay: '-.6s' }}>
          <path d="M458 359v14" stroke="#dfba7d" strokeWidth="1.1" />
          <circle cx="458" cy="385" r="14" fill="url(#mm-lantern-glow)" />
          <path d="M452 373h12l4 13h-20Z" fill="#b7dfc4" />
        </g>
        <g className="mm-sway" style={{ transformOrigin: '514px 354px', animationDelay: '-1.9s' }}>
          <path d="M514 354v12" stroke="#dfba7d" strokeWidth="1.1" />
          <circle cx="514" cy="378" r="14" fill="url(#mm-lantern-glow)" />
          <path d="M508 366h12l4 13h-20Z" fill="#f4d18e" />
        </g>
      </g>

      <g className="mm-tree mm-tree-left">
        <path d="M234 484c-2-25 1-44 7-64M241 420c-8-12-16-19-27-23M241 431c11-13 21-19 34-21M241 447c-7-8-14-12-22-14" fill="none" stroke="#4b3a5f" strokeWidth="5" strokeLinecap="round" />
        <g fill="#7fb69b">
          <circle cx="209" cy="393" r="17" opacity=".9" />
          <circle cx="233" cy="373" r="22" opacity=".8" />
          <circle cx="263" cy="402" r="18" opacity=".85" />
          <circle cx="224" cy="414" r="15" opacity=".7" />
          <circle cx="270" cy="423" r="11" opacity=".7" />
        </g>
        <g fill="#c7e2c8" opacity=".55">
          <circle cx="225" cy="384" r="5" />
          <circle cx="253" cy="395" r="4" />
          <circle cx="215" cy="403" r="3" />
        </g>
        <circle className="mm-twinkle" cx="248" cy="381" r="2" fill="#ffe4a3" />
      </g>

      <g className="mm-tree mm-tree-right">
        <path d="M548 492c5-21 7-38 3-55M551 437c-8-11-17-17-27-20M551 447c9-12 18-17 30-18" fill="none" stroke="#4b3a5f" strokeWidth="4" strokeLinecap="round" />
        <g fill="#5f9a87">
          <circle cx="518" cy="409" r="14" opacity=".8" />
          <circle cx="545" cy="397" r="18" opacity=".8" />
          <circle cx="574" cy="420" r="14" opacity=".75" />
        </g>
        <circle className="mm-twinkle" cx="548" cy="400" r="1.8" fill="#ffe4a3" style={{ animationDelay: '-2s' }} />
      </g>

      <g className="mm-people">
        <g transform="translate(321 482)">
          <circle cx="0" cy="-9" r="5" fill="#f4d18e" />
          <path d="M0-3v13M0 2l-7 7M0 2l7 7M0 10l-5 10M0 10l5 10" stroke="#2b2748" strokeWidth="3" strokeLinecap="round" />
        </g>
        <g transform="translate(433 482)">
          <circle cx="0" cy="-9" r="5" fill="#f0b3ad" />
          <path d="M0-3v13M0 2l-7 7M0 2l7 7M0 10l-5 10M0 10l5 10" stroke="#2b2748" strokeWidth="3" strokeLinecap="round" />
        </g>
        <g transform="translate(378 512)">
          <circle cx="0" cy="-8" r="4.4" fill="#b7dfc4" />
          <path d="M0-3v11M0 1l-6 6M0 1l6 6M0 8l-4 8M0 8l4 8" stroke="#2b2748" strokeWidth="2.6" strokeLinecap="round" />
        </g>
      </g>

      <g className="mm-floating-lanterns">
        <g className="mm-float mm-lantern-one">
          <circle cx="292" cy="196" r="24" fill="url(#mm-lantern-glow)" />
          <path d="M286 182h12l4 17h-20Z" fill="#f4d18e" />
          <path d="M286 182h12" stroke="#b47639" strokeWidth="2" />
          <path d="M292 200v8" stroke="#b47639" strokeWidth="1" />
        </g>
        <g className="mm-float mm-lantern-two" style={{ animationDelay: '-2.2s' }}>
          <circle cx="662" cy="244" r="18" fill="url(#mm-lantern-glow)" />
          <path d="M657 233h10l3 13h-16Z" fill="#efb3a6" />
        </g>
        <g className="mm-float mm-lantern-three" style={{ animationDelay: '-3.7s' }}>
          <circle cx="470" cy="242" r="13" fill="url(#mm-lantern-glow)" />
          <path d="M466 233h8l2 10h-12Z" fill="#b7dfc4" />
        </g>
      </g>

      <g className="mm-complete-constellation" aria-hidden="true">
        <path d="M574 56 614 22 660 48 646 96 596 102Z" fill="none" stroke="#f6e7c1" strokeWidth="1.2" strokeDasharray="2 7" opacity=".65" />
        <circle cx="574" cy="56" r="2.4" fill="#ffe4a3" />
        <circle cx="614" cy="22" r="1.8" fill="#ffe4a3" />
        <circle cx="660" cy="48" r="2.2" fill="#ffe4a3" />
        <circle cx="646" cy="96" r="1.7" fill="#ffe4a3" />
        <circle cx="596" cy="102" r="2" fill="#ffe4a3" />
      </g>

      <g className="mm-foreground-cloud" filter="url(#mm-soft)" opacity=".6">
        <ellipse cx="380" cy="704" rx="260" ry="34" fill="url(#mm-cloud)" />
        <ellipse cx="642" cy="694" rx="130" ry="24" fill="url(#mm-cloud)" />
        <ellipse cx="118" cy="698" rx="120" ry="22" fill="url(#mm-cloud)" />
      </g>
    </svg>
  );
}
