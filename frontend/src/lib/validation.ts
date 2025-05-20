import { z, ZodError } from 'zod';
import { playStyleList } from './Array/PlayStyle';
import { gameRanks } from './Array/Rank';
import { TIME_LIST } from './Array/Time';
import { Games } from './Array/Games';
import { CardOption_list } from './Array/CardOption';
import { PostDataType } from '@/app/type';
import dayjs from 'dayjs';

const useSchema = z.object({
  userInfo: z.object({
    games: z.array(
      z
        .object({
          title: z.enum(Games),
          rank: z.string(),
        })
        .refine((data) => gameRanks[data.title]?.includes(data.rank), {
          message: '選択されたタイトルに対して無効なランクです',
          path: ['rank'],
        }),
    ),
    playtime1: z.array(z.enum(TIME_LIST)),
    playtime2: z.array(z.enum(TIME_LIST)),
    playstyle: z.array(z.enum(playStyleList)),
    introduction: z
      .string()
      .max(100, '自己紹介は100文字以内で入力してください'),
  }),
  option: z.object({
    showGender: z.boolean(),
    showAge: z.boolean(),
    showGenderToSameSex: z.boolean(),
    showProfile: z.boolean(),
  }),
  cardOption: z.object({
    color: z.enum(CardOption_list.color),
    motion: z.null(),
  }),
});

export async function validationAndPost(PostData: PostDataType) {
  try {
    const validated = useSchema.parse(PostData);
    const UserInfo = validated.userInfo;
    const UserOption = validated.option;
    const CardOption = validated.cardOption;

    function generateIntervals(playtime: string[]) {
      const startStr = playtime[0];
      const endStr = playtime[playtime.length - 1];
      let current = dayjs(`2020-01-01T${startStr}`);
      let end = dayjs(`2020-01-01T${endStr}`);

      if (endStr === '24:00') {
        end = dayjs(`2020-01-02T00:00`);
      }

      if (end.isBefore(current)) {
        end = end.add(1, 'day');
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

    if (!response.ok) {
      const errorData = await response.json();
      return {
        success: false,
        message: errorData.message || '送信に失敗しました',
      };
    }

    return { success: true };
  } catch (e) {
    if (e instanceof ZodError) {
      return { success: false, message: '入力内容に誤りがあります。' };
    } else {
      return { success: false, message: '通信エラーが発生しました。' };
    }
  }
}
