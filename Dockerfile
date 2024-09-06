# Usa una imagen base de Node.js
FROM node:18-alpine

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia los archivos package.json y package-lock.json al contenedor
COPY package*.json ./

# Instala las dependencias de producción y desarrollo
RUN npm install

# Copia el resto de los archivos de la aplicación al contenedor
COPY . .

# Construye la aplicación Next.js
RUN npm run build

# Expone el puerto que Next.js usará
EXPOSE 3000

# Inicia la aplicación usando Next.js
CMD ["npm", "start"]