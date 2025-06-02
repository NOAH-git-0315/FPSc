'use client';
import { createContext, ReactNode, useEffect, useState } from 'react';
import { User } from '@/app/type';

type AuthContextType = {
  userCard: User;
  setUserCard: React.Dispatch<React.SetStateAction<User>>;
};

export const initialUserCard: User = {
  userAuth: {
    id: null,
    name: 'no_id',
    avatar: null,
    globalName: 'no_name',
  },
  userInfo: {
    games: [],
    playtime1: [],
    playtime2: [],
    playstyle: [],
    introduction: 'こんにちは、はじめまして',
  },
  option: {
    showGender: false,
    showAge: false,
    showGenderToSameSex: false,
    showProfile: false,
  },
  cardOption: {
    color: 'black',
    motion: null,
  },
};

const AuthContext = createContext<AuthContextType>({
  userCard: initialUserCard,
  setUserCard: () => {},
});

export default function AuthProvider({ children }: { children: ReactNode }) {
  const [userCard, setUserCard] = useState<User>(initialUserCard);
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch(`${apiUrl}/api/check`, {
          method: 'GET',
          credentials: 'include',
        });
        if (!res.ok) throw new Error('Network response was not ok');

        const data = await res.json();

        const card: User = {
          userAuth: {
            id: data.id,
            name: data.name,
            avatar: data.avatar,
            globalName: data.globalName,
          },
          userInfo: {
            games: data.userInfo.games,
            playtime1: data.userInfo.playtime1,
            playtime2: data.userInfo.playtime2,
            playstyle: data.userInfo.playstyle,
            introduction: data.userInfo.introduction,
          },
          option: {
            showGender: data.userOption.showGender,
            showAge: data.userOption.showAge,
            showGenderToSameSex: data.userOption.showGenderToSameSex,
            showProfile: data.userOption.showProfile,
          },
          cardOption: {
            color: data.cardOption.color || 'black',
            motion: data.cardOption.motion || null,
          },
        };

        setUserCard(card);
        console.log('認証成功:', data);
      } catch (e) {
        console.error('認証エラー:', e);
      }
    };

    checkAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ userCard, setUserCard }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext };
