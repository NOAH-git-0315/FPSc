'use client';
import { createContext, ReactNode, useEffect, useState } from 'react';

type User = {
  id: string;
  name: string;
  avatar: string;
  globalName: string | null;
};

type AuthContextType = {
  user: User | null;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
});

export default function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    const checkAuth = async () => {
      const res = await fetch('http://localhost:8080/check', {
        method: 'GET',
        credentials: 'include',
      });
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await res.json();
      setUser(data);
    };
    checkAuth();
  }, []);
  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
}

export { AuthContext };
