SET NAMES utf8mb4;

DELETE FROM user_game;
DELETE FROM user_playtime1;
DELETE FROM user_playtime2;
DELETE FROM user_playstyle;
DELETE FROM user_info;
DELETE FROM user_option;
DELETE FROM user_card_option;
DELETE FROM user_auth;

-- ユーザー1
INSERT INTO user_auth (id, name, avatar, global_name) VALUES ('1001002001', 'taro123', 'avatar001', '山田太郎');
INSERT INTO user_info (id, introduction, lastLoginAt) VALUES ('1001002001', 'FPSもRPGも好きです！', '2025-05-24T22:15:01.111111');
INSERT INTO user_option (id, show_gender, show_age, show_gender_to_same_sex, show_profile) VALUES ('1001002001', 1, 1, 0, 1);
INSERT INTO user_card_option (id, color, motion) VALUES ('1001002001', 'blue', 'fade');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('Apex Legends', 'ゴールド', '1001002001');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('PUBG: Battlegrounds', 'プラチナ', '1001002001');
INSERT INTO user_playtime1 (user_id, time_slot) VALUES ('1001002001', '21:00');
INSERT INTO user_playtime2 (user_id, preferred_slot) VALUES ('1001002001', '22:00');
INSERT INTO user_playstyle (user_id, style) VALUES ('1001002001', 'カジュアル・アンランク');

-- ユーザー2
INSERT INTO user_auth (id, name, avatar, global_name) VALUES ('1001002002', 'hanako456', 'avatar002', '佐藤花子');
INSERT INTO user_info (id, introduction, lastLoginAt) VALUES ('1001002002', 'のんびり系。よろしく！', '2025-05-24T23:45:11.222222');
INSERT INTO user_option (id, show_gender, show_age, show_gender_to_same_sex, show_profile) VALUES ('1001002002', 0, 1, 1, 1);
INSERT INTO user_card_option (id, color, motion) VALUES ('1001002002', 'red', 'slide');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('Battlefield 2042', '初心者', '1001002002');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('Rainbow Six Siege', 'シルバー', '1001002002');
INSERT INTO user_playtime1 (user_id, time_slot) VALUES ('1001002002', '21:30');
INSERT INTO user_playtime2 (user_id, preferred_slot) VALUES ('1001002002', '22:30');
INSERT INTO user_playstyle (user_id, style) VALUES ('1001002002', '初心者');

-- ユーザー3
INSERT INTO user_auth (id, name, avatar, global_name) VALUES ('1001002003', 'sato789', 'avatar003', '佐藤一郎');
INSERT INTO user_info (id, introduction, lastLoginAt) VALUES ('1001002003', '毎日ログインします。', '2025-05-25T00:05:21.333333');
INSERT INTO user_option (id, show_gender, show_age, show_gender_to_same_sex, show_profile) VALUES ('1001002003', 1, 0, 1, 1);
INSERT INTO user_card_option (id, color, motion) VALUES ('1001002003', 'green', 'fade');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('Call of Duty: Modern Warfare II', 'シルバー', '1001002003');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('VALORANT', 'ゴールド', '1001002003');
INSERT INTO user_playtime1 (user_id, time_slot) VALUES ('1001002003', '22:00');
INSERT INTO user_playtime2 (user_id, preferred_slot) VALUES ('1001002003', '23:00');
INSERT INTO user_playstyle (user_id, style) VALUES ('1001002003', '聞き専');

-- ユーザー4
INSERT INTO user_auth (id, name, avatar, global_name) VALUES ('1001002004', 'mika321', 'avatar004', '鈴木美香');
INSERT INTO user_info (id, introduction, lastLoginAt) VALUES ('1001002004', '初心者です！', '2025-05-23T21:32:15.444444');
INSERT INTO user_option (id, show_gender, show_age, show_gender_to_same_sex, show_profile) VALUES ('1001002004', 0, 1, 0, 1);
INSERT INTO user_card_option (id, color, motion) VALUES ('1001002004', 'yellow', 'zoom');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('Call of Duty: Warzone', 'ゴールド', '1001002004');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('Overwatch 2', 'ゴールド', '1001002004');
INSERT INTO user_playtime1 (user_id, time_slot) VALUES ('1001002004', '22:30');
INSERT INTO user_playtime2 (user_id, preferred_slot) VALUES ('1001002004', '23:30');
INSERT INTO user_playstyle (user_id, style) VALUES ('1001002004', 'ゆったり');

-- ユーザー5
INSERT INTO user_auth (id, name, avatar, global_name) VALUES ('1001002005', 'ryota654', 'avatar005', '田中涼太');
INSERT INTO user_info (id, introduction, lastLoginAt) VALUES ('1001002005', 'ガチ勢目指してます。', '2025-05-22T20:55:45.555555');
INSERT INTO user_option (id, show_gender, show_age, show_gender_to_same_sex, show_profile) VALUES ('1001002005', 1, 1, 1, 1);
INSERT INTO user_card_option (id, color, motion) VALUES ('1001002005', 'purple', 'slide');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('Counter-Strike 2', 'ゴールドノヴァ', '1001002005');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('Apex Legends', 'シルバー', '1001002005');
INSERT INTO user_playtime1 (user_id, time_slot) VALUES ('1001002005', '23:00');
INSERT INTO user_playtime2 (user_id, preferred_slot) VALUES ('1001002005', '00:00');
INSERT INTO user_playstyle (user_id, style) VALUES ('1001002005', 'ガチプレイ');

-- ユーザー6
INSERT INTO user_auth (id, name, avatar, global_name) VALUES ('1001002006', 'hiroki987', 'avatar006', '伊藤大輝');
INSERT INTO user_info (id, introduction, lastLoginAt) VALUES ('1001002006', '深夜プレイ多め。', '2025-05-24T23:00:00.666666');
INSERT INTO user_option (id, show_gender, show_age, show_gender_to_same_sex, show_profile) VALUES ('1001002006', 0, 0, 1, 1);
INSERT INTO user_card_option (id, color, motion) VALUES ('1001002006', 'orange', 'fade');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('Destiny 2', '中級者', '1001002006');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('Call of Duty: Warzone', 'プラチナ', '1001002006');
INSERT INTO user_playtime1 (user_id, time_slot) VALUES ('1001002006', '23:30');
INSERT INTO user_playtime2 (user_id, preferred_slot) VALUES ('1001002006', '00:30');
INSERT INTO user_playstyle (user_id, style) VALUES ('1001002006', 'ランク');

-- ユーザー7
INSERT INTO user_auth (id, name, avatar, global_name) VALUES ('1001002007', 'yui852', 'avatar007', '中村唯');
INSERT INTO user_info (id, introduction, lastLoginAt) VALUES ('1001002007', '昼間もインします。', '2025-05-25T00:35:31.777777');
INSERT INTO user_option (id, show_gender, show_age, show_gender_to_same_sex, show_profile) VALUES ('1001002007', 1, 1, 1, 0);
INSERT INTO user_card_option (id, color, motion) VALUES ('1001002007', 'pink', 'zoom');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('Escape from Tarkov', '上級者', '1001002007');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('Halo Infinite', 'ダイヤモンド', '1001002007');
INSERT INTO user_playtime1 (user_id, time_slot) VALUES ('1001002007', '00:00');
INSERT INTO user_playtime2 (user_id, preferred_slot) VALUES ('1001002007', '01:00');
INSERT INTO user_playstyle (user_id, style) VALUES ('1001002007', 'コーチング可');

-- ユーザー8
INSERT INTO user_auth (id, name, avatar, global_name) VALUES ('1001002008', 'kenta741', 'avatar008', '小林健太');
INSERT INTO user_info (id, introduction, lastLoginAt) VALUES ('1001002008', '聞き専ですが、よろしく！', '2025-05-24T19:20:00.888888');
INSERT INTO user_option (id, show_gender, show_age, show_gender_to_same_sex, show_profile) VALUES ('1001002008', 0, 0, 0, 1);
INSERT INTO user_card_option (id, color, motion) VALUES ('1001002008', 'gray', 'slide');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('Halo Infinite', 'オニックス', '1001002008');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('Counter-Strike 2', 'グローバルエリート', '1001002008');
INSERT INTO user_playtime1 (user_id, time_slot) VALUES ('1001002008', '00:30');
INSERT INTO user_playtime2 (user_id, preferred_slot) VALUES ('1001002008', '01:30');
INSERT INTO user_playstyle (user_id, style) VALUES ('1001002008', 'コーチング募集');

-- ユーザー9
INSERT INTO user_auth (id, name, avatar, global_name) VALUES ('1001002009', 'emi369', 'avatar009', '渡辺恵美');
INSERT INTO user_info (id, introduction, lastLoginAt) VALUES ('1001002009', 'カジュアルに遊びたい。', '2025-05-23T18:18:18.999999');
INSERT INTO user_option (id, show_gender, show_age, show_gender_to_same_sex, show_profile) VALUES ('1001002009', 1, 0, 1, 1);
INSERT INTO user_card_option (id, color, motion) VALUES ('1001002009', 'black', 'fade');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('Overwatch 2', 'プラチナ', '1001002009');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('Paladins', 'グランドマスター', '1001002009');
INSERT INTO user_playtime1 (user_id, time_slot) VALUES ('1001002009', '01:00');
INSERT INTO user_playtime2 (user_id, preferred_slot) VALUES ('1001002009', '02:00');
INSERT INTO user_playstyle (user_id, style) VALUES ('1001002009', 'カジュアル・アンランク');

-- ユーザー10
INSERT INTO user_auth (id, name, avatar, global_name) VALUES ('1001002010', 'shota159', 'avatar010', '加藤翔太');
INSERT INTO user_info (id, introduction, lastLoginAt) VALUES ('1001002010', 'たまにガチ勢。', '2025-05-25T00:40:01.123456');
INSERT INTO user_option (id, show_gender, show_age, show_gender_to_same_sex, show_profile) VALUES ('1001002010', 0, 1, 0, 1);
INSERT INTO user_card_option (id, color, motion) VALUES ('1001002010', 'white', 'zoom');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('Paladins', 'マスター', '1001002010');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('VALORANT', 'ブロンズ', '1001002010');
INSERT INTO user_playtime1 (user_id, time_slot) VALUES ('1001002010', '01:30');
INSERT INTO user_playtime2 (user_id, preferred_slot) VALUES ('1001002010', '02:30');
INSERT INTO user_playstyle (user_id, style) VALUES ('1001002010', 'ゆったり');

-- ユーザー11
INSERT INTO user_auth (id, name, avatar, global_name) VALUES ('1001002011', 'yuji111', 'avatar011', '斎藤祐司');
INSERT INTO user_info (id, introduction, lastLoginAt) VALUES ('1001002011', 'エンジョイ勢ですがよろしく！', '2025-05-24T21:11:11.111111');
INSERT INTO user_option (id, show_gender, show_age, show_gender_to_same_sex, show_profile) VALUES ('1001002011', 1, 0, 0, 1);
INSERT INTO user_card_option (id, color, motion) VALUES ('1001002011', 'navy', 'slide');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('Apex Legends', 'ブロンズ', '1001002011');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('Halo Infinite', 'ゴールド', '1001002011');
INSERT INTO user_playtime1 (user_id, time_slot) VALUES ('1001002011', '20:00');
INSERT INTO user_playtime2 (user_id, preferred_slot) VALUES ('1001002011', '21:30');
INSERT INTO user_playstyle (user_id, style) VALUES ('1001002011', '初心者');

-- ユーザー12
INSERT INTO user_auth (id, name, avatar, global_name) VALUES ('1001002012', 'aki222', 'avatar012', '石田明');
INSERT INTO user_info (id, introduction, lastLoginAt) VALUES ('1001002012', '夜型ゲーマー', '2025-05-25T00:12:34.222222');
INSERT INTO user_option (id, show_gender, show_age, show_gender_to_same_sex, show_profile) VALUES ('1001002012', 0, 1, 0, 1);
INSERT INTO user_card_option (id, color, motion) VALUES ('1001002012', 'lime', 'fade');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('Call of Duty: Modern Warfare II', 'ゴールド', '1001002012');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('PUBG: Battlegrounds', 'ダイヤモンド', '1001002012');
INSERT INTO user_playtime1 (user_id, time_slot) VALUES ('1001002012', '23:00');
INSERT INTO user_playtime2 (user_id, preferred_slot) VALUES ('1001002012', '00:00');
INSERT INTO user_playstyle (user_id, style) VALUES ('1001002012', 'ガチプレイ');

-- ユーザー13
INSERT INTO user_auth (id, name, avatar, global_name) VALUES ('1001002013', 'mei333', 'avatar013', '松本芽衣');
INSERT INTO user_info (id, introduction, lastLoginAt) VALUES ('1001002013', '聞き専ですが仲良くしてください。', '2025-05-24T19:45:45.333333');
INSERT INTO user_option (id, show_gender, show_age, show_gender_to_same_sex, show_profile) VALUES ('1001002013', 1, 1, 1, 1);
INSERT INTO user_card_option (id, color, motion) VALUES ('1001002013', 'pink', 'zoom');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('Destiny 2', '上級者', '1001002013');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('VALORANT', 'ダイヤモンド', '1001002013');
INSERT INTO user_playtime1 (user_id, time_slot) VALUES ('1001002013', '21:30');
INSERT INTO user_playtime2 (user_id, preferred_slot) VALUES ('1001002013', '22:30');
INSERT INTO user_playstyle (user_id, style) VALUES ('1001002013', '聞き専');

-- ユーザー14
INSERT INTO user_auth (id, name, avatar, global_name) VALUES ('1001002014', 'haru444', 'avatar014', '河合春斗');
INSERT INTO user_info (id, introduction, lastLoginAt) VALUES ('1001002014', '休日のみインします。', '2025-05-22T18:00:00.444444');
INSERT INTO user_option (id, show_gender, show_age, show_gender_to_same_sex, show_profile) VALUES ('1001002014', 0, 0, 1, 1);
INSERT INTO user_card_option (id, color, motion) VALUES ('1001002014', 'orange', 'slide');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('Counter-Strike 2', 'マスターガーディアン', '1001002014');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('Call of Duty: Warzone', 'ダイヤモンド', '1001002014');
INSERT INTO user_playtime1 (user_id, time_slot) VALUES ('1001002014', '22:00');
INSERT INTO user_playtime2 (user_id, preferred_slot) VALUES ('1001002014', '23:00');
INSERT INTO user_playstyle (user_id, style) VALUES ('1001002014', 'カジュアル・アンランク');

-- ユーザー15
INSERT INTO user_auth (id, name, avatar, global_name) VALUES ('1001002015', 'aya555', 'avatar015', '大西彩');
INSERT INTO user_info (id, introduction, lastLoginAt) VALUES ('1001002015', '初心者歓迎！', '2025-05-25T00:10:10.555555');
INSERT INTO user_option (id, show_gender, show_age, show_gender_to_same_sex, show_profile) VALUES ('1001002015', 1, 1, 0, 1);
INSERT INTO user_card_option (id, color, motion) VALUES ('1001002015', 'yellow', 'fade');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('Overwatch 2', 'ブロンズ', '1001002015');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('Rainbow Six Siege', 'ゴールド', '1001002015');
INSERT INTO user_playtime1 (user_id, time_slot) VALUES ('1001002015', '20:30');
INSERT INTO user_playtime2 (user_id, preferred_slot) VALUES ('1001002015', '21:30');
INSERT INTO user_playstyle (user_id, style) VALUES ('1001002015', '初心者');

-- ユーザー16
INSERT INTO user_auth (id, name, avatar, global_name) VALUES ('1001002016', 'jun666', 'avatar016', '堀内淳');
INSERT INTO user_info (id, introduction, lastLoginAt) VALUES ('1001002016', 'ガチ勢です！', '2025-05-24T14:22:22.666666');
INSERT INTO user_option (id, show_gender, show_age, show_gender_to_same_sex, show_profile) VALUES ('1001002016', 1, 0, 1, 0);
INSERT INTO user_card_option (id, color, motion) VALUES ('1001002016', 'black', 'zoom');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('Apex Legends', 'ダイヤモンド', '1001002016');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('VALORANT', 'イモータル', '1001002016');
INSERT INTO user_playtime1 (user_id, time_slot) VALUES ('1001002016', '23:30');
INSERT INTO user_playtime2 (user_id, preferred_slot) VALUES ('1001002016', '00:30');
INSERT INTO user_playstyle (user_id, style) VALUES ('1001002016', 'ガチプレイ');

-- ユーザー17
INSERT INTO user_auth (id, name, avatar, global_name) VALUES ('1001002017', 'kumi777', 'avatar017', '福田久美');
INSERT INTO user_info (id, introduction, lastLoginAt) VALUES ('1001002017', 'のんびり楽しんでます。', '2025-05-23T12:34:56.777777');
INSERT INTO user_option (id, show_gender, show_age, show_gender_to_same_sex, show_profile) VALUES ('1001002017', 0, 1, 1, 1);
INSERT INTO user_card_option (id, color, motion) VALUES ('1001002017', 'purple', 'fade');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('Destiny 2', '初心者', '1001002017');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('Paladins', 'ゴールド', '1001002017');
INSERT INTO user_playtime1 (user_id, time_slot) VALUES ('1001002017', '21:00');
INSERT INTO user_playtime2 (user_id, preferred_slot) VALUES ('1001002017', '21:30');
INSERT INTO user_playstyle (user_id, style) VALUES ('1001002017', 'ゆったり');

-- ユーザー18
INSERT INTO user_auth (id, name, avatar, global_name) VALUES ('1001002018', 'syo888', 'avatar018', '三浦翔');
INSERT INTO user_info (id, introduction, lastLoginAt) VALUES ('1001002018', 'コーチングしてます。', '2025-05-25T00:23:45.888888');
INSERT INTO user_option (id, show_gender, show_age, show_gender_to_same_sex, show_profile) VALUES ('1001002018', 1, 1, 1, 1);
INSERT INTO user_card_option (id, color, motion) VALUES ('1001002018', 'red', 'slide');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('Call of Duty: Modern Warfare II', 'ダイヤモンド', '1001002018');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('Halo Infinite', 'プラチナ', '1001002018');
INSERT INTO user_playtime1 (user_id, time_slot) VALUES ('1001002018', '23:00');
INSERT INTO user_playtime2 (user_id, preferred_slot) VALUES ('1001002018', '23:30');
INSERT INTO user_playstyle (user_id, style) VALUES ('1001002018', 'コーチング可');

-- ユーザー19
INSERT INTO user_auth (id, name, avatar, global_name) VALUES ('1001002019', 'sena999', 'avatar019', '村上瀬奈');
INSERT INTO user_info (id, introduction, lastLoginAt) VALUES ('1001002019', '聞き専ガチ勢。', '2025-05-25T00:15:45.999999');
INSERT INTO user_option (id, show_gender, show_age, show_gender_to_same_sex, show_profile) VALUES ('1001002019', 0, 0, 1, 1);
INSERT INTO user_card_option (id, color, motion) VALUES ('1001002019', 'blue', 'fade');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('Apex Legends', 'マスター', '1001002019');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('Overwatch 2', 'グランドマスター', '1001002019');
INSERT INTO user_playtime1 (user_id, time_slot) VALUES ('1001002019', '22:00');
INSERT INTO user_playtime2 (user_id, preferred_slot) VALUES ('1001002019', '22:30');
INSERT INTO user_playstyle (user_id, style) VALUES ('1001002019', '聞き専');

-- ユーザー20
INSERT INTO user_auth (id, name, avatar, global_name) VALUES ('1001002020', 'riku112', 'avatar020', '高橋陸');
INSERT INTO user_info (id, introduction, lastLoginAt) VALUES ('1001002020', 'エンジョイ勢です！', '2025-05-24T18:00:00.123456');
INSERT INTO user_option (id, show_gender, show_age, show_gender_to_same_sex, show_profile) VALUES ('1001002020', 1, 1, 0, 1);
INSERT INTO user_card_option (id, color, motion) VALUES ('1001002020', 'green', 'zoom');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('Paladins', 'ブロンズ', '1001002020');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('VALORANT', 'アイアン', '1001002020');
INSERT INTO user_playtime1 (user_id, time_slot) VALUES ('1001002020', '21:30');
INSERT INTO user_playtime2 (user_id, preferred_slot) VALUES ('1001002020', '22:00');
INSERT INTO user_playstyle (user_id, style) VALUES ('1001002020', 'カジュアル・アンランク');

-- ユーザー21
INSERT INTO user_auth (id, name, avatar, global_name) VALUES ('1001002021', 'yuiko113', 'avatar021', '山口結子');
INSERT INTO user_info (id, introduction, lastLoginAt) VALUES ('1001002021', '学生ゲーマーです！', '2025-05-24T17:23:45.222222');
INSERT INTO user_option (id, show_gender, show_age, show_gender_to_same_sex, show_profile) VALUES ('1001002021', 1, 1, 1, 1);
INSERT INTO user_card_option (id, color, motion) VALUES ('1001002021', 'mint', 'slide');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('Overwatch 2', 'シルバー', '1001002021');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('Rainbow Six Siege', 'コッパー', '1001002021');
INSERT INTO user_playtime1 (user_id, time_slot) VALUES ('1001002021', '20:30');
INSERT INTO user_playtime2 (user_id, preferred_slot) VALUES ('1001002021', '22:00');
INSERT INTO user_playstyle (user_id, style) VALUES ('1001002021', 'ゆったり');

-- ユーザー22
INSERT INTO user_auth (id, name, avatar, global_name) VALUES ('1001002022', 'daiki114', 'avatar022', '石井大樹');
INSERT INTO user_info (id, introduction, lastLoginAt) VALUES ('1001002022', 'ボイスチャット大好き！', '2025-05-25T00:10:20.333333');
INSERT INTO user_option (id, show_gender, show_age, show_gender_to_same_sex, show_profile) VALUES ('1001002022', 1, 0, 0, 1);
INSERT INTO user_card_option (id, color, motion) VALUES ('1001002022', 'gray', 'fade');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('VALORANT', 'レイディアント', '1001002022');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('Call of Duty: Modern Warfare II', 'グランドマスター', '1001002022');
INSERT INTO user_playtime1 (user_id, time_slot) VALUES ('1001002022', '21:00');
INSERT INTO user_playtime2 (user_id, preferred_slot) VALUES ('1001002022', '22:30');
INSERT INTO user_playstyle (user_id, style) VALUES ('1001002022', 'ガチプレイ');

-- ユーザー23
INSERT INTO user_auth (id, name, avatar, global_name) VALUES ('1001002023', 'nana115', 'avatar023', '村田菜々');
INSERT INTO user_info (id, introduction, lastLoginAt) VALUES ('1001002023', 'みんなと遊びたいです！', '2025-05-24T20:11:10.444444');
INSERT INTO user_option (id, show_gender, show_age, show_gender_to_same_sex, show_profile) VALUES ('1001002023', 0, 1, 1, 1);
INSERT INTO user_card_option (id, color, motion) VALUES ('1001002023', 'skyblue', 'zoom');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('PUBG: Battlegrounds', 'ゴールド', '1001002023');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('Apex Legends', 'プレデター', '1001002023');
INSERT INTO user_playtime1 (user_id, time_slot) VALUES ('1001002023', '23:00');
INSERT INTO user_playtime2 (user_id, preferred_slot) VALUES ('1001002023', '23:30');
INSERT INTO user_playstyle (user_id, style) VALUES ('1001002023', 'カジュアル・アンランク');

-- ユーザー24
INSERT INTO user_auth (id, name, avatar, global_name) VALUES ('1001002024', 'taichi116', 'avatar024', '藤原太一');
INSERT INTO user_info (id, introduction, lastLoginAt) VALUES ('1001002024', '社会人ゲーマーです。', '2025-05-25T00:45:45.555555');
INSERT INTO user_option (id, show_gender, show_age, show_gender_to_same_sex, show_profile) VALUES ('1001002024', 1, 1, 1, 1);
INSERT INTO user_card_option (id, color, motion) VALUES ('1001002024', 'brown', 'slide');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('Battlefield 2042', '中級者', '1001002024');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('Counter-Strike 2', 'シルバー', '1001002024');
INSERT INTO user_playtime1 (user_id, time_slot) VALUES ('1001002024', '22:00');
INSERT INTO user_playtime2 (user_id, preferred_slot) VALUES ('1001002024', '23:00');
INSERT INTO user_playstyle (user_id, style) VALUES ('1001002024', 'ゆったり');

-- ユーザー25
INSERT INTO user_auth (id, name, avatar, global_name) VALUES ('1001002025', 'kana117', 'avatar025', '岡本佳奈');
INSERT INTO user_info (id, introduction, lastLoginAt) VALUES ('1001002025', 'ゆるふわ勢！', '2025-05-22T16:55:55.666666');
INSERT INTO user_option (id, show_gender, show_age, show_gender_to_same_sex, show_profile) VALUES ('1001002025', 0, 0, 0, 1);
INSERT INTO user_card_option (id, color, motion) VALUES ('1001002025', 'white', 'zoom');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('Halo Infinite', 'シルバー', '1001002025');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('Destiny 2', '初心者', '1001002025');
INSERT INTO user_playtime1 (user_id, time_slot) VALUES ('1001002025', '20:00');
INSERT INTO user_playtime2 (user_id, preferred_slot) VALUES ('1001002025', '20:30');
INSERT INTO user_playstyle (user_id, style) VALUES ('1001002025', '初心者');

-- ユーザー26
INSERT INTO user_auth (id, name, avatar, global_name) VALUES ('1001002026', 'shun118', 'avatar026', '三宅俊');
INSERT INTO user_info (id, introduction, lastLoginAt) VALUES ('1001002026', 'マイペースでやってます。', '2025-05-24T15:15:15.777777');
INSERT INTO user_option (id, show_gender, show_age, show_gender_to_same_sex, show_profile) VALUES ('1001002026', 1, 1, 1, 1);
INSERT INTO user_card_option (id, color, motion) VALUES ('1001002026', 'purple', 'fade');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('Call of Duty: Warzone', 'ランクなし', '1001002026');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('VALORANT', 'ゴールド', '1001002026');
INSERT INTO user_playtime1 (user_id, time_slot) VALUES ('1001002026', '22:30');
INSERT INTO user_playtime2 (user_id, preferred_slot) VALUES ('1001002026', '23:30');
INSERT INTO user_playstyle (user_id, style) VALUES ('1001002026', 'カジュアル・アンランク');

-- ユーザー27
INSERT INTO user_auth (id, name, avatar, global_name) VALUES ('1001002027', 'mio119', 'avatar027', '杉山美緒');
INSERT INTO user_info (id, introduction, lastLoginAt) VALUES ('1001002027', 'ガチ勢目指してます。', '2025-05-25T00:01:01.888888');
INSERT INTO user_option (id, show_gender, show_age, show_gender_to_same_sex, show_profile) VALUES ('1001002027', 0, 0, 0, 1);
INSERT INTO user_card_option (id, color, motion) VALUES ('1001002027', 'red', 'slide');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('Paladins', 'ダイヤモンド', '1001002027');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('Apex Legends', 'マスター', '1001002027');
INSERT INTO user_playtime1 (user_id, time_slot) VALUES ('1001002027', '23:30');
INSERT INTO user_playtime2 (user_id, preferred_slot) VALUES ('1001002027', '00:00');
INSERT INTO user_playstyle (user_id, style) VALUES ('1001002027', 'ガチプレイ');

-- ユーザー28
INSERT INTO user_auth (id, name, avatar, global_name) VALUES ('1001002028', 'takumi120', 'avatar028', '近藤拓海');
INSERT INTO user_info (id, introduction, lastLoginAt) VALUES ('1001002028', 'エイム練習中。', '2025-05-22T19:19:19.999999');
INSERT INTO user_option (id, show_gender, show_age, show_gender_to_same_sex, show_profile) VALUES ('1001002028', 1, 1, 0, 1);
INSERT INTO user_card_option (id, color, motion) VALUES ('1001002028', 'teal', 'zoom');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('Call of Duty: Modern Warfare II', 'ゴールド', '1001002028');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('Rainbow Six Siege', 'チャンピオン', '1001002028');
INSERT INTO user_playtime1 (user_id, time_slot) VALUES ('1001002028', '21:00');
INSERT INTO user_playtime2 (user_id, preferred_slot) VALUES ('1001002028', '21:30');
INSERT INTO user_playstyle (user_id, style) VALUES ('1001002028', 'ランク');

-- ユーザー29
INSERT INTO user_auth (id, name, avatar, global_name) VALUES ('1001002029', 'saki121', 'avatar029', '大野咲');
INSERT INTO user_info (id, introduction, lastLoginAt) VALUES ('1001002029', 'フレンド募集中！', '2025-05-25T00:22:22.111111');
INSERT INTO user_option (id, show_gender, show_age, show_gender_to_same_sex, show_profile) VALUES ('1001002029', 0, 1, 1, 1);
INSERT INTO user_card_option (id, color, motion) VALUES ('1001002029', 'yellow', 'fade');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('VALORANT', 'シルバー', '1001002029');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('Halo Infinite', 'ブロンズ', '1001002029');
INSERT INTO user_playtime1 (user_id, time_slot) VALUES ('1001002029', '20:00');
INSERT INTO user_playtime2 (user_id, preferred_slot) VALUES ('1001002029', '20:30');
INSERT INTO user_playstyle (user_id, style) VALUES ('1001002029', 'ゆったり');

-- ユーザー30
INSERT INTO user_auth (id, name, avatar, global_name) VALUES ('1001002030', 'kaito122', 'avatar030', '森海斗');
INSERT INTO user_info (id, introduction, lastLoginAt) VALUES ('1001002030', 'よろしくお願いします！', '2025-05-23T13:13:13.222222');
INSERT INTO user_option (id, show_gender, show_age, show_gender_to_same_sex, show_profile) VALUES ('1001002030', 1, 1, 1, 1);
INSERT INTO user_card_option (id, color, motion) VALUES ('1001002030', 'brown', 'slide');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('Apex Legends', 'プラチナ', '1001002030');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('Counter-Strike 2', 'レジェンダリーイーグル', '1001002030');
INSERT INTO user_playtime1 (user_id, time_slot) VALUES ('1001002030', '19:30');
INSERT INTO user_playtime2 (user_id, preferred_slot) VALUES ('1001002030', '20:00');
INSERT INTO user_playstyle (user_id, style) VALUES ('1001002030', 'カジュアル・アンランク');

-- ユーザー31
INSERT INTO user_auth (id, name, avatar, global_name) VALUES ('1001002031', 'yuka123', 'avatar031', '和田優香');
INSERT INTO user_info (id, introduction, lastLoginAt) VALUES ('1001002031', 'FPS中心に遊んでます！', '2025-05-24T16:16:16.111111');
INSERT INTO user_option (id, show_gender, show_age, show_gender_to_same_sex, show_profile) VALUES ('1001002031', 1, 1, 1, 1);
INSERT INTO user_card_option (id, color, motion) VALUES ('1001002031', 'skyblue', 'fade');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('Call of Duty: Warzone', 'マスター', '1001002031');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('PUBG: Battlegrounds', 'ブロンズ', '1001002031');
INSERT INTO user_playtime1 (user_id, time_slot) VALUES ('1001002031', '22:00');
INSERT INTO user_playtime2 (user_id, preferred_slot) VALUES ('1001002031', '23:00');
INSERT INTO user_playstyle (user_id, style) VALUES ('1001002031', 'ガチプレイ');

-- ユーザー32
INSERT INTO user_auth (id, name, avatar, global_name) VALUES ('1001002032', 'souta124', 'avatar032', '永井奏太');
INSERT INTO user_info (id, introduction, lastLoginAt) VALUES ('1001002032', '仲間重視で頑張ります。', '2025-05-23T20:20:20.222222');
INSERT INTO user_option (id, show_gender, show_age, show_gender_to_same_sex, show_profile) VALUES ('1001002032', 0, 0, 1, 1);
INSERT INTO user_card_option (id, color, motion) VALUES ('1001002032', 'lime', 'zoom');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('Rainbow Six Siege', 'ダイヤモンド', '1001002032');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('Destiny 2', '上級者', '1001002032');
INSERT INTO user_playtime1 (user_id, time_slot) VALUES ('1001002032', '21:30');
INSERT INTO user_playtime2 (user_id, preferred_slot) VALUES ('1001002032', '22:30');
INSERT INTO user_playstyle (user_id, style) VALUES ('1001002032', 'ランク');

-- ユーザー33
INSERT INTO user_auth (id, name, avatar, global_name) VALUES ('1001002033', 'eri125', 'avatar033', '片山絵里');
INSERT INTO user_info (id, introduction, lastLoginAt) VALUES ('1001002033', 'エンジョイ勢です！', '2025-05-21T12:12:12.333333');
INSERT INTO user_option (id, show_gender, show_age, show_gender_to_same_sex, show_profile) VALUES ('1001002033', 1, 1, 0, 1);
INSERT INTO user_card_option (id, color, motion) VALUES ('1001002033', 'pink', 'slide');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('Counter-Strike 2', 'ゴールドノヴァ', '1001002033');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('Overwatch 2', 'トップ500', '1001002033');
INSERT INTO user_playtime1 (user_id, time_slot) VALUES ('1001002033', '20:30');
INSERT INTO user_playtime2 (user_id, preferred_slot) VALUES ('1001002033', '21:30');
INSERT INTO user_playstyle (user_id, style) VALUES ('1001002033', 'カジュアル・アンランク');

-- ユーザー34
INSERT INTO user_auth (id, name, avatar, global_name) VALUES ('1001002034', 'subaru126', 'avatar034', '高田昴');
INSERT INTO user_info (id, introduction, lastLoginAt) VALUES ('1001002034', '夜型ガチ勢です。', '2025-05-25T00:12:34.444444');
INSERT INTO user_option (id, show_gender, show_age, show_gender_to_same_sex, show_profile) VALUES ('1001002034', 1, 0, 1, 1);
INSERT INTO user_card_option (id, color, motion) VALUES ('1001002034', 'navy', 'fade');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('VALORANT', 'プラチナ', '1001002034');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('Call of Duty: Warzone', 'ブロンズ', '1001002034');
INSERT INTO user_playtime1 (user_id, time_slot) VALUES ('1001002034', '23:30');
INSERT INTO user_playtime2 (user_id, preferred_slot) VALUES ('1001002034', '00:30');
INSERT INTO user_playstyle (user_id, style) VALUES ('1001002034', 'ガチプレイ');

-- ユーザー35
INSERT INTO user_auth (id, name, avatar, global_name) VALUES ('1001002035', 'hina127', 'avatar035', '内田陽菜');
INSERT INTO user_info (id, introduction, lastLoginAt) VALUES ('1001002035', '昼間もインしてます！', '2025-05-24T11:11:11.555555');
INSERT INTO user_option (id, show_gender, show_age, show_gender_to_same_sex, show_profile) VALUES ('1001002035', 0, 1, 1, 0);
INSERT INTO user_card_option (id, color, motion) VALUES ('1001002035', 'orange', 'zoom');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('Overwatch 2', 'シルバー', '1001002035');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('Halo Infinite', 'プラチナ', '1001002035');
INSERT INTO user_playtime1 (user_id, time_slot) VALUES ('1001002035', '20:00');
INSERT INTO user_playtime2 (user_id, preferred_slot) VALUES ('1001002035', '21:00');
INSERT INTO user_playstyle (user_id, style) VALUES ('1001002035', '初心者');

-- ユーザー36
INSERT INTO user_auth (id, name, avatar, global_name) VALUES ('1001002036', 'hayato128', 'avatar036', '岡田隼人');
INSERT INTO user_info (id, introduction, lastLoginAt) VALUES ('1001002036', 'コツコツ系です。', '2025-05-22T18:18:18.666666');
INSERT INTO user_option (id, show_gender, show_age, show_gender_to_same_sex, show_profile) VALUES ('1001002036', 1, 0, 0, 1);
INSERT INTO user_card_option (id, color, motion) VALUES ('1001002036', 'green', 'slide');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('Battlefield 2042', '上級者', '1001002036');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('VALORANT', 'プラチナ', '1001002036');
INSERT INTO user_playtime1 (user_id, time_slot) VALUES ('1001002036', '19:30');
INSERT INTO user_playtime2 (user_id, preferred_slot) VALUES ('1001002036', '20:00');
INSERT INTO user_playstyle (user_id, style) VALUES ('1001002036', 'ゆったり');

-- ユーザー37
INSERT INTO user_auth (id, name, avatar, global_name) VALUES ('1001002037', 'miyu129', 'avatar037', '松井美優');
INSERT INTO user_info (id, introduction, lastLoginAt) VALUES ('1001002037', '初心者です！', '2025-05-24T10:10:10.777777');
INSERT INTO user_option (id, show_gender, show_age, show_gender_to_same_sex, show_profile) VALUES ('1001002037', 0, 1, 1, 1);
INSERT INTO user_card_option (id, color, motion) VALUES ('1001002037', 'pink', 'fade');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('Escape from Tarkov', '初心者', '1001002037');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('Apex Legends', 'ランクなし', '1001002037');
INSERT INTO user_playtime1 (user_id, time_slot) VALUES ('1001002037', '18:00');
INSERT INTO user_playtime2 (user_id, preferred_slot) VALUES ('1001002037', '19:00');
INSERT INTO user_playstyle (user_id, style) VALUES ('1001002037', '初心者');

-- ユーザー38
INSERT INTO user_auth (id, name, avatar, global_name) VALUES ('1001002038', 'ren130', 'avatar038', '柴田蓮');
INSERT INTO user_info (id, introduction, lastLoginAt) VALUES ('1001002038', 'コーチングも歓迎！', '2025-05-23T17:17:17.888888');
INSERT INTO user_option (id, show_gender, show_age, show_gender_to_same_sex, show_profile) VALUES ('1001002038', 1, 1, 1, 1);
INSERT INTO user_card_option (id, color, motion) VALUES ('1001002038', 'teal', 'zoom');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('Call of Duty: Modern Warfare II', 'マスター', '1001002038');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('Rainbow Six Siege', 'プラチナ', '1001002038');
INSERT INTO user_playtime1 (user_id, time_slot) VALUES ('1001002038', '22:30');
INSERT INTO user_playtime2 (user_id, preferred_slot) VALUES ('1001002038', '23:30');
INSERT INTO user_playstyle (user_id, style) VALUES ('1001002038', 'コーチング可');

-- ユーザー39
INSERT INTO user_auth (id, name, avatar, global_name) VALUES ('1001002039', 'maho131', 'avatar039', '原田真帆');
INSERT INTO user_info (id, introduction, lastLoginAt) VALUES ('1001002039', 'カジュアルに楽しみたい！', '2025-05-25T00:09:09.999999');
INSERT INTO user_option (id, show_gender, show_age, show_gender_to_same_sex, show_profile) VALUES ('1001002039', 0, 0, 0, 1);
INSERT INTO user_card_option (id, color, motion) VALUES ('1001002039', 'white', 'slide');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('Destiny 2', '中級者', '1001002039');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('Counter-Strike 2', 'レジェンダリーイーグル', '1001002039');
INSERT INTO user_playtime1 (user_id, time_slot) VALUES ('1001002039', '20:30');
INSERT INTO user_playtime2 (user_id, preferred_slot) VALUES ('1001002039', '21:00');
INSERT INTO user_playstyle (user_id, style) VALUES ('1001002039', 'カジュアル・アンランク');

-- ユーザー40
INSERT INTO user_auth (id, name, avatar, global_name) VALUES ('1001002040', 'kou132', 'avatar040', '今井航');
INSERT INTO user_info (id, introduction, lastLoginAt) VALUES ('1001002040', '夜に活動してます。', '2025-05-22T22:22:22.222222');
INSERT INTO user_option (id, show_gender, show_age, show_gender_to_same_sex, show_profile) VALUES ('1001002040', 1, 1, 1, 1);
INSERT INTO user_card_option (id, color, motion) VALUES ('1001002040', 'blue', 'fade');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('PUBG: Battlegrounds', 'ダイヤモンド', '1001002040');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('Paladins', 'グランドマスター', '1001002040');
INSERT INTO user_playtime1 (user_id, time_slot) VALUES ('1001002040', '21:30');
INSERT INTO user_playtime2 (user_id, preferred_slot) VALUES ('1001002040', '22:00');
INSERT INTO user_playstyle (user_id, style) VALUES ('1001002040', 'ガチプレイ');

-- ユーザー41
INSERT INTO user_auth (id, name, avatar, global_name) VALUES ('1001002041', 'mizuki133', 'avatar041', '西村瑞希');
INSERT INTO user_info (id, introduction, lastLoginAt) VALUES ('1001002041', 'わいわいやるのが好きです！', '2025-05-24T22:41:41.111111');
INSERT INTO user_option (id, show_gender, show_age, show_gender_to_same_sex, show_profile) VALUES ('1001002041', 1, 1, 1, 1);
INSERT INTO user_card_option (id, color, motion) VALUES ('1001002041', 'mint', 'zoom');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('Apex Legends', 'ダイヤモンド', '1001002041');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('Call of Duty: Modern Warfare II', 'ゴールド', '1001002041');
INSERT INTO user_playtime1 (user_id, time_slot) VALUES ('1001002041', '22:00');
INSERT INTO user_playtime2 (user_id, preferred_slot) VALUES ('1001002041', '22:30');
INSERT INTO user_playstyle (user_id, style) VALUES ('1001002041', 'ゆったり');

-- ユーザー42
INSERT INTO user_auth (id, name, avatar, global_name) VALUES ('1001002042', 'yuuma134', 'avatar042', '大谷悠真');
INSERT INTO user_info (id, introduction, lastLoginAt) VALUES ('1001002042', '初心者ですが頑張ります！', '2025-05-25T00:42:42.222222');
INSERT INTO user_option (id, show_gender, show_age, show_gender_to_same_sex, show_profile) VALUES ('1001002042', 0, 1, 0, 1);
INSERT INTO user_card_option (id, color, motion) VALUES ('1001002042', 'navy', 'fade');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('Destiny 2', '初心者', '1001002042');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('VALORANT', 'シルバー', '1001002042');
INSERT INTO user_playtime1 (user_id, time_slot) VALUES ('1001002042', '21:30');
INSERT INTO user_playtime2 (user_id, preferred_slot) VALUES ('1001002042', '22:30');
INSERT INTO user_playstyle (user_id, style) VALUES ('1001002042', '初心者');

-- ユーザー43
INSERT INTO user_auth (id, name, avatar, global_name) VALUES ('1001002043', 'rei135', 'avatar043', '江口怜');
INSERT INTO user_info (id, introduction, lastLoginAt) VALUES ('1001002043', 'VC歓迎です！', '2025-05-24T21:43:43.333333');
INSERT INTO user_option (id, show_gender, show_age, show_gender_to_same_sex, show_profile) VALUES ('1001002043', 1, 1, 1, 1);
INSERT INTO user_card_option (id, color, motion) VALUES ('1001002043', 'gray', 'slide');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('Paladins', 'グランドマスター', '1001002043');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('Overwatch 2', 'トップ500', '1001002043');
INSERT INTO user_playtime1 (user_id, time_slot) VALUES ('1001002043', '22:30');
INSERT INTO user_playtime2 (user_id, preferred_slot) VALUES ('1001002043', '23:00');
INSERT INTO user_playstyle (user_id, style) VALUES ('1001002043', 'ガチプレイ');

-- ユーザー44
INSERT INTO user_auth (id, name, avatar, global_name) VALUES ('1001002044', 'kasumi136', 'avatar044', '青木霞');
INSERT INTO user_info (id, introduction, lastLoginAt) VALUES ('1001002044', 'カジュアルに楽しんでます。', '2025-05-23T23:44:44.444444');
INSERT INTO user_option (id, show_gender, show_age, show_gender_to_same_sex, show_profile) VALUES ('1001002044', 0, 0, 1, 1);
INSERT INTO user_card_option (id, color, motion) VALUES ('1001002044', 'brown', 'zoom');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('Call of Duty: Warzone', 'ゴールド', '1001002044');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('Apex Legends', 'ゴールド', '1001002044');
INSERT INTO user_playtime1 (user_id, time_slot) VALUES ('1001002044', '21:00');
INSERT INTO user_playtime2 (user_id, preferred_slot) VALUES ('1001002044', '21:30');
INSERT INTO user_playstyle (user_id, style) VALUES ('1001002044', 'カジュアル・アンランク');

-- ユーザー45
INSERT INTO user_auth (id, name, avatar, global_name) VALUES ('1001002045', 'tomoya137', 'avatar045', '長谷川智也');
INSERT INTO user_info (id, introduction, lastLoginAt) VALUES ('1001002045', 'ランク上げ頑張ってます！', '2025-05-25T00:45:45.555555');
INSERT INTO user_option (id, show_gender, show_age, show_gender_to_same_sex, show_profile) VALUES ('1001002045', 1, 1, 0, 1);
INSERT INTO user_card_option (id, color, motion) VALUES ('1001002045', 'skyblue', 'slide');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('VALORANT', 'プラチナ', '1001002045');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('Counter-Strike 2', 'マスターガーディアン', '1001002045');
INSERT INTO user_playtime1 (user_id, time_slot) VALUES ('1001002045', '23:30');
INSERT INTO user_playtime2 (user_id, preferred_slot) VALUES ('1001002045', '00:00');
INSERT INTO user_playstyle (user_id, style) VALUES ('1001002045', 'ランク');

-- ユーザー46
INSERT INTO user_auth (id, name, avatar, global_name) VALUES ('1001002046', 'yume138', 'avatar046', '小川夢');
INSERT INTO user_info (id, introduction, lastLoginAt) VALUES ('1001002046', '聞き専ですがよろしく！', '2025-05-23T22:46:46.666666');
INSERT INTO user_option (id, show_gender, show_age, show_gender_to_same_sex, show_profile) VALUES ('1001002046', 0, 1, 1, 1);
INSERT INTO user_card_option (id, color, motion) VALUES ('1001002046', 'white', 'fade');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('PUBG: Battlegrounds', 'エース', '1001002046');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('Paladins', 'マスター', '1001002046');
INSERT INTO user_playtime1 (user_id, time_slot) VALUES ('1001002046', '22:00');
INSERT INTO user_playtime2 (user_id, preferred_slot) VALUES ('1001002046', '22:30');
INSERT INTO user_playstyle (user_id, style) VALUES ('1001002046', '聞き専');

-- ユーザー47
INSERT INTO user_auth (id, name, avatar, global_name) VALUES ('1001002047', 'yoshiki139', 'avatar047', '福島義樹');
INSERT INTO user_info (id, introduction, lastLoginAt) VALUES ('1001002047', 'コーチング募集中です。', '2025-05-22T21:47:47.777777');
INSERT INTO user_option (id, show_gender, show_age, show_gender_to_same_sex, show_profile) VALUES ('1001002047', 1, 0, 1, 1);
INSERT INTO user_card_option (id, color, motion) VALUES ('1001002047', 'teal', 'zoom');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('Overwatch 2', 'ブロンズ', '1001002047');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('Destiny 2', '上級者', '1001002047');
INSERT INTO user_playtime1 (user_id, time_slot) VALUES ('1001002047', '21:30');
INSERT INTO user_playtime2 (user_id, preferred_slot) VALUES ('1001002047', '22:00');
INSERT INTO user_playstyle (user_id, style) VALUES ('1001002047', 'コーチング募集');

-- ユーザー48
INSERT INTO user_auth (id, name, avatar, global_name) VALUES ('1001002048', 'mei140', 'avatar048', '島田芽衣');
INSERT INTO user_info (id, introduction, lastLoginAt) VALUES ('1001002048', '夜はだいたいインしてます。', '2025-05-25T00:48:48.888888');
INSERT INTO user_option (id, show_gender, show_age, show_gender_to_same_sex, show_profile) VALUES ('1001002048', 0, 1, 0, 1);
INSERT INTO user_card_option (id, color, motion) VALUES ('1001002048', 'pink', 'slide');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('VALORANT', 'ダイヤモンド', '1001002048');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('Rainbow Six Siege', 'プラチナ', '1001002048');
INSERT INTO user_playtime1 (user_id, time_slot) VALUES ('1001002048', '23:00');
INSERT INTO user_playtime2 (user_id, preferred_slot) VALUES ('1001002048', '23:30');
INSERT INTO user_playstyle (user_id, style) VALUES ('1001002048', 'ガチプレイ');

-- ユーザー49
INSERT INTO user_auth (id, name, avatar, global_name) VALUES ('1001002049', 'kota141', 'avatar049', '谷口康太');
INSERT INTO user_info (id, introduction, lastLoginAt) VALUES ('1001002049', '昼間もプレイします！', '2025-05-24T14:49:49.999999');
INSERT INTO user_option (id, show_gender, show_age, show_gender_to_same_sex, show_profile) VALUES ('1001002049', 1, 1, 1, 1);
INSERT INTO user_card_option (id, color, motion) VALUES ('1001002049', 'yellow', 'zoom');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('Apex Legends', 'マスター', '1001002049');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('Call of Duty: Modern Warfare II', 'シルバー', '1001002049');
INSERT INTO user_playtime1 (user_id, time_slot) VALUES ('1001002049', '20:30');
INSERT INTO user_playtime2 (user_id, preferred_slot) VALUES ('1001002049', '21:00');
INSERT INTO user_playstyle (user_id, style) VALUES ('1001002049', 'ガチプレイ');

-- ユーザー50
INSERT INTO user_auth (id, name, avatar, global_name) VALUES ('1001002050', 'sana142', 'avatar050', '黒田紗奈');
INSERT INTO user_info (id, introduction, lastLoginAt) VALUES ('1001002050', 'みんなで楽しく！', '2025-05-23T23:50:50.123456');
INSERT INTO user_option (id, show_gender, show_age, show_gender_to_same_sex, show_profile) VALUES ('1001002050', 0, 1, 0, 1);
INSERT INTO user_card_option (id, color, motion) VALUES ('1001002050', 'white', 'fade');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('Paladins', 'ブロンズ', '1001002050');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('Battlefield 2042', '中級者', '1001002050');
INSERT INTO user_playtime1 (user_id, time_slot) VALUES ('1001002050', '19:00');
INSERT INTO user_playtime2 (user_id, preferred_slot) VALUES ('1001002050', '19:30');
INSERT INTO user_playstyle (user_id, style) VALUES ('1001002050', 'カジュアル・アンランク');

-- ユーザー51
INSERT INTO user_auth (id, name, avatar, global_name) VALUES ('1001002051', 'risa143', 'avatar051', '佐々木理沙');
INSERT INTO user_info (id, introduction, lastLoginAt) VALUES ('1001002051', '楽しく一緒に遊びましょう！', '2025-05-25T00:51:51.111111');
INSERT INTO user_option (id, show_gender, show_age, show_gender_to_same_sex, show_profile) VALUES ('1001002051', 1, 1, 0, 1);
INSERT INTO user_card_option (id, color, motion) VALUES ('1001002051', 'purple', 'zoom');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('Apex Legends', 'ゴールド', '1001002051');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('VALORANT', 'ブロンズ', '1001002051');
INSERT INTO user_playtime1 (user_id, time_slot) VALUES ('1001002051', '20:00');
INSERT INTO user_playtime2 (user_id, preferred_slot) VALUES ('1001002051', '20:30');
INSERT INTO user_playstyle (user_id, style) VALUES ('1001002051', 'カジュアル・アンランク');

-- ユーザー52
INSERT INTO user_auth (id, name, avatar, global_name) VALUES ('1001002052', 'taiga144', 'avatar052', '石川大河');
INSERT INTO user_info (id, introduction, lastLoginAt) VALUES ('1001002052', '夜ゲーマーです。', '2025-05-24T23:52:52.222222');
INSERT INTO user_option (id, show_gender, show_age, show_gender_to_same_sex, show_profile) VALUES ('1001002052', 0, 1, 1, 1);
INSERT INTO user_card_option (id, color, motion) VALUES ('1001002052', 'green', 'fade');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('Overwatch 2', 'プラチナ', '1001002052');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('Counter-Strike 2', 'ゴールドノヴァ', '1001002052');
INSERT INTO user_playtime1 (user_id, time_slot) VALUES ('1001002052', '23:00');
INSERT INTO user_playtime2 (user_id, preferred_slot) VALUES ('1001002052', '23:30');
INSERT INTO user_playstyle (user_id, style) VALUES ('1001002052', 'ゆったり');

-- ユーザー53
INSERT INTO user_auth (id, name, avatar, global_name) VALUES ('1001002053', 'kento145', 'avatar053', '村松健人');
INSERT INTO user_info (id, introduction, lastLoginAt) VALUES ('1001002053', 'FPS初心者です。', '2025-05-25T00:53:53.333333');
INSERT INTO user_option (id, show_gender, show_age, show_gender_to_same_sex, show_profile) VALUES ('1001002053', 1, 0, 1, 1);
INSERT INTO user_card_option (id, color, motion) VALUES ('1001002053', 'blue', 'slide');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('Call of Duty: Warzone', 'ランクなし', '1001002053');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('PUBG: Battlegrounds', 'ブロンズ', '1001002053');
INSERT INTO user_playtime1 (user_id, time_slot) VALUES ('1001002053', '21:00');
INSERT INTO user_playtime2 (user_id, preferred_slot) VALUES ('1001002053', '21:30');
INSERT INTO user_playstyle (user_id, style) VALUES ('1001002053', '初心者');

-- ユーザー54
INSERT INTO user_auth (id, name, avatar, global_name) VALUES ('1001002054', 'karin146', 'avatar054', '岡田花凛');
INSERT INTO user_info (id, introduction, lastLoginAt) VALUES ('1001002054', 'VC苦手ですがよろしく！', '2025-05-24T22:54:54.444444');
INSERT INTO user_option (id, show_gender, show_age, show_gender_to_same_sex, show_profile) VALUES ('1001002054', 0, 1, 0, 1);
INSERT INTO user_card_option (id, color, motion) VALUES ('1001002054', 'pink', 'fade');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('Halo Infinite', 'ダイヤモンド', '1001002054');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('Battlefield 2042', '中級者', '1001002054');
INSERT INTO user_playtime1 (user_id, time_slot) VALUES ('1001002054', '22:30');
INSERT INTO user_playtime2 (user_id, preferred_slot) VALUES ('1001002054', '23:00');
INSERT INTO user_playstyle (user_id, style) VALUES ('1001002054', '聞き専');

-- ユーザー55
INSERT INTO user_auth (id, name, avatar, global_name) VALUES ('1001002055', 'hayate147', 'avatar055', '中西颯');
INSERT INTO user_info (id, introduction, lastLoginAt) VALUES ('1001002055', 'ランクマッチ大好き！', '2025-05-25T00:55:55.555555');
INSERT INTO user_option (id, show_gender, show_age, show_gender_to_same_sex, show_profile) VALUES ('1001002055', 1, 1, 1, 1);
INSERT INTO user_card_option (id, color, motion) VALUES ('1001002055', 'yellow', 'zoom');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('VALORANT', 'プラチナ', '1001002055');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('Apex Legends', 'ダイヤモンド', '1001002055');
INSERT INTO user_playtime1 (user_id, time_slot) VALUES ('1001002055', '23:30');
INSERT INTO user_playtime2 (user_id, preferred_slot) VALUES ('1001002055', '00:00');
INSERT INTO user_playstyle (user_id, style) VALUES ('1001002055', 'ランク');

-- ユーザー56
INSERT INTO user_auth (id, name, avatar, global_name) VALUES ('1001002056', 'kaede148', 'avatar056', '田島楓');
INSERT INTO user_info (id, introduction, lastLoginAt) VALUES ('1001002056', 'エンジョイ勢です！', '2025-05-24T21:56:56.666666');
INSERT INTO user_option (id, show_gender, show_age, show_gender_to_same_sex, show_profile) VALUES ('1001002056', 0, 1, 1, 1);
INSERT INTO user_card_option (id, color, motion) VALUES ('1001002056', 'mint', 'slide');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('Call of Duty: Modern Warfare II', 'シルバー', '1001002056');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('Escape from Tarkov', '中級者', '1001002056');
INSERT INTO user_playtime1 (user_id, time_slot) VALUES ('1001002056', '20:30');
INSERT INTO user_playtime2 (user_id, preferred_slot) VALUES ('1001002056', '21:00');
INSERT INTO user_playstyle (user_id, style) VALUES ('1001002056', 'ゆったり');

-- ユーザー57
INSERT INTO user_auth (id, name, avatar, global_name) VALUES ('1001002057', 'shiori149', 'avatar057', '藤井詩織');
INSERT INTO user_info (id, introduction, lastLoginAt) VALUES ('1001002057', 'ガチ勢目指してます！', '2025-05-25T00:57:57.777777');
INSERT INTO user_option (id, show_gender, show_age, show_gender_to_same_sex, show_profile) VALUES ('1001002057', 1, 0, 0, 1);
INSERT INTO user_card_option (id, color, motion) VALUES ('1001002057', 'teal', 'fade');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('Rainbow Six Siege', 'チャンピオン', '1001002057');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('Overwatch 2', 'グランドマスター', '1001002057');
INSERT INTO user_playtime1 (user_id, time_slot) VALUES ('1001002057', '21:00');
INSERT INTO user_playtime2 (user_id, preferred_slot) VALUES ('1001002057', '21:30');
INSERT INTO user_playstyle (user_id, style) VALUES ('1001002057', 'ガチプレイ');

-- ユーザー58
INSERT INTO user_auth (id, name, avatar, global_name) VALUES ('1001002058', 'sou150', 'avatar058', '高木颯');
INSERT INTO user_info (id, introduction, lastLoginAt) VALUES ('1001002058', 'まったり勢です。', '2025-05-24T20:58:58.888888');
INSERT INTO user_option (id, show_gender, show_age, show_gender_to_same_sex, show_profile) VALUES ('1001002058', 0, 1, 1, 1);
INSERT INTO user_card_option (id, color, motion) VALUES ('1001002058', 'gray', 'zoom');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('PUBG: Battlegrounds', 'シルバー', '1001002058');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('Paladins', 'ゴールド', '1001002058');
INSERT INTO user_playtime1 (user_id, time_slot) VALUES ('1001002058', '19:30');
INSERT INTO user_playtime2 (user_id, preferred_slot) VALUES ('1001002058', '20:00');
INSERT INTO user_playstyle (user_id, style) VALUES ('1001002058', 'カジュアル・アンランク');

-- ユーザー59
INSERT INTO user_auth (id, name, avatar, global_name) VALUES ('1001002059', 'tomomi151', 'avatar059', '浜田朋美');
INSERT INTO user_info (id, introduction, lastLoginAt) VALUES ('1001002059', '聞き専ですがよろしく！', '2025-05-25T00:59:59.999999');
INSERT INTO user_option (id, show_gender, show_age, show_gender_to_same_sex, show_profile) VALUES ('1001002059', 1, 1, 1, 1);
INSERT INTO user_card_option (id, color, motion) VALUES ('1001002059', 'brown', 'slide');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('VALORANT', 'アイアン', '1001002059');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('Call of Duty: Modern Warfare II', 'ランクなし', '1001002059');
INSERT INTO user_playtime1 (user_id, time_slot) VALUES ('1001002059', '22:30');
INSERT INTO user_playtime2 (user_id, preferred_slot) VALUES ('1001002059', '23:00');
INSERT INTO user_playstyle (user_id, style) VALUES ('1001002059', '聞き専');

-- ユーザー60
INSERT INTO user_auth (id, name, avatar, global_name) VALUES ('1001002060', 'kohei152', 'avatar060', '大野康平');
INSERT INTO user_info (id, introduction, lastLoginAt) VALUES ('1001002060', 'みんなで勝ちたい！', '2025-05-25T01:00:00.123456');
INSERT INTO user_option (id, show_gender, show_age, show_gender_to_same_sex, show_profile) VALUES ('1001002060', 0, 1, 0, 1);
INSERT INTO user_card_option (id, color, motion) VALUES ('1001002060', 'white', 'fade');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('Counter-Strike 2', 'スプレームマスター', '1001002060');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('Apex Legends', 'ゴールド', '1001002060');
INSERT INTO user_playtime1 (user_id, time_slot) VALUES ('1001002060', '23:00');
INSERT INTO user_playtime2 (user_id, preferred_slot) VALUES ('1001002060', '23:30');
INSERT INTO user_playstyle (user_id, style) VALUES ('1001002060', 'ランク');

-- ユーザー61
INSERT INTO user_auth (id, name, avatar, global_name) VALUES ('1001002061', 'yuto153', 'avatar061', '佐伯優斗');
INSERT INTO user_info (id, introduction, lastLoginAt) VALUES ('1001002061', '夜型で遊んでます！', '2025-05-25T01:01:01.111111');
INSERT INTO user_option (id, show_gender, show_age, show_gender_to_same_sex, show_profile) VALUES ('1001002061', 1, 1, 1, 1);
INSERT INTO user_card_option (id, color, motion) VALUES ('1001002061', 'orange', 'zoom');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('Overwatch 2', 'シルバー', '1001002061');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('VALORANT', 'ゴールド', '1001002061');
INSERT INTO user_playtime1 (user_id, time_slot) VALUES ('1001002061', '22:00');
INSERT INTO user_playtime2 (user_id, preferred_slot) VALUES ('1001002061', '22:30');
INSERT INTO user_playstyle (user_id, style) VALUES ('1001002061', 'カジュアル・アンランク');

-- ユーザー62
INSERT INTO user_auth (id, name, avatar, global_name) VALUES ('1001002062', 'sakura154', 'avatar062', '青山桜');
INSERT INTO user_info (id, introduction, lastLoginAt) VALUES ('1001002062', '初心者大歓迎！', '2025-05-25T01:02:02.222222');
INSERT INTO user_option (id, show_gender, show_age, show_gender_to_same_sex, show_profile) VALUES ('1001002062', 0, 1, 0, 1);
INSERT INTO user_card_option (id, color, motion) VALUES ('1001002062', 'pink', 'fade');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('Apex Legends', 'ランクなし', '1001002062');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('Paladins', 'ブロンズ', '1001002062');
INSERT INTO user_playtime1 (user_id, time_slot) VALUES ('1001002062', '20:00');
INSERT INTO user_playtime2 (user_id, preferred_slot) VALUES ('1001002062', '20:30');
INSERT INTO user_playstyle (user_id, style) VALUES ('1001002062', '初心者');

-- ユーザー63
INSERT INTO user_auth (id, name, avatar, global_name) VALUES ('1001002063', 'shunpei155', 'avatar063', '井上俊平');
INSERT INTO user_info (id, introduction, lastLoginAt) VALUES ('1001002063', '聞き専メインです。', '2025-05-25T01:03:03.333333');
INSERT INTO user_option (id, show_gender, show_age, show_gender_to_same_sex, show_profile) VALUES ('1001002063', 1, 1, 1, 1);
INSERT INTO user_card_option (id, color, motion) VALUES ('1001002063', 'mint', 'slide');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('Counter-Strike 2', 'グローバルエリート', '1001002063');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('Destiny 2', '上級者', '1001002063');
INSERT INTO user_playtime1 (user_id, time_slot) VALUES ('1001002063', '23:30');
INSERT INTO user_playtime2 (user_id, preferred_slot) VALUES ('1001002063', '00:00');
INSERT INTO user_playstyle (user_id, style) VALUES ('1001002063', '聞き専');

-- ユーザー64
INSERT INTO user_auth (id, name, avatar, global_name) VALUES ('1001002064', 'kaho156', 'avatar064', '山口果歩');
INSERT INTO user_info (id, introduction, lastLoginAt) VALUES ('1001002064', 'エンジョイ勢です！', '2025-05-25T01:04:04.444444');
INSERT INTO user_option (id, show_gender, show_age, show_gender_to_same_sex, show_profile) VALUES ('1001002064', 0, 0, 1, 1);
INSERT INTO user_card_option (id, color, motion) VALUES ('1001002064', 'green', 'zoom');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('Call of Duty: Modern Warfare II', 'シルバー', '1001002064');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('Rainbow Six Siege', 'ブロンズ', '1001002064');
INSERT INTO user_playtime1 (user_id, time_slot) VALUES ('1001002064', '21:00');
INSERT INTO user_playtime2 (user_id, preferred_slot) VALUES ('1001002064', '21:30');
INSERT INTO user_playstyle (user_id, style) VALUES ('1001002064', 'カジュアル・アンランク');

-- ユーザー65
INSERT INTO user_auth (id, name, avatar, global_name) VALUES ('1001002065', 'fumi157', 'avatar065', '岩田文');
INSERT INTO user_info (id, introduction, lastLoginAt) VALUES ('1001002065', 'ガチ勢です！', '2025-05-25T01:05:05.555555');
INSERT INTO user_option (id, show_gender, show_age, show_gender_to_same_sex, show_profile) VALUES ('1001002065', 1, 1, 0, 1);
INSERT INTO user_card_option (id, color, motion) VALUES ('1001002065', 'yellow', 'slide');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('VALORANT', 'レイディアント', '1001002065');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('Overwatch 2', 'トップ500', '1001002065');
INSERT INTO user_playtime1 (user_id, time_slot) VALUES ('1001002065', '22:30');
INSERT INTO user_playtime2 (user_id, preferred_slot) VALUES ('1001002065', '23:00');
INSERT INTO user_playstyle (user_id, style) VALUES ('1001002065', 'ガチプレイ');

-- ユーザー66
INSERT INTO user_auth (id, name, avatar, global_name) VALUES ('1001002066', 'shiori158', 'avatar066', '松原詩織');
INSERT INTO user_info (id, introduction, lastLoginAt) VALUES ('1001002066', '昼間もよくインしてます！', '2025-05-25T01:06:06.666666');
INSERT INTO user_option (id, show_gender, show_age, show_gender_to_same_sex, show_profile) VALUES ('1001002066', 0, 1, 1, 1);
INSERT INTO user_card_option (id, color, motion) VALUES ('1001002066', 'teal', 'fade');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('PUBG: Battlegrounds', 'ダイヤモンド', '1001002066');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('Paladins', 'ゴールド', '1001002066');
INSERT INTO user_playtime1 (user_id, time_slot) VALUES ('1001002066', '20:00');
INSERT INTO user_playtime2 (user_id, preferred_slot) VALUES ('1001002066', '20:30');
INSERT INTO user_playstyle (user_id, style) VALUES ('1001002066', 'ゆったり');

-- ユーザー67
INSERT INTO user_auth (id, name, avatar, global_name) VALUES ('1001002067', 'ryusei159', 'avatar067', '高橋龍星');
INSERT INTO user_info (id, introduction, lastLoginAt) VALUES ('1001002067', 'コーチング可です！', '2025-05-25T01:07:07.777777');
INSERT INTO user_option (id, show_gender, show_age, show_gender_to_same_sex, show_profile) VALUES ('1001002067', 1, 1, 1, 1);
INSERT INTO user_card_option (id, color, motion) VALUES ('1001002067', 'skyblue', 'zoom');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('Call of Duty: Warzone', 'グランドマスター', '1001002067');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('Apex Legends', 'プレデター', '1001002067');
INSERT INTO user_playtime1 (user_id, time_slot) VALUES ('1001002067', '23:00');
INSERT INTO user_playtime2 (user_id, preferred_slot) VALUES ('1001002067', '23:30');
INSERT INTO user_playstyle (user_id, style) VALUES ('1001002067', 'コーチング可');

-- ユーザー68
INSERT INTO user_auth (id, name, avatar, global_name) VALUES ('1001002068', 'riku160', 'avatar068', '藤本陸');
INSERT INTO user_info (id, introduction, lastLoginAt) VALUES ('1001002068', '気軽にどうぞ！', '2025-05-25T01:08:08.888888');
INSERT INTO user_option (id, show_gender, show_age, show_gender_to_same_sex, show_profile) VALUES ('1001002068', 0, 1, 0, 1);
INSERT INTO user_card_option (id, color, motion) VALUES ('1001002068', 'brown', 'slide');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('Halo Infinite', 'オニックス', '1001002068');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('Destiny 2', '中級者', '1001002068');
INSERT INTO user_playtime1 (user_id, time_slot) VALUES ('1001002068', '22:00');
INSERT INTO user_playtime2 (user_id, preferred_slot) VALUES ('1001002068', '22:30');
INSERT INTO user_playstyle (user_id, style) VALUES ('1001002068', 'カジュアル・アンランク');

-- ユーザー69
INSERT INTO user_auth (id, name, avatar, global_name) VALUES ('1001002069', 'sanae161', 'avatar069', '佐野早苗');
INSERT INTO user_info (id, introduction, lastLoginAt) VALUES ('1001002069', '聞き専ですが楽しんでます。', '2025-05-25T01:09:09.999999');
INSERT INTO user_option (id, show_gender, show_age, show_gender_to_same_sex, show_profile) VALUES ('1001002069', 1, 0, 1, 1);
INSERT INTO user_card_option (id, color, motion) VALUES ('1001002069', 'yellow', 'zoom');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('Battlefield 2042', '上級者', '1001002069');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('Rainbow Six Siege', 'コッパー', '1001002069');
INSERT INTO user_playtime1 (user_id, time_slot) VALUES ('1001002069', '21:00');
INSERT INTO user_playtime2 (user_id, preferred_slot) VALUES ('1001002069', '21:30');
INSERT INTO user_playstyle (user_id, style) VALUES ('1001002069', '聞き専');

-- ユーザー70
INSERT INTO user_auth (id, name, avatar, global_name) VALUES ('1001002070', 'takashi162', 'avatar070', '小池敬');
INSERT INTO user_info (id, introduction, lastLoginAt) VALUES ('1001002070', 'ガチ勢目指して努力中！', '2025-05-25T01:10:10.123456');
INSERT INTO user_option (id, show_gender, show_age, show_gender_to_same_sex, show_profile) VALUES ('1001002070', 0, 1, 0, 1);
INSERT INTO user_card_option (id, color, motion) VALUES ('1001002070', 'navy', 'fade');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('VALORANT', 'ダイヤモンド', '1001002070');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('Call of Duty: Modern Warfare II', 'マスター', '1001002070');
INSERT INTO user_playtime1 (user_id, time_slot) VALUES ('1001002070', '23:00');
INSERT INTO user_playtime2 (user_id, preferred_slot) VALUES ('1001002070', '23:30');
INSERT INTO user_playstyle (user_id, style) VALUES ('1001002070', 'ガチプレイ');