# nest-graphql

- [nest-graphql](#nest-graphql)
- [Quick start](#quick-start)
  - [Getting started with GraphQL & TypeScript](#getting-started-with-graphql--typescript)
- [Tutorial](#tutorial)
- [Fundamentals](#fundamentals)
- [Database Integration](#database-integration)



# Quick start
- Nestではコード駆動・スキーマ駆動の2つから開発ができる
- コードベース デコレーターやクラスを使ってスキーマを作る
- スキーマベース SDLによって開発を進める スキーマからTypeScriptのコードを生成
- 個人的にスキーマベースの方が好き



## Getting started with GraphQL & TypeScript
- 最上位のモジュールにGraphQLModuleをインポートして設定を書いていく
- スキーマ駆動の場合どこにgraqhqlファイルを置いたのか指定する



# Tutorial 
https://www.youtube.com/watch?v=geYvdbpo3cA&list=WL



# Fundamentals
- code base vs schema base
  - typeormでモデルが流用できるからcode baseの方が良いよ

- 使ったライブラリ

```shell
yarn add @nestjs/graphql graphql-tools graphql apollo-server-express
```


- 現状graphql v16で動かないのでバージョンを下げること

```shell
yarn upgrade graphql@15.7.1
```

- 基本的なコマンド

```shell
#リゾルバ生成
nest g resolver resolver-name

# サービス生成
nest g service service-name

# モジュール生成
nest g module module-name
```

- inputを作る理由
  - バリデーションができるようになる
- バリデーションライブラリ

```shell
yarn add class-validator class-transformer
```



# Database Integration
- 今回はTypeORMを使ってみる
