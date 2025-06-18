import { GameType } from './Games';

// prettier-ignore
const NoRank=['初心者', '中級者', '上級者'];

// prettier-ignore
export const gameRanks: { [key in GameType]: string[] } = {
  'Apex Legends': ['ランクなし', 'ブロンズ', 'シルバー', 'ゴールド', 'プラチナ', 'ダイヤモンド', 'マスター', 'プレデター'],
  'Battlefield 2042': NoRank,
  'Call of Duty: Modern Warfare II': ['ランクなし', 'ブロンズ', 'シルバー', 'ゴールド', 'プラチナ', 'ダイヤモンド', 'マスター', 'グランドマスター'],
  'Call of Duty: Warzone': ['ランクなし', 'ブロンズ', 'シルバー', 'ゴールド', 'プラチナ', 'ダイヤモンド', 'マスター', 'グランドマスター'],
  'Counter-Strike 2': ['ランクなし', 'シルバー', 'ゴールドノヴァ', 'マスターガーディアン', 'レジェンダリーイーグル', 'スプレームマスター', 'グローバルエリート'],
  'Destiny 2': NoRank,
  'Escape from Tarkov': NoRank,
  'Halo Infinite': ['ランクなし', 'ブロンズ', 'シルバー', 'ゴールド', 'プラチナ', 'ダイヤモンド', 'オニックス'],
  'Overwatch 2': ['ランクなし', 'ブロンズ', 'シルバー', 'ゴールド', 'プラチナ', 'ダイヤモンド', 'マスター', 'グランドマスター', 'トップ500'],
  'Paladins': ['ランクなし', 'ブロンズ', 'シルバー', 'ゴールド', 'プラチナ', 'ダイヤモンド', 'マスター', 'グランドマスター'],
  'PUBG: Battlegrounds': ['ランクなし', 'ブロンズ', 'シルバー', 'ゴールド', 'プラチナ', 'ダイヤモンド', 'エース', 'コンカラー'],
  'Rainbow Six Siege': ['ランクなし', 'コッパー', 'ブロンズ', 'シルバー', 'ゴールド', 'プラチナ', 'ダイヤモンド', 'チャンピオン'],
  'VALORANT': ['ランクなし', 'アイアン', 'ブロンズ', 'シルバー', 'ゴールド', 'プラチナ', 'ダイヤモンド', 'イモータル', 'レイディアント'],
}as const

export type RankType = (typeof gameRanks)[keyof typeof gameRanks][number];
