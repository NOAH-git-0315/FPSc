# FPSc

![Next.js](https://img.shields.io/badge/Framework-Next.js-000?logo=nextdotjs)
![Spring Boot](https://img.shields.io/badge/Backend-SpringBoot-6DB33F?logo=springboot)
![MySQL](https://img.shields.io/badge/Database-MySQL-blue?logo=mysql)
![Docker](https://img.shields.io/badge/DevEnv-Docker-2496ED?logo=docker)

## 🎮 概要

**FPSc（エフピーエスシー）** は、Discord 認証を用いた **FPSプレイヤー向けのフレンド募集掲示板サイト** です。

直感的な UI と多様な条件検索によって、効率的に Discord 上でのマッチングを行えるよう設計しています。

> ⚠️ ご利用に際して発生したトラブルについては一切責任を負いかねます。

## 🌟 このプロジェクトで実現したかったこと

- フロント・バックエンドを分離した **ヘッドレスな構成**
- ユーザーの体験を第一にした UI 設計
- Docker を活用した本格的な開発環境の構築
- 自分の強みである **Next.js を活かしたフロント開発**

---

## 🚀 技術スタック

### 🔹 フロントエンド

- 開発言語: `node:18.17.0-alpine`
- フレームワーク: [Next.js](https://nextjs.org/)（App Router + CSR/SSR）
- UI設計: Tailwind CSS / TypeScript
- 認証: Discord OAuth2

### 🔸 バックエンド（参考）

- 開発言語: `openjdk:21-slim`（3.9.6-eclipse-temurin-21）
- フレームワーク: Spring Boot
- API: REST

### 🧱 インフラ・その他

- データベース: MySQL
- 環境構築: Docker / docker-compose
- バージョン管理: Git / GitHub

---

## 🖥️ 画面イメージ（任意）

> ここにUIスクリーンショット（例：投稿一覧、検索画面、ログイン画面など）を貼ってください

---

## 🛠️ ローカル開発手順（簡略）

```bash
# リポジトリをクローン
git clone https://github.com/your-username/fpsc.git
cd fpsc

# docker で全体の環境を起動
docker-compose up --build

# フロントのみ（Next.js）を開発モードで起動する場合
cd frontend
npm install
npm run dev
```
