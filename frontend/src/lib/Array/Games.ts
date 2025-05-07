export const Games = [
  'Apex Legends',
  'Battlefield 2042',
  'Call of Duty: Modern Warfare II',
  'Call of Duty: Warzone',
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

type GameType = (typeof Games)[number];

export function getGameIndexes(selectedGames: GameType[]) {
  return selectedGames.map((game: GameType) => Games.indexOf(game));
}
