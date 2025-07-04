'use client';
import DiscordProfileCard from '@/component/profcard';
import { Box } from '@mui/material';
import PageNoball from '@/component/main/pageNoBall';
import SearchHUD from '@/component/Search/SearchHUD';
import { useContext, useEffect, useRef, useState } from 'react';
import FriendsProvider, {
  FriendsContext,
} from '@/component/Context/FriendsProvider';

export default function UserList() {
  const cardRef = useRef<(HTMLDivElement | null)[]>([]);
  const [UsersLastLogin, setLastLogin] = useState<(string | undefined)[]>([]);
  const cardsPerRow = 3;
  const context = useContext(FriendsContext);

  if (!context) return <div>Loading...</div>;

  //prettier-ignore
  const {users,totalPages,error,page,setPage} = context;

  useEffect(() => {
    if (users.length === 0) return;

    const newHeightsPerRow: number[] = [];

    for (let i = 0; i < users.length; i += cardsPerRow) {
      const group = cardRef.current.slice(i, i + cardsPerRow);
      const groupHeights = group.map((el) => (el ? el.clientHeight : 0));
      const maxHeight = Math.max(...groupHeights);
      newHeightsPerRow.push(maxHeight);
    }

    const diffTimes = [];
    const now = new Date();

    for (let i = 0; i < users.length; i++) {
      const target = users[i].userInfo.lastLoginAt;
      if (target !== null) {
        const targetMil = new Date(`${target}Z`);
        const diffMs = now.getTime() - targetMil.getTime();
        const diffMinutes = Math.floor(diffMs / (1000 * 60));
        const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
        if (diffHours == 0) {
          diffTimes.push(`${diffMinutes}分前`);
        } else {
          diffTimes.push(`${diffHours}時間前`);
        }
      } else {
        diffTimes.push(undefined);
      }
    }
    setLastLogin(diffTimes);
  }, [users]);

  console.log(users);
  console.log(UsersLastLogin);

  return (
    <Box sx={{ marginTop: 15 }}>
      <PageNoball page={page} setPage={setPage} totalPages={totalPages} />
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: `repeat(${cardsPerRow}, 1fr)`,
          justifyItems: 'center',
          rowGap: 12,
          padding: 2,
          maxWidth: 1200,
          margin: '0 auto',
        }}
      >
        {users.map((user, i) => {
          return (
            <Box
              key={user.id}
              ref={(el) => {
                cardRef.current[i] = el as HTMLDivElement | null;
              }}
              sx={{
                width: '100%',
              }}
            >
              <DiscordProfileCard user={user} lastLoginAt={UsersLastLogin[i]} />
            </Box>
          );
        })}
      </Box>
      <PageNoball page={page} setPage={setPage} totalPages={totalPages} />
      <SearchHUD />
    </Box>
  );
}
