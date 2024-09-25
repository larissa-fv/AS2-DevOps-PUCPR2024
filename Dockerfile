# Use uma versão específica do nginx para garantir a consistência
FROM nginx:alpine

# Defina um diretório de trabalho para manter a organização
WORKDIR /usr/share/nginx/html

# Copie os arquivos para o diretório de trabalho
COPY index.html .
COPY styles.css .
COPY index.js .

# Exponha a porta 80
EXPOSE 80

# Comando para iniciar o nginx em primeiro plano
CMD ["nginx", "-g", "daemon off;"]
