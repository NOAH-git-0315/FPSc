import { z, ZodError } from 'zod';
import { playStyleList } from './Array/PlayStyle';
import { gameRanks } from './Array/Rank';
import { Games } from './Array/Games';
import { CardOption_list } from './Array/CardOption';
import { PostData, User } from '@/app/type';
import dayjs from 'dayjs';

const apiUrl = process.env.NEXT_PUBLIC_API_URL;
const useSchema = z.object({
  userInfo: z.object({
    games: z.array(
      z
        .object({
          title: z.enum(Games),
          rank: z.string(),
        })
        .refine((data) => gameRanks[data.title]?.includes(data.rank), {
          message: 'ゲームのランクは必ず選択してください',
          path: ['rank'],
        }),
    ),
    playtime1: z.array(z.string()),
    playtime2: z.array(z.string()),
    playstyle: z.array(z.enum(playStyleList)),
    introduction: z
      .string()
      .max(500, '自己紹介は500文字以内で入力してください')
      .nullable(),
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

function generateIntervals(playtime: string[]) {
  try {
    const startStr = playtime[0];
    const endStr = playtime[playtime.length - 1];

    let current = dayjs(`2020-01-01T${startStr}`);
    let end = dayjs(`2020-01-01T${endStr}`);

    if (endStr === '24:00') {
      end = dayjs(`2020-01-02T00:00`);
    }

    if (end.isBefore(current)) {
      throw new Error('終了時刻より遅い開始時刻に設定することはできません');
    }

    const result = [];

    while (current.isBefore(end) || current.isSame(end)) {
      result.push(current.format('HH:mm'));
      current = current.add(30, 'minute');
    }

    return result;
  } catch (err) {
    throw err;
  }
}

export async function validationAndPost(PostData: PostData) {
  try {
    const validated = useSchema.parse(PostData);
    const UserInfo = validated.userInfo;
    const UserOption = validated.option;
    const CardOption = validated.cardOption;
    console.log(PostData);

    if (
      (!UserInfo.playtime1 ||
        UserInfo.playtime1.length === 0 ||
        UserInfo.playtime1[0] == '' ||
        UserInfo.playtime1[1] == '') &&
      (!UserInfo.playtime2 ||
        UserInfo.playtime2.length === 0 ||
        UserInfo.playtime2[0] == '' ||
        UserInfo.playtime2[1] == '')
    ) {
      throw new Error('平日か休日いずれかのプレイ時間を入力してください');
    }

    if (
      (UserInfo.playtime1[0] &&
        UserInfo.playtime1[1] &&
        UserInfo.playtime1[0] == UserInfo.playtime1[1]) ||
      (UserInfo.playtime2[0] &&
        UserInfo.playtime2[1] &&
        UserInfo.playtime2[0] == UserInfo.playtime2[1])
    ) {
      throw new Error('開始時刻と終了時刻を同じにすることはできません');
    }

    const response = await fetch(`${apiUrl}/api/profile/update`, {
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
    if (response.ok && response.status === 204) {
      return {
        success: true,
        message: 'プロフィールが更新されました',
      };
    }

    return { success: true };
  } catch (e) {
    if (e instanceof ZodError) {
      const message = e.errors
        .map((err) => {
          const path = err.path.join('.') || '入力';
          return `${path}: ${err.message}`;
        })
        .join('\n');
      return {
        success: false,
        message: message || '入力内容に誤りがあります。',
      };
    } else if (e instanceof Error) {
      return {
        success: false,
        message: e.message || '予期せぬエラーが発生しました。',
      };
    } else {
      return {
        success: false,
        message: '不明なエラーが発生しました。',
      };
    }
  }
}
