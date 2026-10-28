export type Character = {
  body: 'female' | 'male';
  primaryColor: string;
  secondaryColor: string;
  skinColor: string;
  hairColor: string;
  hair: 'short' | 'afro' | 'braids' | 'bun' | 'ponytail' | 'dreads' | 'bald';
  hat: 'none' | 'cap' | 'beanie' | 'tophat' | 'crown';
  accessory: 'none' | 'glasses' | 'earrings' | 'beard' | 'scarf' | 'backpack';
};

export type User = {
  id: number;
  name: string;
  account: string;
  character: Character;
  joined: string;
};

export const DEFAULT_CHARACTER: Character = {
  body: 'female',
  primaryColor: '#a55eea',
  secondaryColor: '#0c6e5a',
  skinColor: '#8d5524',
  hairColor: '#17120f',
  hair: 'braids',
  hat: 'crown',
  accessory: 'earrings',
};

export const GUEST_CHARACTER: Character = {
  body: 'male',
  primaryColor: '#4b7bec',
  secondaryColor: '#2b2f4a',
  skinColor: '#c68642',
  hairColor: '#2d1b0e',
  hair: 'short',
  hat: 'none',
  accessory: 'none',
};

export const HAIR_OPTIONS: Character['hair'][] = ['short', 'afro', 'braids', 'bun', 'ponytail', 'dreads', 'bald'];
export const HAT_OPTIONS: Character['hat'][] = ['none', 'cap', 'beanie', 'tophat', 'crown'];
export const ACCESSORY_OPTIONS: Character['accessory'][] = ['none', 'glasses', 'earrings', 'beard', 'scarf', 'backpack'];

export const SKIN_COLORS = ['#f6d5b8', '#eab08a', '#c68642', '#a9633b', '#8d5524', '#6b3f24', '#4a2b17'];
export const CLOTH_COLORS = ['#a55eea', '#4b7bec', '#db2967', '#f5a640', '#2ec4b6', '#d8fd71', '#292a23', '#e8590c', '#2f7d32'];
export const HAIR_COLORS = ['#17120f', '#2d1b0e', '#5a3825', '#c2a17a', '#db2967', '#6f9bf0'];

export function randomCharacter(): Character {
  const pick = <T,>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];
  return {
    body: pick(['female', 'male'] as const),
    primaryColor: pick(CLOTH_COLORS),
    secondaryColor: pick(CLOTH_COLORS),
    skinColor: pick(SKIN_COLORS),
    hairColor: pick(HAIR_COLORS),
    hair: pick(HAIR_OPTIONS),
    hat: pick(HAT_OPTIONS),
    accessory: pick(ACCESSORY_OPTIONS),
  };
}

export function accountFromName(name: string): string {
  const base = name.trim().replace(/\s+/g, ' ').slice(0, 24);
  return base || 'Player';
}
