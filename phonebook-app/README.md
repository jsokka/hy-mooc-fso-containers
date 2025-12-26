# Phonebook App

## Development (Docker)

Start the development environment (builds images and starts services):

```bash
# start
docker compose -f docker-compose.dev.yml up

# or run detached
docker compose -f docker-compose.dev.yml up -d
```
Use `--build` flag to build images after dependency changes etc.

### Docker compose watch to enable Hot Reload

Hot Reload can be enabled using docker compose watch:

```bash
docker compose -f docker-compose.dev.yml up --watch
```

## Production (Docker)

Build production images and start in detached mode:

```bash
# build production images
docker compose build

# start services in background
docker compose up -d
```

Stop and remove containers/networks:

```bash
docker compose down
```

## Local (without Docker)

Run frontend and backend locally using npm:

```bash
# backend (from project root)
cd backend
npm install
npm run dev

# in a separate terminal, frontend
cd frontend
npm install
npm run dev
```

These commands start the Vite dev server for the frontend and the backend dev server (node --watch) for hot reload.

NOTE! When running local development environment you need to run MongoDb somehow and set `MONGODB_URI` environment variable. Also `PORT` environment variable must be set for backend.