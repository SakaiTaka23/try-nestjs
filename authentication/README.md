# authentication

- [authentication](#authentication)
  - [インストール](#インストール)
  - [実装](#実装)
    - [バニラpassportの実装手順](#バニラpassportの実装手順)
    - [今回の手順](#今回の手順)


## インストール
- 基本的にnest/passport passportは必須
- その他にpassport-local(jwt)などを状況に応じて入れる

```sell
yarn add @nestjs/passport passport passport-local

yarn add -D @types/passport-local
```


## 実装

### バニラpassportの実装手順
1. 特定のストラテジーを継承しオプションを渡す
2. コールバックとして認証に必要な関数を実装する


### 今回の手順
- authというモジュールを作成
- 認証のロジックはサービスに記述
- ロジックの使用はlocal.strategy.tsという専用のファイルを書いて呼び出し
  - パスポートのストラレジーを継承して実装する
- 
