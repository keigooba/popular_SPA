# popular_SPA

[popular](https://github.com/keigooba/popular)をReactでSPA化<br />
コンポーネント分割はatomic designを採用

サイト URL:https://popular-e7b81.web.app

## 概要

概要は[popular](https://github.com/keigooba/popular)に記載

## 初期設定


## 開発環境
docker version 20.10.6が必要。なければ下記URLからダウンロード。<br />
https://hub.docker.com/

localhostで起動・dockerコンテナ内確認
1. gitリポジトリをクローンする
```
git clone https://github.com/keigooba/popular_SPA.git
```
2. dockerをビルド
```
docker-compose build
```
3. なぜかreact-scriptsが動かないので、コンテナを起動してインストール
```
docker-compose run --rm node sh -c "cd popular && npm i react-scripts"
```
4. docker起動(port:3000が必要)
```
docker-compose up -d
```
5. dockerコンテナに入る
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

学習記録
1. モダンJavaScriptの基礎から始める挫折しないためのReact入門 (https://www.udemy.com/share/103Myn3@KL4e1443gHfrxlLXlrs87ziA1KEXNMYwsqSPjVVWOnYFlkw22TT6QYfO5Krg_bf5oA==/ ) 7月3日修了<br>
2. Reactに入門した人のためのもっとReactが楽しくなるステップアップコース完全版 (https://www.udemy.com/share/104dFO3@-9MuvrbpaUp6K1W-eycsl7iJa1w9y4Tj30B2L8Gn9Qg-qXBErBR7xCcua5ZLe2LFYg==/ ) 7月10日修了<br>
3. 最速で学ぶFirebase + React Hooks (TypeScript) (https://www.udemy.com/share/103HLe3@AF0rN8q5mSmCqLVdyz-JnyDK-dbmizt6TNxRhnS2ztnlE4-iplFJyYoYpVG_krdHHg==/ ) 7月10日〜<br>
4. 本アプリ8月2日デプロイ　
