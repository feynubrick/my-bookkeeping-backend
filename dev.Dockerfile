FROM node:16.17-bullseye
WORKDIR /app

RUN npm install -g typescript
COPY package*.json ./
RUN npm install

COPY tsconfig.json ./
COPY ./src/ src/

CMD npm run dev
