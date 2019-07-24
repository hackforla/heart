FROM node:12.2-alpine

WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package*.json ./
RUN npm install && npm cache clean --force
RUN npm rebuild node-sass
RUN npm audit fix

COPY . .

CMD ["npm", "start"]
