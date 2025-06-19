'use client';

import { User } from '@/app/type';
import { createContext, ReactNode, useEffect, useState } from 'react';

interface Props {
  children: ReactNode;
}

interface FriendsContextType {
  users: User[];
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
  totalPages: number;
  setTotalPages: React.Dispatch<React.SetStateAction<number>>;
  error: string | null;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

export const FriendsContext = createContext<FriendsContextType | null>(null);

export default function FriendsProvider({ children }: Props) {
  const [users, setUsers] = useState<User[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${apiUrl}/api/Home?page=${page - 1}&size=15`, {
          method: 'GET',
          credentials: 'include',
        });

        if (!res.ok) {
          const errorData = await res.text();
          setError(errorData);
          return;
        }

        const json = await res.json();
        setUsers(json.content);
        setTotalPages(json.totalPages);
      } catch (error) {
        setError('Error fetching data: ' + error);
      }
    };

    fetchData();
  }, [page]);

  return (
    <FriendsContext.Provider
      value={{
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
