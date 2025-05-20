import { userInfo } from 'os';
export interface Game {
  title: string;
  rank: string;
}

export type Cardcolor = 'black' | 'sakura';

//ここから下
export interface UserAuth {
  id: string | null; //不同一の番号
  name: string | null; //noah_ow
  avatar: string | null; //avatarNumber
  globalName: string | null; //ノア
}
export interface UserInfo {
  games: Game[];
  playtime1: string[];
  playtime2: string[];
  playstyle: string[];
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
export interface User {
  userAuth: UserAuth;
  userInfo: UserInfo;
  option: Option;
  cardOption: CardOption;
}

export interface TimelsType {
  weekdayStart: null | string;
  weekdayEnd: null | string;
  holidayStart: null | string;
  holidayEnd: null | string;
}

export interface PostDataType {
  userInfo: UserInfo;
  option: Option;
  cardOption: CardOption;
}
//あとでもっと厳密にする
//fs通貨を採用して、プロフィールを買えるようにしたい

//option

//playtimeはstartからendまでの30分おきの時間を並べた配列
//playstyleは配列
//gamesはゲームIDと、ランクIDの組み合わせレコード
//いずれも、userテーブルと、中間テーブルだったもので構成する
