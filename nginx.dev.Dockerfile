FROM nginx:1-alpine
COPY nginx.dev.conf /etc/nginx/conf.d/default.conf
COPY static /static/