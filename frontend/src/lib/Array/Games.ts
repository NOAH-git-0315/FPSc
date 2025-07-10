export const Games = [
  'Apex Legends',
  'Battlefield 2042',
  'Call of Duty: MWII',
  'Call of Duty: Wz',
  'Counter-Strike 2',
  'Destiny 2',
  'Escape from Tarkov',
  'Halo Infinite',
  'Overwatch 2',
  'Paladins',
  'PUBG: Battlegrounds',
  'Rainbow Six Siege',
  'VALORANT',
] as const;

export type GameType = (typeof Games)[number];
