FROM node:iron-alpine3.21

RUN mkdir -p /app

WORKDIR /app

RUN npm install json-server

COPY db.json /app/db.json

EXPOSE 3000

CMD ["npx", "json-server", "db.json"]
