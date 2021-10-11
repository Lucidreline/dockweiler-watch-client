FROM node:15

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./

RUN npm install --unsafe-perm=true --allow-root

COPY . .

CMD ["npm", "start"]