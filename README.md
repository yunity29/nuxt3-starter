# Nuxt 3 Minimal Starter
Nuxt3 rc3版のスターター設定です。
Nuxt3については下記のドキュメントをご覧ください。
 [nuxt 3 documentation](https://v3.nuxtjs.org)

## ローカル開発設定
ローカルNode環境で開発する方法とDockerコンテナ環境の2つの方法があります。
ローカルNode環境だと指定したNode.jsのバージョンを利用して開発する必要があります。
Dockerコンテナ環境で開発する場合は、ホットリロードに若干不安があります。。。


### ローカルNode環境
開発PC環境にNode.js、およびYarnの環境が設定されていること。
`Package.json`の`engines > node`に指定しているNodeのバージョンを利用してください。
[検索：node　バージョン　切り替え方法](https://www.google.com/search?q=node%E3%80%80%E3%83%90%E3%83%BC%E3%82%B8%E3%83%A7%E3%83%B3%E3%80%80%E5%88%87%E3%82%8A%E6%9B%BF%E3%81%88%E6%96%B9%E6%B3%95&sxsrf=ALiCzsZyWF4zvlMl0cABfR_QgSPJ2ZACFg%3A1654929919526&ei=_zmkYvvjH_Gh1e8PkIey2AM&ved=0ahUKEwi73-yv5qT4AhXxUPUHHZCDDDsQ4dUDCA4&uact=5&oq=node%E3%80%80%E3%83%90%E3%83%BC%E3%82%B8%E3%83%A7%E3%83%B3%E3%80%80%E5%88%87%E3%82%8A%E6%9B%BF%E3%81%88%E6%96%B9%E6%B3%95&gs_lcp=Cgdnd3Mtd2l6EAMyBQgAEKIEMgUIABCiBDIFCAAQogQyBQgAEKIEOgcIIxCwAhAnOgYIIRAKECpKBAhBGAFKBAhGGABQ3Q5Yz1hg7l9oCnAAeACAAZgBiAHnGZIBBDcuMjKYAQCgAQHAAQE&sclient=gws-wiz)


```bash

# Nuxtディレクトへ移動
cd frontend/

# node_modulesのインストール
yarn install

# Nuxt開発サーバの起動
yarn dev
```

### Dockerコンテナ環境
開発PCにDockerデスクトップアプリがインストールされていること。
```bash
# Dockerイメージの作成、コンテナ起動
docker compose up -d

# コンテナ再起動
docker compose restart

# コンテナ停止
docker compose stop
```

## 本番サーバ稼働



```bash

# production用コードをビルド
yarn build

# Nuxtサーバ起動
yarn preview
```
