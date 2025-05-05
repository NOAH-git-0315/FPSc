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
export interface UserAuth {
  id: string; //不同一の番号
  name: string; //noah_ow
  avatar: string; //avatarNumber
  globalName: string; //ノア
}
export interface UserInfo {
  icon: string;
  games: Game[];
  playtime1: Playtime;
  playtime2: Playtime;
  playstyle: String[];
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
  userAuth: UserAuth;
  userInfo: UserInfo;
  option: Option;
  cardOption: CardOption;
}

//あとでもっと厳密にする
//fs通貨を採用して、プロフィールを買えるようにしたい

//option
