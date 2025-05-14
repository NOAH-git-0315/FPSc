export const playStyleList = [
  'ランク',
  'カジュアル・アンランク',
  '初心者' ,
  'ゆったり' ,
  'ガチプレイ',
  '聞き専',
  'コーチング可',
  'コーチング募集',
] as const

export type PlayStyle = typeof playStyleList[number];