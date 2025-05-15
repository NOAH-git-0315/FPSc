import { useContext } from 'react';
import DiscordProfileCard from '../templates/profcard';
import { AuthContext } from '../templates/Auth';

export default function MYDiscordProfileCard() {
  const { userCard } = useContext(AuthContext);
  return <DiscordProfileCard {...userCard} />;
}
