'use client';
import DiscordProfileCard from '@/component/profcard';
import { Box } from '@mui/material';
import PageNoball from '@/component/Section/main/pageNoBall';
import SearchHUD from '@/component/Section/Search/SearchHUD';
import { useContext } from 'react';
import FriendsProvider, {
  FriendsContext,
} from '@/component/Context/FriendsProvider';

export default function UserList() {
  const context = useContext(FriendsContext);

  if (!context) return <div>Loading...</div>;

  //prettier-ignore
  const {users,totalPages,error,page,setPage} = context;
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
          <DiscordProfileCard key={user.name} {...user} />
        ))}
        {error && <div className="text-red-500">{error}</div>}
      </Box>
      <PageNoball page={page} setPage={setPage} totalPages={totalPages} />
      <SearchHUD />
    </Box>
  );
}
