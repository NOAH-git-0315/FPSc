'use client';

import { User } from '@/app/type';
import { createContext, ReactNode, useEffect, useState } from 'react';

const FriendsContext = createContext(null);
const [users, setUsers] = useState<User[]>([]);
const [totalPages, setTotalPages] = useState(1);
const [error, setError] = useState<string | null>(null);
const [page, setPage] = useState(1);
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export default function FriendsProvider() {
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
        console.log(json);
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
      value={
        (users,
        setUsers,
        totalPages,
        setTotalPages,
        error,
        setError,
        page,
        setPage)
      }
    >
      {children}
    </FriendsContext.Provider>
  );
}
