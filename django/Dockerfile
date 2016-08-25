FROM ubuntu

RUN apt-get update && apt-get install -y \
    python3 \
    python3-dev \
    python3-pip \
    python3-psycopg2

RUN pip3 install --upgrade pip

RUN mkdir /www
RUN mkdir /www/site
WORKDIR /www/site

ADD ./requirements.txt /www/site/
RUN pip3 install -r requirements.txt
RUN pip3 install uwsgi

COPY ./configuration_files/uwsgi.conf /etc/init/uwsgi.conf
COPY ./configuration_files/uwsgi.ini /etc/uwsgi/sites/uwsgi.ini

ADD ./mysite /www/site/mysite

RUN chown -R www-data:www-data /www/site/
RUN chmod -R 774 /www/site/

CMD exec /usr/local/bin/uwsgi --emperor /etc/uwsgi/sites

EXPOSE 8000
