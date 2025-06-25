'use client';

import { User } from '@/app/type';
import { createContext, ReactNode, useEffect, useState } from 'react';
import { SearchType } from '../Section/Search/SearchHUD';
import FriendSearchAPI from '@/lib/FriendSearchAPI';
import { set } from 'zod';

interface Props {
  children: ReactNode;
}

interface FriendsContextType {
  Search: SearchType;
  setSearch: React.Dispatch<React.SetStateAction<SearchType>>;
  users: User[];
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
  totalPages: number;
  setTotalPages: React.Dispatch<React.SetStateAction<number>>;
  error: string | null;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const initialSearch: SearchType = {
  game: [],
  rank: [],
  playstyle: [],
  playtime: [0, 48],
};
const initialUsers: User[] = [];
const initialPage = 1;
const initialTotalPages = 1;
const initialError: string | null = null;

export const FriendsContext = createContext<FriendsContextType>({
  Search: initialSearch,
  setSearch: () => {},
  users: initialUsers,
  setUsers: () => {},
  totalPages: initialTotalPages,
  setTotalPages: () => {},
  error: initialError,
  setError: () => {},
  page: initialPage,
  setPage: () => {},
});

export default function FriendsProvider({ children }: Props) {
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [Search, setSearch] = useState<SearchType>(initialSearch);
  const [totalPages, setTotalPages] = useState(initialTotalPages);
  const [error, setError] = useState(initialError);
  const [page, setPage] = useState(initialPage);
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await FriendSearchAPI(Search, page);
      setUsers(res.content);
      setTotalPages(res.totalPages);
      setError(res.error || null);
    };

    fetchUsers();
  }, [page]);
  //依存配列にuserは使ったらだめ!

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await FriendSearchAPI(Search, 1);
      setUsers(res.content);
      setTotalPages(res.totalPages);
      setError(res.error || null);
      setPage(1);
    };
    console.log(Search);
    fetchUsers();
  }, [Search]);

  return (
    <FriendsContext.Provider
      value={{
        Search,
        setSearch,
        users,
        setUsers,
        totalPages,
        setTotalPages,
        error,
        setError,
        page,
        setPage,
      }}
    >
      {children}
    </FriendsContext.Provider>
  );
}
