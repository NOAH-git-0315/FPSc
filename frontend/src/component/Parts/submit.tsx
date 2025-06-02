import { Button, Snackbar } from '@mui/material';
import { useContext, useState } from 'react';
import { AuthContext } from '@/component/Other/Auth';
import { validationAndPost } from '@/lib/validation';

export default function Submit() {
  const context = useContext(AuthContext);
  const { userCard: state } = context;
  const PostData = {
    userInfo: state.userInfo,
    option: state.option,
    cardOption: state.cardOption,
  };

  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  return (
    <>
      <Button
        onClick={async () => {
          const result = await validationAndPost(PostData);
          if (!result.success) {
            setErrorMessage(result.message || '不明なエラー');
          }
        }}
        variant="contained"
      >
        プロフィールを更新
      </Button>

      {errorMessage && (
        <Snackbar
          open={true}
          message={errorMessage}
          autoHideDuration={6000}
          onClose={() => setErrorMessage(null)}
        />
      )}
    </>
  );
}
