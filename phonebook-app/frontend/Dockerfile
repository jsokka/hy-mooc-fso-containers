FROM node:24 AS deps
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci

FROM node:24 AS build
WORKDIR /usr/src/app
COPY --from=deps /usr/src/app ./
COPY . .
RUN npm run build

FROM nginx:1.29.4-alpine
# Create a non-root user and group to run Nginx
RUN addgroup -g 1001 -S nginxgroup && adduser -u 1001 -S -G nginxgroup nginxuser
# Ensure necessary directories exist and have correct permissions
RUN mkdir -p /var/run/nginx /var/cache/nginx/client_temp /var/cache/nginx/proxy_temp /var/cache/nginx/fastcgi_temp /var/cache/nginx/scgi_temp /var/cache/nginx/uwsgi_temp \
    && chown -R nginxuser:nginxgroup /run /var/cache/nginx /var/run/nginx /var/log/nginx /etc/nginx /usr/share/nginx/html
USER nginxuser
COPY --from=build /usr/src/app/dist /usr/share/nginx/html