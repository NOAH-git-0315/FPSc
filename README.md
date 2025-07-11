# FPSc

![Next.js](https://img.shields.io/badge/Framework-Next.js-000?logo=nextdotjs)
![Spring Boot](https://img.shields.io/badge/Backend-SpringBoot-6DB33F?logo=springboot)
![MySQL](https://img.shields.io/badge/Database-MySQL-blue?logo=mysql)
![Docker](https://img.shields.io/badge/DevEnv-Docker-2496ED?logo=docker)

## 🎮 概要

**FPSc（エフピーエスシー）** は、Discord 認証を利用した **FPSプレイヤー向けのフレンド募集掲示板サイト** です。  
従来のDiscordフレンド募集サイトでは、毎回Discord IDや募集メッセージを投稿し直す必要があり、古い投稿はすぐに新しい投稿に埋もれてしまいます。さらに、ユーザーを検索する機能も備わっていませんでした。  
そこで、もっと手軽に使えて、しかも検索機能を備えたフレンド募集サイトがあったら便利だと考え、本サイトを開発しました。

> ⚠️ ご利用によって発生したトラブルなどについては、一切の責任を負いかねます。

## 🌟 このプロジェクトで実現したかったこと

- フロントエンドとバックエンドを分離した **ヘッドレス構成**
- ユーザー体験を最優先に考えた直感的でわかりやすい UI 設計
- 複数の条件で細かく絞り込めるユーザー検索機能
- Docker を活用した本格的な開発環境構築
- **Next.js** を活かした高速かつ柔軟なフロントエンド開発

---

## 🚀 技術スタック

### 🔹 フロントエンド

- 開発言語: `node:18.17.0-alpine`
- フレームワーク: [Next.js](https://nextjs.org/)（App Router + CSR/SSR）
- UI設計: MUI（Material-UI） / TypeScript
- 認証: Discord OAuth2

### 🔸 バックエンド（参考）

- 開発言語: `openjdk:21-slim`（21）
- フレームワーク: Spring Boot **3.4.4**
- API: REST

### 🧱 インフラ・その他

- データベース: MySQL
- 環境構築: Docker / docker-compose
- バージョン管理: Git / GitHub

### 🛄 ER図

![ER](ER.png)

---

## 🖥️ 画面操作について

<p align="center">
  <img src="md1.png" width="45%" />
  <img src="md2.png" width="45%" />
</p>
<p align="center">
  <img src="md3.png" width="45%" />
  <img src="md4.png" width="45%" />
</p>

- ①: ユーザーカード一覧が表示されます（/）
- ②: 未実装。今後サーバー一覧を表示予定（/server）
- ③: ログイン中はプロフィール編集ページを表示、未ログイン時はDiscordのOAuth認証ページ(4枚目)にリダイレクト（/profile）
- ④: 自分のユーザーカードの表示順位を上昇させます（㋐部分が「たった今」に変わります）
- ⑤: ログイン中はDiscordのアイコンを表示（/profile）
- ⑥: ユーザーカード一覧のページを切り替えます。取得したカード数に応じてページ数が変動
- ⑦: 詳細検索。ゲーム、ランク、プレイスタイル、プレイ時間などで絞り込み可能。パラメータ変更後、自動でバックエンドから再フェッチ
- ⑧: 各ユーザーのフレンド募集用カード。㋐は表示順位アップからの経過時間、㋑はアニメーション付きで詳細展開、㋒はフレンド申請用IDをクリップボードにコピー
- ⑨: チェックを入れると、自分のユーザーカードを公開
- ⑩: プロフィール編集の変更を反映
- ⑪: アカウントを削除

---

## 🔆 今後実装予定の機能

- introductionテキストのキーワード検索
- お気に入りユーザー機能
- 「IDをコピー」ボタン押下時のアニメーション追加
- サーバー募集機能
- Google広告の導入

---
