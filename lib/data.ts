// Generated from start.ng public data. Do not edit by hand.
export type Game = {
  slug: string; title: string; by: string; description: string; cover: string;
  external: string | null; plays: number; updatedAt: string;
  leaderboard: { key: string; label: string; order: string; format: string }[];
  categories: string[];
};
export type Category = { slug: string; name: string; group: string; count: number; description: string; art: string | null; games: string[] };
export type Creator = { slug: string; id: number; name: string; by: string; url: string; description: string; cover: string; created: string; plays: number; categories: string[] };

export const games: Game[] = [
  {
    "slug": "the-hangout",
    "title": "The Hangout",
    "by": "start.ng",
    "description": "start.ng's own multiplayer park. Sign in as your character, walk around and meet everyone else who's there.",
    "cover": "/covers/the-hangout.webp",
    "external": null,
    "plays": 980,
    "updatedAt": "2026-10-28T08:00:00Z",
    "leaderboard": [
      {
        "key": "score",
        "label": "Score",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": []
  },
  {
    "slug": "lanedash",
    "title": "Lanedash",
    "by": "Hamzat",
    "description": "Dodge traffic, scoop up coins and see how far you can run through the green. A quick, bright endless runner from Hamzat.",
    "cover": "/covers/lanedash.webp",
    "external": "https://lanedash.start.ng",
    "plays": 4,
    "updatedAt": "2026-10-28T05:18:10.108009Z",
    "leaderboard": [
      {
        "key": "score",
        "label": "Score",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Endless runners",
      "Coin collecting",
      "3D games"
    ]
  },
  {
    "slug": "relic-hunter",
    "title": "Relic Hunter",
    "by": "Chloe",
    "description": "Duck, dodge and dig through ancient ruins in search of the next relic.",
    "cover": "/covers/relic-hunter.webp",
    "external": "https://relic-hunter.start.ng",
    "plays": 6,
    "updatedAt": "2026-10-28T05:18:09.471126Z",
    "leaderboard": [
      {
        "key": "gems",
        "label": "Gems",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "time",
        "label": "Time",
        "order": "lowest",
        "format": "time"
      }
    ],
    "categories": [
      "Shooting and action",
      "Platformers",
      "Ancient ruins and treasure",
      "3D games"
    ]
  },
  {
    "slug": "vault-of-yankari",
    "title": "Vault Of Yankari",
    "by": "Lanfear",
    "description": "Crack the vault, grab the treasure and get out before the walls close in.",
    "cover": "/covers/vault-of-yankari.webp",
    "external": "https://vault-of-yankari.start.ng",
    "plays": 3,
    "updatedAt": "2026-10-28T05:18:08.840000Z",
    "leaderboard": [
      {
        "key": "score",
        "label": "Score",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Nigerian themed",
      "Ancient ruins and treasure"
    ]
  },
  {
    "slug": "suya-catcher",
    "title": "Suya Catcher",
    "by": "Vivian",
    "description": "Catch the suya before it hits the ground. Mind the pepper.",
    "cover": "/covers/suya-catcher.webp",
    "external": "https://suya-catcher.start.ng",
    "plays": 5,
    "updatedAt": "2026-10-28T04:18:05.689733Z",
    "leaderboard": [
      {
        "key": "score",
        "label": "Score",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Catch and dodge",
      "Nigerian themed",
      "Food and cooking",
      "3D games"
    ]
  },
  {
    "slug": "orb-rush",
    "title": "Orb Rush",
    "by": "Muhammed",
    "description": "Chase the orbs, keep the combo alive and do not blink.",
    "cover": "/covers/orb-rush.webp",
    "external": "https://orb-rush.start.ng",
    "plays": 2,
    "updatedAt": "2026-10-28T04:18:04.538361Z",
    "leaderboard": [
      {
        "key": "orbs",
        "label": "Orbs collected",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Coin collecting"
    ]
  },
  {
    "slug": "dead-signal",
    "title": "Dead Signal",
    "by": "Benjamin",
    "description": "A lonely signal in the dark. Follow it, if you dare.",
    "cover": "/covers/dead-signal.webp",
    "external": "https://dead-signal.start.ng",
    "plays": 3,
    "updatedAt": "2026-10-28T04:18:04.021620Z",
    "leaderboard": [
      {
        "key": "score",
        "label": "Score",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Racing and driving",
      "Survival",
      "Horror and spooky",
      "3D games"
    ]
  },
  {
    "slug": "downshaft",
    "title": "Downshaft",
    "by": "Prince",
    "description": "Down you go. Time the drops and see how deep the shaft runs.",
    "cover": "/covers/downshaft.webp",
    "external": "https://downshaft.start.ng",
    "plays": 5,
    "updatedAt": "2026-10-28T04:18:03.412771Z",
    "leaderboard": [
      {
        "key": "floors",
        "label": "Deepest floor",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "time",
        "label": "Time survived",
        "order": "highest",
        "format": "time"
      }
    ],
    "categories": [
      "Platformers",
      "Survival",
      "3D games"
    ]
  },
  {
    "slug": "coin-catcher",
    "title": "Coin Catcher",
    "by": "Cynthy",
    "description": "Coins fall, you catch. It is a simple job until the bombs start.",
    "cover": "/covers/coin-catcher.webp",
    "external": "https://coin-catcher.start.ng",
    "plays": 3,
    "updatedAt": "2026-10-28T03:18:00.683863Z",
    "leaderboard": [
      {
        "key": "score",
        "label": "Score",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "streak",
        "label": "Best streak",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Catch and dodge",
      "Coin collecting",
      "3D games"
    ]
  },
  {
    "slug": "market-dash",
    "title": "Market Dash",
    "by": "Michael Churchill",
    "description": "Weave through a busy Lagos market with your shopping list and your wits.",
    "cover": "/covers/market-dash.webp",
    "external": "https://market-dash.start.ng",
    "plays": 2,
    "updatedAt": "2026-10-28T03:18:00.191403Z",
    "leaderboard": [
      {
        "key": "coins",
        "label": "Coins",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Coin collecting",
      "Markets and street life",
      "5-minute fun",
      "3D games"
    ]
  },
  {
    "slug": "owambe",
    "title": "Owambe",
    "by": "Victor",
    "description": "A party, a plate and a whole lot of jollof. Do not drop the food.",
    "cover": "/covers/owambe.webp",
    "external": "https://owambe.start.ng",
    "plays": 4,
    "updatedAt": "2026-10-28T03:17:59.626036Z",
    "leaderboard": [
      {
        "key": "points",
        "label": "Points",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "best_combo",
        "label": "Best combo",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Nigerian themed",
      "Lagos"
    ]
  },
  {
    "slug": "ghost-shift",
    "title": "Ghost Shift",
    "by": "Testing",
    "description": "The night shift is quiet. Too quiet. Keep the lights on.",
    "cover": "/covers/ghost-shift.webp",
    "external": "https://ghost-shift.start.ng",
    "plays": 3,
    "updatedAt": "2026-10-28T03:17:59.005240Z",
    "leaderboard": [
      {
        "key": "score",
        "label": "Score",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Brainy games"
    ]
  },
  {
    "slug": "finding-mama",
    "title": "Finding Mama",
    "by": "Harrylever",
    "description": "A little one is looking for mama in a big, busy world.",
    "cover": "/covers/finding-mama.webp",
    "external": "https://finding-mama.start.ng",
    "plays": 3,
    "updatedAt": "2026-10-28T03:17:58.392383Z",
    "leaderboard": [
      {
        "key": "keepsakes",
        "label": "Keepsakes found",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "time",
        "label": "Time to find Mama",
        "order": "lowest",
        "format": "time"
      }
    ],
    "categories": [
      "Markets and street life"
    ]
  },
  {
    "slug": "lagos-run",
    "title": "Lagos Run",
    "by": "Enaye",
    "description": "Run the streets of Lagos, hop the gutters and keep moving.",
    "cover": "/covers/lagos-run.webp",
    "external": "https://lagos-run.start.ng",
    "plays": 4,
    "updatedAt": "2026-10-27T23:15:53.647811Z",
    "leaderboard": [
      {
        "key": "dodges",
        "label": "Blocks Dodged",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "distance",
        "label": "Metres Run",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "passengers",
        "label": "Passengers",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "naira",
        "label": "Naira Earned",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Racing and driving",
      "Nigerian themed",
      "Lagos",
      "3D games"
    ]
  },
  {
    "slug": "the-hooded-swordsman",
    "title": "The Hooded Swordsman",
    "by": "Dave",
    "description": "A blade, a hood and a road full of trouble.",
    "cover": "/covers/the-hooded-swordsman.webp",
    "external": "https://the-hooded-swordsman.start.ng",
    "plays": 5,
    "updatedAt": "2026-10-27T23:15:52.912033Z",
    "leaderboard": [
      {
        "key": "waves",
        "label": "Waves survived",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "kills",
        "label": "Zombies slain",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Shooting and action"
    ]
  },
  {
    "slug": "forest-hunter",
    "title": "Forest Hunter",
    "by": "Tbrainyz",
    "description": "Track your quarry through the trees before the light goes.",
    "cover": "/covers/forest-hunter.webp",
    "external": "https://forest-hunter.start.ng",
    "plays": 8,
    "updatedAt": "2026-10-27T23:15:52.298129Z",
    "leaderboard": [
      {
        "key": "score",
        "label": "Total score",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "level",
        "label": "Level reached",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Shooting and action",
      "3D games"
    ]
  },
  {
    "slug": "arrow-escape",
    "title": "Arrow Escape",
    "by": "Irfat",
    "description": "Dodge the arrows, find the gap and make it out.",
    "cover": "/covers/arrow-escape.webp",
    "external": "https://arrow-escape.start.ng",
    "plays": 5,
    "updatedAt": "2026-10-27T23:15:51.798728Z",
    "leaderboard": [
      {
        "key": "level",
        "label": "Levels cleared",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "score",
        "label": "Score",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Brainy games",
      "3D games"
    ]
  },
  {
    "slug": "naira-run",
    "title": "Naira Run",
    "by": "Oluwalayomi",
    "description": "Rack up naira, dodge the bills and run the block.",
    "cover": "/covers/naira-run.webp",
    "external": "https://naira-run.start.ng",
    "plays": 2,
    "updatedAt": "2026-10-27T23:15:51.289283Z",
    "leaderboard": [
      {
        "key": "distance",
        "label": "Metres run",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "coins",
        "label": "Coins collected",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Endless runners",
      "Coin collecting",
      "Nigerian themed",
      "3D games"
    ]
  },
  {
    "slug": "naija-penalty",
    "title": "Naija Penalty",
    "by": "Obi",
    "description": "Step up, pick your corner and put it past the keeper.",
    "cover": "/covers/naija-penalty.webp",
    "external": "https://naija-penalty.start.ng",
    "plays": 4,
    "updatedAt": "2026-10-27T20:13:45.783081Z",
    "leaderboard": [
      {
        "key": "wins",
        "label": "Shootouts Won",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "goals",
        "label": "Goals Scored",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "saves",
        "label": "Saves Made",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Football and sports",
      "Nigerian themed"
    ]
  },
  {
    "slug": "cyber-slash",
    "title": "Cyber Slash",
    "by": "Goodness",
    "description": "Slice through neon streets in a cyberpunk dash.",
    "cover": "/covers/cyber-slash.webp",
    "external": "https://cyber-slash.start.ng",
    "plays": 3,
    "updatedAt": "2026-10-27T20:13:45.170454Z",
    "leaderboard": [
      {
        "key": "score",
        "label": "High score",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "slashes",
        "label": "Drones slashed",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "distance",
        "label": "Metres run",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Endless runners",
      "Shooting and action",
      "Neon and cyberpunk"
    ]
  },
  {
    "slug": "danfo",
    "title": "Danfo",
    "by": "Khalif",
    "description": "The danfo is late, the road is loud and the conductor is calling. Hop in.",
    "cover": "/covers/danfo.webp",
    "external": "https://danfo.start.ng",
    "plays": 5,
    "updatedAt": "2026-10-27T20:13:44.647147Z",
    "leaderboard": [
      {
        "key": "naira",
        "label": "Naira earned",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "passengers",
        "label": "Passengers delivered",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "secrets",
        "label": "Secrets found",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Racing and driving",
      "Simulation and management",
      "Nigerian themed",
      "Lagos",
      "3D games"
    ]
  },
  {
    "slug": "treasure-isle",
    "title": "Treasure Isle",
    "by": "Irfat",
    "description": "Sail in, dig deep and bring the treasure home.",
    "cover": "/covers/treasure-isle.webp",
    "external": "https://treasure-isle.start.ng",
    "plays": 3,
    "updatedAt": "2026-10-27T20:13:44.063921Z",
    "leaderboard": [
      {
        "key": "treasures",
        "label": "Treasures",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "coins",
        "label": "Coins",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "time",
        "label": "Time",
        "order": "lowest",
        "format": "time"
      }
    ],
    "categories": [
      "Brainy games",
      "Ancient ruins and treasure",
      "3D games"
    ]
  },
  {
    "slug": "neon-drift-arcade",
    "title": "Neon Drift Arcade",
    "by": "Covenant",
    "description": "Drift the corners and chase the high score under neon lights.",
    "cover": "/covers/neon-drift-arcade.webp",
    "external": "https://neon-drift-arcade.start.ng",
    "plays": 3,
    "updatedAt": "2026-10-27T20:13:43.458917Z",
    "leaderboard": [
      {
        "key": "distance",
        "label": "Distance (m)",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "sparks",
        "label": "Sparks",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Neon and cyberpunk"
    ]
  },
  {
    "slug": "gem-rush",
    "title": "Gem Rush",
    "by": "Temitope",
    "description": "Grab the gems, dodge the hazards and beat the clock.",
    "cover": "/covers/gem-rush.webp",
    "external": "https://gem-rush.start.ng",
    "plays": 2,
    "updatedAt": "2026-10-27T19:13:40.358669Z",
    "leaderboard": [
      {
        "key": "gems",
        "label": "Gems collected",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Coin collecting",
      "5-minute fun"
    ]
  },
  {
    "slug": "balloon-funride",
    "title": "Balloon Funride",
    "by": "Agada",
    "description": "Float up, catch the breeze and enjoy the view.",
    "cover": "/covers/balloon-funride.webp",
    "external": "https://balloon-funride.start.ng",
    "plays": 3,
    "updatedAt": "2026-10-27T19:13:39.799547Z",
    "leaderboard": [
      {
        "key": "distance",
        "label": "Meters Flown",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "coins",
        "label": "Coins Collected",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Endless runners",
      "3D games"
    ]
  },
  {
    "slug": "sky-hopper",
    "title": "Sky Hopper",
    "by": "Joshua",
    "description": "Hop from cloud to cloud and keep climbing.",
    "cover": "/covers/sky-hopper.webp",
    "external": "https://sky-hopper.start.ng",
    "plays": 6,
    "updatedAt": "2026-10-27T19:13:39.159588Z",
    "leaderboard": [
      {
        "key": "score",
        "label": "Score",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Platformers",
      "Coin collecting",
      "3D games"
    ]
  },
  {
    "slug": "sumo-bump",
    "title": "Sumo Bump",
    "by": "Mo-Zoe",
    "description": "Bump, shove and stay in the ring. Last one standing wins.",
    "cover": "/covers/sumo-bump.webp",
    "external": "https://sumo-bump.start.ng",
    "plays": 6,
    "updatedAt": "2026-10-27T19:13:38.565244Z",
    "leaderboard": [
      {
        "key": "rounds",
        "label": "Rounds won",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "knockouts",
        "label": "Knockouts",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Shooting and action",
      "3D games"
    ]
  },
  {
    "slug": "streetpk-naija",
    "title": "Streetpk Naija",
    "by": "Salako",
    "description": "Street football with a Naija twist. Pick a side and ball.",
    "cover": "/covers/streetpk-naija.webp",
    "external": "https://streetpk-naija.start.ng",
    "plays": 3,
    "updatedAt": "2026-10-27T19:13:38.073553Z",
    "leaderboard": [
      {
        "key": "goals",
        "label": "Penalties scored",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "saves",
        "label": "Penalties saved",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Football and sports",
      "Nigerian themed",
      "3D games"
    ]
  },
  {
    "slug": "cybertron-runner",
    "title": "Cybertron Runner",
    "by": "Nnachi",
    "description": "Run the neon grid and outpace the machines.",
    "cover": "/covers/cybertron-runner.webp",
    "external": "https://cybertron-runner.start.ng",
    "plays": 3,
    "updatedAt": "2026-10-27T18:13:34.458273Z",
    "leaderboard": [
      {
        "key": "score",
        "label": "Score",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "coins",
        "label": "Coins",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Endless runners",
      "3D games"
    ]
  },
  {
    "slug": "okada-dodge",
    "title": "Okada Dodge",
    "by": "Abdul-Baaqi",
    "description": "Weave through Lagos traffic on an okada. Hold tight.",
    "cover": "/covers/okada-dodge.webp",
    "external": "https://okada-dodge.start.ng",
    "plays": 5,
    "updatedAt": "2026-10-27T18:13:32.663911Z",
    "leaderboard": [
      {
        "key": "coins",
        "label": "Coins collected",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "time",
        "label": "Time survived",
        "order": "highest",
        "format": "time"
      }
    ],
    "categories": [
      "Catch and dodge",
      "Coin collecting",
      "Nigerian themed",
      "Markets and street life",
      "3D games"
    ]
  },
  {
    "slug": "glitter-rain",
    "title": "Glitter Rain",
    "by": "Mercy",
    "description": "Catch the sparkle, dodge the gloom.",
    "cover": "/covers/glitter-rain.webp",
    "external": "https://glitter-rain.start.ng",
    "plays": 3,
    "updatedAt": "2026-10-27T18:13:32.018714Z",
    "leaderboard": [
      {
        "key": "points",
        "label": "Sparkle points",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "diamonds",
        "label": "Diamonds caught",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Catch and dodge",
      "5-minute fun"
    ]
  },
  {
    "slug": "neon-drift",
    "title": "Neon Drift",
    "by": "Miracle",
    "description": "A night drive, a wet road and a very good drift.",
    "cover": "/covers/neon-drift.webp",
    "external": "https://neon-drift.start.ng",
    "plays": 2,
    "updatedAt": "2026-10-27T18:13:31.255760Z",
    "leaderboard": [
      {
        "key": "distance",
        "label": "Distance",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "shards",
        "label": "Shards",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Endless runners",
      "Coin collecting",
      "Neon and cyberpunk"
    ]
  },
  {
    "slug": "gidi-hop",
    "title": "Gidi Hop",
    "by": "Oluwayoyinsola",
    "description": "Hop across the city, one rooftop at a time.",
    "cover": "/covers/gidi-hop.webp",
    "external": "https://gidi-hop.start.ng",
    "plays": 2,
    "updatedAt": "2026-10-27T18:13:30.704284Z",
    "leaderboard": [
      {
        "key": "hops",
        "label": "Hops",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "coins",
        "label": "₦ Coins",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Catch and dodge",
      "Coin collecting",
      "Nigerian themed",
      "Lagos"
    ]
  },
  {
    "slug": "lagos-legends-street-quest",
    "title": "Lagos Legends Street Quest",
    "by": "Triple",
    "description": "Explore the streets, find your style, and make your mark in Lagos Legends.",
    "cover": "/covers/lagos-legends-street-quest.webp",
    "external": "https://lagos-legends-street-quest.start.ng",
    "plays": 0,
    "updatedAt": "2026-10-27T17:11:33.678464Z",
    "leaderboard": [
      {
        "key": "score",
        "label": "Score",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": []
  },
  {
    "slug": "lagos-crossing",
    "title": "Lagos Crossing",
    "by": "Senior",
    "description": "Cross the road without becoming part of it.",
    "cover": "/covers/lagos-crossing.webp",
    "external": "https://lagos-crossing.start.ng",
    "plays": 4,
    "updatedAt": "2026-10-27T16:11:26.103788Z",
    "leaderboard": [
      {
        "key": "rows",
        "label": "Rows crossed",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "coins",
        "label": "Naira coins",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Catch and dodge",
      "Coin collecting",
      "Nigerian themed",
      "Lagos"
    ]
  },
  {
    "slug": "alley-velocity",
    "title": "Alley Velocity",
    "by": "Monarch",
    "description": "Tight corners, fast feet and a very short alley.",
    "cover": "/covers/alley-velocity.webp",
    "external": "https://alley-velocity.start.ng",
    "plays": 2,
    "updatedAt": "2026-10-27T16:11:24.780502Z",
    "leaderboard": [
      {
        "key": "distance",
        "label": "Distance (m)",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "coins",
        "label": "Coins",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Endless runners",
      "Racing and driving"
    ]
  },
  {
    "slug": "coconut-dodge",
    "title": "Coconut Dodge",
    "by": "Fawazbky",
    "description": "Coconuts incoming. Keep your head and your score.",
    "cover": "/covers/coconut-dodge.webp",
    "external": "https://coconut-dodge.start.ng",
    "plays": 7,
    "updatedAt": "2026-10-27T16:11:24.162021Z",
    "leaderboard": [
      {
        "key": "score",
        "label": "Score",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "coins",
        "label": "Coins caught",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "survived",
        "label": "Time survived",
        "order": "highest",
        "format": "time"
      }
    ],
    "categories": [
      "Catch and dodge",
      "Coin collecting",
      "5-minute fun"
    ]
  },
  {
    "slug": "dusk-stack",
    "title": "Dusk Stack",
    "by": "Eddy",
    "description": "Stack it high before the light fades.",
    "cover": "/covers/dusk-stack.webp",
    "external": "https://dusk-stack.start.ng",
    "plays": 2,
    "updatedAt": "2026-10-27T16:11:23.550605Z",
    "leaderboard": [
      {
        "key": "floors",
        "label": "Floors",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "perfects",
        "label": "Perfect drops",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Lagos",
      "Cosy and relaxing",
      "3D games"
    ]
  },
  {
    "slug": "orbit-run",
    "title": "Orbit Run",
    "by": "Nike",
    "description": "Run the ring and keep your orbit steady.",
    "cover": "/covers/orbit-run.webp",
    "external": "https://orbit-run.start.ng",
    "plays": 3,
    "updatedAt": "2026-10-27T16:11:22.849263Z",
    "leaderboard": [
      {
        "key": "score",
        "label": "Best score",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Endless runners",
      "Coin collecting",
      "3D games"
    ]
  },
  {
    "slug": "iso-scrap",
    "title": "Iso Scrap",
    "by": "Abdulmuiz",
    "description": "Scrap, build and survive in an isometric little world.",
    "cover": "/covers/iso-scrap.webp",
    "external": "https://iso-scrap.start.ng",
    "plays": 2,
    "updatedAt": "2026-10-27T15:11:15.944854Z",
    "leaderboard": [
      {
        "key": "score",
        "label": "Salvage score",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Neon and cyberpunk",
      "3D games"
    ]
  },
  {
    "slug": "coin-dash-arena",
    "title": "Coin Dash Arena",
    "by": "snow",
    "description": "Coin Dash Arena is a free browser game by snow. Pick it up and play right here, no download.",
    "cover": "/covers/coin-dash-arena.webp",
    "external": "https://coin-dash-arena.start.ng",
    "plays": 5,
    "updatedAt": "2026-10-27T15:11:15.145909Z",
    "leaderboard": [
      {
        "key": "coins",
        "label": "Coins",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "survived",
        "label": "Survived",
        "order": "highest",
        "format": "time"
      }
    ],
    "categories": [
      "Catch and dodge",
      "Coin collecting",
      "Survival",
      "3D games"
    ]
  },
  {
    "slug": "oven-rush",
    "title": "Oven Rush",
    "by": "Hassanat",
    "description": "Oven Rush is a free browser game by Hassanat. Pick it up and play right here, no download.",
    "cover": "/covers/oven-rush.webp",
    "external": "https://oven-rush.start.ng",
    "plays": 3,
    "updatedAt": "2026-10-27T15:11:14.283497Z",
    "leaderboard": [
      {
        "key": "score",
        "label": "Score",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "orders",
        "label": "Orders served",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Simulation and management",
      "Nigerian themed",
      "Lagos",
      "Food and cooking",
      "3D games"
    ]
  },
  {
    "slug": "arcade-hub",
    "title": "Arcade Hub",
    "by": "HB",
    "description": "Arcade Hub is a free browser game by HB. Pick it up and play right here, no download.",
    "cover": "/covers/arcade-hub.webp",
    "external": "https://arcade-hub.start.ng",
    "plays": 3,
    "updatedAt": "2026-10-27T15:11:13.710638Z",
    "leaderboard": [
      {
        "key": "score",
        "label": "Top Score",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "wins",
        "label": "Matches Won",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "With friends"
    ]
  },
  {
    "slug": "neondrift",
    "title": "Neondrift",
    "by": "Ezekiel",
    "description": "Neondrift is a free browser game by Ezekiel. Pick it up and play right here, no download.",
    "cover": "/covers/neondrift.webp",
    "external": "https://neondrift.start.ng",
    "plays": 6,
    "updatedAt": "2026-10-27T15:11:12.839191Z",
    "leaderboard": [
      {
        "key": "score",
        "label": "Score",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "distance",
        "label": "Distance (m)",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Endless runners",
      "Neon and cyberpunk",
      "3D games"
    ]
  },
  {
    "slug": "go-slow-danfo",
    "title": "Go Slow Danfo",
    "by": "Oyetoke",
    "description": "Lagos traffic, but make it a game. Go slow, score big.",
    "cover": "/covers/go-slow-danfo.webp",
    "external": "https://go-slow-danfo.start.ng",
    "plays": 2,
    "updatedAt": "2026-10-27T14:11:09.293442Z",
    "leaderboard": [
      {
        "key": "passengers",
        "label": "Passengers carried",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "distance",
        "label": "Metres driven",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Racing and driving",
      "Nigerian themed",
      "Lagos"
    ]
  },
  {
    "slug": "orb-temple",
    "title": "Orb Temple",
    "by": "aphoe",
    "description": "Orb Temple is a free browser game by aphoe. Pick it up and play right here, no download.",
    "cover": "/covers/orb-temple.webp",
    "external": "https://orb-temple.start.ng",
    "plays": 3,
    "updatedAt": "2026-10-27T14:11:08.651393Z",
    "leaderboard": [
      {
        "key": "score",
        "label": "Score",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "distance",
        "label": "Distance (m)",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "coins",
        "label": "Coins",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Ancient ruins and treasure"
    ]
  },
  {
    "slug": "3d-coin-collector",
    "title": "3d Coin Collector",
    "by": "Pleasure",
    "description": "3d Coin Collector is a free browser game by Pleasure. Pick it up and play right here, no download.",
    "cover": "/covers/3d-coin-collector.webp",
    "external": "https://3d-coin-collector.start.ng",
    "plays": 3,
    "updatedAt": "2026-10-27T14:11:07.961245Z",
    "leaderboard": [
      {
        "key": "score",
        "label": "Score",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Coin collecting",
      "3D games"
    ]
  },
  {
    "slug": "startverse-neon-rush",
    "title": "Startverse Neon Rush",
    "by": "Divine",
    "description": "Startverse Neon Rush is a free browser game by Divine. Pick it up and play right here, no download.",
    "cover": "/covers/startverse-neon-rush.webp",
    "external": "https://startverse-neon-rush.start.ng",
    "plays": 2,
    "updatedAt": "2026-10-27T14:11:07.290222Z",
    "leaderboard": [
      {
        "key": "distance",
        "label": "Metres run",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "shards",
        "label": "Shards",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "survived",
        "label": "Survived",
        "order": "lowest",
        "format": "time"
      }
    ],
    "categories": [
      "Endless runners",
      "Neon and cyberpunk"
    ]
  },
  {
    "slug": "glide",
    "title": "Glide",
    "by": "dev_elixir",
    "description": "Glide is a free browser game by dev_elixir. Pick it up and play right here, no download.",
    "cover": "/covers/glide.webp",
    "external": "https://glide.start.ng",
    "plays": 2,
    "updatedAt": "2026-10-27T14:11:06.527376Z",
    "leaderboard": [
      {
        "key": "distance",
        "label": "Distance (m)",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "packets",
        "label": "Packets Routed",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Endless runners",
      "Neon and cyberpunk"
    ]
  },
  {
    "slug": "pulse-runner",
    "title": "Pulse Runner",
    "by": "Pulse Analytics",
    "description": "Pulse Runner is a free browser game by Pulse Analytics. Pick it up and play right here, no download.",
    "cover": "/covers/pulse-runner.webp",
    "external": "https://pulse-runner.start.ng",
    "plays": 2,
    "updatedAt": "2026-10-27T13:11:02.490581Z",
    "leaderboard": [
      {
        "key": "score",
        "label": "Score",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Endless runners"
    ]
  },
  {
    "slug": "mama-put-rush",
    "title": "Mama Put Rush",
    "by": "Stephen",
    "description": "Mama Put Rush is a free browser game by Stephen. Pick it up and play right here, no download.",
    "cover": "/covers/mama-put-rush.webp",
    "external": "https://mama-put-rush.start.ng",
    "plays": 6,
    "updatedAt": "2026-10-27T13:11:01.981842Z",
    "leaderboard": [
      {
        "key": "days",
        "label": "Days cleared",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "naira",
        "label": "Naira earned",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Simulation and management",
      "Nigerian themed",
      "Lagos",
      "Food and cooking",
      "3D games"
    ]
  },
  {
    "slug": "wheelie-wahala",
    "title": "Wheelie Wahala",
    "by": "bobbysam",
    "description": "A 3D stunt bike racer for start.ng. Flip, loop and race across the desert as your own start.ng character.",
    "cover": "/covers/wheelie-wahala.webp",
    "external": "https://wheelie-wahala.start.ng",
    "plays": 9,
    "updatedAt": "2026-10-27T13:11:01.403051Z",
    "leaderboard": [
      {
        "key": "stars",
        "label": "Stars",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "flip_score",
        "label": "Best flip score",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "flips",
        "label": "Lifetime flips",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "time",
        "label": "Total time",
        "order": "lowest",
        "format": "time"
      }
    ],
    "categories": [
      "Racing and driving",
      "3D games"
    ]
  },
  {
    "slug": "star-runner-3d",
    "title": "Star Runner 3d",
    "by": "mayowa",
    "description": "Star Runner 3d is a free browser game by mayowa. Pick it up and play right here, no download.",
    "cover": "/covers/star-runner-3d.webp",
    "external": "https://star-runner-3d.start.ng",
    "plays": 4,
    "updatedAt": "2026-10-27T13:11:00.626159Z",
    "leaderboard": [
      {
        "key": "distance",
        "label": "Distance (m)",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "stars",
        "label": "Stars collected",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Endless runners",
      "Space and sci-fi",
      "3D games"
    ]
  },
  {
    "slug": "startng-city-dash",
    "title": "Startng City Dash",
    "by": "Zee",
    "description": "Startng City Dash is a free browser game by Zee. Pick it up and play right here, no download.",
    "cover": "/covers/startng-city-dash.webp",
    "external": "https://startng-city-dash.start.ng",
    "plays": 4,
    "updatedAt": "2026-10-27T13:11:00.032742Z",
    "leaderboard": [
      {
        "key": "distance",
        "label": "Distance (m)",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "coins",
        "label": "Coins",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Endless runners",
      "Coin collecting",
      "3D games"
    ]
  },
  {
    "slug": "city-hustle-lagos",
    "title": "City Hustle Lagos",
    "by": "Daniel",
    "description": "City Hustle Lagos is a free browser game by Daniel. Pick it up and play right here, no download.",
    "cover": "/covers/city-hustle-lagos.webp",
    "external": "https://city-hustle-lagos.start.ng",
    "plays": 2,
    "updatedAt": "2026-10-27T12:10:56.623452Z",
    "leaderboard": [
      {
        "key": "earned",
        "label": "Total ₦ earned",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Simulation and management",
      "Nigerian themed",
      "Lagos",
      "3D games"
    ]
  },
  {
    "slug": "along",
    "title": "Along",
    "by": "Yolanda",
    "description": "Along is a free browser game by Yolanda. Pick it up and play right here, no download.",
    "cover": "/covers/along.webp",
    "external": "https://along.start.ng",
    "plays": 2,
    "updatedAt": "2026-10-27T12:10:56.008882Z",
    "leaderboard": [
      {
        "key": "fares",
        "label": "Fares earned (₦)",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "passengers",
        "label": "Passengers",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Racing and driving",
      "Simulation and management",
      "Nigerian themed",
      "3D games"
    ]
  },
  {
    "slug": "flood-rise",
    "title": "Flood Rise",
    "by": "Josh",
    "description": "Flood Rise is a free browser game by Josh. Pick it up and play right here, no download.",
    "cover": "/covers/flood-rise.webp",
    "external": "https://flood-rise.start.ng",
    "plays": 4,
    "updatedAt": "2026-10-27T12:10:55.455093Z",
    "leaderboard": [
      {
        "key": "height",
        "label": "Height (m)",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "sachets",
        "label": "Pure water sachets",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Platformers",
      "Survival",
      "Nigerian themed",
      "Lagos",
      "3D games"
    ]
  },
  {
    "slug": "git-quest",
    "title": "Git Quest",
    "by": "Belemote",
    "description": "Git Quest is a free browser game by Belemote. Pick it up and play right here, no download.",
    "cover": "/covers/git-quest.webp",
    "external": "https://git-quest.start.ng",
    "plays": 9,
    "updatedAt": "2026-10-27T12:10:54.850776Z",
    "leaderboard": [
      {
        "key": "xp",
        "label": "Total XP",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "worlds",
        "label": "Worlds cleared",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "gems",
        "label": "Gems",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "secrets",
        "label": "Secret missions",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Fantasy and magic",
      "Educational",
      "Coding and tech",
      "3D games"
    ]
  },
  {
    "slug": "lagos-market-run",
    "title": "Lagos Market Run",
    "by": "Michelle",
    "description": "Lagos Market Run is a free browser game by Michelle. Pick it up and play right here, no download.",
    "cover": "/covers/lagos-market-run.webp",
    "external": "https://lagos-market-run.start.ng",
    "plays": 12,
    "updatedAt": "2026-10-27T12:10:53.671527Z",
    "leaderboard": [
      {
        "key": "distance",
        "label": "Distance (m)",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "lanterns",
        "label": "Suya Skewers",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Endless runners",
      "Nigerian themed",
      "Lagos",
      "Markets and street life",
      "3D games"
    ]
  },
  {
    "slug": "kingpin-arena",
    "title": "Kingpin Arena",
    "by": "Ayo",
    "description": "Kingpin Arena is a free browser game by Ayo. Pick it up and play right here, no download.",
    "cover": "/covers/kingpin-arena.webp",
    "external": "https://kingpin-arena.start.ng",
    "plays": 2,
    "updatedAt": "2026-10-27T11:10:50.472758Z",
    "leaderboard": [
      {
        "key": "score",
        "label": "Score",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Shooting and action"
    ]
  },
  {
    "slug": "orbit-orchard",
    "title": "Orbit Orchard",
    "by": "khay",
    "description": "Orbit Orchard is a free browser game by khay. Pick it up and play right here, no download.",
    "cover": "/covers/orbit-orchard.webp",
    "external": "https://orbit-orchard.start.ng",
    "plays": 3,
    "updatedAt": "2026-10-27T11:10:49.955324Z",
    "leaderboard": [
      {
        "key": "score",
        "label": "Harvest points",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "seeds",
        "label": "Seeds gathered",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "time",
        "label": "Harvest time",
        "order": "lowest",
        "format": "time"
      }
    ],
    "categories": [
      "Coin collecting",
      "5-minute fun",
      "3D games"
    ]
  },
  {
    "slug": "coin-dash",
    "title": "Coin Dash",
    "by": "Chinenye",
    "description": "Coin Dash is a free browser game by Chinenye. Pick it up and play right here, no download.",
    "cover": "/covers/coin-dash.webp",
    "external": "https://coin-dash.start.ng",
    "plays": 4,
    "updatedAt": "2026-10-27T11:10:49.199476Z",
    "leaderboard": [
      {
        "key": "score",
        "label": "Score",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Coin collecting"
    ]
  },
  {
    "slug": "lagos-hustle",
    "title": "Lagos Hustle",
    "by": "Kelvo",
    "description": "Lagos Hustle is a free browser game by Kelvo. Pick it up and play right here, no download.",
    "cover": "/covers/lagos-hustle.webp",
    "external": "https://lagos-hustle.start.ng",
    "plays": 5,
    "updatedAt": "2026-10-27T11:10:48.563926Z",
    "leaderboard": [
      {
        "key": "earnings",
        "label": "Earnings (₦)",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "deliveries",
        "label": "Deliveries",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "distance_km",
        "label": "Distance (km)",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "best_time",
        "label": "Best Lap",
        "order": "lowest",
        "format": "time"
      }
    ],
    "categories": [
      "Racing and driving",
      "Nigerian themed",
      "Lagos",
      "3D games"
    ]
  },
  {
    "slug": "archery-master",
    "title": "Archery Master",
    "by": "David",
    "description": "Archery Master is a free browser game by David. Pick it up and play right here, no download.",
    "cover": "/covers/archery-master.webp",
    "external": "https://archery-master.start.ng",
    "plays": 2,
    "updatedAt": "2026-10-27T11:10:47.701363Z",
    "leaderboard": [
      {
        "key": "score",
        "label": "Score",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "3D games"
    ]
  },
  {
    "slug": "job-hunt",
    "title": "Job Hunt",
    "by": "Raji",
    "description": "Job Hunt is a free browser game by Raji. Pick it up and play right here, no download.",
    "cover": "/covers/job-hunt.webp",
    "external": "https://job-hunt.start.ng",
    "plays": 19,
    "updatedAt": "2026-10-27T10:10:44.832021Z",
    "leaderboard": [
      {
        "key": "coins",
        "label": "Coins",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "deliverables",
        "label": "Deliverables",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "stars",
        "label": "Stars",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Simulation and management",
      "Educational",
      "3D games"
    ]
  },
  {
    "slug": "relic-rush-3d",
    "title": "Relic Rush 3d",
    "by": "Noble",
    "description": "Relic Rush 3d is a free browser game by Noble. Pick it up and play right here, no download.",
    "cover": "/covers/relic-rush-3d.webp",
    "external": "https://relic-rush-3d.start.ng",
    "plays": 3,
    "updatedAt": "2026-10-27T10:10:43.504610Z",
    "leaderboard": [
      {
        "key": "score",
        "label": "Score",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "distance",
        "label": "Distance (m)",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "relics",
        "label": "Relics",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Endless runners",
      "Coin collecting",
      "Ancient ruins and treasure",
      "3D games"
    ]
  },
  {
    "slug": "harrington-mystery",
    "title": "Harrington Mystery",
    "by": "faith",
    "description": "Harrington Mystery is a free browser game by faith. Pick it up and play right here, no download.",
    "cover": "/covers/harrington-mystery.webp",
    "external": "https://harrington-mystery.start.ng",
    "plays": 3,
    "updatedAt": "2026-10-27T10:10:42.665753Z",
    "leaderboard": [
      {
        "key": "score",
        "label": "Detective Score",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "turns_left",
        "label": "Turns Left",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Brainy games",
      "3D games"
    ]
  },
  {
    "slug": "follow-follow",
    "title": "Follow Follow",
    "by": "kim",
    "description": "Follow the line, copy the moves and do not fall behind.",
    "cover": "/covers/follow-follow.webp",
    "external": "https://follow-follow.start.ng",
    "plays": 2,
    "updatedAt": "2026-10-27T10:10:42.025994Z",
    "leaderboard": [
      {
        "key": "rounds",
        "label": "Rounds survived",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "correct",
        "label": "Correct answers",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "outlasted",
        "label": "Players outlasted",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Brainy games",
      "With friends",
      "For a class or a cohort"
    ]
  },
  {
    "slug": "star-sprint",
    "title": "Star Sprint",
    "by": "satar",
    "description": "Star Sprint is a free browser game by satar. Pick it up and play right here, no download.",
    "cover": "/covers/star-sprint.webp",
    "external": "https://star-sprint.start.ng",
    "plays": 2,
    "updatedAt": "2026-10-27T10:10:41.402006Z",
    "leaderboard": [
      {
        "key": "time",
        "label": "Fastest time",
        "order": "lowest",
        "format": "time"
      }
    ],
    "categories": [
      "Coin collecting",
      "5-minute fun",
      "3D games"
    ]
  },
  {
    "slug": "volcano",
    "title": "Volcano",
    "by": "Jose",
    "description": "Volcano is a free browser game by Jose. Pick it up and play right here, no download.",
    "cover": "/covers/volcano.webp",
    "external": "https://volcano.start.ng",
    "plays": 3,
    "updatedAt": "2026-10-27T09:10:37.830430Z",
    "leaderboard": [
      {
        "key": "score",
        "label": "Score",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "gems",
        "label": "Gems",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "metres",
        "label": "Metres run",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Endless runners",
      "Coin collecting"
    ]
  },
  {
    "slug": "relic-rush",
    "title": "Relic Rush",
    "by": "Daniel",
    "description": "Relic Rush is a free browser game by Daniel. Pick it up and play right here, no download.",
    "cover": "/covers/relic-rush.webp",
    "external": "https://relic-rush.start.ng",
    "plays": 2,
    "updatedAt": "2026-10-27T09:10:37.245879Z",
    "leaderboard": [
      {
        "key": "relics",
        "label": "Relics",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "time",
        "label": "Time left",
        "order": "highest",
        "format": "time"
      }
    ],
    "categories": [
      "Coin collecting",
      "Ancient ruins and treasure",
      "3D games"
    ]
  },
  {
    "slug": "sharp-sharp",
    "title": "Sharp Sharp",
    "by": "Eddy",
    "description": "Sharp Sharp is a free browser game by Eddy. Pick it up and play right here, no download.",
    "cover": "/covers/sharp-sharp.webp",
    "external": "https://sharp-sharp.start.ng",
    "plays": 4,
    "updatedAt": "2026-10-27T09:10:36.726411Z",
    "leaderboard": [
      {
        "key": "earnings",
        "label": "Earnings (NGN)",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "deliveries",
        "label": "Deliveries",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Racing and driving",
      "Simulation and management",
      "Nigerian themed",
      "Lagos",
      "3D games"
    ]
  },
  {
    "slug": "starfall-neon-survival",
    "title": "Starfall Neon Survival",
    "by": "Donald",
    "description": "Starfall Neon Survival is a free browser game by Donald. Pick it up and play right here, no download.",
    "cover": "/covers/starfall-neon-survival.webp",
    "external": "https://starfall-neon-survival.start.ng",
    "plays": 2,
    "updatedAt": "2026-10-27T09:10:36.037905Z",
    "leaderboard": [
      {
        "key": "survival",
        "label": "Seconds survived",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "sparks",
        "label": "Sparks collected",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Catch and dodge",
      "Survival",
      "Neon and cyberpunk"
    ]
  },
  {
    "slug": "nebula-dash",
    "title": "Nebula Dash",
    "by": "Oby",
    "description": "Nebula Dash is a free browser game by Oby. Pick it up and play right here, no download.",
    "cover": "/covers/nebula-dash.webp",
    "external": "https://nebula-dash.start.ng",
    "plays": 2,
    "updatedAt": "2026-10-27T09:10:35.515789Z",
    "leaderboard": [
      {
        "key": "score",
        "label": "Score",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "stars",
        "label": "Stars caught",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "time",
        "label": "Time survived",
        "order": "highest",
        "format": "time"
      }
    ],
    "categories": [
      "Space and sci-fi"
    ]
  },
  {
    "slug": "inkbreak",
    "title": "Inkbreak",
    "by": "henryuks",
    "description": "Inkbreak is an original ink arena shooter with Turf Clash and Squad Assault across four arenas.",
    "cover": "/covers/inkbreak.webp",
    "external": "https://inkbreak.start.ng",
    "plays": 15,
    "updatedAt": "2026-10-27T08:09:45.302370Z",
    "leaderboard": [
      {
        "key": "points",
        "label": "Match points",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "splats",
        "label": "Splats",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "paint",
        "label": "Paint coverage",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Shooting and action",
      "3D games"
    ]
  },
  {
    "slug": "crowd-control",
    "title": "Crowd Control",
    "by": "Dave",
    "description": "Crowd Control is a free browser game by Dave. Pick it up and play right here, no download.",
    "cover": "/covers/crowd-control.webp",
    "external": "https://crowd-control.start.ng",
    "plays": 3,
    "updatedAt": "2026-10-27T05:08:30.361412Z",
    "leaderboard": [
      {
        "key": "level",
        "label": "Levels cleared",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "time",
        "label": "Total seek time",
        "order": "lowest",
        "format": "time"
      }
    ],
    "categories": [
      "Survival"
    ]
  },
  {
    "slug": "bounce-game",
    "title": "Bounce Game",
    "by": "Emmanuel",
    "description": "Bounce Game is a free browser game by Emmanuel. Pick it up and play right here, no download.",
    "cover": "/covers/bounce-game.webp",
    "external": "https://bounce-game.start.ng",
    "plays": 4,
    "updatedAt": "2026-10-27T05:08:29.779585Z",
    "leaderboard": [
      {
        "key": "score",
        "label": "Score",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Catch and dodge",
      "5-minute fun"
    ]
  },
  {
    "slug": "riftsync",
    "title": "Riftsync",
    "by": "YUSUF",
    "description": "A rhythm run through the rift. Stay in sync.",
    "cover": "/covers/riftsync.webp",
    "external": "https://riftsync.start.ng",
    "plays": 4,
    "updatedAt": "2026-10-27T05:08:29.277664Z",
    "leaderboard": [
      {
        "key": "score",
        "label": "Score",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "best_combo",
        "label": "Best combo",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "ships",
        "label": "Dimensions stabilized",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Brainy games"
    ]
  },
  {
    "slug": "junction-spirit",
    "title": "Junction Spirit",
    "by": "Nurudeen",
    "description": "Junction Spirit is a free browser game by Nurudeen. Pick it up and play right here, no download.",
    "cover": "/covers/junction-spirit.webp",
    "external": "https://junction-spirit.start.ng",
    "plays": 2,
    "updatedAt": "2026-10-27T05:08:27.904483Z",
    "leaderboard": [
      {
        "key": "cleared",
        "label": "Traffic cleared",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "crossings",
        "label": "Safe crossings",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "shift",
        "label": "Shift survived",
        "order": "highest",
        "format": "time"
      }
    ],
    "categories": [
      "Brainy games",
      "Simulation and management"
    ]
  },
  {
    "slug": "coin-rush",
    "title": "Coin Rush",
    "by": "Daniel",
    "description": "Coin Rush is a free browser game by Daniel. Pick it up and play right here, no download.",
    "cover": "/covers/coin-rush.webp",
    "external": "https://coin-rush.start.ng",
    "plays": 2,
    "updatedAt": "2026-10-27T05:08:27.351540Z",
    "leaderboard": [
      {
        "key": "coins",
        "label": "Coins collected",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "deaths",
        "label": "Deaths",
        "order": "lowest",
        "format": "number"
      }
    ],
    "categories": [
      "Catch and dodge",
      "Coin collecting",
      "3D games"
    ]
  },
  {
    "slug": "bloom-circuit",
    "title": "Bloom Circuit",
    "by": "Felix",
    "description": "Bloom Circuit is a free browser game by Felix. Pick it up and play right here, no download.",
    "cover": "/covers/bloom-circuit.webp",
    "external": "https://bloom-circuit.start.ng",
    "plays": 2,
    "updatedAt": "2026-10-27T04:08:25.095927Z",
    "leaderboard": [
      {
        "key": "gardens",
        "label": "Gardens grown",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "score",
        "label": "Bloom score",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "time",
        "label": "Growing time",
        "order": "lowest",
        "format": "time"
      }
    ],
    "categories": [
      "Brainy games",
      "Cosy and relaxing"
    ]
  },
  {
    "slug": "glam-dash",
    "title": "Glam Dash",
    "by": "Mercy",
    "description": "Glam Dash is a free browser game by Mercy. Pick it up and play right here, no download.",
    "cover": "/covers/glam-dash.webp",
    "external": "https://glam-dash.start.ng",
    "plays": 3,
    "updatedAt": "2026-10-27T04:08:24.267962Z",
    "leaderboard": [
      {
        "key": "score",
        "label": "Glam score",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Endless runners",
      "Coin collecting"
    ]
  },
  {
    "slug": "orb-rush-mando",
    "title": "Orb Rush Mando",
    "by": "Michael",
    "description": "Orb Rush Mando is a free browser game by Michael. Pick it up and play right here, no download.",
    "cover": "/covers/orb-rush-mando.webp",
    "external": "https://orb-rush-mando.start.ng",
    "plays": 2,
    "updatedAt": "2026-10-27T04:08:23.730903Z",
    "leaderboard": [
      {
        "key": "orbs",
        "label": "Orbs collected",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Coin collecting",
      "With friends",
      "3D games"
    ]
  },
  {
    "slug": "onithsa-market-run",
    "title": "Onithsa Market Run",
    "by": "Nwabueze Jeremiah Nwite",
    "description": "Onithsa Market Run is a free browser game by Nwabueze Jeremiah Nwite. Pick it up and play right here, no download.",
    "cover": "/covers/onithsa-market-run.webp",
    "external": "https://onithsa-market-run.start.ng",
    "plays": 3,
    "updatedAt": "2026-10-27T04:08:23.170114Z",
    "leaderboard": [
      {
        "key": "score",
        "label": "Score",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "distance",
        "label": "Distance (m)",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "coins",
        "label": "Coins",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Endless runners",
      "Nigerian themed",
      "Markets and street life",
      "3D games"
    ]
  },
  {
    "slug": "robot-dodge",
    "title": "Robot Dodge",
    "by": "kenneth",
    "description": "Robot Dodge is a free browser game by kenneth. Pick it up and play right here, no download.",
    "cover": "/covers/robot-dodge.webp",
    "external": "https://robot-dodge.start.ng",
    "plays": 3,
    "updatedAt": "2026-10-27T04:08:22.448195Z",
    "leaderboard": [
      {
        "key": "distance",
        "label": "Distance (m)",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "dodges",
        "label": "Obstacles dodged",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Endless runners",
      "Catch and dodge",
      "3D games"
    ]
  },
  {
    "slug": "sky-courier",
    "title": "Sky Courier",
    "by": "Cypher",
    "description": "Sky Courier is a free browser game by Cypher. Pick it up and play right here, no download.",
    "cover": "/covers/sky-courier.webp",
    "external": "https://sky-courier.start.ng",
    "plays": 4,
    "updatedAt": "2026-10-27T03:08:19.734418Z",
    "leaderboard": [
      {
        "key": "distance",
        "label": "Distance (m)",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "parcels",
        "label": "Parcels Delivered",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "coins",
        "label": "Coins Collected",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Catch and dodge",
      "Coin collecting"
    ]
  },
  {
    "slug": "budget-panic",
    "title": "Budget Panic",
    "by": "Envy_Boop",
    "description": "A fast, funny market-survival game for start.ng. You have a recipe to cook, a small budget, and prices that keep moving. Haggle with traders, dodge pickpockets, survive market chaos, and buy the whole list before you go broke.",
    "cover": "/covers/budget-panic.webp",
    "external": "https://budget-panic.start.ng",
    "plays": 8,
    "updatedAt": "2026-10-27T03:08:19.166478Z",
    "leaderboard": [
      {
        "key": "score",
        "label": "Score",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Simulation and management",
      "Markets and street life",
      "Food and cooking",
      "3D games"
    ]
  },
  {
    "slug": "cloud-courier",
    "title": "Cloud Courier",
    "by": "wisdom",
    "description": "Cloud Courier is a free browser game by wisdom. Pick it up and play right here, no download.",
    "cover": "/covers/cloud-courier.webp",
    "external": "https://cloud-courier.start.ng",
    "plays": 6,
    "updatedAt": "2026-10-27T03:08:18.568481Z",
    "leaderboard": [
      {
        "key": "score",
        "label": "Score",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "parcels",
        "label": "Parcels delivered",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Endless runners"
    ]
  },
  {
    "slug": "star-dodge-by-jeffersdoherty",
    "title": "Star Dodge By Jeffersdoherty",
    "by": "Jeffers",
    "description": "Star Dodge By Jeffersdoherty is a free browser game by Jeffers. Pick it up and play right here, no download.",
    "cover": "/covers/star-dodge-by-jeffersdoherty.webp",
    "external": "https://star-dodge-by-jeffersdoherty.start.ng",
    "plays": 2,
    "updatedAt": "2026-10-27T03:08:17.930252Z",
    "leaderboard": [
      {
        "key": "score",
        "label": "Score",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "waves",
        "label": "Waves survived",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "gems",
        "label": "Star gems",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Catch and dodge",
      "Space and sci-fi",
      "With friends"
    ]
  },
  {
    "slug": "agent-protocol",
    "title": "Agent Protocol",
    "by": "Fabbenco",
    "description": "Agent Protocol is a free browser game by Fabbenco. Pick it up and play right here, no download.",
    "cover": "/covers/agent-protocol.webp",
    "external": "https://agent-protocol.start.ng",
    "plays": 6,
    "updatedAt": "2026-10-27T03:08:17.370253Z",
    "leaderboard": [
      {
        "key": "sectors",
        "label": "Sectors Purged",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "rag_retrievals",
        "label": "Vector Shards Retrieved",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "efficiency",
        "label": "Compute Efficiency",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "time",
        "label": "Mission Duration",
        "order": "lowest",
        "format": "time"
      }
    ],
    "categories": [
      "Brainy games",
      "Neon and cyberpunk"
    ]
  },
  {
    "slug": "perihelion",
    "title": "Perihelion",
    "by": "Bishop",
    "description": "Perihelion is a free browser game by Bishop. Pick it up and play right here, no download.",
    "cover": "/covers/perihelion.webp",
    "external": "https://perihelion.start.ng",
    "plays": 5,
    "updatedAt": "2026-10-27T02:06:14.524227Z",
    "leaderboard": [
      {
        "key": "score",
        "label": "Score",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "multiplier",
        "label": "Best multiplier",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "time",
        "label": "Time survived",
        "order": "highest",
        "format": "time"
      }
    ],
    "categories": [
      "Catch and dodge",
      "Space and sci-fi",
      "5-minute fun",
      "3D games"
    ]
  },
  {
    "slug": "ember-dash",
    "title": "Ember Dash",
    "by": "Soludo",
    "description": "Ember Dash is an endless lava-runner on start.ng. Flee the eruption, leap the gaps, slide under the arches and grab every crystal with your own start.ng character.",
    "cover": "/covers/ember-dash.webp",
    "external": "https://ember-dash.start.ng",
    "plays": 12,
    "updatedAt": "2026-10-27T02:06:13.935139Z",
    "leaderboard": [
      {
        "key": "distance",
        "label": "Metres run",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "crystals",
        "label": "Crystals",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Endless runners",
      "Coin collecting"
    ]
  },
  {
    "slug": "naija-drafts",
    "title": "Naija Drafts",
    "by": "Aniyikaye",
    "description": "Naija Drafts is a free browser game by Aniyikaye. Pick it up and play right here, no download.",
    "cover": "/covers/naija-drafts.webp",
    "external": "https://naija-drafts.start.ng",
    "plays": 4,
    "updatedAt": "2026-10-27T02:06:13.401454Z",
    "leaderboard": [
      {
        "key": "score",
        "label": "Best win score",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "level",
        "label": "Level beaten (1-3)",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "moves",
        "label": "Moves to win",
        "order": "lowest",
        "format": "number"
      }
    ],
    "categories": [
      "Brainy games",
      "Board and card",
      "Nigerian themed",
      "Two-player classics"
    ]
  },
  {
    "slug": "zobo-sort",
    "title": "Zobo Sort",
    "by": "Aishajoda",
    "description": "Zobo Sort is a free browser game by Aishajoda. Pick it up and play right here, no download.",
    "cover": "/covers/zobo-sort.webp",
    "external": "https://zobo-sort.start.ng",
    "plays": 3,
    "updatedAt": "2026-10-27T02:06:12.823812Z",
    "leaderboard": [
      {
        "key": "levels",
        "label": "Levels cleared",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "moves",
        "label": "Total moves",
        "order": "lowest",
        "format": "number"
      }
    ],
    "categories": [
      "Brainy games"
    ]
  },
  {
    "slug": "ayo-arena",
    "title": "Ayo Arena",
    "by": "mar",
    "description": "Ayo Arena is a free browser game by mar. Pick it up and play right here, no download.",
    "cover": "/covers/ayo-arena.webp",
    "external": "https://ayo-arena.start.ng",
    "plays": 2,
    "updatedAt": "2026-10-27T02:06:12.307607Z",
    "leaderboard": [
      {
        "key": "beaten",
        "label": "Rivals beaten",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "seeds",
        "label": "Seeds won",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Brainy games",
      "Board and card",
      "Nigerian themed",
      "Two-player classics",
      "3D games"
    ]
  },
  {
    "slug": "jollof-catch",
    "title": "Jollof Catch",
    "by": "Akintomiwa",
    "description": "Jollof Catch is a free browser game by Akintomiwa. Pick it up and play right here, no download.",
    "cover": "/covers/jollof-catch.webp",
    "external": "https://jollof-catch.start.ng",
    "plays": 2,
    "updatedAt": "2026-10-27T01:06:09.592236Z",
    "leaderboard": [
      {
        "key": "score",
        "label": "Plates caught",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "streak",
        "label": "Best streak",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Catch and dodge",
      "Nigerian themed",
      "Food and cooking",
      "5-minute fun"
    ]
  },
  {
    "slug": "bullseye-archery",
    "title": "Bullseye Archery",
    "by": "Spider",
    "description": "Bullseye Archery is a free browser game by Spider. Pick it up and play right here, no download.",
    "cover": "/covers/bullseye-archery.webp",
    "external": "https://bullseye-archery.start.ng",
    "plays": 2,
    "updatedAt": "2026-10-27T01:06:08.997406Z",
    "leaderboard": [
      {
        "key": "score",
        "label": "Score",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "bullseyes",
        "label": "Bullseyes",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": []
  },
  {
    "slug": "platformer-hopper",
    "title": "Platformer Hopper",
    "by": "Dhozie",
    "description": "Platformer Hopper is a free browser game by Dhozie. Pick it up and play right here, no download.",
    "cover": "/covers/platformer-hopper.webp",
    "external": "https://platformer-hopper.start.ng",
    "plays": 2,
    "updatedAt": "2026-10-27T01:06:08.116797Z",
    "leaderboard": [
      {
        "key": "height",
        "label": "Max Height (m)",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "gems",
        "label": "Gems Collected",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Platformers"
    ]
  },
  {
    "slug": "shard-survival",
    "title": "Shard Survival",
    "by": "Peter",
    "description": "Shard Survival is a free browser game by Peter. Pick it up and play right here, no download.",
    "cover": "/covers/shard-survival.webp",
    "external": "https://shard-survival.start.ng",
    "plays": 3,
    "updatedAt": "2026-10-27T01:06:07.545350Z",
    "leaderboard": [
      {
        "key": "waves",
        "label": "Waves survived",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "cleared",
        "label": "Enemies cleared",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "time",
        "label": "Survived",
        "order": "highest",
        "format": "time"
      }
    ],
    "categories": [
      "Shooting and action",
      "Survival",
      "3D games"
    ]
  },
  {
    "slug": "mami",
    "title": "Mami",
    "by": "Jubril",
    "description": "Mami is a free browser game by Jubril. Pick it up and play right here, no download.",
    "cover": "/covers/mami.webp",
    "external": "https://mami.start.ng",
    "plays": 2,
    "updatedAt": "2026-10-27T01:06:06.821401Z",
    "leaderboard": [
      {
        "key": "coins",
        "label": "Coins",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "served",
        "label": "Meals served",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Simulation and management",
      "Nigerian themed",
      "Markets and street life",
      "Food and cooking",
      "3D games"
    ]
  },
  {
    "slug": "dont-spill-the-soup",
    "title": "Dont Spill The Soup",
    "by": "Umar",
    "description": "Dont Spill The Soup is a free browser game by Umar. Pick it up and play right here, no download.",
    "cover": "/covers/dont-spill-the-soup.webp",
    "external": "https://dont-spill-the-soup.start.ng",
    "plays": 3,
    "updatedAt": "2026-10-27T00:06:04.187396Z",
    "leaderboard": [
      {
        "key": "score",
        "label": "Score",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Food and cooking"
    ]
  },
  {
    "slug": "the-lost-library",
    "title": "The Lost Library",
    "by": "Gracie",
    "description": "The Lost Library is a free browser game by Gracie. Pick it up and play right here, no download.",
    "cover": "/covers/the-lost-library.webp",
    "external": "https://the-lost-library.start.ng",
    "plays": 3,
    "updatedAt": "2026-10-27T00:06:03.594527Z",
    "leaderboard": [
      {
        "key": "levels",
        "label": "Levels completed",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "words",
        "label": "Unique words discovered",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Brainy games",
      "Fantasy and magic",
      "Educational",
      "Words and reading"
    ]
  },
  {
    "slug": "nepa-light-up-lagos",
    "title": "Nepa Light Up Lagos",
    "by": "Oluwasanmi",
    "description": "Nepa Light Up Lagos is a free browser game by Oluwasanmi. Pick it up and play right here, no download.",
    "cover": "/covers/nepa-light-up-lagos.webp",
    "external": "https://nepa-light-up-lagos.start.ng",
    "plays": 4,
    "updatedAt": "2026-10-27T00:06:02.908228Z",
    "leaderboard": [
      {
        "key": "score",
        "label": "Energy restored",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "districts",
        "label": "Districts powered",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Brainy games",
      "Nigerian themed",
      "Lagos",
      "3D games"
    ]
  },
  {
    "slug": "coin-dash-runner",
    "title": "Coin Dash Runner",
    "by": "Ejike",
    "description": "Coin Dash Runner is a free browser game by Ejike. Pick it up and play right here, no download.",
    "cover": "/covers/coin-dash-runner.webp",
    "external": "https://coin-dash-runner.start.ng",
    "plays": 3,
    "updatedAt": "2026-10-27T00:06:02.294564Z",
    "leaderboard": [
      {
        "key": "score",
        "label": "Best Score",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Endless runners",
      "Coin collecting"
    ]
  },
  {
    "slug": "naija-quickfire",
    "title": "Naija Quickfire",
    "by": "Adele",
    "description": "Naija Quickfire is a free browser game by Adele. Pick it up and play right here, no download.",
    "cover": "/covers/naija-quickfire.webp",
    "external": "https://naija-quickfire.start.ng",
    "plays": 3,
    "updatedAt": "2026-10-27T00:06:01.739876Z",
    "leaderboard": [
      {
        "key": "score",
        "label": "Best score",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Nigerian themed"
    ]
  },
  {
    "slug": "bug-escape",
    "title": "Bug Escape",
    "by": "Timothy",
    "description": "Bug Escape is a free browser game by Timothy. Pick it up and play right here, no download.",
    "cover": "/covers/bug-escape.webp",
    "external": "https://bug-escape.start.ng",
    "plays": 3,
    "updatedAt": "2026-10-26T23:03:59.310625Z",
    "leaderboard": [
      {
        "key": "score",
        "label": "Build score",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "tokens",
        "label": "Code tokens",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "survived",
        "label": "Uptime",
        "order": "highest",
        "format": "time"
      }
    ],
    "categories": [
      "Catch and dodge",
      "Survival",
      "Coding and tech",
      "3D games"
    ]
  },
  {
    "slug": "orb-frenzy",
    "title": "Orb Frenzy",
    "by": "Rabiah",
    "description": "Orb Frenzy is a free browser game by Rabiah. Pick it up and play right here, no download.",
    "cover": "/covers/orb-frenzy.webp",
    "external": "https://orb-frenzy.start.ng",
    "plays": 3,
    "updatedAt": "2026-10-26T23:03:58.628688Z",
    "leaderboard": [
      {
        "key": "orbs",
        "label": "Orbs collected",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "combo",
        "label": "Best combo",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Catch and dodge",
      "Coin collecting",
      "5-minute fun",
      "3D games"
    ]
  },
  {
    "slug": "cosmic-surge",
    "title": "Cosmic Surge",
    "by": "Uriel",
    "description": "Cosmic Surge is a free browser game by Uriel. Pick it up and play right here, no download.",
    "cover": "/covers/cosmic-surge.webp",
    "external": "https://cosmic-surge.start.ng",
    "plays": 2,
    "updatedAt": "2026-10-26T23:03:58.010606Z",
    "leaderboard": [
      {
        "key": "score",
        "label": "Score",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "wave",
        "label": "Wave",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "crystals",
        "label": "Crystals",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Space and sci-fi"
    ]
  },
  {
    "slug": "penalty-kings-3d",
    "title": "Penalty Kings 3d",
    "by": "BabaD",
    "description": "Penalty Kings 3d is a free browser game by BabaD. Pick it up and play right here, no download.",
    "cover": "/covers/penalty-kings-3d.webp",
    "external": "https://penalty-kings-3d.start.ng",
    "plays": 2,
    "updatedAt": "2026-10-26T23:03:57.275402Z",
    "leaderboard": [
      {
        "key": "points",
        "label": "Points",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "goals",
        "label": "Goals",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "rounds",
        "label": "Rounds cleared",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "accuracy",
        "label": "Accuracy %",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Football and sports",
      "3D games"
    ]
  },
  {
    "slug": "neon-brick-break",
    "title": "Neon Brick Break",
    "by": "Jamal",
    "description": "Neon Brick Break is a free browser game by Jamal. Pick it up and play right here, no download.",
    "cover": "/covers/neon-brick-break.webp",
    "external": "https://neon-brick-break.start.ng",
    "plays": 2,
    "updatedAt": "2026-10-26T23:03:56.498027Z",
    "leaderboard": [
      {
        "key": "score",
        "label": "Score",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Neon and cyberpunk",
      "5-minute fun"
    ]
  },
  {
    "slug": "sneaky-squad",
    "title": "Sneaky Squad",
    "by": "Nae",
    "description": "Sneaky Squad is a free browser game by Nae. Pick it up and play right here, no download.",
    "cover": "/covers/sneaky-squad.webp",
    "external": "https://sneaky-squad.start.ng",
    "plays": 4,
    "updatedAt": "2026-10-26T22:03:53.678523Z",
    "leaderboard": [
      {
        "key": "score",
        "label": "Mission score",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "time",
        "label": "Escape time",
        "order": "lowest",
        "format": "time"
      },
      {
        "key": "level",
        "label": "Mission",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "3D games"
    ]
  },
  {
    "slug": "portal-pals",
    "title": "Portal Pals",
    "by": "Maryam",
    "description": "Portal Pals is a free browser game by Maryam. Pick it up and play right here, no download.",
    "cover": "/covers/portal-pals.webp",
    "external": "https://portal-pals.start.ng",
    "plays": 3,
    "updatedAt": "2026-10-26T22:03:53.021519Z",
    "leaderboard": [
      {
        "key": "gems",
        "label": "Star gems",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "time",
        "label": "Completion time",
        "order": "lowest",
        "format": "time"
      }
    ],
    "categories": [
      "Platformers",
      "Coin collecting"
    ]
  },
  {
    "slug": "lagos-bike-rush",
    "title": "Lagos Bike Rush",
    "by": "OBA",
    "description": "Lagos Bike Rush is a free browser game by OBA. Pick it up and play right here, no download.",
    "cover": "/covers/lagos-bike-rush.webp",
    "external": "https://lagos-bike-rush.start.ng",
    "plays": 37,
    "updatedAt": "2026-10-26T22:03:52.527987Z",
    "leaderboard": [
      {
        "key": "dodges",
        "label": "Traffic dodged",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "distance",
        "label": "Distance",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "time",
        "label": "Ride time",
        "order": "highest",
        "format": "time"
      }
    ],
    "categories": [
      "Endless runners",
      "Racing and driving",
      "Nigerian themed",
      "Lagos",
      "3D games"
    ]
  },
  {
    "slug": "naija-relic-hunter",
    "title": "Naija Relic Hunter",
    "by": "Solomon",
    "description": "Naija Relic Hunter is a free browser game by Solomon. Pick it up and play right here, no download.",
    "cover": "/covers/naija-relic-hunter.webp",
    "external": "https://naija-relic-hunter.start.ng",
    "plays": 8,
    "updatedAt": "2026-10-26T22:03:51.614982Z",
    "leaderboard": [
      {
        "key": "score",
        "label": "Score",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "time",
        "label": "Time left",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Nigerian themed",
      "Ancient ruins and treasure"
    ]
  },
  {
    "slug": "horsebound-endless-derby",
    "title": "Horsebound Endless Derby",
    "by": "Emmanuel",
    "description": "Horsebound Endless Derby is a free browser game by Emmanuel. Pick it up and play right here, no download.",
    "cover": "/covers/horsebound-endless-derby.webp",
    "external": "https://horsebound-endless-derby.start.ng",
    "plays": 4,
    "updatedAt": "2026-10-26T22:03:50.930751Z",
    "leaderboard": [
      {
        "key": "distance",
        "label": "Distance (m)",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "coins",
        "label": "Coins",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "hurdles",
        "label": "Hurdles cleared",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "perfect",
        "label": "Perfect jumps",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "score",
        "label": "Score",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Endless runners",
      "3D games"
    ]
  },
  {
    "slug": "circuit-racer",
    "title": "Circuit Racer",
    "by": "Bolu",
    "description": "Circuit Racer is a free browser game by Bolu. Pick it up and play right here, no download.",
    "cover": "/covers/circuit-racer.webp",
    "external": "https://circuit-racer.start.ng",
    "plays": 4,
    "updatedAt": "2026-10-26T21:01:47.687893Z",
    "leaderboard": [
      {
        "key": "time",
        "label": "Lap Time",
        "order": "lowest",
        "format": "time"
      },
      {
        "key": "chips",
        "label": "Bits Collected",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Racing and driving"
    ]
  },
  {
    "slug": "showball",
    "title": "Showball",
    "by": "Trust Emmanuel",
    "description": "Showball is a free browser game by Trust Emmanuel. Pick it up and play right here, no download.",
    "cover": "/covers/showball.webp",
    "external": "https://showball.start.ng",
    "plays": 2,
    "updatedAt": "2026-10-26T21:01:46.495136Z",
    "leaderboard": [
      {
        "key": "juggles",
        "label": "Juggles",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "goals",
        "label": "Goals",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Football and sports"
    ]
  },
  {
    "slug": "orbital-run",
    "title": "Orbital Run",
    "by": "Precious",
    "description": "Orbital Run is a free browser game by Precious. Pick it up and play right here, no download.",
    "cover": "/covers/orbital-run.webp",
    "external": "https://orbital-run.start.ng",
    "plays": 2,
    "updatedAt": "2026-10-26T21:01:45.922470Z",
    "leaderboard": [
      {
        "key": "score",
        "label": "Score",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Endless runners"
    ]
  },
  {
    "slug": "coin-rush-3d",
    "title": "Coin Rush 3d",
    "by": "Pearl",
    "description": "Coin Rush 3d is a free browser game by Pearl. Pick it up and play right here, no download.",
    "cover": "/covers/coin-rush-3d.webp",
    "external": "https://coin-rush-3d.start.ng",
    "plays": 2,
    "updatedAt": "2026-10-26T21:01:45.342287Z",
    "leaderboard": [
      {
        "key": "score",
        "label": "Score",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Coin collecting",
      "5-minute fun",
      "3D games"
    ]
  },
  {
    "slug": "turbo-race",
    "title": "Turbo Race",
    "by": "Paul",
    "description": "Turbo Race is a free browser game by Paul. Pick it up and play right here, no download.",
    "cover": "/covers/turbo-race.webp",
    "external": "https://turbo-race.start.ng",
    "plays": 3,
    "updatedAt": "2026-10-26T21:01:44.753276Z",
    "leaderboard": [
      {
        "key": "score",
        "label": "Score",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "distance",
        "label": "Distance",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "near_misses",
        "label": "Near misses",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Racing and driving",
      "Neon and cyberpunk"
    ]
  },
  {
    "slug": "salone-run",
    "title": "Salone Run",
    "by": "CMN",
    "description": "Salone Run is a free browser game by CMN. Pick it up and play right here, no download.",
    "cover": "/covers/salone-run.webp",
    "external": "https://salone-run.start.ng",
    "plays": 3,
    "updatedAt": "2026-10-26T20:01:41.589664Z",
    "leaderboard": [
      {
        "key": "score",
        "label": "Score",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Endless runners",
      "3D games"
    ]
  },
  {
    "slug": "jemi-game-arcade",
    "title": "Jemi Game Arcade",
    "by": "Jemi",
    "description": "Jemi Game Arcade is a free browser game by Jemi. Pick it up and play right here, no download.",
    "cover": "/covers/jemi-game-arcade.webp",
    "external": "https://jemi-game-arcade.start.ng",
    "plays": 21,
    "updatedAt": "2026-10-26T20:01:40.857653Z",
    "leaderboard": [
      {
        "key": "score",
        "label": "Best score",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "stars",
        "label": "Stars",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "coins",
        "label": "Coins",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Endless runners",
      "Coin collecting",
      "3D games"
    ]
  },
  {
    "slug": "boju-boju",
    "title": "Boju Boju",
    "by": "99PlusOne",
    "description": "Boju Boju is a free browser game by 99PlusOne. Pick it up and play right here, no download.",
    "cover": "/covers/boju-boju.webp",
    "external": "https://boju-boju.start.ng",
    "plays": 21,
    "updatedAt": "2026-10-26T20:01:40.220010Z",
    "leaderboard": [
      {
        "key": "score",
        "label": "Score",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "rounds",
        "label": "Rounds survived",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "camo",
        "label": "Best camo %",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": []
  },
  {
    "slug": "sunshade-dodger",
    "title": "Sunshade Dodger",
    "by": "daniel",
    "description": "Sunshade Dodger is a free browser game by daniel. Pick it up and play right here, no download.",
    "cover": "/covers/sunshade-dodger.webp",
    "external": "https://sunshade-dodger.start.ng",
    "plays": 2,
    "updatedAt": "2026-10-26T20:01:39.322038Z",
    "leaderboard": [
      {
        "key": "score",
        "label": "Score",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Catch and dodge"
    ]
  },
  {
    "slug": "flying-human",
    "title": "Flying Human",
    "by": "Lagat",
    "description": "Flying Human is a free browser game by Lagat. Pick it up and play right here, no download.",
    "cover": "/covers/flying-human.webp",
    "external": "https://flying-human.start.ng",
    "plays": 7,
    "updatedAt": "2026-10-26T20:01:38.772008Z",
    "leaderboard": [
      {
        "key": "score",
        "label": "Score",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Catch and dodge",
      "5-minute fun"
    ]
  },
  {
    "slug": "flappy-run",
    "title": "Flappy Run",
    "by": "Jesse",
    "description": "Flappy Run is a free browser game by Jesse. Pick it up and play right here, no download.",
    "cover": "/covers/flappy-run.webp",
    "external": "https://flappy-run.start.ng",
    "plays": 2,
    "updatedAt": "2026-10-26T19:01:34.883096Z",
    "leaderboard": [
      {
        "key": "score",
        "label": "Score",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Catch and dodge"
    ]
  },
  {
    "slug": "neondrift-arcade",
    "title": "Neondrift Arcade",
    "by": "Garuba",
    "description": "Neondrift Arcade is a free browser game by Garuba. Pick it up and play right here, no download.",
    "cover": "/covers/neondrift-arcade.webp",
    "external": "https://neondrift-arcade.start.ng",
    "plays": 3,
    "updatedAt": "2026-10-26T19:01:34.359394Z",
    "leaderboard": [
      {
        "key": "distance",
        "label": "Distance (m)",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "orbs",
        "label": "Orbs",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Endless runners",
      "Neon and cyberpunk"
    ]
  },
  {
    "slug": "noir-detective",
    "title": "Noir Detective",
    "by": "Divine",
    "description": "Noir Detective is a free browser game by Divine. Pick it up and play right here, no download.",
    "cover": "/covers/noir-detective.webp",
    "external": "https://noir-detective.start.ng",
    "plays": 2,
    "updatedAt": "2026-10-26T19:01:33.508765Z",
    "leaderboard": [
      {
        "key": "score",
        "label": "Total Score",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "cases",
        "label": "Cases Solved",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": []
  },
  {
    "slug": "star-catcher",
    "title": "Star Catcher",
    "by": "Harshita",
    "description": "Star Catcher is a free browser game by Harshita. Pick it up and play right here, no download.",
    "cover": "/covers/star-catcher.webp",
    "external": "https://star-catcher.start.ng",
    "plays": 3,
    "updatedAt": "2026-10-26T19:01:32.112646Z",
    "leaderboard": [
      {
        "key": "stars",
        "label": "Stars caught",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Catch and dodge",
      "5-minute fun",
      "3D games"
    ]
  },
  {
    "slug": "whimsy-wick",
    "title": "Whimsy Wick",
    "by": "Kanyinsola",
    "description": "Whimsy Wick, a cozy magical platformer set in a sleeping kitchen. Guide Ghee, gather coins and gems, and light every wick.",
    "cover": "/covers/whimsy-wick.webp",
    "external": "https://whimsy-wick.start.ng",
    "plays": 7,
    "updatedAt": "2026-10-26T18:01:17.229673Z",
    "leaderboard": [
      {
        "key": "score",
        "label": "Score",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "sparks",
        "label": "Coins gathered",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "distance",
        "label": "Distance (m)",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "time",
        "label": "Run time",
        "order": "lowest",
        "format": "time"
      }
    ],
    "categories": [
      "Platformers",
      "Coin collecting",
      "Fantasy and magic",
      "Cosy and relaxing"
    ]
  },
  {
    "slug": "mango-rush",
    "title": "Mango Rush",
    "by": "Bonnke",
    "description": "Mango Rush: ride the mango barge down the Lagos lagoon. Catch mangoes, dodge coconuts, last until midnight. A start.ng game.",
    "cover": "/covers/mango-rush.webp",
    "external": "https://mango-rush.start.ng",
    "plays": 2,
    "updatedAt": "2026-10-26T14:32:06.309303Z",
    "leaderboard": [
      {
        "key": "score",
        "label": "Score",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "survived",
        "label": "Survived",
        "order": "highest",
        "format": "time"
      },
      {
        "key": "mangoes",
        "label": "Mangoes caught",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Catch and dodge",
      "3D games"
    ]
  },
  {
    "slug": "mango-rush-beta",
    "title": "Mango Rush Beta",
    "by": "Bonnke",
    "description": "Ride the mango barge down the Lagos lagoon. Catch mangoes, dodge coconuts, last until midnight.",
    "cover": "/covers/mango-rush-beta.webp",
    "external": "https://mango-rush-beta.start.ng",
    "plays": 2,
    "updatedAt": "2026-10-26T14:31:33.321709Z",
    "leaderboard": [
      {
        "key": "score",
        "label": "Score",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "survived",
        "label": "Survived",
        "order": "highest",
        "format": "time"
      },
      {
        "key": "mangoes",
        "label": "Mangoes caught",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Endless runners",
      "Catch and dodge",
      "Food and cooking",
      "5-minute fun"
    ]
  },
  {
    "slug": "pick-me",
    "title": "Pick Me",
    "by": "AI",
    "description": "Pick Me is a free browser game by AI. Pick it up and play right here, no download.",
    "cover": "/covers/pick-me.webp",
    "external": "https://pick-me.start.ng",
    "plays": 3,
    "updatedAt": "2026-10-26T14:31:13.617635Z",
    "leaderboard": [
      {
        "key": "pro_wins",
        "label": "Beat Pro",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "best_word",
        "label": "Best word",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "best_margin",
        "label": "Best round",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Brainy games",
      "Words and reading",
      "With friends",
      "Two-player classics"
    ]
  },
  {
    "slug": "star-dash",
    "title": "Star Dash",
    "by": "Ajibade",
    "description": "Star Dash is a free browser game by Ajibade. Pick it up and play right here, no download.",
    "cover": "/covers/star-dash.webp",
    "external": "https://star-dash.start.ng",
    "plays": 5,
    "updatedAt": "2026-10-26T14:31:12.810904Z",
    "leaderboard": [
      {
        "key": "score",
        "label": "Score",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Endless runners",
      "Space and sci-fi",
      "5-minute fun"
    ]
  },
  {
    "slug": "maths-escape",
    "title": "Maths Escape",
    "by": "Sadiq",
    "description": "Maths Escape is a free browser game by Sadiq. Pick it up and play right here, no download.",
    "cover": "/covers/maths-escape.webp",
    "external": "https://maths-escape.start.ng",
    "plays": 8,
    "updatedAt": "2026-10-26T14:31:12.305591Z",
    "leaderboard": [
      {
        "key": "score",
        "label": "Score",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "correct",
        "label": "Correct answers",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "best_streak",
        "label": "Best streak",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Brainy games",
      "Nigerian themed",
      "Lagos",
      "Educational"
    ]
  },
  {
    "slug": "ghost-on-the-loose",
    "title": "Ghost On The Loose",
    "by": "Denise",
    "description": "Ghost On The Loose is a free browser game by Denise. Pick it up and play right here, no download.",
    "cover": "/covers/ghost-on-the-loose.webp",
    "external": "https://ghost-on-the-loose.start.ng",
    "plays": 3,
    "updatedAt": "2026-10-26T14:31:11.638797Z",
    "leaderboard": [
      {
        "key": "score",
        "label": "Score",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Horror and spooky"
    ]
  },
  {
    "slug": "gem-dash",
    "title": "Gem Dash",
    "by": "Francis",
    "description": "Gem Dash is a free browser game by Francis. Pick it up and play right here, no download.",
    "cover": "/covers/gem-dash.webp",
    "external": "https://gem-dash.start.ng",
    "plays": 6,
    "updatedAt": "2026-10-26T14:31:10.768856Z",
    "leaderboard": [
      {
        "key": "gems",
        "label": "Gems collected",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Catch and dodge",
      "Coin collecting",
      "5-minute fun",
      "3D games"
    ]
  },
  {
    "slug": "quantum-breaker",
    "title": "Quantum Breaker",
    "by": "HB",
    "description": "Quantum Breaker is a free browser game by HB. Pick it up and play right here, no download.",
    "cover": "/covers/quantum-breaker.webp",
    "external": "https://quantum-breaker.start.ng",
    "plays": 5,
    "updatedAt": "2026-10-26T12:31:07.413817Z",
    "leaderboard": [
      {
        "key": "score",
        "label": "Score",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "sector",
        "label": "Sector Cleared",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "combo",
        "label": "Max Combo",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Neon and cyberpunk",
      "3D games"
    ]
  },
  {
    "slug": "market-rush-neon",
    "title": "Market Rush Neon",
    "by": "Naya",
    "description": "Market Rush Neon is a free browser game by Naya. Pick it up and play right here, no download.",
    "cover": "/covers/market-rush-neon.webp",
    "external": "https://market-rush-neon.start.ng",
    "plays": 2,
    "updatedAt": "2026-10-26T12:31:06.889233Z",
    "leaderboard": [
      {
        "key": "score",
        "label": "Market haul",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "streak",
        "label": "Shopping streak",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "time",
        "label": "Time survived",
        "order": "highest",
        "format": "time"
      }
    ],
    "categories": [
      "Catch and dodge",
      "Nigerian themed",
      "Lagos",
      "Markets and street life"
    ]
  },
  {
    "slug": "zedu-dash",
    "title": "Zedu Dash",
    "by": "Ife",
    "description": "Zedu Dash is a free browser game by Ife. Pick it up and play right here, no download.",
    "cover": "/covers/zedu-dash.webp",
    "external": "https://zedu-dash.start.ng",
    "plays": 3,
    "updatedAt": "2026-10-26T12:31:06.275346Z",
    "leaderboard": [
      {
        "key": "score",
        "label": "Score",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Endless runners",
      "Coin collecting"
    ]
  },
  {
    "slug": "ile-ere",
    "title": "Ile Ere",
    "by": "Josh",
    "description": "Ile Ere is a free browser game by Josh. Pick it up and play right here, no download.",
    "cover": "/covers/ile-ere.webp",
    "external": "https://ile-ere.start.ng",
    "plays": 6,
    "updatedAt": "2026-10-26T12:31:05.708657Z",
    "leaderboard": [
      {
        "key": "wins",
        "label": "Wins at Ilé Eré",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "ayo",
        "label": "Ayo",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "whot",
        "label": "Whot",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "boards",
        "label": "Draughts & Ludo",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "cue",
        "label": "Snooker & Football",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Board and card",
      "Nigerian themed",
      "Lagos",
      "Two-player classics",
      "3D games"
    ]
  },
  {
    "slug": "coin-quest",
    "title": "Coin Quest",
    "by": "Evangeli",
    "description": "Coin Quest is a free browser game by Evangeli. Pick it up and play right here, no download.",
    "cover": "/covers/coin-quest.webp",
    "external": "https://coin-quest.start.ng",
    "plays": 2,
    "updatedAt": "2026-10-26T12:31:03.987801Z",
    "leaderboard": [
      {
        "key": "score",
        "label": "Score",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Coin collecting"
    ]
  },
  {
    "slug": "naija-roots",
    "title": "Naija Roots",
    "by": "Collins",
    "description": "Naija Roots is a free browser game by Collins. Pick it up and play right here, no download.",
    "cover": "/covers/naija-roots.webp",
    "external": "https://naija-roots.start.ng",
    "plays": 3,
    "updatedAt": "2026-10-26T11:31:01.074752Z",
    "leaderboard": [
      {
        "key": "points",
        "label": "Best expedition",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "streak",
        "label": "Daily streak",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "solved",
        "label": "Origins found",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Brainy games",
      "Nigerian themed",
      "Educational",
      "3D games"
    ]
  },
  {
    "slug": "danfo-defense",
    "title": "Danfo Defense",
    "by": "emmyanz",
    "description": "Protect the danfo from everything the city throws at it.",
    "cover": "/covers/danfo-defense.webp",
    "external": "https://danfo-defense.start.ng",
    "plays": 4,
    "updatedAt": "2026-10-26T11:31:00.405705Z",
    "leaderboard": [
      {
        "key": "waves",
        "label": "Wave reached",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "kills",
        "label": "Drones downed",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "time",
        "label": "Time survived",
        "order": "highest",
        "format": "time"
      }
    ],
    "categories": [
      "Shooting and action",
      "Survival",
      "Nigerian themed",
      "Lagos",
      "Neon and cyberpunk"
    ]
  },
  {
    "slug": "puff-puff-catch",
    "title": "Puff Puff Catch",
    "by": "Cee",
    "description": "Puff Puff Catch is a free browser game by Cee. Pick it up and play right here, no download.",
    "cover": "/covers/puff-puff-catch.webp",
    "external": "https://puff-puff-catch.start.ng",
    "plays": 3,
    "updatedAt": "2026-10-26T11:30:59.847809Z",
    "leaderboard": [
      {
        "key": "puffs",
        "label": "Puff-puffs caught",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "streak",
        "label": "Best streak",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Catch and dodge",
      "Nigerian themed",
      "Food and cooking",
      "5-minute fun"
    ]
  },
  {
    "slug": "word-market",
    "title": "Word Market",
    "by": "Arnold",
    "description": "Word Market is a free browser game by Arnold. Pick it up and play right here, no download.",
    "cover": "/covers/word-market.webp",
    "external": "https://word-market.start.ng",
    "plays": 3,
    "updatedAt": "2026-10-26T11:30:59.300353Z",
    "leaderboard": [
      {
        "key": "points",
        "label": "Points",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "streak",
        "label": "Best streak",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Brainy games",
      "Words and reading"
    ]
  },
  {
    "slug": "tower-stack",
    "title": "Tower Stack",
    "by": "David",
    "description": "Tower Stack is a free browser game by David. Pick it up and play right here, no download.",
    "cover": "/covers/tower-stack.webp",
    "external": "https://tower-stack.start.ng",
    "plays": 4,
    "updatedAt": "2026-10-26T11:30:58.793109Z",
    "leaderboard": [
      {
        "key": "floors",
        "label": "Floors",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "perfects",
        "label": "Perfect drops",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "5-minute fun"
    ]
  },
  {
    "slug": "quiz",
    "title": "Quiz",
    "by": "Hamzat",
    "description": "Make a quiz and play it live with up to 100 people. Faster right answers score more.",
    "cover": "/covers/quiz.webp",
    "external": "https://quiz.start.ng",
    "plays": 2,
    "updatedAt": "2026-10-26T09:29:44.995159Z",
    "leaderboard": [
      {
        "key": "score",
        "label": "Score",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Brainy games",
      "Educational",
      "Coding and tech",
      "For a class or a cohort"
    ]
  },
  {
    "slug": "bingo",
    "title": "Bingo",
    "by": "Hamzat",
    "description": "Host a bingo for up to 100 people, with the classic numbers or your own words.",
    "cover": "/covers/bingo.webp",
    "external": "https://bingo.start.ng",
    "plays": 1,
    "updatedAt": "2026-10-26T09:29:40.201532Z",
    "leaderboard": [
      {
        "key": "score",
        "label": "Score",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Brainy games",
      "Board and card",
      "For a class or a cohort"
    ]
  },
  {
    "slug": "cyberpulse",
    "title": "Cyberpulse",
    "by": "Bilkis",
    "description": "Cyberpulse is a free browser game by Bilkis. Pick it up and play right here, no download.",
    "cover": "/covers/cyberpulse.webp",
    "external": "https://cyberpulse.start.ng",
    "plays": 2,
    "updatedAt": "2026-10-26T09:06:55.096005Z",
    "leaderboard": [
      {
        "key": "score",
        "label": "Score",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Neon and cyberpunk"
    ]
  },
  {
    "slug": "buggy-bash-3d",
    "title": "Buggy Bash 3d",
    "by": "Omojuwa",
    "description": "Buggy Bash 3d is a free browser game by Omojuwa. Pick it up and play right here, no download.",
    "cover": "/covers/buggy-bash-3d.webp",
    "external": "https://buggy-bash-3d.start.ng",
    "plays": 8,
    "updatedAt": "2026-10-26T09:06:54.607413Z",
    "leaderboard": [
      {
        "key": "best_lap",
        "label": "Best lap",
        "order": "lowest",
        "format": "time"
      },
      {
        "key": "race_time",
        "label": "Race time",
        "order": "lowest",
        "format": "time"
      }
    ],
    "categories": [
      "Racing and driving",
      "3D games"
    ]
  },
  {
    "slug": "tower-tapper",
    "title": "Tower Tapper",
    "by": "David",
    "description": "Tower Tapper is a free browser game by David. Pick it up and play right here, no download.",
    "cover": "/covers/tower-tapper.webp",
    "external": "https://tower-tapper.start.ng",
    "plays": 3,
    "updatedAt": "2026-10-26T09:06:53.939989Z",
    "leaderboard": [
      {
        "key": "prestige",
        "label": "Rebirths",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "best_gems",
        "label": "Best gems/sec",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "3D games"
    ]
  },
  {
    "slug": "echo-grid-dan",
    "title": "Echo Grid Dan",
    "by": "Daniel",
    "description": "Echo Grid Dan is a free browser game by Daniel. Pick it up and play right here, no download.",
    "cover": "/covers/echo-grid-dan.webp",
    "external": "https://echo-grid-dan.start.ng",
    "plays": 4,
    "updatedAt": "2026-10-26T09:06:53.394231Z",
    "leaderboard": [
      {
        "key": "score",
        "label": "Score",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "rounds",
        "label": "Rounds cleared",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "streak",
        "label": "Best streak",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Brainy games"
    ]
  },
  {
    "slug": "nightfall-arena",
    "title": "Nightfall Arena",
    "by": "Joshua",
    "description": "Nightfall Arena is a free browser game by Joshua. Pick it up and play right here, no download.",
    "cover": "/covers/nightfall-arena.webp",
    "external": "https://nightfall-arena.start.ng",
    "plays": 5,
    "updatedAt": "2026-10-26T09:06:52.846222Z",
    "leaderboard": [
      {
        "key": "score",
        "label": "Score",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Shooting and action",
      "3D games"
    ]
  },
  {
    "slug": "suwe",
    "title": "Suwe",
    "by": "The Product Girlie",
    "description": "Suwe is a free browser game by The Product Girlie. Pick it up and play right here, no download.",
    "cover": "/covers/suwe.webp",
    "external": "https://suwe.start.ng",
    "plays": 11,
    "updatedAt": "2026-10-26T09:03:29.131506Z",
    "leaderboard": [
      {
        "key": "houses",
        "label": "Houses owned",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "level",
        "label": "Computer level",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "accuracy",
        "label": "Accuracy %",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "mistakes",
        "label": "Mistakes",
        "order": "lowest",
        "format": "number"
      },
      {
        "key": "seconds",
        "label": "Match time",
        "order": "lowest",
        "format": "time"
      }
    ],
    "categories": [
      "Brainy games",
      "Board and card",
      "Nigerian themed",
      "Two-player classics"
    ]
  },
  {
    "slug": "skybund",
    "title": "Skybund",
    "by": "Tega",
    "description": "Skybund is a free browser game by Tega. Pick it up and play right here, no download.",
    "cover": "/covers/skybund.webp",
    "external": "https://skybund.start.ng",
    "plays": 5,
    "updatedAt": "2026-10-26T09:03:28.566660Z",
    "leaderboard": [
      {
        "key": "score",
        "label": "Sky score",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "gems",
        "label": "Gems collected",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Platformers",
      "Coin collecting",
      "3D games"
    ]
  },
  {
    "slug": "echo-world-game",
    "title": "Echo World Game",
    "by": "Ummi",
    "description": "Echo World Game is a free browser game by Ummi. Pick it up and play right here, no download.",
    "cover": "/covers/echo-world-game.webp",
    "external": "https://echo-world-game.start.ng",
    "plays": 4,
    "updatedAt": "2026-10-26T09:03:27.870791Z",
    "leaderboard": [
      {
        "key": "levels_completed",
        "label": "Levels completed",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "completion_time",
        "label": "Completion time",
        "order": "lowest",
        "format": "time"
      }
    ],
    "categories": [
      "Platformers",
      "Brainy games"
    ]
  },
  {
    "slug": "rooftop-rush",
    "title": "Rooftop Rush",
    "by": "Oluwafemi",
    "description": "Roof to roof, no looking down. How far can you get?",
    "cover": "/covers/rooftop-rush.webp",
    "external": "https://rooftop-rush.start.ng",
    "plays": 7,
    "updatedAt": "2026-10-26T09:03:27.355885Z",
    "leaderboard": [
      {
        "key": "score",
        "label": "Distance",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "coins",
        "label": "Coins",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Endless runners",
      "Coin collecting",
      "3D games"
    ]
  },
  {
    "slug": "splash-course",
    "title": "Splash Course",
    "by": "Pauline",
    "description": "Splash Course is a free browser game by Pauline. Pick it up and play right here, no download.",
    "cover": "/covers/splash-course.webp",
    "external": "https://splash-course.start.ng",
    "plays": 6,
    "updatedAt": "2026-10-26T09:03:26.787227Z",
    "leaderboard": [
      {
        "key": "score",
        "label": "Score",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "time",
        "label": "Course time",
        "order": "lowest",
        "format": "time"
      }
    ],
    "categories": [
      "Platformers",
      "Coin collecting",
      "3D games"
    ]
  },
  {
    "slug": "connect-4",
    "title": "Connect 4",
    "by": "Hamzat",
    "description": "Four in a row. Simple to learn, hard to put down.",
    "cover": "/covers/connect-4.webp",
    "external": "https://connect-4.start.ng",
    "plays": 0,
    "updatedAt": "2026-10-26T08:21:55.075330Z",
    "leaderboard": [
      {
        "key": "score",
        "label": "Score",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": []
  },
  {
    "slug": "ludo",
    "title": "Ludo",
    "by": "Hamzat",
    "description": "The classic board game, ready for a quick round in your browser.",
    "cover": "/covers/ludo.webp",
    "external": "https://ludo.start.ng",
    "plays": 4,
    "updatedAt": "2026-10-26T08:21:52.064058Z",
    "leaderboard": [
      {
        "key": "score",
        "label": "Score",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Racing and driving",
      "Board and card",
      "Coding and tech",
      "Two-player classics"
    ]
  },
  {
    "slug": "whot",
    "title": "Whot",
    "by": "Hamzat",
    "description": "The card game everyone in Naija knows. Ready for a rematch.",
    "cover": "/covers/whot.webp",
    "external": "https://whot.start.ng",
    "plays": 0,
    "updatedAt": "2026-10-26T08:21:49.291712Z",
    "leaderboard": [
      {
        "key": "score",
        "label": "Score",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Board and card",
      "Coding and tech"
    ]
  },
  {
    "slug": "ayo",
    "title": "Ayo",
    "by": "Hamzat",
    "description": "The ancient counting game, with a clean new board.",
    "cover": "/covers/ayo.webp",
    "external": "https://ayo.start.ng",
    "plays": 2,
    "updatedAt": "2026-10-26T08:21:46.462770Z",
    "leaderboard": [
      {
        "key": "score",
        "label": "Score",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Board and card",
      "Two-player classics"
    ]
  },
  {
    "slug": "draughts",
    "title": "Draughts",
    "by": "Hamzat",
    "description": "A quiet board, a sharp mind and one more move.",
    "cover": "/covers/draughts.webp",
    "external": "https://draughts.start.ng",
    "plays": 0,
    "updatedAt": "2026-10-26T08:21:43.676393Z",
    "leaderboard": [
      {
        "key": "score",
        "label": "Score",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Two-player classics"
    ]
  },
  {
    "slug": "sky-patrol",
    "title": "Sky Patrol",
    "by": "Joyboy",
    "description": "Sky Patrol is a free browser game by Joyboy. Pick it up and play right here, no download.",
    "cover": "/covers/sky-patrol.webp",
    "external": "https://sky-patrol.start.ng",
    "plays": 2,
    "updatedAt": "2026-10-26T07:29:05.449308Z",
    "leaderboard": [
      {
        "key": "score",
        "label": "Score",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "waves",
        "label": "Waves cleared",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "kills",
        "label": "Shootdowns",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "time",
        "label": "Run time",
        "order": "highest",
        "format": "time"
      }
    ],
    "categories": [
      "Shooting and action"
    ]
  },
  {
    "slug": "coin-dash-game",
    "title": "Coin Dash Game",
    "by": "Olubunmi",
    "description": "Coin Dash Game is a free browser game by Olubunmi. Pick it up and play right here, no download.",
    "cover": "/covers/coin-dash-game.webp",
    "external": "https://coin-dash-game.start.ng",
    "plays": 4,
    "updatedAt": "2026-10-26T07:29:04.913377Z",
    "leaderboard": [
      {
        "key": "coins",
        "label": "Coins collected",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Coin collecting"
    ]
  },
  {
    "slug": "style-sprint",
    "title": "Style Sprint",
    "by": "Sophia AI",
    "description": "Style Sprint is a free browser game by Sophia AI. Pick it up and play right here, no download.",
    "cover": "/covers/style-sprint.webp",
    "external": "https://style-sprint.start.ng",
    "plays": 4,
    "updatedAt": "2026-10-26T07:29:04.381570Z",
    "leaderboard": [
      {
        "key": "score",
        "label": "Score",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Endless runners",
      "3D games"
    ]
  },
  {
    "slug": "space-rescue",
    "title": "Space Rescue",
    "by": "Chizoba",
    "description": "Space Rescue is a free browser game by Chizoba. Pick it up and play right here, no download.",
    "cover": "/covers/space-rescue.webp",
    "external": "https://space-rescue.start.ng",
    "plays": 10,
    "updatedAt": "2026-10-26T07:29:03.724732Z",
    "leaderboard": [
      {
        "key": "score",
        "label": "Score",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "rescued",
        "label": "Astronauts rescued",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "stars",
        "label": "Stars earned",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Space and sci-fi"
    ]
  },
  {
    "slug": "dreamy-lass",
    "title": "Dreamy Lass",
    "by": "Her",
    "description": "Dreamy Lass is a free browser game by Her. Pick it up and play right here, no download.",
    "cover": "/covers/dreamy-lass.webp",
    "external": "https://dreamy-lass.start.ng",
    "plays": 4,
    "updatedAt": "2026-10-26T07:29:03.127797Z",
    "leaderboard": [
      {
        "key": "popularity",
        "label": "Popularity",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "distance",
        "label": "Distance (m)",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "friends",
        "label": "Friends met",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Platformers",
      "Fantasy and magic"
    ]
  },
  {
    "slug": "gem-isle",
    "title": "Gem Isle",
    "by": "Song",
    "description": "Gem Isle is a free browser game by Song. Pick it up and play right here, no download.",
    "cover": "/covers/gem-isle.webp",
    "external": "https://gem-isle.start.ng",
    "plays": 3,
    "updatedAt": "2026-10-26T07:21:49.164339Z",
    "leaderboard": [
      {
        "key": "gems",
        "label": "Gems collected",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "time",
        "label": "Time survived",
        "order": "highest",
        "format": "time"
      }
    ],
    "categories": [
      "Platformers",
      "Coin collecting",
      "3D games"
    ]
  },
  {
    "slug": "murewa-gem-rush",
    "title": "Murewa Gem Rush",
    "by": "Meza",
    "description": "Murewa Gem Rush is a free browser game by Meza. Pick it up and play right here, no download.",
    "cover": "/covers/murewa-gem-rush.webp",
    "external": "https://murewa-gem-rush.start.ng",
    "plays": 4,
    "updatedAt": "2026-10-26T07:21:48.644980Z",
    "leaderboard": [
      {
        "key": "gems",
        "label": "Gems collected",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Coin collecting",
      "5-minute fun",
      "3D games"
    ]
  },
  {
    "slug": "jackpot",
    "title": "Jackpot",
    "by": "Alexin",
    "description": "Jackpot is a free browser game by Alexin. Pick it up and play right here, no download.",
    "cover": "/covers/jackpot.webp",
    "external": "https://jackpot.start.ng",
    "plays": 9,
    "updatedAt": "2026-10-26T07:21:48.078876Z",
    "leaderboard": [
      {
        "key": "score",
        "label": "Score",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Board and card",
      "With friends"
    ]
  },
  {
    "slug": "tic-tac-toe",
    "title": "Tic Tac Toe",
    "by": "Hamzat",
    "description": "Three in a row, with a friend or the computer.",
    "cover": "/covers/tic-tac-toe.webp",
    "external": "https://tic-tac-toe.start.ng",
    "plays": 7,
    "updatedAt": "2026-10-26T07:21:47.553245Z",
    "leaderboard": [
      {
        "key": "score",
        "label": "Score",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": []
  },
  {
    "slug": "star-dash-3d",
    "title": "Star Dash 3d",
    "by": "Nie",
    "description": "Star Dash 3d is a free browser game by Nie. Pick it up and play right here, no download.",
    "cover": "/covers/star-dash-3d.webp",
    "external": "https://star-dash-3d.start.ng",
    "plays": 3,
    "updatedAt": "2026-10-26T07:21:47.499408Z",
    "leaderboard": [
      {
        "key": "distance",
        "label": "Distance (m)",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "coins",
        "label": "Coins",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Space and sci-fi",
      "3D games"
    ]
  },
  {
    "slug": "lantern-isles",
    "title": "Lantern Isles",
    "by": "Elisha",
    "description": "Lantern Isles is a free browser game by Elisha. Pick it up and play right here, no download.",
    "cover": "/covers/lantern-isles.webp",
    "external": "https://lantern-isles.start.ng",
    "plays": 4,
    "updatedAt": "2026-10-26T07:21:47.022805Z",
    "leaderboard": [
      {
        "key": "score",
        "label": "Score",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "lanterns",
        "label": "Lanterns",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "isle",
        "label": "Isle reached",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Platformers",
      "Fantasy and magic",
      "3D games"
    ]
  },
  {
    "slug": "naija-market-hustle",
    "title": "Naija Market Hustle",
    "by": "MiKEY",
    "description": "Naija Market Hustle is a free browser game by MiKEY. Pick it up and play right here, no download.",
    "cover": "/covers/naija-market-hustle.webp",
    "external": "https://naija-market-hustle.start.ng",
    "plays": 3,
    "updatedAt": "2026-10-26T05:27:42.096562Z",
    "leaderboard": [
      {
        "key": "cash",
        "label": "Best cash (₦)",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "fresh",
        "label": "Fresh produce caught",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Nigerian themed",
      "Markets and street life"
    ]
  },
  {
    "slug": "agege-rush",
    "title": "Agege Rush",
    "by": "Mustapha",
    "description": "Agege Rush is a free browser game by Mustapha. Pick it up and play right here, no download.",
    "cover": "/covers/agege-rush.webp",
    "external": "https://agege-rush.start.ng",
    "plays": 4,
    "updatedAt": "2026-10-26T05:27:41.533682Z",
    "leaderboard": [
      {
        "key": "distance",
        "label": "Metres run",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "coins",
        "label": "Naira grabbed",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Endless runners",
      "Nigerian themed",
      "Lagos",
      "3D games"
    ]
  },
  {
    "slug": "cosmic-dash",
    "title": "Cosmic Dash",
    "by": "Sabhayor",
    "description": "Cosmic Dash is a free browser game by Sabhayor. Pick it up and play right here, no download.",
    "cover": "/covers/cosmic-dash.webp",
    "external": "https://cosmic-dash.start.ng",
    "plays": 2,
    "updatedAt": "2026-10-26T05:27:41.004005Z",
    "leaderboard": [
      {
        "key": "score",
        "label": "Score",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "distance",
        "label": "Distance (m)",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "crystals",
        "label": "Crystals",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Endless runners",
      "Coin collecting",
      "Space and sci-fi",
      "Neon and cyberpunk"
    ]
  },
  {
    "slug": "rain-bucket",
    "title": "Rain Bucket",
    "by": "Cheerful",
    "description": "Rain Bucket is a free browser game by Cheerful. Pick it up and play right here, no download.",
    "cover": "/covers/rain-bucket.webp",
    "external": "https://rain-bucket.start.ng",
    "plays": 3,
    "updatedAt": "2026-10-26T05:27:40.419516Z",
    "leaderboard": [
      {
        "key": "points",
        "label": "Points",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "seconds",
        "label": "Time survived",
        "order": "highest",
        "format": "time"
      }
    ],
    "categories": [
      "Catch and dodge",
      "Nigerian themed",
      "Lagos",
      "3D games"
    ]
  },
  {
    "slug": "testing-player-pick-me",
    "title": "Testing Player Pick Me",
    "by": "AI",
    "description": "Testing Player Pick Me is a free browser game by AI. Pick it up and play right here, no download.",
    "cover": "/covers/testing-player-pick-me.webp",
    "external": "https://testing-player-pick-me.start.ng",
    "plays": 4,
    "updatedAt": "2026-10-26T05:27:39.863783Z",
    "leaderboard": [
      {
        "key": "pro_wins",
        "label": "Beat Pro",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "best_word",
        "label": "Best word",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "best_margin",
        "label": "Best round",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Brainy games",
      "Words and reading",
      "With friends",
      "Two-player classics"
    ]
  },
  {
    "slug": "neon-orchard",
    "title": "Neon Orchard",
    "by": "chinaza",
    "description": "Grow a glowing orchard in a quiet corner of the city.",
    "cover": "/covers/neon-orchard.webp",
    "external": "https://neon-orchard.start.ng",
    "plays": 3,
    "updatedAt": "2026-10-26T04:27:18.642036Z",
    "leaderboard": [
      {
        "key": "harvest",
        "label": "Fruit harvested",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "streak",
        "label": "Best streak",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Catch and dodge",
      "Neon and cyberpunk",
      "5-minute fun"
    ]
  },
  {
    "slug": "jollof-rush",
    "title": "Jollof Rush",
    "by": "Y_Aisha",
    "description": "The jollof is ready. Get it to the table while it is hot.",
    "cover": "/covers/jollof-rush.webp",
    "external": "https://jollof-rush.start.ng",
    "plays": 4,
    "updatedAt": "2026-10-26T04:27:18.119913Z",
    "leaderboard": [
      {
        "key": "earned",
        "label": "Naira earned",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "plates",
        "label": "Plates served",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Nigerian themed",
      "Food and cooking"
    ]
  },
  {
    "slug": "danfo-make-way",
    "title": "Danfo Make Way",
    "by": "Okeke",
    "description": "The danfo is coming through. Make way.",
    "cover": "/covers/danfo-make-way.webp",
    "external": "https://danfo-make-way.start.ng",
    "plays": 15,
    "updatedAt": "2026-10-26T04:27:17.610670Z",
    "leaderboard": [
      {
        "key": "score",
        "label": "Score",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Brainy games",
      "Nigerian themed",
      "Lagos",
      "3D games"
    ]
  },
  {
    "slug": "temple-runner",
    "title": "Temple Runner",
    "by": "Elsie",
    "description": "Temple craft, running and one more bridge to build.",
    "cover": "/covers/temple-runner.webp",
    "external": "https://temple-runner.start.ng",
    "plays": 8,
    "updatedAt": "2026-10-26T04:27:17.017506Z",
    "leaderboard": [
      {
        "key": "distance",
        "label": "Meters Run",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "bridges",
        "label": "Bridges Built",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "emeralds",
        "label": "Emeralds",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Endless runners",
      "Coin collecting",
      "Ancient ruins and treasure",
      "3D games"
    ]
  },
  {
    "slug": "cork-fc",
    "title": "Cork Fc",
    "by": "prinuel",
    "description": "A football club, a small budget and a big season.",
    "cover": "/covers/cork-fc.webp",
    "external": "https://cork-fc.start.ng",
    "plays": 9,
    "updatedAt": "2026-10-26T04:27:16.439794Z",
    "leaderboard": [
      {
        "key": "score",
        "label": "Score",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Football and sports",
      "Two-player classics",
      "3D games"
    ]
  },
  {
    "slug": "suomi-sniper",
    "title": "Suomi Sniper",
    "by": "Salako",
    "description": "Hold the line, keep your nerve and stop every column.",
    "cover": "/covers/suomi-sniper.webp",
    "external": "https://suomi-sniper.start.ng",
    "plays": 7,
    "updatedAt": "2026-10-26T04:04:42.892542Z",
    "leaderboard": [
      {
        "key": "kills",
        "label": "Enemies down",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "lines_held",
        "label": "Columns stopped",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Shooting and action"
    ]
  },
  {
    "slug": "jollof-rush-3d",
    "title": "Jollof Rush 3d",
    "by": "Rebecca",
    "description": "Serve the jollof before the queue gets restless.",
    "cover": "/covers/jollof-rush-3d.webp",
    "external": "https://jollof-rush-3d.start.ng",
    "plays": 10,
    "updatedAt": "2026-10-26T04:04:42.231665Z",
    "leaderboard": [
      {
        "key": "score",
        "label": "Score",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "dishes",
        "label": "Dishes served",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Nigerian themed",
      "Food and cooking",
      "3D games"
    ]
  },
  {
    "slug": "tesla-skyrun",
    "title": "Tesla Skyrun",
    "by": "Favour",
    "description": "Drive the sky, collect energy and see how far the night takes you.",
    "cover": "/covers/tesla-skyrun.webp",
    "external": "https://tesla-skyrun.start.ng",
    "plays": 17,
    "updatedAt": "2026-10-26T04:04:41.581738Z",
    "leaderboard": [
      {
        "key": "distance",
        "label": "Distance (m)",
        "order": "highest",
        "format": "number"
      },
      {
        "key": "energy",
        "label": "Energy cells",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Endless runners"
    ]
  },
  {
    "slug": "lagos-apocalypto",
    "title": "Lagos Apocalypto",
    "by": "Aghogho",
    "description": "Lagos after the lights went out. Survive the streets.",
    "cover": "/covers/lagos-apocalypto.webp",
    "external": "https://lagos-apocalypto.start.ng",
    "plays": 5,
    "updatedAt": "2026-10-26T04:04:41.082549Z",
    "leaderboard": [
      {
        "key": "score",
        "label": "Score",
        "order": "highest",
        "format": "number"
      }
    ],
    "categories": [
      "Survival",
      "Nigerian themed",
      "Lagos",
      "Horror and spooky"
    ]
  }
];

export const categories: Category[] = [
  {
    "slug": "endless-runners",
    "name": "Endless runners",
    "group": "How you play",
    "count": 38,
    "description": "Dash, dodge and keep going. Play free in your browser, no download. Every game has its own address and its own leaderboard.",
    "art": "/category-art/endless-runners.webp",
    "games": [
      "lanedash",
      "naira-run",
      "cyber-slash",
      "balloon-funride",
      "cybertron-runner",
      "neon-drift",
      "alley-velocity",
      "orbit-run",
      "neondrift",
      "startverse-neon-rush",
      "glide",
      "pulse-runner",
      "star-runner-3d",
      "startng-city-dash",
      "lagos-market-run",
      "relic-rush-3d",
      "volcano",
      "glam-dash",
      "onithsa-market-run",
      "robot-dodge",
      "cloud-courier",
      "ember-dash",
      "coin-dash-runner",
      "lagos-bike-rush",
      "horsebound-endless-derby",
      "orbital-run",
      "salone-run",
      "jemi-game-arcade",
      "neondrift-arcade",
      "mango-rush-beta",
      "star-dash",
      "zedu-dash",
      "rooftop-rush",
      "style-sprint",
      "agege-rush",
      "cosmic-dash",
      "temple-runner",
      "tesla-skyrun"
    ]
  },
  {
    "slug": "racing-and-driving",
    "name": "Racing and driving",
    "group": "How you play",
    "count": 14,
    "description": "Danfo dodging, street racing and open-road chaos. Pick a ride and put your foot down.",
    "art": "/category-art/racing-and-driving.webp",
    "games": [
      "dead-signal",
      "lagos-run",
      "danfo",
      "alley-velocity",
      "go-slow-danfo",
      "wheelie-wahala",
      "along",
      "lagos-hustle",
      "sharp-sharp",
      "lagos-bike-rush",
      "circuit-racer",
      "turbo-race",
      "buggy-bash-3d",
      "ludo"
    ]
  },
  {
    "slug": "shooting-and-action",
    "name": "Shooting and action",
    "group": "How you play",
    "count": 12,
    "description": "Fast fingers, quick reflexes and a bit of mayhem. Play right in your browser.",
    "art": "/category-art/shooting-and-action.webp",
    "games": [
      "relic-hunter",
      "the-hooded-swordsman",
      "forest-hunter",
      "cyber-slash",
      "sumo-bump",
      "kingpin-arena",
      "inkbreak",
      "shard-survival",
      "danfo-defense",
      "nightfall-arena",
      "sky-patrol",
      "suomi-sniper"
    ]
  },
  {
    "slug": "platformers",
    "name": "Platformers",
    "group": "How you play",
    "count": 13,
    "description": "Jump, climb and grab every coin. Small worlds with big personality.",
    "art": "/category-art/platformers.webp",
    "games": [
      "relic-hunter",
      "downshaft",
      "sky-hopper",
      "flood-rise",
      "platformer-hopper",
      "portal-pals",
      "whimsy-wick",
      "skybund",
      "echo-world-game",
      "splash-course",
      "dreamy-lass",
      "gem-isle",
      "lantern-isles"
    ]
  },
  {
    "slug": "brainy-games",
    "name": "Brainy games",
    "group": "How you play",
    "count": 25,
    "description": "Puzzles, quizzes and clever little problems. Take five and stretch your brain.",
    "art": "/category-art/brainy-games.webp",
    "games": [
      "ghost-shift",
      "arrow-escape",
      "treasure-isle",
      "harrington-mystery",
      "follow-follow",
      "riftsync",
      "junction-spirit",
      "bloom-circuit",
      "agent-protocol",
      "naija-drafts",
      "zobo-sort",
      "ayo-arena",
      "the-lost-library",
      "nepa-light-up-lagos",
      "pick-me",
      "maths-escape",
      "naija-roots",
      "word-market",
      "quiz",
      "bingo",
      "echo-grid-dan",
      "suwe",
      "echo-world-game",
      "testing-player-pick-me",
      "danfo-make-way"
    ]
  },
  {
    "slug": "board-and-card",
    "name": "Board and card",
    "group": "How you play",
    "count": 9,
    "description": "Old favourites and new twists, made for a quick round with friends.",
    "art": "/category-art/board-and-card.webp",
    "games": [
      "naija-drafts",
      "ayo-arena",
      "ile-ere",
      "bingo",
      "suwe",
      "ludo",
      "whot",
      "ayo",
      "jackpot"
    ]
  },
  {
    "slug": "catch-and-dodge",
    "name": "Catch and dodge",
    "group": "How you play",
    "count": 29,
    "description": "Catch the good stuff. Dodge everything else. Simple, until it isn't.",
    "art": "/category-art/catch-and-dodge.webp",
    "games": [
      "suya-catcher",
      "coin-catcher",
      "okada-dodge",
      "glitter-rain",
      "gidi-hop",
      "lagos-crossing",
      "coconut-dodge",
      "coin-dash-arena",
      "starfall-neon-survival",
      "bounce-game",
      "coin-rush",
      "robot-dodge",
      "sky-courier",
      "star-dodge-by-jeffersdoherty",
      "perihelion",
      "jollof-catch",
      "bug-escape",
      "orb-frenzy",
      "sunshade-dodger",
      "flying-human",
      "flappy-run",
      "star-catcher",
      "mango-rush",
      "mango-rush-beta",
      "gem-dash",
      "market-rush-neon",
      "puff-puff-catch",
      "rain-bucket",
      "neon-orchard"
    ]
  },
  {
    "slug": "coin-collecting",
    "name": "Coin collecting",
    "group": "How you play",
    "count": 44,
    "description": "Coins everywhere. Collect them all before the timer runs out.",
    "art": "/category-art/coin-collecting.webp",
    "games": [
      "lanedash",
      "orb-rush",
      "coin-catcher",
      "market-dash",
      "naira-run",
      "gem-rush",
      "sky-hopper",
      "okada-dodge",
      "neon-drift",
      "gidi-hop",
      "lagos-crossing",
      "coconut-dodge",
      "orbit-run",
      "coin-dash-arena",
      "3d-coin-collector",
      "startng-city-dash",
      "orbit-orchard",
      "coin-dash",
      "relic-rush-3d",
      "star-sprint",
      "volcano",
      "relic-rush",
      "coin-rush",
      "glam-dash",
      "orb-rush-mando",
      "sky-courier",
      "ember-dash",
      "coin-dash-runner",
      "orb-frenzy",
      "portal-pals",
      "coin-rush-3d",
      "jemi-game-arcade",
      "whimsy-wick",
      "gem-dash",
      "zedu-dash",
      "coin-quest",
      "skybund",
      "rooftop-rush",
      "splash-course",
      "coin-dash-game",
      "gem-isle",
      "murewa-gem-rush",
      "cosmic-dash",
      "temple-runner"
    ]
  },
  {
    "slug": "survival",
    "name": "Survival",
    "group": "How you play",
    "count": 10,
    "description": "Stay alive for one more wave, one more minute, one more run.",
    "art": "/category-art/survival.webp",
    "games": [
      "dead-signal",
      "downshaft",
      "coin-dash-arena",
      "flood-rise",
      "starfall-neon-survival",
      "crowd-control",
      "shard-survival",
      "bug-escape",
      "danfo-defense",
      "lagos-apocalypto"
    ]
  },
  {
    "slug": "football-and-sports",
    "name": "Football and sports",
    "group": "How you play",
    "count": 5,
    "description": "Penalties, street football and sports with a Naija flavour.",
    "art": "/category-art/football-and-sports.webp",
    "games": [
      "naija-penalty",
      "streetpk-naija",
      "penalty-kings-3d",
      "showball",
      "cork-fc"
    ]
  },
  {
    "slug": "simulation-and-management",
    "name": "Simulation and management",
    "group": "How you play",
    "count": 10,
    "description": "Build something, run something, keep the plates spinning.",
    "art": "/category-art/simulation-and-management.webp",
    "games": [
      "danfo",
      "oven-rush",
      "mama-put-rush",
      "city-hustle-lagos",
      "along",
      "job-hunt",
      "sharp-sharp",
      "junction-spirit",
      "budget-panic",
      "mami"
    ]
  },
  {
    "slug": "nigerian-themed",
    "name": "Nigerian themed",
    "group": "Setting and theme",
    "count": 43,
    "description": "Naija spirit, from danfo rush hour to jollof and Lagos street life.",
    "art": "/category-art/nigerian-themed.webp",
    "games": [
      "vault-of-yankari",
      "suya-catcher",
      "owambe",
      "lagos-run",
      "naira-run",
      "naija-penalty",
      "danfo",
      "streetpk-naija",
      "okada-dodge",
      "gidi-hop",
      "lagos-crossing",
      "oven-rush",
      "go-slow-danfo",
      "mama-put-rush",
      "city-hustle-lagos",
      "along",
      "flood-rise",
      "lagos-market-run",
      "lagos-hustle",
      "sharp-sharp",
      "onithsa-market-run",
      "naija-drafts",
      "ayo-arena",
      "jollof-catch",
      "mami",
      "nepa-light-up-lagos",
      "naija-quickfire",
      "lagos-bike-rush",
      "naija-relic-hunter",
      "maths-escape",
      "market-rush-neon",
      "ile-ere",
      "naija-roots",
      "danfo-defense",
      "puff-puff-catch",
      "suwe",
      "naija-market-hustle",
      "agege-rush",
      "rain-bucket",
      "jollof-rush",
      "danfo-make-way",
      "jollof-rush-3d",
      "lagos-apocalypto"
    ]
  },
  {
    "slug": "lagos",
    "name": "Lagos",
    "group": "Setting and theme",
    "count": 24,
    "description": "The mainland, the island and everything in between. Games that feel like Lagos.",
    "art": "/category-art/lagos.webp",
    "games": [
      "owambe",
      "lagos-run",
      "danfo",
      "gidi-hop",
      "lagos-crossing",
      "dusk-stack",
      "oven-rush",
      "go-slow-danfo",
      "mama-put-rush",
      "city-hustle-lagos",
      "flood-rise",
      "lagos-market-run",
      "lagos-hustle",
      "sharp-sharp",
      "nepa-light-up-lagos",
      "lagos-bike-rush",
      "maths-escape",
      "market-rush-neon",
      "ile-ere",
      "danfo-defense",
      "agege-rush",
      "rain-bucket",
      "danfo-make-way",
      "lagos-apocalypto"
    ]
  },
  {
    "slug": "markets-and-street-life",
    "name": "Markets and street life",
    "group": "Setting and theme",
    "count": 9,
    "description": "Hustle, bargain and weave through the bustle of the market.",
    "art": "/category-art/markets-and-street-life.webp",
    "games": [
      "market-dash",
      "finding-mama",
      "okada-dodge",
      "lagos-market-run",
      "onithsa-market-run",
      "budget-panic",
      "mami",
      "market-rush-neon",
      "naija-market-hustle"
    ]
  },
  {
    "slug": "food-and-cooking",
    "name": "Food and cooking",
    "group": "Setting and theme",
    "count": 11,
    "description": "Jollof, suya and everything worth queuing for. Play with your food.",
    "art": "/category-art/food-and-cooking.webp",
    "games": [
      "suya-catcher",
      "oven-rush",
      "mama-put-rush",
      "budget-panic",
      "jollof-catch",
      "mami",
      "dont-spill-the-soup",
      "mango-rush-beta",
      "puff-puff-catch",
      "jollof-rush",
      "jollof-rush-3d"
    ]
  },
  {
    "slug": "space-and-sci-fi",
    "name": "Space and sci-fi",
    "group": "Setting and theme",
    "count": 9,
    "description": "Far-off worlds, neon ships and a little cosmic trouble.",
    "art": "/category-art/space-and-sci-fi.webp",
    "games": [
      "star-runner-3d",
      "nebula-dash",
      "star-dodge-by-jeffersdoherty",
      "perihelion",
      "cosmic-surge",
      "star-dash",
      "space-rescue",
      "star-dash-3d",
      "cosmic-dash"
    ]
  },
  {
    "slug": "neon-and-cyberpunk",
    "name": "Neon and cyberpunk",
    "group": "Setting and theme",
    "count": 17,
    "description": "Chrome, rain and bright city lights. Turn the volume up.",
    "art": "/category-art/neon-and-cyberpunk.webp",
    "games": [
      "cyber-slash",
      "neon-drift-arcade",
      "neon-drift",
      "iso-scrap",
      "neondrift",
      "startverse-neon-rush",
      "glide",
      "starfall-neon-survival",
      "agent-protocol",
      "neon-brick-break",
      "turbo-race",
      "neondrift-arcade",
      "quantum-breaker",
      "danfo-defense",
      "cyberpulse",
      "cosmic-dash",
      "neon-orchard"
    ]
  },
  {
    "slug": "fantasy-and-magic",
    "name": "Fantasy and magic",
    "group": "Setting and theme",
    "count": 5,
    "description": "Spells, swords and strange little kingdoms.",
    "art": "/category-art/fantasy-and-magic.webp",
    "games": [
      "git-quest",
      "the-lost-library",
      "whimsy-wick",
      "dreamy-lass",
      "lantern-isles"
    ]
  },
  {
    "slug": "ancient-ruins-and-treasure",
    "name": "Ancient ruins and treasure",
    "group": "Setting and theme",
    "count": 8,
    "description": "Old temples, hidden vaults and one more puzzle before the exit.",
    "art": "/category-art/ancient-ruins-and-treasure.webp",
    "games": [
      "relic-hunter",
      "vault-of-yankari",
      "treasure-isle",
      "orb-temple",
      "relic-rush-3d",
      "relic-rush",
      "naija-relic-hunter",
      "temple-runner"
    ]
  },
  {
    "slug": "horror-and-spooky",
    "name": "Horror and spooky",
    "group": "Setting and theme",
    "count": 3,
    "description": "Dark corridors and things that should not be there. Play with the lights on.",
    "art": "/category-art/horror-and-spooky.webp",
    "games": [
      "dead-signal",
      "ghost-on-the-loose",
      "lagos-apocalypto"
    ]
  },
  {
    "slug": "cosy-and-relaxing",
    "name": "Cosy and relaxing",
    "group": "Setting and theme",
    "count": 4,
    "description": "No rush. No pressure. Just a nice little world to potter about in.",
    "art": "/category-art/cosy-and-relaxing.webp",
    "games": [
      "hangout",
      "dusk-stack",
      "bloom-circuit",
      "whimsy-wick"
    ]
  },
  {
    "slug": "educational",
    "name": "Educational",
    "group": "Learn and grow",
    "count": 6,
    "description": "Learn something while you play. Sneaky, we know.",
    "art": "/category-art/educational.webp",
    "games": [
      "git-quest",
      "job-hunt",
      "the-lost-library",
      "maths-escape",
      "naija-roots",
      "quiz"
    ]
  },
  {
    "slug": "words-and-reading",
    "name": "Words and reading",
    "group": "Learn and grow",
    "count": 4,
    "description": "Word games, letters and language with a bit of mischief.",
    "art": "/category-art/words-and-reading.webp",
    "games": [
      "the-lost-library",
      "pick-me",
      "word-market",
      "testing-player-pick-me"
    ]
  },
  {
    "slug": "coding-and-tech",
    "name": "Coding and tech",
    "group": "Learn and grow",
    "count": 5,
    "description": "Games about code, computers and building things.",
    "art": "/category-art/coding-and-tech.webp",
    "games": [
      "git-quest",
      "bug-escape",
      "quiz",
      "ludo",
      "whot"
    ]
  },
  {
    "slug": "with-friends",
    "name": "With friends",
    "group": "Play together",
    "count": 8,
    "description": "Make a room, share a code and play together.",
    "art": "/category-art/with-friends.webp",
    "games": [
      "hangout",
      "arcade-hub",
      "follow-follow",
      "orb-rush-mando",
      "star-dodge-by-jeffersdoherty",
      "pick-me",
      "jackpot",
      "testing-player-pick-me"
    ]
  },
  {
    "slug": "for-a-class-or-cohort",
    "name": "For a class or a cohort",
    "group": "Play together",
    "count": 3,
    "description": "Made for a group, a classroom or a whole cohort.",
    "art": "/category-art/for-a-class-or-cohort.webp",
    "games": [
      "follow-follow",
      "quiz",
      "bingo"
    ]
  },
  {
    "slug": "two-player-classics",
    "name": "Two-player classics",
    "group": "Play together",
    "count": 10,
    "description": "The games you already know, ready for two.",
    "art": "/category-art/two-player-classics.webp",
    "games": [
      "naija-drafts",
      "ayo-arena",
      "pick-me",
      "ile-ere",
      "suwe",
      "ludo",
      "ayo",
      "draughts",
      "testing-player-pick-me",
      "cork-fc"
    ]
  },
  {
    "slug": "five-minute-fun",
    "name": "5-minute fun",
    "group": "Play together",
    "count": 21,
    "description": "A quick round, a small break, one more go.",
    "art": "/category-art/five-minute-fun.webp",
    "games": [
      "market-dash",
      "gem-rush",
      "glitter-rain",
      "coconut-dodge",
      "orbit-orchard",
      "star-sprint",
      "bounce-game",
      "perihelion",
      "jollof-catch",
      "orb-frenzy",
      "neon-brick-break",
      "coin-rush-3d",
      "flying-human",
      "star-catcher",
      "mango-rush-beta",
      "star-dash",
      "gem-dash",
      "puff-puff-catch",
      "tower-stack",
      "murewa-gem-rush",
      "neon-orchard"
    ]
  },
  {
    "slug": "3d-games",
    "name": "3D games",
    "group": "Look and feel",
    "count": 88,
    "description": "Worlds with a little more depth. Built for the browser.",
    "art": "/category-art/3d-games.webp",
    "games": [
      "lanedash",
      "relic-hunter",
      "suya-catcher",
      "hangout",
      "dead-signal",
      "downshaft",
      "coin-catcher",
      "market-dash",
      "lagos-run",
      "forest-hunter",
      "arrow-escape",
      "naira-run",
      "danfo",
      "treasure-isle",
      "balloon-funride",
      "sky-hopper",
      "sumo-bump",
      "streetpk-naija",
      "cybertron-runner",
      "okada-dodge",
      "dusk-stack",
      "orbit-run",
      "iso-scrap",
      "coin-dash-arena",
      "oven-rush",
      "neondrift",
      "3d-coin-collector",
      "mama-put-rush",
      "wheelie-wahala",
      "star-runner-3d",
      "startng-city-dash",
      "city-hustle-lagos",
      "along",
      "flood-rise",
      "git-quest",
      "lagos-market-run",
      "orbit-orchard",
      "lagos-hustle",
      "archery-master",
      "job-hunt",
      "relic-rush-3d",
      "harrington-mystery",
      "star-sprint",
      "relic-rush",
      "sharp-sharp",
      "inkbreak",
      "coin-rush",
      "orb-rush-mando",
      "onithsa-market-run",
      "robot-dodge",
      "budget-panic",
      "perihelion",
      "ayo-arena",
      "shard-survival",
      "mami",
      "nepa-light-up-lagos",
      "bug-escape",
      "orb-frenzy",
      "penalty-kings-3d",
      "sneaky-squad",
      "lagos-bike-rush",
      "horsebound-endless-derby",
      "coin-rush-3d",
      "salone-run",
      "jemi-game-arcade",
      "star-catcher",
      "mango-rush",
      "gem-dash",
      "quantum-breaker",
      "ile-ere",
      "naija-roots",
      "buggy-bash-3d",
      "tower-tapper",
      "nightfall-arena",
      "skybund",
      "rooftop-rush",
      "splash-course",
      "style-sprint",
      "gem-isle",
      "murewa-gem-rush",
      "star-dash-3d",
      "lantern-isles",
      "agege-rush",
      "rain-bucket",
      "danfo-make-way",
      "temple-runner",
      "cork-fc",
      "jollof-rush-3d"
    ]
  },
  {
    "slug": "web-games",
    "name": "Web games",
    "group": "Words people search",
    "count": 189,
    "description": "Every game on start.ng, playable free in your browser.",
    "art": "/category-art/web-games.webp",
    "games": [
      "the-hangout",
      "lagos-legends-street-quest",
      "bingo",
      "quiz",
      "ludo",
      "whot",
      "ayo",
      "draughts",
      "connect-4",
      "tic-tac-toe",
      "mango-rush-beta",
      "lagos-apocalypto",
      "tesla-skyrun",
      "jollof-rush-3d",
      "suomi-sniper",
      "cork-fc",
      "temple-runner",
      "danfo-make-way",
      "jollof-rush",
      "neon-orchard",
      "testing-player-pick-me",
      "rain-bucket",
      "cosmic-dash",
      "agege-rush",
      "naija-market-hustle",
      "lantern-isles",
      "star-dash-3d",
      "jackpot",
      "murewa-gem-rush",
      "gem-isle",
      "dreamy-lass",
      "space-rescue",
      "style-sprint",
      "coin-dash-game",
      "sky-patrol",
      "splash-course",
      "rooftop-rush",
      "echo-world-game",
      "skybund",
      "suwe",
      "nightfall-arena",
      "echo-grid-dan",
      "tower-tapper",
      "buggy-bash-3d",
      "cyberpulse",
      "tower-stack",
      "word-market",
      "puff-puff-catch",
      "danfo-defense",
      "naija-roots",
      "coin-quest",
      "ile-ere",
      "zedu-dash",
      "market-rush-neon",
      "quantum-breaker",
      "gem-dash",
      "ghost-on-the-loose",
      "maths-escape",
      "star-dash",
      "pick-me",
      "star-catcher",
      "inkbreak",
      "noir-detective",
      "neondrift-arcade",
      "flappy-run",
      "flying-human",
      "sunshade-dodger",
      "boju-boju",
      "jemi-game-arcade",
      "salone-run",
      "turbo-race",
      "coin-rush-3d",
      "orbital-run",
      "showball",
      "circuit-racer",
      "horsebound-endless-derby",
      "naija-relic-hunter",
      "lagos-bike-rush",
      "portal-pals",
      "sneaky-squad",
      "neon-brick-break",
      "penalty-kings-3d",
      "cosmic-surge",
      "orb-frenzy",
      "bug-escape",
      "naija-quickfire",
      "coin-dash-runner",
      "nepa-light-up-lagos",
      "the-lost-library",
      "dont-spill-the-soup",
      "mami",
      "shard-survival",
      "platformer-hopper",
      "bullseye-archery",
      "jollof-catch",
      "ayo-arena",
      "zobo-sort",
      "naija-drafts",
      "ember-dash",
      "perihelion",
      "agent-protocol",
      "star-dodge-by-jeffersdoherty",
      "whimsy-wick",
      "cloud-courier",
      "budget-panic",
      "sky-courier",
      "robot-dodge",
      "onithsa-market-run",
      "orb-rush-mando",
      "glam-dash",
      "bloom-circuit",
      "coin-rush",
      "junction-spirit",
      "riftsync",
      "bounce-game",
      "crowd-control",
      "nebula-dash",
      "starfall-neon-survival",
      "sharp-sharp",
      "relic-rush",
      "volcano",
      "star-sprint",
      "follow-follow",
      "harrington-mystery",
      "relic-rush-3d",
      "job-hunt",
      "archery-master",
      "lagos-hustle",
      "coin-dash",
      "orbit-orchard",
      "kingpin-arena",
      "lagos-market-run",
      "git-quest",
      "flood-rise",
      "along",
      "city-hustle-lagos",
      "startng-city-dash",
      "star-runner-3d",
      "wheelie-wahala",
      "mama-put-rush",
      "pulse-runner",
      "glide",
      "startverse-neon-rush",
      "3d-coin-collector",
      "orb-temple",
      "go-slow-danfo",
      "neondrift",
      "arcade-hub",
      "oven-rush",
      "coin-dash-arena",
      "iso-scrap",
      "orbit-run",
      "dusk-stack",
      "coconut-dodge",
      "alley-velocity",
      "lagos-crossing",
      "gidi-hop",
      "neon-drift",
      "glitter-rain",
      "okada-dodge",
      "cybertron-runner",
      "streetpk-naija",
      "sumo-bump",
      "sky-hopper",
      "balloon-funride",
      "gem-rush",
      "neon-drift-arcade",
      "treasure-isle",
      "danfo",
      "cyber-slash",
      "naija-penalty",
      "naira-run",
      "arrow-escape",
      "forest-hunter",
      "the-hooded-swordsman",
      "lagos-run",
      "finding-mama",
      "ghost-shift",
      "mango-rush",
      "owambe",
      "market-dash",
      "coin-catcher",
      "downshaft",
      "dead-signal",
      "orb-rush",
      "hangout",
      "suya-catcher",
      "vault-of-yankari",
      "relic-hunter",
      "lanedash"
    ]
  },
  {
    "slug": "browser-games",
    "name": "Browser games",
    "group": "Words people search",
    "count": 189,
    "description": "Every game on start.ng, playable free in your browser.",
    "art": "/category-art/browser-games.webp",
    "games": [
      "the-hangout",
      "lagos-legends-street-quest",
      "bingo",
      "quiz",
      "ludo",
      "whot",
      "ayo",
      "draughts",
      "connect-4",
      "tic-tac-toe",
      "mango-rush-beta",
      "lagos-apocalypto",
      "tesla-skyrun",
      "jollof-rush-3d",
      "suomi-sniper",
      "cork-fc",
      "temple-runner",
      "danfo-make-way",
      "jollof-rush",
      "neon-orchard",
      "testing-player-pick-me",
      "rain-bucket",
      "cosmic-dash",
      "agege-rush",
      "naija-market-hustle",
      "lantern-isles",
      "star-dash-3d",
      "jackpot",
      "murewa-gem-rush",
      "gem-isle",
      "dreamy-lass",
      "space-rescue",
      "style-sprint",
      "coin-dash-game",
      "sky-patrol",
      "splash-course",
      "rooftop-rush",
      "echo-world-game",
      "skybund",
      "suwe",
      "nightfall-arena",
      "echo-grid-dan",
      "tower-tapper",
      "buggy-bash-3d",
      "cyberpulse",
      "tower-stack",
      "word-market",
      "puff-puff-catch",
      "danfo-defense",
      "naija-roots",
      "coin-quest",
      "ile-ere",
      "zedu-dash",
      "market-rush-neon",
      "quantum-breaker",
      "gem-dash",
      "ghost-on-the-loose",
      "maths-escape",
      "star-dash",
      "pick-me",
      "star-catcher",
      "inkbreak",
      "noir-detective",
      "neondrift-arcade",
      "flappy-run",
      "flying-human",
      "sunshade-dodger",
      "boju-boju",
      "jemi-game-arcade",
      "salone-run",
      "turbo-race",
      "coin-rush-3d",
      "orbital-run",
      "showball",
      "circuit-racer",
      "horsebound-endless-derby",
      "naija-relic-hunter",
      "lagos-bike-rush",
      "portal-pals",
      "sneaky-squad",
      "neon-brick-break",
      "penalty-kings-3d",
      "cosmic-surge",
      "orb-frenzy",
      "bug-escape",
      "naija-quickfire",
      "coin-dash-runner",
      "nepa-light-up-lagos",
      "the-lost-library",
      "dont-spill-the-soup",
      "mami",
      "shard-survival",
      "platformer-hopper",
      "bullseye-archery",
      "jollof-catch",
      "ayo-arena",
      "zobo-sort",
      "naija-drafts",
      "ember-dash",
      "perihelion",
      "agent-protocol",
      "star-dodge-by-jeffersdoherty",
      "whimsy-wick",
      "cloud-courier",
      "budget-panic",
      "sky-courier",
      "robot-dodge",
      "onithsa-market-run",
      "orb-rush-mando",
      "glam-dash",
      "bloom-circuit",
      "coin-rush",
      "junction-spirit",
      "riftsync",
      "bounce-game",
      "crowd-control",
      "nebula-dash",
      "starfall-neon-survival",
      "sharp-sharp",
      "relic-rush",
      "volcano",
      "star-sprint",
      "follow-follow",
      "harrington-mystery",
      "relic-rush-3d",
      "job-hunt",
      "archery-master",
      "lagos-hustle",
      "coin-dash",
      "orbit-orchard",
      "kingpin-arena",
      "lagos-market-run",
      "git-quest",
      "flood-rise",
      "along",
      "city-hustle-lagos",
      "startng-city-dash",
      "star-runner-3d",
      "wheelie-wahala",
      "mama-put-rush",
      "pulse-runner",
      "glide",
      "startverse-neon-rush",
      "3d-coin-collector",
      "orb-temple",
      "go-slow-danfo",
      "neondrift",
      "arcade-hub",
      "oven-rush",
      "coin-dash-arena",
      "iso-scrap",
      "orbit-run",
      "dusk-stack",
      "coconut-dodge",
      "alley-velocity",
      "lagos-crossing",
      "gidi-hop",
      "neon-drift",
      "glitter-rain",
      "okada-dodge",
      "cybertron-runner",
      "streetpk-naija",
      "sumo-bump",
      "sky-hopper",
      "balloon-funride",
      "gem-rush",
      "neon-drift-arcade",
      "treasure-isle",
      "danfo",
      "cyber-slash",
      "naija-penalty",
      "naira-run",
      "arrow-escape",
      "forest-hunter",
      "the-hooded-swordsman",
      "lagos-run",
      "finding-mama",
      "ghost-shift",
      "mango-rush",
      "owambe",
      "market-dash",
      "coin-catcher",
      "downshaft",
      "dead-signal",
      "orb-rush",
      "hangout",
      "suya-catcher",
      "vault-of-yankari",
      "relic-hunter",
      "lanedash"
    ]
  },
  {
    "slug": "free-online-games",
    "name": "Free online games",
    "group": "Words people search",
    "count": 189,
    "description": "Every game on start.ng, free to play, nothing to download.",
    "art": "/category-art/free-online-games.webp",
    "games": [
      "the-hangout",
      "lagos-legends-street-quest",
      "bingo",
      "quiz",
      "ludo",
      "whot",
      "ayo",
      "draughts",
      "connect-4",
      "tic-tac-toe",
      "mango-rush-beta",
      "lagos-apocalypto",
      "tesla-skyrun",
      "jollof-rush-3d",
      "suomi-sniper",
      "cork-fc",
      "temple-runner",
      "danfo-make-way",
      "jollof-rush",
      "neon-orchard",
      "testing-player-pick-me",
      "rain-bucket",
      "cosmic-dash",
      "agege-rush",
      "naija-market-hustle",
      "lantern-isles",
      "star-dash-3d",
      "jackpot",
      "murewa-gem-rush",
      "gem-isle",
      "dreamy-lass",
      "space-rescue",
      "style-sprint",
      "coin-dash-game",
      "sky-patrol",
      "splash-course",
      "rooftop-rush",
      "echo-world-game",
      "skybund",
      "suwe",
      "nightfall-arena",
      "echo-grid-dan",
      "tower-tapper",
      "buggy-bash-3d",
      "cyberpulse",
      "tower-stack",
      "word-market",
      "puff-puff-catch",
      "danfo-defense",
      "naija-roots",
      "coin-quest",
      "ile-ere",
      "zedu-dash",
      "market-rush-neon",
      "quantum-breaker",
      "gem-dash",
      "ghost-on-the-loose",
      "maths-escape",
      "star-dash",
      "pick-me",
      "star-catcher",
      "inkbreak",
      "noir-detective",
      "neondrift-arcade",
      "flappy-run",
      "flying-human",
      "sunshade-dodger",
      "boju-boju",
      "jemi-game-arcade",
      "salone-run",
      "turbo-race",
      "coin-rush-3d",
      "orbital-run",
      "showball",
      "circuit-racer",
      "horsebound-endless-derby",
      "naija-relic-hunter",
      "lagos-bike-rush",
      "portal-pals",
      "sneaky-squad",
      "neon-brick-break",
      "penalty-kings-3d",
      "cosmic-surge",
      "orb-frenzy",
      "bug-escape",
      "naija-quickfire",
      "coin-dash-runner",
      "nepa-light-up-lagos",
      "the-lost-library",
      "dont-spill-the-soup",
      "mami",
      "shard-survival",
      "platformer-hopper",
      "bullseye-archery",
      "jollof-catch",
      "ayo-arena",
      "zobo-sort",
      "naija-drafts",
      "ember-dash",
      "perihelion",
      "agent-protocol",
      "star-dodge-by-jeffersdoherty",
      "whimsy-wick",
      "cloud-courier",
      "budget-panic",
      "sky-courier",
      "robot-dodge",
      "onithsa-market-run",
      "orb-rush-mando",
      "glam-dash",
      "bloom-circuit",
      "coin-rush",
      "junction-spirit",
      "riftsync",
      "bounce-game",
      "crowd-control",
      "nebula-dash",
      "starfall-neon-survival",
      "sharp-sharp",
      "relic-rush",
      "volcano",
      "star-sprint",
      "follow-follow",
      "harrington-mystery",
      "relic-rush-3d",
      "job-hunt",
      "archery-master",
      "lagos-hustle",
      "coin-dash",
      "orbit-orchard",
      "kingpin-arena",
      "lagos-market-run",
      "git-quest",
      "flood-rise",
      "along",
      "city-hustle-lagos",
      "startng-city-dash",
      "star-runner-3d",
      "wheelie-wahala",
      "mama-put-rush",
      "pulse-runner",
      "glide",
      "startverse-neon-rush",
      "3d-coin-collector",
      "orb-temple",
      "go-slow-danfo",
      "neondrift",
      "arcade-hub",
      "oven-rush",
      "coin-dash-arena",
      "iso-scrap",
      "orbit-run",
      "dusk-stack",
      "coconut-dodge",
      "alley-velocity",
      "lagos-crossing",
      "gidi-hop",
      "neon-drift",
      "glitter-rain",
      "okada-dodge",
      "cybertron-runner",
      "streetpk-naija",
      "sumo-bump",
      "sky-hopper",
      "balloon-funride",
      "gem-rush",
      "neon-drift-arcade",
      "treasure-isle",
      "danfo",
      "cyber-slash",
      "naija-penalty",
      "naira-run",
      "arrow-escape",
      "forest-hunter",
      "the-hooded-swordsman",
      "lagos-run",
      "finding-mama",
      "ghost-shift",
      "mango-rush",
      "owambe",
      "market-dash",
      "coin-catcher",
      "downshaft",
      "dead-signal",
      "orb-rush",
      "hangout",
      "suya-catcher",
      "vault-of-yankari",
      "relic-hunter",
      "lanedash"
    ]
  },
  {
    "slug": "html5-games",
    "name": "HTML5 games",
    "group": "Words people search",
    "count": 189,
    "description": "Every game on start.ng, built with HTML, CSS and JavaScript.",
    "art": "/category-art/html5-games.webp",
    "games": [
      "the-hangout",
      "lagos-legends-street-quest",
      "bingo",
      "quiz",
      "ludo",
      "whot",
      "ayo",
      "draughts",
      "connect-4",
      "tic-tac-toe",
      "mango-rush-beta",
      "lagos-apocalypto",
      "tesla-skyrun",
      "jollof-rush-3d",
      "suomi-sniper",
      "cork-fc",
      "temple-runner",
      "danfo-make-way",
      "jollof-rush",
      "neon-orchard",
      "testing-player-pick-me",
      "rain-bucket",
      "cosmic-dash",
      "agege-rush",
      "naija-market-hustle",
      "lantern-isles",
      "star-dash-3d",
      "jackpot",
      "murewa-gem-rush",
      "gem-isle",
      "dreamy-lass",
      "space-rescue",
      "style-sprint",
      "coin-dash-game",
      "sky-patrol",
      "splash-course",
      "rooftop-rush",
      "echo-world-game",
      "skybund",
      "suwe",
      "nightfall-arena",
      "echo-grid-dan",
      "tower-tapper",
      "buggy-bash-3d",
      "cyberpulse",
      "tower-stack",
      "word-market",
      "puff-puff-catch",
      "danfo-defense",
      "naija-roots",
      "coin-quest",
      "ile-ere",
      "zedu-dash",
      "market-rush-neon",
      "quantum-breaker",
      "gem-dash",
      "ghost-on-the-loose",
      "maths-escape",
      "star-dash",
      "pick-me",
      "star-catcher",
      "inkbreak",
      "noir-detective",
      "neondrift-arcade",
      "flappy-run",
      "flying-human",
      "sunshade-dodger",
      "boju-boju",
      "jemi-game-arcade",
      "salone-run",
      "turbo-race",
      "coin-rush-3d",
      "orbital-run",
      "showball",
      "circuit-racer",
      "horsebound-endless-derby",
      "naija-relic-hunter",
      "lagos-bike-rush",
      "portal-pals",
      "sneaky-squad",
      "neon-brick-break",
      "penalty-kings-3d",
      "cosmic-surge",
      "orb-frenzy",
      "bug-escape",
      "naija-quickfire",
      "coin-dash-runner",
      "nepa-light-up-lagos",
      "the-lost-library",
      "dont-spill-the-soup",
      "mami",
      "shard-survival",
      "platformer-hopper",
      "bullseye-archery",
      "jollof-catch",
      "ayo-arena",
      "zobo-sort",
      "naija-drafts",
      "ember-dash",
      "perihelion",
      "agent-protocol",
      "star-dodge-by-jeffersdoherty",
      "whimsy-wick",
      "cloud-courier",
      "budget-panic",
      "sky-courier",
      "robot-dodge",
      "onithsa-market-run",
      "orb-rush-mando",
      "glam-dash",
      "bloom-circuit",
      "coin-rush",
      "junction-spirit",
      "riftsync",
      "bounce-game",
      "crowd-control",
      "nebula-dash",
      "starfall-neon-survival",
      "sharp-sharp",
      "relic-rush",
      "volcano",
      "star-sprint",
      "follow-follow",
      "harrington-mystery",
      "relic-rush-3d",
      "job-hunt",
      "archery-master",
      "lagos-hustle",
      "coin-dash",
      "orbit-orchard",
      "kingpin-arena",
      "lagos-market-run",
      "git-quest",
      "flood-rise",
      "along",
      "city-hustle-lagos",
      "startng-city-dash",
      "star-runner-3d",
      "wheelie-wahala",
      "mama-put-rush",
      "pulse-runner",
      "glide",
      "startverse-neon-rush",
      "3d-coin-collector",
      "orb-temple",
      "go-slow-danfo",
      "neondrift",
      "arcade-hub",
      "oven-rush",
      "coin-dash-arena",
      "iso-scrap",
      "orbit-run",
      "dusk-stack",
      "coconut-dodge",
      "alley-velocity",
      "lagos-crossing",
      "gidi-hop",
      "neon-drift",
      "glitter-rain",
      "okada-dodge",
      "cybertron-runner",
      "streetpk-naija",
      "sumo-bump",
      "sky-hopper",
      "balloon-funride",
      "gem-rush",
      "neon-drift-arcade",
      "treasure-isle",
      "danfo",
      "cyber-slash",
      "naija-penalty",
      "naira-run",
      "arrow-escape",
      "forest-hunter",
      "the-hooded-swordsman",
      "lagos-run",
      "finding-mama",
      "ghost-shift",
      "mango-rush",
      "owambe",
      "market-dash",
      "coin-catcher",
      "downshaft",
      "dead-signal",
      "orb-rush",
      "hangout",
      "suya-catcher",
      "vault-of-yankari",
      "relic-hunter",
      "lanedash"
    ]
  }
];

export const creators: Creator[] = [
  {
    "slug": "74-the-plot",
    "id": 74,
    "name": "The Plot",
    "by": "AroicX",
    "url": "https://theplot.usevale.art/",
    "description": "Build a life in a vibrant Nigerian neighbourhood. Choose a career, take on jobs, earn game money, meet other players, and make every day your own.",
    "cover": "/indie/74.webp",
    "created": "2026-10-22T21:30:19.061170Z",
    "plays": 12,
    "categories": [
      "Simulation and management",
      "Nigerian themed",
      "Money and careers",
      "With friends"
    ]
  },
  {
    "slug": "73-campus-life",
    "id": 73,
    "name": "Campus Life",
    "by": "Trenches",
    "url": "https://campuslife.live",
    "description": "It’s about university life, writing jamb, choosing preferred course, attending lecture and more.",
    "cover": "/indie/73.webp",
    "created": "2026-10-22T17:15:57.700417Z",
    "plays": 8,
    "categories": [
      "Simulation and management",
      "Nigerian themed",
      "Educational"
    ]
  },
  {
    "slug": "40-nairobi-stories",
    "id": 40,
    "name": "Nairobi Stories",
    "by": "Zitrion",
    "url": "https://nairobistories.xyz",
    "description": "Nairobi lifestyle game",
    "cover": "/indie/40.webp",
    "created": "2026-10-22T15:20:19.202637Z",
    "plays": 8,
    "categories": [
      "African themed"
    ]
  },
  {
    "slug": "39-myguy",
    "id": 39,
    "name": "MyGuy",
    "by": "Sava",
    "url": "https://playmyguy.com/?src=startng",
    "description": "MyGuy is your Naija family in your phone. Talk to Mama or Papa and they repeat everything you say in a funny squeaky voice. Poke them, tickle them, cook them jollof or pounded yam and egusi, and hear what they think of your cooking. Survive NEPA by starting the gen, do your chores, and earn coins. In the Play Ground, clear Lagos go-slow in Danfo Jam, take the Naija Quiz, and climb the weekly board.",
    "cover": "/indie/39.webp",
    "created": "2026-10-22T14:42:50.419450Z",
    "plays": 6,
    "categories": [
      "Nigerian themed",
      "Food and cooking",
      "Cosy and relaxing",
      "5-minute fun"
    ]
  },
  {
    "slug": "38-feint-heart",
    "id": 38,
    "name": "Feint Heart",
    "by": "Behruz",
    "url": "https://feint.filo.im",
    "description": "A 1v1 sword duel where reading your rival is everything. Each turn, both duelists secretly pick one of six moves: Slash, Lunge, Block, Parry, Feint or Dodge. Every move beats two and loses to two, so there is no best move, only a better guess. Taking hits builds Focus, which unlocks your duelist's Signature strike. Walk The Road against four rivals who learn your habits and talk to bluff you, ending with Your Shadow, a copy of how you play. Or duel a friend online: they join from their phone with a code or QR. Click the move buttons or press S, L, B, P, F, D.",
    "cover": "/indie/38.webp",
    "created": "2026-10-22T11:24:55.075544Z",
    "plays": 9,
    "categories": [
      "Brainy games",
      "Two-player classics"
    ]
  },
  {
    "slug": "37-rimcity",
    "id": 37,
    "name": "RIMCITY",
    "by": "Afiémo",
    "url": "https://rimcity.app",
    "description": "RIMCITY is a Nigerian-born basketball gaming franchise built for the culture, bringing together basketball, gaming, local identity, entertainment and business.\n\nHow do you play?\n\nVisit [rimcity.app](https://rimcity.app) on your phone or computer browser. Choose your team, select a court and get into the game!\n\nPlay on seven familiar Nigerian courts, including Mo’ Arena, Rowe Park, 1004, Sani Abacha Gym (Kano), Rayfield Indoor Gym (Jos), 59 Niger Street (Port Harcourt) and 82 Div Court (Enugu).",
    "cover": "/indie/37.webp",
    "created": "2026-10-22T10:34:02.875186Z",
    "plays": 12,
    "categories": [
      "Football and sports",
      "Nigerian themed"
    ]
  },
  {
    "slug": "36-danfo-run",
    "id": 36,
    "name": "Danfo Run",
    "by": "Eureka",
    "url": "https://danforun.com/?utm_source=startng&utm_medium=creators&utm_campaign=startng_showcase",
    "description": "Drive a yellow danfo through real Lagos roads: Ojuelegba, Third Mainland Bridge, CMS and more. Pick up passengers, dodge traffic and potholes, and outsmart the agbero before he collects your money.\n\nSwipe or use the arrow keys to change lanes, and stop at bus stops to load passengers. Race your friends live in Gbas Gbos, unlock new buses, and drive routes in Abuja, Ibadan, Abeokuta, Owerri, Calabar and more.\n\nFree, no download. Plays in your browser on any phone.",
    "cover": "/indie/36.webp",
    "created": "2026-10-22T09:51:41.702727Z",
    "plays": 10,
    "categories": [
      "Racing and driving",
      "Catch and dodge",
      "Nigerian themed",
      "Lagos"
    ]
  },
  {
    "slug": "35-ayo-journey",
    "id": 35,
    "name": "Àyò Journey",
    "by": "Opeyemi",
    "url": "https://ayoolopon.netlify.app",
    "description": "Àyò Journey is a digital celebration of Àyò (also known as Ayò Olọ́pọ́n), the classic Yoruba seed-sowing board game that belongs to the ancient mancala family of strategy games played across Africa and beyond. This web-based experience invites players to engage with one of West Africa’s oldest and most enduring intellectual pastimes in a modern, accessible format. Its tagline—“One game, many names”—captures the spirit of a tradition that appears under various titles (Oware, Wari, Ncho, Bao, and others) yet shares the same core of sowing seeds, capturing territory and out-thinking an opponent..",
    "cover": "/indie/35.webp",
    "created": "2026-10-22T08:45:27.362695Z",
    "plays": 7,
    "categories": [
      "Brainy games",
      "Board and card",
      "Nigerian themed",
      "Two-player classics"
    ]
  },
  {
    "slug": "34-resonance-nova",
    "id": 34,
    "name": "Resonance Nova",
    "by": "HandlerOne",
    "url": "https://resonancenova.app/",
    "description": "A card fighting game you play right in your browser. Play single-player or multiplayer, jump into Ranked, and see where you stand against the community.",
    "cover": "/indie/34.webp",
    "created": "2026-10-22T08:22:42.542564Z",
    "plays": 4,
    "categories": [
      "Board and card",
      "With friends"
    ]
  },
  {
    "slug": "33-word-bank",
    "id": 33,
    "name": "Word Bank",
    "by": "Reza",
    "url": "https://playwordbank.com/",
    "description": "WordBank is a daily word game where every letter costs you. One hidden phrase a day, the same for everyone, and a $3,000 bankroll to crack it. Buy a letter and every copy of it lands on the board, but each one costs more than the last and vowels cost double. Solve whenever you think you've seen enough, and whatever money you're still holding is your score. A wrong guess costs $500. Climb the daily leaderboard, keep your streak alive, and share your result without spoiling the answer. The skill isn't filling the board. It's knowing when to stop.",
    "cover": "/indie/33.webp",
    "created": "2026-10-22T07:08:15.984321Z",
    "plays": 5,
    "categories": [
      "Brainy games",
      "Words and reading"
    ]
  },
  {
    "slug": "32-omo-eko-3d",
    "id": 32,
    "name": "Ọmọ Eko 3D",
    "by": "Zekeri",
    "url": "https://games.majorgen.com/omo-eko-3d/",
    "description": "Ọmọ Eko is a free Lagos platform adventure. \n\nGuide Kuti through Balogun Market as General Blackout tries to switch the city off. \n\nRun and jump across drum platforms, collect in-game naira, stomp agberos and throw pepper. \n\nClear five stages, chase a higher score and replay on mobile or desktop.",
    "cover": "/indie/32.webp",
    "created": "2026-10-22T06:29:10.916249Z",
    "plays": 19,
    "categories": [
      "Platformers",
      "Nigerian themed",
      "Lagos",
      "Markets and street life",
      "3D games"
    ]
  },
  {
    "slug": "31-monkey-post",
    "id": 31,
    "name": "Monkey Post",
    "by": "Zekeri",
    "url": "https://games.majorgen.com/monkey-post-argon/",
    "description": "Monkey Post is a free 3D Lagos street-football game set in Surulere. \n\nPlay as Tobi, chase the ball and time your kicks against Chidi. Score between stone-and-slipper posts; first to five goals wins the block. \n\nUse WASD or arrow keys to move and Space to kick, or use the on-screen joystick and kick button on mobile.",
    "cover": "/indie/31.webp",
    "created": "2026-10-22T06:23:37.328470Z",
    "plays": 6,
    "categories": [
      "Football and sports",
      "Nigerian themed",
      "Lagos",
      "3D games"
    ]
  },
  {
    "slug": "30-harvest-to-harbor",
    "id": 30,
    "name": "Harvest to Harbor",
    "by": "Popoola",
    "url": "https://harvest-to-harbor-oumv.vercel.app/",
    "description": "Harvest to Harbor is an immersive 3D agribusiness simulation game set in Nigeria, where players build and manage a ginger farming business from planting crops to exporting finished products to international markets.\nPlayers make strategic decisions about farming, weather, irrigation, workers, processing, machinery, finances, loans, logistics, shipping, and foreign exchange. As the business grows, they unlock new technologies, complete missions, fulfill export contracts, and expand their operations.",
    "cover": "/indie/30.webp",
    "created": "2026-10-22T06:16:53.009550Z",
    "plays": 2,
    "categories": [
      "Simulation and management",
      "Nigerian themed",
      "Money and careers",
      "3D games"
    ]
  },
  {
    "slug": "29-eko-drift",
    "id": 29,
    "name": "Eko Drift",
    "by": "Zekeri",
    "url": "https://games.majorgen.com/eko-drift/",
    "description": "Eko Drift is a free Lagos street-racing game. Race across Lagos-inspired routes, including Third Mainland Bridge, drift through corners and time your boost. Play quick races, career challenges, time trials and online races. Earn in-game cash to unlock cars and performance upgrades. Optional paint colours are cosmetic and do not change speed or race results. Play on mobile or desktop.",
    "cover": "/indie/29.webp",
    "created": "2026-10-22T06:13:50.120115Z",
    "plays": 10,
    "categories": [
      "Racing and driving",
      "Nigerian themed",
      "Lagos"
    ]
  },
  {
    "slug": "28-kingdoms-clash",
    "id": 28,
    "name": "Kingdoms Clash",
    "by": "Zekeri",
    "url": "https://games.majorgen.com/kingdoms-clash/",
    "description": "Kingdoms Clash is a free browser fighting game inspired by Nigerian legends. \n\nChoose Ṣàngó, Queen Idia and other warriors, learn each fighter’s moves, then battle through distinctive arenas. \n\nUse light and heavy attacks, guard, counters and special abilities. \n\nPlay on desktop or mobile. Optional cosmetic finishes do not affect combat.",
    "cover": "/indie/28.webp",
    "created": "2026-10-22T06:11:05.503601Z",
    "plays": 15,
    "categories": [
      "Shooting and action",
      "Nigerian themed",
      "Fantasy and magic"
    ]
  },
  {
    "slug": "27-cueclash",
    "id": 27,
    "name": "CueClash",
    "by": "Temi",
    "url": "https://cueclash.com",
    "description": "Naija multiplayer snooker game, with voice chat",
    "cover": "/indie/27.webp",
    "created": "2026-10-22T03:58:38.943301Z",
    "plays": 6,
    "categories": [
      "Football and sports",
      "Nigerian themed",
      "With friends",
      "Two-player classics"
    ]
  },
  {
    "slug": "26-austraverse",
    "id": 26,
    "name": "austraverse",
    "by": "Austraverse",
    "url": "https://austraverse.app",
    "description": "Austraverse is a free, real-time 3D crypto simulation game world where crypto is the economy, and you are a citizen. You ride a delivery bike for your first naira, trade Bitcoin at its live price, and launch a coin of your own. Whales move, hype builds, scams appear, and regulators open cases, and you live through all of it.",
    "cover": "/indie/26.webp",
    "created": "2026-10-22T02:02:19.642768Z",
    "plays": 3,
    "categories": [
      "Simulation and management",
      "Money and careers",
      "3D games"
    ]
  },
  {
    "slug": "25-9jarepublic",
    "id": 25,
    "name": "9jarepublic",
    "by": "Dami",
    "url": "https://9jarepublic.com",
    "description": "9ja Republic is a Nigerian life and political simulation game where you create a citizen, build a career, buy a home, travel, run a business, meet other players and shape the country. Manage your needs and money, complete daily missions, rise through public service or contest elections from local leadership to President. Play in your browser, choose your path and build your Nigerian story.",
    "cover": "/indie/25.webp",
    "created": "2026-10-21T23:30:08.902343Z",
    "plays": 7,
    "categories": [
      "Simulation and management",
      "Nigerian themed",
      "Money and careers",
      "With friends"
    ]
  },
  {
    "slug": "24-suya-heist",
    "id": 24,
    "name": "Suya Heist",
    "by": "Moshood",
    "url": "https://suyaheist.com",
    "description": "Someone keeps stealing the suya. Find the thief with your friends in this free social deduction party game for 4–10 players, right in your browser.",
    "cover": "/indie/24.webp",
    "created": "2026-10-21T23:08:32.878486Z",
    "plays": 9,
    "categories": [
      "Nigerian themed",
      "Mystery and detective",
      "With friends"
    ]
  },
  {
    "slug": "23-inkling",
    "id": 23,
    "name": "inkling",
    "by": "Adeyemi",
    "url": "https://inkling.draftyard.dev",
    "description": "Draw a word and five AI judges try to guess it, live, while you draw. Each judge is a different AI model with its own character (Sage, Blitz, Doodlebug, Scout and Oracle), and they call out guesses as your sketch takes shape. Get them to lock in before the clock runs out.\n\nEvery day there’s a Daily Five: the same five words for everyone, one try. Score ink, keep your streak, and climb the wall. Or play free games any time, at three speeds.",
    "cover": "/indie/23.webp",
    "created": "2026-10-21T22:56:38.577259Z",
    "plays": 3,
    "categories": [
      "Brainy games",
      "Words and reading",
      "5-minute fun"
    ]
  },
  {
    "slug": "22-on-campus",
    "id": 22,
    "name": "On Campus",
    "by": "Teniola",
    "url": "https://campus.quizantng.com",
    "description": "It is focused on Campus Life across Universities in Nigeria but also open to users in their professional career. It has addons like recreational games and also practice questions tailored to each field.",
    "cover": "/indie/22.webp",
    "created": "2026-10-21T22:45:45.322006Z",
    "plays": 1,
    "categories": [
      "Nigerian themed",
      "Educational",
      "For a class or a cohort"
    ]
  },
  {
    "slug": "21-bird-game",
    "id": 21,
    "name": "Bird Game",
    "by": "Temitech",
    "url": "https://game-kappa-six-97.vercel.app/",
    "description": "Bird Game is an arcade survival game where you control a bird and try to avoid pipes and other flying birds for as long as possible. The goal is to stay alive and achieve a high score\n\nHow to play\n1. Start: Open the Bird Game and click Start Game.\n2. Move up and down: Use the ↑ and ↓ arrow keys or the on-screen directional buttons.\n3. Avoid obstacles: Dodge pipes and other birds. Don't let your bird collide with them.\n4. Pause: Press P or use the pause button.\n5. Beat your score: Survive as long as possible, then select Play Again when the game ends.\n\nThe goal: Avoid collisions, survive longer",
    "cover": "/indie/21.webp",
    "created": "2026-10-21T22:17:13.026382Z",
    "plays": 4,
    "categories": [
      "Catch and dodge",
      "Survival"
    ]
  },
  {
    "slug": "20-neon-drift",
    "id": 20,
    "name": "Neon Drift",
    "by": "Temitech",
    "url": "https://neon-drift-red.vercel.app/",
    "description": "Neon Drift is a fast-paced arcade survival game where you control a glowing orb, collect energy, avoid obstacles, and try to achieve the highest score possible. \n\nHow to play\n\n1. Move: Control the orb with your mouse, finger on a touchscreen, or keyboard using WASD or the arrow keys.\n\n2. Avoid: Stay away from hazards. Touching one ends your run.\n\n3. Collect: Gather energy to earn points. Rare energy cores are worth chasing.\n\n4. Build combos: Chain energy pickups and narrowly avoid hazards to increase your score multiplier.\nStay alive as long as possible and beat your best score.",
    "cover": "/indie/20.webp",
    "created": "2026-10-21T22:07:47.819766Z",
    "plays": 5,
    "categories": [
      "Catch and dodge",
      "Coin collecting",
      "Survival",
      "Neon and cyberpunk"
    ]
  },
  {
    "slug": "19-presido",
    "id": 19,
    "name": "Presido",
    "by": "Simiblade",
    "url": "https://9japresido.app",
    "description": "PRESIDO puts you in the president's seat in a fictional Nigeria. Create your leader, choose a running mate and decide how to handle the economy, public services, security, diplomacy and political pressure. Read briefings, review national indicators and make policy decisions from your presidency desk. Your choices affect citizens, approval, political capital, public finances and elections. Newspaper reports, citizen reactions and story scenes show the fallout. Health, borrowing, corruption and political alliances add difficult trade-offs to regular presidencies.",
    "cover": "/indie/19.webp",
    "created": "2026-10-21T20:54:34.875124Z",
    "plays": 9,
    "categories": [
      "Brainy games",
      "Simulation and management",
      "Nigerian themed"
    ]
  },
  {
    "slug": "17-awaplay-games-on-whatsapp",
    "id": 17,
    "name": "AwaPlay - Games on WhatsApp",
    "by": "Farouk",
    "url": "https://awaplay.app",
    "description": "Play Games on WhatsApp",
    "cover": "/indie/17.webp",
    "created": "2026-10-21T20:29:10.576712Z",
    "plays": 3,
    "categories": [
      "With friends"
    ]
  },
  {
    "slug": "16-konk",
    "id": 16,
    "name": "KONK!",
    "by": "Bright",
    "url": "https://konk.world/play/",
    "description": "A Ghanaian 3D tabletop football game. Flick bottle-cap players across lively street pitches, progress through Ghanaian venues, challenge friends online or by message, and design your own cap. Play solo, head-to-head, or switch on MAYHEM.",
    "cover": "/indie/16.webp",
    "created": "2026-10-21T20:17:41.176102Z",
    "plays": 5,
    "categories": [
      "Football and sports",
      "African themed",
      "With friends",
      "Two-player classics",
      "3D games"
    ]
  },
  {
    "slug": "15-after-round-1",
    "id": 15,
    "name": "After Round 1",
    "by": "francis",
    "url": "https://www.afterround1.tech",
    "description": "After Round 1 is a fast, social Nigerian-inspired finger-count party game where players choose target numbers, reveal their fingers on the beat, and outplay opponents through timing, strategy, and bluffing. I made it to turn a familiar childhood game into a vibrant multiplayer experience filled with expressive characters, customizable hands, cultural locations, music, bots.",
    "cover": "/indie/15.webp",
    "created": "2026-10-21T20:16:52.271700Z",
    "plays": 2,
    "categories": [
      "Nigerian themed",
      "With friends"
    ]
  },
  {
    "slug": "14-digits",
    "id": 14,
    "name": "DIGITS",
    "by": "Emmanuel",
    "url": "https://digits-game.onrender.com/",
    "description": "Digits is a first person shooter game where you Eliminate opponents by typing in the 4 digits number on their forehead.",
    "cover": "/indie/14.webp",
    "created": "2026-10-21T19:48:01.447268Z",
    "plays": 3,
    "categories": [
      "Shooting and action",
      "Maths and numbers"
    ]
  },
  {
    "slug": "13-unwritten-empires",
    "id": 13,
    "name": "Unwritten Empires",
    "by": "Hammed",
    "url": "https://play.unwrittenempires.com/",
    "description": "Unwritten Empires is a browser strategy game inspired by Nigeria’s cultures, history and landscapes. Choose your settlement and grow it into a thriving empire. Gather resources, develop your capital, train armies, and lead legendary heroes as you explore regional campaigns, defend your people, and challenge rival kingdoms. Build your empire, shape its future, and write your own story.",
    "cover": "/indie/13.webp",
    "created": "2026-10-21T19:45:23.259243Z",
    "plays": 2,
    "categories": [
      "Tower defence and strategy",
      "Simulation and management",
      "Nigerian themed",
      "African themed"
    ]
  },
  {
    "slug": "12-wordkrush",
    "id": 12,
    "name": "WordKrush",
    "by": "Boris",
    "url": "https://wordkrush.com",
    "description": "Think you’re smart? Prove it. 🧠 Play WordKrush",
    "cover": "/indie/12.webp",
    "created": "2026-10-21T19:18:42.791802Z",
    "plays": 2,
    "categories": [
      "Brainy games",
      "Words and reading"
    ]
  },
  {
    "slug": "11-dantokpa-dash",
    "id": 11,
    "name": "Dantokpa Dash",
    "by": "Happy",
    "url": "https://dash.heyhappystudio.com/",
    "description": "Dantokpa Dash is an endless runner set in the real streets of Cotonou, Benin, built by HeyHappy Studio, a small from Cotonou.\n\nYou are a mèbotô, a market porter. Tantie Houéfa trusts you with her goods: carry the basin on your head through Dantokpa, the biggest open-air market in West Africa, and deliver every parcel to her customers before the rain comes.\n\n- Swipe left and right to change lanes, up to jump, down to slide.\n- Keep your balance: the more parcels you carry, the harder it gets.\n- Hop on a zem (motorbike taxi) or a taxi to go faster.\n- Real districts of Cotonou: Dantokpa, Akpakpa,",
    "cover": "/indie/11.webp",
    "created": "2026-10-21T18:58:23.536112Z",
    "plays": 5,
    "categories": [
      "Endless runners",
      "African themed",
      "Markets and street life"
    ]
  },
  {
    "slug": "10-village-people",
    "id": 10,
    "name": "Village People",
    "by": "Leslie",
    "url": "https://villagepeople.xyz",
    "description": "Village People is a social game where you actively plan for the down-fall of all your neighbors as you rise to the top. You can play it on desktop or mobile.",
    "cover": "/indie/10.webp",
    "created": "2026-10-21T18:40:25.563013Z",
    "plays": 11,
    "categories": [
      "Tower defence and strategy",
      "With friends"
    ]
  },
  {
    "slug": "9-gbasgbos",
    "id": 9,
    "name": "Gbasgbos",
    "by": "Salem",
    "url": "https://gbasgbos.app",
    "description": "Swap your launch ball for a polished chrome one that catches the light as it flies across Lagos, Abuja and Port Harcourt. It's a cosmetic look only: every ball has the same weight, speed and bounce, so scores and matches stay fair. Bought once, it's yours for good and you can pick it any time from the ball picker.",
    "cover": "/indie/9.webp",
    "created": "2026-10-21T17:12:57.565812Z",
    "plays": 6,
    "categories": [
      "Nigerian themed",
      "Lagos"
    ]
  },
  {
    "slug": "8-owo-count",
    "id": 8,
    "name": "Owo Count",
    "by": "Sunkanmi",
    "url": "https://owo-count.naijabukana.com/",
    "description": "Owo Count is a free, funny Naija game about counting money. Work Oga Tunde’s POS stand in Yaba: swipe real notes up, fakes down, and whack thieves before they snatch your cash. The total is hidden, so count it yourself and nail the exact figure for a bonus. Earn a daily salary plus 5% of all you count, and serve well so the Oga promotes you up to 10%. Grow your float from single notes to Ghana Must Go bags, survive Ogbomoso night shifts and NEPA blackouts, and stack up for an okada, a danfo, a Lekki mansion and a private jet.",
    "cover": "/indie/8.webp",
    "created": "2026-10-21T17:05:38.799408Z",
    "plays": 7,
    "categories": [
      "Simulation and management",
      "Nigerian themed",
      "Lagos",
      "Money and careers"
    ]
  },
  {
    "slug": "7-one-nation-under-me",
    "id": 7,
    "name": "One Nation, Under, ME.",
    "by": "Dominic VII",
    "url": "https://dominicvii.github.io/the-long-session/?v=20261018ah",
    "description": "A first-person political life sim that runs in your browser. You're one member of a legislature in an invented republic, and the only thing you accumulate is what other people think of you. Draft and push bills, sit in on hearings, answer your mail, keep your donors happy, handle casework, deal with the clergy and the courts, and if you last long enough, govern your home state. Every sitting day leaves a record. Free, no install.",
    "cover": "/indie/7.webp",
    "created": "2026-10-21T16:30:47.717806Z",
    "plays": 9,
    "categories": [
      "Brainy games",
      "Simulation and management"
    ]
  },
  {
    "slug": "6-cargobolt",
    "id": 6,
    "name": "CargoBolt",
    "by": "Dolapo",
    "url": "https://cargobolt.online/",
    "description": "CargoBolt is a free-to-play motorcycle combat game set on the streets of Lagos.\n\nTake on high-stakes delivery contracts, fight rival motorcycle gangs, dodge traffic, and earn millions in virtual cash. Upgrade your bikes, equip powerful weapons, and build your courier fortune.\n\nChoose a contract, survive the chase, and deliver your cargo.\n\nNo download. No installation. Just play in your browser.\n\nRIDE. FIGHT. DELIVER.",
    "cover": "/indie/6.webp",
    "created": "2026-10-21T16:21:07.571754Z",
    "plays": 6,
    "categories": [
      "Racing and driving",
      "Shooting and action",
      "Nigerian themed",
      "Lagos"
    ]
  },
  {
    "slug": "5-tesla-skyrun",
    "id": 5,
    "name": "Tesla SkyRun",
    "by": "Favour",
    "url": "https://start.ng/approve/4HKzH5-JDOpFQdg0",
    "description": "it is about the tesla flying roadster made by elon musk but just in a normal way and is not something hard",
    "cover": "/indie/5.webp",
    "created": "2026-10-20T12:34:44.153014Z",
    "plays": 18,
    "categories": []
  },
  {
    "slug": "4-star-runner",
    "id": 4,
    "name": "Star Runner",
    "by": "Precious",
    "url": "https://startng-threejs-game.vercel.app/",
    "description": "a 3D endless runner set on a neon-lit Lagos bridge at night. Steer your hover-boarding rider across 11km of traffic, dodge cones, barriers and danfo buses, leap over obstacles, grab stars to charge your boost, and chase combos, missions and leaderboard glory. Your StartNG login becomes your rider — username floating overhead, portal theme colours live on your suit.",
    "cover": "/indie/4.webp",
    "created": "2026-10-19T19:53:25.777066Z",
    "plays": 5,
    "categories": [
      "Endless runners",
      "Nigerian themed",
      "Lagos",
      "Neon and cyberpunk",
      "3D games"
    ]
  },
  {
    "slug": "2-wahala",
    "id": 2,
    "name": "Wahala",
    "by": "Stig Labs",
    "url": "https://wahala-play.stiglabs.net",
    "description": "Lagos keke party games for your phone.\n\nDrive your route, catch the corrupt VIO, settle the agbero at the bus stop and race round Third Mainland. Four games on one Lagos street, from day into night. Play alone right now or open a park and play with  upto 10 of your people.",
    "cover": "/indie/2.webp",
    "created": "2026-10-19T16:47:13.344817Z",
    "plays": 5,
    "categories": [
      "Racing and driving",
      "Nigerian themed",
      "Lagos"
    ]
  }
];
