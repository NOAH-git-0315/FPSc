'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Test2() {
  const [data, setData] = useState(null);
  const [error, setError] = useState<string | null>(null);
const router = useRouter();
const test = ()=>router.push("/");

  return (
    <div className="flex items-center justify-center h-screen">
      <button onClick={test}></button>
    </div>
  );
}
