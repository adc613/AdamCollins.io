#!/bin/bash

docker-compose stop nginx

docker stop adamcollinsio_letsencrypt_1
docker rm tempContainer

docker run -p 0.0.0.0:443:443 -p 0.0.0.0:80:80 --name tempContainer adc613/letsencrypt:base /usr/bin/letsencrypt renew
docker commit -m "autmated commit" tempContainer adc613/letsencrypt:base
docker push adc613/letsencrypt:base

docker rm tempContainer

docker-compose build --no-cache --pull letsencrypt

docker-compose up -d
