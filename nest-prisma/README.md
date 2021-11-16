# nest-prisma

- [nest-prisma](#nest-prisma)
- [インストール](#インストール)
- [モデルの生成](#モデルの生成)

- nestとprismaでの開発を体験してみる
  


# インストール
```shell
yarn add prisma --dev
yarn prisma
npx prisma init
```

- 生成されるファイル
- schema.prisma データベースの接続とモデルの定義
- .env 環境変数



# モデルの生成
- schema.prismaにモデルを定義する
- コマンドで生成する
```shell
npx prisma migrate dev --name init
```
- データベースとマーグレーションファイルが生成される
