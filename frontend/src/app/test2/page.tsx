'use client';
import { useContext } from 'react';
import { AuthContext } from '@/component/Auth';

export default function Test2() {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div className="flex items-center justify-center h-screen">
      {user ? <p>{user.name}</p> : <p>Loading...</p>}
    </div>
  );
}
