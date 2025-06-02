import { useContext } from 'react';
import DiscordProfileCard from '../Other/profcard';
import { AuthContext } from '../Other/Auth';

export default function MYDiscordProfileCard() {
  const { userCard } = useContext(AuthContext);
  return <DiscordProfileCard {...userCard} />;
}
