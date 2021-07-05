FROM php:7.2-apache
COPY ./project/. /var/www/html
EXPOSE 80