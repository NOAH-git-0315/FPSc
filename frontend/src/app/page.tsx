'use client';
import DiscordProfileCard from '@/component/templates/profcard';
import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { UserInfo } from './type';

interface User {
  id: string;
  avatar: string;
  name: string;
  globalName: string;
  userInfo: UserInfo;
}

export default function UserList() {
  const [users, setUsers] = useState<User[]>([]); // User型で指定
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('http://localhost:8080/Home', {
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
      } catch (error) {
        setError('Error fetching data: ' + error);
      }
    };

    fetchData();
  }, []);

  return (
    <Box sx={{ marginTop: 15 }}>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          justifyItems: 'center',
          gap: 5,
          padding: 2,
          maxWidth: 1200, // 最大幅を指定
          margin: '0 auto', // 左右中央寄せ
        }}
      >
        {users.map((user) => (
          <DiscordProfileCard
            key={user.id}
            userAuth={{
              id: user.id,
              avatar: user.avatar,
              name: user.name,
              globalName: user.globalName,
            }}
            userInfo={{
              games: user.userInfo.games,
              playtime1: ['10:00', '11:30'],
              playtime2: ['10:00', '11:30'],
              playstyle: ['ちゃんとうまくいってほしい', 'お願いだ！'],
              introduction: '私は天才だ',
            }}
            option={{
              showGender: true,
              showAge: true,
              showGenderToSameSex: true,
              showProfile: true,
            }}
            cardOption={{
              color: 'black',
              motion: null,
            }}
          />
        ))}
        {error && <div className="text-red-500">{error}</div>}
      </Box>
    </Box>
  );
}
