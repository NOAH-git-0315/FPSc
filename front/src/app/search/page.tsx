'use client';
import { NextPage } from 'next';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button, Typography, Box } from '@mui/material';

interface SignUpFormData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const SignUpForm: NextPage = () => {
  const { control, handleSubmit, watch } = useForm<SignUpFormData>({
    defaultValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = (data: SignUpFormData) => {
    console.log('サインアップデータ:', data);
  };

  const password = watch('password');
  const confirmPassword = watch('confirmPassword');

  return (
    <Box
      sx={{
        maxWidth: 400,
        margin: 'auto',
        padding: 4,
        backgroundColor: '#f9f9f9',
        borderRadius: '10px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Typography
        variant="h4"
        sx={{ color: 'black', textAlign: 'center', mb: 4 }}
      >
        サインアップ
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* ユーザー名 */}
        <Controller
          name="username"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="ユーザー名"
              variant="outlined"
              fullWidth
              margin="normal"
              sx={{ backgroundColor: 'white' }}
            />
          )}
        />
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Eメール"
              variant="outlined"
              fullWidth
              margin="normal"
              sx={{ bgcolor: 'white' }}
            />
          )}
        />

        {/* パスワード */}
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              type="password"
              label="パスワード"
              variant="outlined"
              fullWidth
              margin="normal"
              sx={{ backgroundColor: 'white' }}
            />
          )}
        />

        {/* パスワード確認 */}
        <Controller
          name="confirmPassword"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              type="password"
              label="パスワード確認"
              variant="outlined"
              fullWidth
              margin="normal"
              sx={{ backgroundColor: 'white' }}
              error={password !== confirmPassword}
              helperText={
                password !== confirmPassword ? 'パスワードが一致しません' : ''
              }
            />
          )}
        />

        {/* 送信ボタン */}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
          disabled={password !== confirmPassword}
        >
          サインアップ
        </Button>
      </form>
    </Box>
  );
};

export default SignUpForm;

// 'use client';
// import { Box } from '@mui/material';

// export default function Search() {
//   return (
//     <Box
//       sx={{
//         position: 'relative',
//         width: '100vw',
//         height: '100vh',
//       }}
//     >
//       <Box
//         sx={{
//           position: 'absolute',
//           background: 'white',
//           height: '70vh',
//           border: '2px solid gray',
//           width: '60vw',
//           top: '20vh',
//           right: '20vw',
//         }}
//       ></Box>
//     </Box>
//   );
// }
