FROM oven/bun:latest

WORKDIR /app

COPY package*.json bun.lock* ./

RUN bun install --frozen-lockfile

COPY . .

EXPOSE 8080

CMD ["bun", "start"]