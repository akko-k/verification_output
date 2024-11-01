# FROM --platform=linux/amd64 node:22-alpine
FROM node:22-alpine

WORKDIR /backend

COPY /backend/package*.json .
# RUN npm install --frozen-lockfile 
RUN yarn install --frozen-lockfile && yarn global add ts-node

RUN yarn global add nodemon

COPY /backend .

CMD ["npm", "run", "dev"]
