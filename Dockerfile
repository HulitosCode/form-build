# Etapa 1: Build da aplicação
FROM node:18-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json prisma ./
RUN npm install

COPY . /app/.
RUN npx prisma generate
RUN npm run build
RUN npm prune --production

# Etapa 2: Runtime
FROM node:18-alpine

WORKDIR /app

COPY --from=builder /app/package.json ./
COPY --from=builder /app/package-lock.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/next.config.js ./

EXPOSE 3030

CMD ["npm", "start"]
