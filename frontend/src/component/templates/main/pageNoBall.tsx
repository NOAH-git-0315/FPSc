import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import { Box } from '@mui/material';

interface PropsType {
  page: number;
  totalPages: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

export default function CenteredPagination({
  page,
  totalPages,
  setPage,
}: PropsType) {
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <Box
      sx={{
        width: '100%',
        py: 4,
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          maxWidth: 500,
          width: '100%',
          '& ul': {
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'nowrap',
            marginBottom: '10px',
          },
        }}
      >
        <Pagination
          count={totalPages}
          size="large"
          onChange={handleChange}
          page={page}
        />
      </Box>
    </Box>
  );
}
