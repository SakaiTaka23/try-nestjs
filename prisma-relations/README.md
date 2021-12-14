# Prisma Relations

## One-to-many
**Prisma schema**
https://www.prisma.io/docs/concepts/components/prisma-schema/relations/one-to-many-relations
- oneの方にはmanyの型の配列が入る
  - 特にデコレーターの必要はなし
- manyの方には対象のIDとオブジェクト自体を入れる
  - オブジェクトの方には@relationデコレーターを定義する
  - リレーションでデコレーターはmanyの方のリレーションを入れるカラムとoneの方の参照先カラムを入れる

**データー取得**
https://www.prisma.io/docs/concepts/components/prisma-client/relation-queries
- データ取得時にincludeを入れることによって取得できる
- selectを入れる場合は元のテーブルとリレーションで一つのオブジェクトに入れる

## Many-to-many
**Prisma schema**
https://www.prisma.io/docs/concepts/components/prisma-schema/relations/many-to-many-relations
- ピボットテーブルも含めてスキーマに定義する
- リレーションの組み方はm-1と同じ

## seed
- fakerを使うことにより擬似データを作る

```shell
yarn add faker @types/faker --dev
```
- 使えるリスト

https://www.npmjs.com/package/faker
