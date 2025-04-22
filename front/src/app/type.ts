export interface Playtime {
  start: string;
  end: string;
}

export interface Game {
  title: string;
  rank: string;
}

export type Cardcolor = 'black' | 'sakura';

export interface UserCard {
  icon: string;
  name: string;
  id: string;
  games: Game[];
  playtime1: Playtime;
  playtime2: Playtime;
  playstyle: string;
  introduction: string;
  color: string;
}

//あとでもっと厳密にする
//fs通貨を採用して、プロフィールを買えるようにしたい
