FROM nginx

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx.conf /etc/nginx/conf.d/nginx.conf
COPY redirect.conf /etc/nginx/conf.d/redirect.conf

EXPOSE 80
EXPOSE 443
