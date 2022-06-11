# Node.jsのバージョンを指定
FROM node:16.13.2-alpine3.15

# コンテナにコピー
RUN mkdir src

RUN apk update && \
    apk upgrade && \
    apk add git && \
    cd src