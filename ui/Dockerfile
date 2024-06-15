FROM node:18-alpine

WORKDIR /app

COPY ./package.json .

RUN npm install

COPY . .
EXPOSE 8080

ENV VITE_DB_URL "https://do-good-pb.avashist.com"
RUN npm run build

CMD ["npm", "run", "preview"]