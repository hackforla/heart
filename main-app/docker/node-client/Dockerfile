FROM node:10.14.2-alpine

COPY . .

WORKDIR /code

RUN npm install

RUN npm rebuild node-sass

CMD ["npm", "start"]
