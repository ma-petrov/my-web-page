FROM python:alpine3.16

RUN apk update && apk add --virtual build-dependencies build-base gcc

RUN adduser -D app
ENV PATH=$PATH:/home/pythonserver/.local/bin
USER app
WORKDIR /usr/src/app/

COPY ./requirments.txt .
RUN pip install --upgrade pip
RUN pip install -r requirments.txt

COPY app .
CMD python3 main.py
