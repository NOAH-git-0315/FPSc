'use client';
import { createContext, ReactNode, useEffect, useState } from 'react';
import { User } from '@/app/type';

type AuthContextType = {
  userCard: User;
  setUserCard: React.Dispatch<React.SetStateAction<User>>;
  loading: boolean;
};

export const initialUserCard: User = {
  id: null,
  name: 'no_id',
  avatar: null,
  globalName: 'no_name',
  userInfo: {
    games: [],
    playtime1: [],
    playtime2: [],
    playstyle: [],
    introduction: 'こんにちは、はじめまして',
    lastLoginAt: null,
  },
  userOption: {
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
  loading: true,
});

export default function AuthProvider({ children }: { children: ReactNode }) {
  const [userCard, setUserCard] = useState<User>(initialUserCard);
  const [loading, setLoading] = useState(true);
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch(`${apiUrl}/api/check`, {
          method: 'GET',
          credentials: 'include',
        });
        if (res.status === 204) {
          setUserCard(initialUserCard);
          return;
        }
        if (res.status === 401) {
          setUserCard(initialUserCard);
          return;
        }
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await res.json();
        const card: User = {
          id: data.id,
          name: data.name,
          avatar: data.avatar,
          globalName: data.globalName,
          userInfo: {
            games: data.userInfo.games,
            playtime1: data.userInfo.playtime1,
            playtime2: data.userInfo.playtime2,
            playstyle: data.userInfo.playstyle,
            introduction: data.userInfo.introduction,
            lastLoginAt: data.userInfo.lastLoginAt,
          },
          userOption: {
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
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ userCard, setUserCard, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext };
