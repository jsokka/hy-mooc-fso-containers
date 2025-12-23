FROM node:20 AS deps
WORKDIR /usr/src/app
COPY . .
RUN npm ci

FROM node:20 AS test
WORKDIR /usr/src/app
COPY --from=deps /usr/src/app/node_modules ./node_modules
COPY . .
RUN npm run test

FROM node:20 AS build
WORKDIR /usr/src/app
COPY --from=test /usr/src/app/node_modules ./node_modules
COPY . .
ENV VITE_BACKEND_URL=http://localhost:8080/api
RUN npm run build

FROM nginx:1.25-alpine AS production
COPY --from=build /usr/src/app/dist /usr/share/nginx/html