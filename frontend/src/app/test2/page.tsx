'use client';
import { useEffect, useState } from 'react';

export default function Test2() {
  const [data, setData] = useState(null);
  const [error, setError] = useState<string | null>(null); // エラーメッセージ用のステート

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:8080/Home", {
          method: "GET",
          credentials: "include",
        });

        if (!res.ok) {
          const errorData = await res.text(); // エラーメッセージをテキストとして取得
          setError(errorData); // エラーメッセージをステートに保存
          return;
        }

        const data = await res.json();
        setData(data); // 正常なレスポンスを保存
      } catch (error) {
        setError("Error fetching data: " + error); // 例外発生時のエラーメッセージ
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      {error ? (
        <div className="text-red-500">{error}</div> // エラーメッセージを表示
      ) : (
        data ? JSON.stringify(data) : "Loading..."
      )}
    </div>
  );
}
