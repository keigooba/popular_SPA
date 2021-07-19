# popular_SPA

[popular](https://github.com/keigooba/popular)をReactでSPA化<br />
コンポーネント分割はatomic designを採用

サイト URL:https://popular-32pe64nwja-an.a.run.app

## 概要

概要は[popular](https://github.com/keigooba/popular)に記載

## 初期設定


## 開発環境
docker version 20.10.6が必要。なければ下記URLからダウンロード。<br />
https://hub.docker.com/

localhostで起動・dockerコンテナ内確認
1. gitリポジトリをクローンする
```
git clone https://github.com/keigooba/popular.git
```
2. リポジトリのルートディレクトリからdocker起動(port:8080が必要)
```
cd docker && docker-compose up -d
```
3. dockerコンテナに入る
```
docker-compose exec node bash
```

## 機能

## 技術

バックエンド
1. Go1.16.2

フロントエンド
1. React
2. chakra-ui

インフラ
1. Cloud Build + Cloud Run
2. Cloud Firestore(NoSQL)
