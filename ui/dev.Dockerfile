FROM node:18-alpine

WORKDIR /app

COPY ./package.json .
COPY . .
RUN rm -rf src
RUN npm install

EXPOSE 5173
VOLUME "/app/src"
ENV VITE_DB_URL "https://do-good-pb.avashist.com"

CMD ["npm", "run", "dev"]