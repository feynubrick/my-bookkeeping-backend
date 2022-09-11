FROM node:16.17-bullseye
WORKDIR /usr/src/app

RUN npm install -g typescript
COPY package*.json ./
RUN npm install --production

COPY tsconfig.json ./
COPY ./src/* src/
RUN npm run build

CMD npm run start