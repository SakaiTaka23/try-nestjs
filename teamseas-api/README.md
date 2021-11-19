# teamseas-api

- [teamseas-api](#teamseas-api)
  - [参考](#参考)
  - [型の生成](#型の生成)
  - [時間の取り扱い](#時間の取り扱い)
  - [prisma](#prisma)
  - [schema](#schema)
  - [migration](#migration)
  - [seeder](#seeder)
  - [生成される型](#生成される型)



## 参考
https://www.youtube.com/watch?v=lddaR8Y-gko&t=182s



## 型の生成
- generate-typingsを作ってそれを実行することによって型を生成する
- package.jsonにもコマンドのショートカットを生成
- アプリ内の.graphqlファイルを監視し変更があれば自動的に型生成を行う



## 時間の取り扱い
- デフォルトでgraphqlで時間を表現できないためgraphql-iso-dateというパッケージをインストールした
- app.moduleでも定義する
- 他にもやり方ありそう



## prisma
```shell
yarn add prisma --dev
yarn prisma init
```

- .envは.ignoreに追加して.env.exampleを追加した方が良いかも



## schema
- キーバリューではなくスペースで要素と型を記述
- スキーマは基本的に必須項目で必須でないものは「?」を追加する
- デコレーションによってデフォルトやidの定義ができる

- 2つのスキーマ両方で同じようなものを定義するのめんどくさくない？
  - ほとんどのケースでは同じようなスキーマになってしまう
  - 一方で内部でのみ使用するといったこともあるので使いやすくなることもある
- prismaのスキーマを変更した場合型定義も忘れ内容に再生成する
```shell
yarn prisma generate
```


## migration
```shell
yarn prisma migrate dev --name init
```
- 名前は必須
- フラグをつけない場合後で聞かれる



## seeder
- シーダーはprisma内のファイルに記入
- clientをインポートして作っていく
- prisma用のコマンドを作ることによってシーダーを実行する
- このときprismaファイル内でsrc内ではないのでスクリプト内にコマンドを記述すると動かない

```shell
yarn prisma db seed
```



## 生成される型
- その型においてuniqueidを保持した型やアップデート用の型も存在する
- そのままリゾルバーの引数として受け取っても大丈夫そう
  
- 今回モデルに関してはprismaの関数で定義されるため再定義する必要はない
- モデルの型が必要な場合はgraphqlのスキーマから生成された型を使うことができる
- dtoに関してもそれぞれに適した型が存在してくれるのでほとんどの場合必要なさそう
