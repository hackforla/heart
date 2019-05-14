FROM node:12.2-alpine

WORKDIR /code

COPY ./package.json ./
RUN npm install
RUN npm rebuild node-sass

COPY . .

CMD ["npm", "run", "start"]
