DELETE FROM user_game;
DELETE FROM user_playtime1;
DELETE FROM user_playtime2;
DELETE FROM user_playstyle;
DELETE FROM user_info;
DELETE FROM user_option;
DELETE FROM user_card_option;
DELETE FROM user_auth;

-- 1. UserAuth（親）
INSERT INTO user_auth (id, name, avatar, global_name) VALUES ('user1', 'テスト太郎', 'avatar123', 'TaroTest');

-- 2. UserInfo, UserOption, CardOption（@MapsIdでidは"user1"）
INSERT INTO user_info (id, introduction) VALUES ('user1', 'よろしくお願いします。FPSゲームが好きです！');
INSERT INTO user_option (id, show_gender, show_age, show_gender_to_same_sex, show_profile) VALUES ('user1', 1, 0, 0, 1);
INSERT INTO user_card_option (id, color, motion) VALUES ('user1', 'blue', 'slide');

-- 3. Game（user_idがuser1）
INSERT INTO user_game (title, user_rank, user_id) VALUES ('Apex Legends', 'ゴールド', 'user1');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('VALORANT', 'シルバー', 'user1');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('Battlefield 2042', '中級者', 'user1');
INSERT INTO user_game (title, user_rank, user_id) VALUES ('Counter-Strike 2', 'ゴールドノヴァ', 'user1');

-- 4. user_playtime1, user_playtime2（例：18:00〜22:00のうち4つ）
INSERT INTO user_playtime1 (user_id, time_slot) VALUES ('user1', '18:00');
INSERT INTO user_playtime1 (user_id, time_slot) VALUES ('user1', '18:30');
INSERT INTO user_playtime1 (user_id, time_slot) VALUES ('user1', '19:00');
INSERT INTO user_playtime1 (user_id, time_slot) VALUES ('user1', '19:30');

INSERT INTO user_playtime2 (user_id, preferred_slot) VALUES ('user1', '20:00');
INSERT INTO user_playtime2 (user_id, preferred_slot) VALUES ('user1', '20:30');
INSERT INTO user_playtime2 (user_id, preferred_slot) VALUES ('user1', '21:00');
INSERT INTO user_playtime2 (user_id, preferred_slot) VALUES ('user1', '21:30');

-- 5. user_playstyle
INSERT INTO user_playstyle (user_id, style) VALUES ('user1', 'ランク');
INSERT INTO user_playstyle (user_id, style) VALUES ('user1', 'ガチプレイ');
INSERT INTO user_playstyle (user_id, style) VALUES ('user1', 'カジュアル・アンランク');
INSERT INTO user_playstyle (user_id, style) VALUES ('user1', '初心者');