# Professor estou usando a imagem do Node pois o front está em next.js
FROM node:14

# Definimos o diretório de trabalho dentro do container
WORKDIR /app

# Copia o package.json e o package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia todo o conteúdo da sua aplicação para o diretório de trabalho
COPY frontend/ .


# Expõe a porta em que a aplicação irá rodar
EXPOSE 80

# Comando para iniciar a aplicação quando o container for iniciado
CMD ["npm", "run", "dev"]
