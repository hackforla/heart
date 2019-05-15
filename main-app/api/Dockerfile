FROM node:12.2-alpine

WORKDIR /code

COPY ./package.json ./
RUN npm install

COPY . .

CMD ["npm", "debug"]
