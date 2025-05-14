import { useContext } from 'react';
import DiscordProfileCard from '../templates/profcard';
import { AuthContext } from '../templates/Auth';

interface TimeLs {
  weekday: string[];
  holiday: string[];
}

interface Props {
  timels: TimeLs;
}

export default function MyDiscordProfileCard({ timels }: Props) {
  const { userCard } = useContext(AuthContext);
  return (
    <DiscordProfileCard
      userAuth={userCard.userAuth}
      userInfo={{
        games: userCard.userInfo.games,
        playtime1: timels.weekday,
        playtime2: timels.holiday,
        playstyle: userCard.userInfo.playstyle,
        introduction: userCard.userInfo.introduction,
      }}
      option={userCard.option}
      cardOption={userCard.cardOption}
    />
  );
}
