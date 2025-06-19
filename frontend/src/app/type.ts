export interface GameInfo {
  title: string;
  rank: string;
}

export interface UserInfo {
  games: GameInfo[];
  playtime1: string[];
  playtime2: string[];
  introduction: string;
  lastLoginAt: string | null;
  playstyle: string[];
}

export interface UserOption {
  showGender: boolean;
  showAge: boolean;
  showGenderToSameSex: boolean;
  showProfile: boolean;
}

export interface CardOption {
  color: string;
  motion: string | null;
}

export interface User {
  id: string | null;
  name: string | null;
  avatar: string | null;
  globalName: string | null;
  userInfo: UserInfo;
  userOption: UserOption;
  cardOption: CardOption;
}
