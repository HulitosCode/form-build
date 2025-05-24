# Etapa 1: Build da aplicação
FROM node:18-alpine AS builder

WORKDIR /app

# Copiar apenas os arquivos necessários primeiro para aproveitar o cache do Docker
COPY package.json package-lock.json prisma ./ 

# Instalar dependências incluindo Prisma CLI para build e migrations
RUN npm install

# Copiar o restante da aplicação
COPY . /app/.
# 
# Rodar geração do Prisma Client e as migrations
RUN npx prisma generate
RUN npx prisma migrate deploy

# Gerar a aplicação Next.js em modo produção
RUN npm run build

# Remover dependências de dev
RUN npm prune --production

# Etapa 2: Runtime com somente o necessário
FROM node:18-alpine

WORKDIR /app

# Copiar do build apenas o necessário
COPY --from=builder /app/package.json ./
COPY --from=builder /app/package-lock.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/next.config.js ./

# (Opcional) copiar .env se necessário — ou usar variáveis do docker-compose
# COPY .env .env

EXPOSE 3030

# Rodar a aplicação Next.js
CMD ["npm", "start"]
