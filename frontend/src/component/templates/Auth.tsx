'use client';
import { createContext, ReactNode, useEffect, useState } from 'react';
import { User } from '@/app/type';

type AuthContextType = {
  userCard: User;
  setUserCard: React.Dispatch<React.SetStateAction<User>>;
};

const initialUserCard: User = {
  userAuth: {
    id: null,
    name: 'no_id',
    avatar: null,
    globalName: 'no_name',
  },
  userInfo: {
    games: [],
    playtime1: ['', ''],
    playtime2: ['', ''],
    playstyle: [],
    introduction: '未設定',
  },
  option: {
    showGender: true,
    showAge: true,
    showGenderToSameSex: true,
    showProfile: true,
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
            games: [],
            playtime1: ['', ''],
            playtime2: ['', ''],
            playstyle: [],
            introduction:
              '自分が管理者です！皆さん一緒に仲良くプレイしましょう！',
          },
          option: {
            showGender: true,
            showAge: true,
            showGenderToSameSex: true,
            showProfile: true,
          },
          cardOption: {
            color: 'black',
            motion: null,
          },
        };

        setUserCard(card);
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
