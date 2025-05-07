import { Button, Snackbar } from '@mui/material';
import { useContext, useState } from 'react';
import { AuthContext } from '@/component/templates/Auth';

export default function Submit() {
  const context = useContext(AuthContext);
  const { userCard: state } = context;
  const UserInfo = state.userInfo;
  const UserOption = state.option;
  const CardOption = state.cardOption;

  // エラーメッセージを保存するための状態
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async () => {
    console.log(UserInfo);
    console.log(UserOption);
    console.log(CardOption);

    try {
      const response = await fetch('http://localhost:8080/profile/update', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userInfo: {
            games:[{title:"オーバーウォッチ",rank:"ダイヤ"},{title:"ぱっかすれじぇんず",rank:"ひっかからないな～"}],
            playtime1: ["10:00", "10:30", "11:00"],
            playtime2: ["12:00", "12:30"],
            playStyle: ["Casual", "Aggressive"]
          },
          userOption: UserOption,
          cardOption: CardOption,
        }),
        credentials: 'include'
      });

      // レスポンスが正しいかどうかをチェック
      const text = await response.text(); // まずはレスポンスをテキストとして取得
      console.log('レスポンスの内容:', text); // レスポンスの内容をログに出力

      if (!response.ok) {
        const errorData = JSON.parse(text); // テキストをJSONにパース
        throw new Error(errorData.message || '送信に失敗しました');
      }

      const result = JSON.parse(text); // レスポンスをJSONにパース
      console.log('送信成功:', result);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage('予期しないエラーが発生しました');
      }
    }
  };

  return (
    <>
      <Button onClick={handleSubmit} variant="contained" sx={{ marginTop: 2 }}>
        送信
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



//