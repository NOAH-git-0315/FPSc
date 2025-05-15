import { Button, Snackbar } from '@mui/material';
import { useContext, useState } from 'react';
import { AuthContext } from '@/component/templates/Auth';
import dayjs from 'dayjs';
import { userInfo } from 'os';
import SetIntroduction from './setintroduction';

export default function Submit() {
  const context = useContext(AuthContext);
  const { userCard: state } = context;
  const UserInfo = state.userInfo;
  const UserOption = state.option;
  const CardOption = state.cardOption;

  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async () => {
    console.log(UserInfo);
    console.log(UserOption);
    console.log(CardOption);

    try {
      function generateIntervals(playtime: string[]) {
        const startStr = playtime[0];
        const endStr = playtime[playtime.length - 1];
        let current = dayjs(`2020-01-01T${startStr}`);
        let end = dayjs(`2020-01-01T${endStr}`);

        if (endStr === '24:00') {
          end = dayjs(`2020-01-02T00:00`);
        }

        const result = [];

        while (current.isBefore(end) || current.isSame(end)) {
          result.push(current.format('HH:mm'));
          current = current.add(30, 'minute');
        }

        return result;
      }

      const response = await fetch('http://localhost:8080/profile/update', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userInfo: {
            games: UserInfo.games,
            playtime1: generateIntervals(UserInfo.playtime1),
            playtime2: generateIntervals(UserInfo.playtime2),
            playstyle: UserInfo.playstyle,
            introduction: UserInfo.introduction,
          },
          userOption: UserOption,
          cardOption: CardOption,
        }),
        credentials: 'include',
      });

      const text = await response.text();

      if (!response.ok) {
        const errorData = JSON.parse(text);
        throw new Error(errorData.message || '送信に失敗しました');
      }

      const result = JSON.parse(text);
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
