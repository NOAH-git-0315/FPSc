'use client';
import { DiscordProfileCard } from '@/component/profcard';
import { Box } from '@mui/material';
import PageNoball from '@/component/main/pageNoBall';
import SearchHUD from '@/component/Search/SearchHUD';
import { useContext, useEffect, useRef, useState } from 'react';
import { FriendsContext } from '@/component/Context/FriendsProvider';

export default function UserList() {
  const cardRef = useRef<(HTMLDivElement | null)[]>([]);
  const [UsersLastLogin, setLastLogin] = useState<(string | undefined)[]>([]);
  const [heightsPerRow, setHeightsPerRow] = useState<number[]>([]);
  const cardsPerRow = 3;
  const context = useContext(FriendsContext);

  if (!context) return <div>Loading...</div>;

  //prettier-ignore
  const {users,totalPages,error,page,setPage} = context;

  useEffect(() => {
    if (users.length === 0) return;

    const newHeightsPerRow: number[] = [];

    for (let i = 0; i < users.length; i++) {
      const cardHeight = cardRef.current[i]?.clientHeight;
      const rowIndex = Math.floor(i / cardsPerRow);
      if (cardHeight == undefined) {
        continue;
      }
      if (
        newHeightsPerRow[rowIndex] == null ||
        newHeightsPerRow[rowIndex] < cardHeight
      ) {
        newHeightsPerRow[rowIndex] = cardHeight;
      }
    }
    setHeightsPerRow(newHeightsPerRow);

    const diffTimes = [];
    const now = new Date();

    for (let i = 0; i < users.length; i++) {
      const target = users[i].userInfo.lastLoginAt;
      if (target !== null) {
        const targetMil = new Date(`${target}Z`);
        const diffMs = now.getTime() - targetMil.getTime();
        const diffMinutes = Math.floor(diffMs / (1000 * 60));
        const diffHours = Math.floor(diffMinutes / 60);
        const diffDays = Math.floor(diffHours / 24);
        const diffWeeks = Math.floor(diffDays / 7);
        const diffMonths = Math.floor(diffDays / 30);
        const diffYears = Math.floor(diffDays / 365);
        if (diffYears !== 0) {
          diffTimes.push(`${diffYears}年前`);
        } else if (diffMonths !== 0) {
          diffTimes.push(`${diffMonths}ヶ月前`);
        } else if (diffWeeks !== 0) {
          diffTimes.push(`${diffWeeks}週間前`);
        } else if (diffDays !== 0) {
          diffTimes.push(`${diffDays}日前`);
        } else if (diffHours !== 0) {
          diffTimes.push(`${diffHours}時間前`);
        } else if (diffMinutes !== 0) {
          diffTimes.push(`${diffMinutes}分前`);
        } else if (diffMs !== 0) {
          diffTimes.push(`たった今`);
        } else {
          diffTimes.push(undefined);
        }
      }
    }
    setLastLogin(diffTimes);
  }, [users]);

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
          const rowIndex = Math.floor(i / cardsPerRow);
          return (
            <Box
              key={user.id}
              ref={(el) => {
                cardRef.current[i] = el as HTMLDivElement | null;
              }}
              sx={{
                width: '103%',
                minHeight: heightsPerRow[rowIndex] ?? 'auto',
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
