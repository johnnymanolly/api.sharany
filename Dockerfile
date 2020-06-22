FROM node:11.8

WORKDIR ./

COPY package.json ./
RUN npm install
COPY . .

EXPOSE 4000

CMD ["npm", "start"]