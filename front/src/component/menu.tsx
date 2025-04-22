import {
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  SxProps,
  Theme,
  TextField,
} from '@mui/material';

const sxList: SxProps<Theme> = {
  position: 'absolute',
  display: 'flex',
  color: 'black',
  right: '130px',
  top: '20px',
};

const sxSearch: SxProps<Theme> = {
  width: '13em',
  '& .MuiInputBase-root': {
    height: 28,
    borderRadius: '1rem',
    fontSize: '0.8rem',
    backgroundColor: 'white',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    transition: 'all 0.3s ease',
    '&:hover': {
      boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
    },
  },
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: '#ccc',
    borderRadius: '1rem',
  },
  '& .MuiInputLabel-root': {
    fontSize: '0.75rem',
  },
};

const sxListItemButton: SxProps<Theme> = {
  textShadow: '0 4px 12px rgba(0,0,0,0.2)',
  color: 'black',
  textDecoration: 'none',
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  '&.MuiButtonBase-root': {
    padding: '10px 20px',
  },
};

const menu = [
  { title: 'friend', url: '/' },
  { title: 'server', url: '/server' },
  { title: 'profile', url: '/profile' },
  { title: 'filters', url: '/filters' },
];

export default function Menu() {
  return (
    <List sx={sxList}>
      {menu.map((item, index) => (
        <ListItem disablePadding key={index} sx={{ textDecoration: 'none' }}>
          <a href={item.url} style={{ textDecoration: 'none' }}>
            <ListItemButton sx={sxListItemButton}>
              <ListItemText
                primary={item.title}
                sx={{ textShadow: '0 4px 12px rgba(0,0,0,0.2)' }}
              />
            </ListItemButton>
          </a>
        </ListItem>
      ))}
      <ListItem>
        <TextField label="検索" size="small" sx={sxSearch} />
      </ListItem>
    </List>
  );
}
