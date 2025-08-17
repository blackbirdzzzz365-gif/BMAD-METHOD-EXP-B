FROM nginx:alpine
# serve static UI from the spec's path
COPY web/ /var/www/bmad/
# nginx config with API proxy
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
# Nginx listens on port 80 by default
