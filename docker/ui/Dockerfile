FROM nginx:1.17.1-alpine
COPY ./build /usr/share/nginx/html
# Copy the template to the .env file in the root of the app
COPY env-template /usr/share/nginx/html/.env

# Nginx Configuration files
COPY ./docker/ui/default.conf /etc/nginx/conf.d/default.conf