# verification-outoput

CRUD 処理と以下の機能を実装

- 静的解析
- 単体テスト
- CI

今後、E2E テストを実装予定

## 環境構築

### 1. env ファイルを作成

- ルートディレクトリ直下に「.env.sample」をコピーして「.env」を作成

```
cp .env.sample .env
```

- backend ディレクトリに移動し、「.env.sample」をコピーして「.env」を作成

```
cd backend
cp .env.sample .env
```

### 2. docker 起動

- ビルド

```
sudo docker compose build
```

'Password:'と聞かれるので、ご自身の PC のパスワードを入力

- コンテナ起動

```
docker compose up
```

## 3. マイグレーションとシーディングを実行

ルートディレクトリで以下のコマンドを実行

```
chmod +x init.sh
./init.sh
```

## 4.ブラウザに表示

```
http://localhost:3000/
```

## アプリケーションの仕様

### 仕様

- Todo リスト
  - Todo 一覧表示
  - Todo 検索処理
  - Todo 新規登録処理
  - Todo 詳細表示
  - Todo 編集処理
  - Todo 削除処理

### 構成技術

- TypeScript
- React
- CSS Modules
- Jest
- Express
- TypeOrm
- Storybook
- Mysql
- Docker
- ESLint
- Prettier

## テスト

```
docker exec -it react_frontend sh
yarn test
```

[![CI](https://github.com/akko-k/verification_output/actions/workflows/ci.yml/badge.svg)](https://github.com/akko-k/verification_output/actions/workflows/ci.yml)
