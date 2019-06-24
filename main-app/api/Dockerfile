FROM node:12.2-alpine as prod

WORKDIR /code

COPY package*.json ./
RUN npm install && npm cache clean --force

ENV PATH /code/node_modules/.bin:$PATH

COPY . .

CMD ["node", "./server/index.js"]
