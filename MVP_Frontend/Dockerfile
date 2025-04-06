# Usa a imagem do Nginx
FROM nginx:alpine

# Remove a configuração padrão
RUN rm /etc/nginx/conf.d/default.conf

# Copia sua própria configuração personalizada
COPY default.conf /etc/nginx/conf.d/

# Copia os arquivos do frontend (HTML/CSS/JS)
COPY . /usr/share/nginx/html