FROM node:24
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
ENV VITE_BACKEND_URL=http://backend:3001
CMD ["npm", "run", "dev", "--", "--host"]