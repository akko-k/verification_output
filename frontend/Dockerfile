FROM node:22-alpine

WORKDIR /usr/src/frontend

RUN apk update && \
    apk add --no-cache xdg-utils

COPY package.json yarn.lock ./
RUN yarn install

COPY . .

EXPOSE 3000

CMD ["yarn", "start"]