
# Defina um diretório de trabalho para manter a organização

FROM nginx:alpine

# Copie os arquivos para o diretório de trabalho

COPY index.html /usr/share/nginx/html
COPY styles.css /usr/share/nginx/html
COPY index.js /usr/share/nginx/html

# Exponha a porta 80

EXPOSE 80


# Comando para iniciar o nginx em primeiro plano

CMD ["nginx", "-g", "daemon off;"]
