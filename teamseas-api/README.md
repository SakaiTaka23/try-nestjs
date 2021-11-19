# teamseas-api

- [teamseas-api](#teamseas-api)
  - [参考](#参考)
  - [型の生成](#型の生成)
  - [時間の取り扱い](#時間の取り扱い)



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
