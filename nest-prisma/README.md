# nest-prisma

- [nest-prisma](#nest-prisma)
- [インストール](#インストール)
- [モデルの生成](#モデルの生成)
- [クライアント生成](#クライアント生成)

- nestとprismaでの開発を体験してみる
  


# インストール
```shell
yarn add prisma --dev
yarn prisma init
```

- 生成されるファイル
- schema.prisma データベースの接続とモデルの定義
- .env 環境変数

- 基本的にコマンドはyarn prisma 〇〇となる

# モデルの生成
- schema.prismaにモデルを定義する
- コマンドで生成する
```shell
yarn prisma migrate dev --name init
```
- データベースとマーグレーションファイルが生成される



# クライアント生成
- prisma generateコマンドを打つとモデル特有のCRUDオペレーションを生成することができる
- 生成されたコードはnode_modules/@prisma/client内に入っている?
- 
