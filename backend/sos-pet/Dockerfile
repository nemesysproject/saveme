# --- Etapa de Build ---
FROM node:18-alpine AS builder
WORKDIR /usr/src/app

# Copia los archivos de definición del proyecto y el esquema de Prisma
COPY package*.json ./
COPY prisma ./prisma/

# Instala solo las dependencias de producción primero
RUN npm install --production --frozen-lockfile

# Copia el resto del código fuente
COPY . .

# Instala las dependencias de desarrollo para poder construir y generar
RUN npm install --frozen-lockfile

# Genera el cliente de Prisma
RUN npx prisma generate

# Construye la aplicación TypeScript
RUN npm run build

# --- Etapa de Producción ---
FROM node:18-alpine
WORKDIR /usr/src/app

# Copia las dependencias de producción y el cliente de Prisma generado desde la etapa de builder
COPY --from=builder /usr/src/app/node_modules/ ./node_modules/
COPY --from=builder /usr/src/app/dist ./dist

EXPOSE 3000
CMD [ "node", "dist/index.js" ]