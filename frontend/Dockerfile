FROM node:lts as build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run prod

FROM caddy:latest

COPY --from=build /app/dist/web-clipboard .

COPY Caddyfile /etc/caddy/Caddyfile

EXPOSE 80