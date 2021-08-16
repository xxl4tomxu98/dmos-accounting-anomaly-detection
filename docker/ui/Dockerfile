FROM nginx:1.17.1-alpine

ARG VERSION_ARG=0.0.0
ENV REACT_APP_VERSION=$VERSION_ARG


COPY ./build /usr/share/nginx/html

# Nginx Configuration files
COPY ./docker/ui/default.conf /etc/nginx/conf.d/default.conf