import { useContext } from 'react';
import DiscordProfileCard from '../profcard';
import { AuthContext } from '../Context/Auth';

export default function MYDiscordProfileCard() {
  const { userCard } = useContext(AuthContext);
  return <DiscordProfileCard {...userCard} />;
}
