FROM node:alpine

WORKDIR /code

COPY ./package.json ./
RUN npm install

COPY . .

CMD ["npm", "debug"]
