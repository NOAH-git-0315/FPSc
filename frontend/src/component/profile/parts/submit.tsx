import { Button, Snackbar } from '@mui/material';
import { useContext, useState } from 'react';
import { AuthContext } from '@/component/Context/Auth';
import { validationAndPost } from '@/lib/validation';

export default function Submit() {
  const context = useContext(AuthContext);
  const { userCard: state } = context;
  const PostData = {
    userInfo: state.userInfo,
    option: state.userOption,
    cardOption: state.cardOption,
  };

  const [Message, setMessage] = useState<string | null>(null);

  return (
    <>
      <Button
        onClick={async () => {
          const result = await validationAndPost(PostData);
          if (!result.success) {
            setMessage(result.message || '不明なエラー');
          } else if (result.success) {
            setMessage(result.message || 'プロフィールを更新しました');
          }
        }}
        variant="contained"
      >
        プロフィールを更新
      </Button>

      {Message && (
        <Snackbar
          open={true}
          message={Message}
          autoHideDuration={6000}
          onClose={() => setMessage(null)}
        />
      )}
    </>
  );
}
