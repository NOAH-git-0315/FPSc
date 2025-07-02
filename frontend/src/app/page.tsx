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
  const [heightsPerRow, setHeightsPerRow] = useState<number[]>([]);
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
    setHeightsPerRow(newHeightsPerRow);
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
          const height = heightsPerRow[rowIndex] || 'auto';

          return (
            <Box
              key={user.id}
              ref={(el) => {
                cardRef.current[i] = el as HTMLDivElement | null;
              }}
              sx={{
                height: height ? `${height}px` : 'auto',
                width: '100%',
              }}
            >
              <DiscordProfileCard user={user} height={height as number} />
            </Box>
          );
        })}
      </Box>
      <PageNoball page={page} setPage={setPage} totalPages={totalPages} />
      <SearchHUD />
    </Box>
  );
}
