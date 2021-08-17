FROM nginx:1.17.1-alpine

ARG VERSION_ARG=0.0.0
ENV REACT_APP_VERSION=$VERSION_ARG

# Add bash
RUN apk add --no-cache bash

# Nginx Configuration files
COPY ./docker/ui/default.conf /etc/nginx/conf.d/default.conf

# The app
COPY ./build /usr/share/nginx/html

# Copy .env file and shell script to container
WORKDIR /usr/share/nginx/html
COPY ./gen-env.sh .

# Make our shell script executable
RUN chmod +x gen-env.sh

# Start Nginx server
CMD ["/bin/bash", "-c", "/usr/share/nginx/html/gen-env.sh && nginx -g \"daemon off;\""]