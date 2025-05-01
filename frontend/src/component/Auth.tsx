'use client';
import { createContext, ReactNode, useEffect, useState } from 'react';

type AuthContextTYpe = {
  user: string | null;
};

const AuthContext = createContext<AuthContextTYpe>({ user: null });

export default function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<string | null>(null);
  useEffect(() => {
    const checkAuth = async () => {
      const res = await fetch('http://localhost:8080/check', {
        method: 'GET',
        credentials: 'include',
      });
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }

      const text = await res.text();
      setUser(text);
    };
    checkAuth();
  }, []);
  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
}

export { AuthContext };
