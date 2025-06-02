'use client';
import DiscordProfileCard from '@/component/Other/profcard';
import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { UserInfo, Option } from './type';
import PageNoball from '@/component/Section/main/pageNoBall';

interface User {
  id: string;
  avatar: string;
  name: string;
  globalName: string;
  userInfo: UserInfo;
  userOption: Option;
}

export default function UserList() {
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
    <Box sx={{ marginTop: 15 }}>
      <PageNoball page={page} setPage={setPage} totalPages={totalPages} />
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          justifyItems: 'center',
          gap: 5,
          padding: 2,
          maxWidth: 1200,
          margin: '0 auto',
        }}
      >
        {users.map((user) => (
          <DiscordProfileCard
            key={`${page}-${user.id}`}
            userAuth={{
              id: user.id,
              avatar: user.avatar,
              name: user.name,
              globalName: user.globalName,
            }}
            userInfo={user.userInfo}
            option={user.userOption}
            cardOption={{
              color: 'black',
              motion: null,
            }}
          />
        ))}
        {error && <div className="text-red-500">{error}</div>}
      </Box>
      <PageNoball page={page} setPage={setPage} totalPages={totalPages} />
    </Box>
  );
}
