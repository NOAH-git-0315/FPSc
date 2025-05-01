'use client';
import { useContext } from 'react';
import { AuthContext } from '@/component/Auth';

export default function Test2() {
  const { user } = useContext(AuthContext);
  return (
    <div className="flex items-center justify-center h-screen">
      <p>{user}</p>
    </div>
  );
}
