import { SearchType } from '@/component/Search/SearchHUD';

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export default async function FriendSearchAPI(
  Search: SearchType,
  page: number,
) {
  function formatTimeNumberToList(start: number, end: number) {
    const result = [];
    for (let i = start; i <= end; i++) {
      result.push(i);
    }
    return result;
  }
  function formatTimeLabelMap(list: number[]) {
    function formatTimeLabel(value: number): string {
      const hours = Math.floor(value / 2);
      const minutes = value % 2 === 0 ? '00' : '30';
      return `${String(hours).padStart(2, '0')}:${minutes}`;
    }
    const result = list.map((item) => {
      return formatTimeLabel(item);
    });
    return result;
  }

  const TimeList = formatTimeNumberToList(
    Search.playtime[0],
    Search.playtime[1],
  );
  const Formated = formatTimeLabelMap(TimeList);

  const res = await fetch(
    `${apiUrl}/api/friend/search?page=${page - 1}&size=15`,
    {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        games: Search.game,
        ranks: Search.rank,
        playstyle: Search.playstyle,
        playtime: Formated,
      }),
    },
  );
  const data = await res.json();
  return await data;
}
