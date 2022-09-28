FROM python:3-alpine

RUN adduser -D app
ENV PATH=$PATH:/home/pythonserver/.local/bin
USER app
WORKDIR /usr/src/app/

COPY ./requirments.txt .
RUN pip install -r requirments.txt

COPY app .
CMD python3 ./main.py
