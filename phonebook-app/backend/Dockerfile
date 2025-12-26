FROM node:24 AS deps
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci --omit=dev

FROM node:24-alpine
WORKDIR /usr/src/app
COPY --from=deps /usr/src/app ./
COPY . .
USER node
CMD ["npm", "start"]