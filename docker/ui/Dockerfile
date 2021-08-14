FROM nginx:1.17.1-alpine
COPY ./build /usr/share/nginx/html

# Nginx Configuration files
COPY ./docker/ui/default.conf /etc/nginx/conf.d/default.conf