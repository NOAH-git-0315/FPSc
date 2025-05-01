export interface Playtime {
  start: string;
  end: string;
}

export interface Game {
  title: string;
  rank: string;
}

export type Cardcolor = 'black' | 'sakura';

//ここから下
export interface UserInfo {
  icon: string;
  name: string;
  id: string;
  games: Game[];
  playtime1: Playtime;
  playtime2: Playtime;
  playstyle: string;
  introduction: string;
}

export interface Option {
  showGender: boolean;
  showAge: boolean;
  showGenderToSameSex: boolean;
  showProfile: boolean;
}

export interface CardOption {
  color: Cardcolor;
  motion: null;
}
export interface UserCard {
  userInfo: UserInfo;
  option: Option;
  cardOption: CardOption;
}

//あとでもっと厳密にする
//fs通貨を採用して、プロフィールを買えるようにしたい

//option
