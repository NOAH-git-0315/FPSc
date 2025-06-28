'use client';

import LastLogin from '@/lib/LastLogin';
import { Button, Grid, SxProps, Theme, Tooltip } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const menuList = [
  { tag: 'フレンド', title: 'フレンドを探します', url: '/' },
  { tag: 'サーバー', title: 'サーバーを探します', url: '/server' },
  { tag: 'プロフィール', title: 'プロフィールを編集します', url: '/profile' },
] as const;

type MenuItem = (typeof menuList)[number];
type Url = MenuItem['url'];

const containerSX: SxProps<Theme> = {
  position: 'absolute',
  right: '7vw',
  top: '5vh',
};
const itemSX: SxProps<Theme> = {
  textShadow: '0 4px 12px rgba(0,0,0,0.2)',
  color: 'black',
  paddingX: 2,
  paddingY: 1,
  transition: 'background-color 0.3s ease',
  '&:hover': {
    backgroundColor: '#f0f0f0',
  },
};

export default function Menu() {
  const router = useRouter();
  const [bumped, setBumped] = useState<boolean>(false);

  const handleClick = async (item: Url) => {
    {
      router.push(item);
    }
  };

  const handlebump = () => {
    LastLogin();
    setBumped(true);
  };
  return (
    <Grid container sx={containerSX}>
      {menuList.map((menu) => (
        <Grid key={menu.tag}>
          <Tooltip title={menu.title} arrow>
            <Button sx={itemSX} onClick={() => handleClick(menu.url)}>
              {menu.tag}
            </Button>
          </Tooltip>
        </Grid>
      ))}
      <Grid>
        <Tooltip title={bumped ? '表示順を更新済' : '表示順を上げる'} arrow>
          <Button sx={itemSX} onClick={handlebump}>
            表示順アップ
          </Button>
        </Tooltip>
      </Grid>
    </Grid>
  );
}
