FROM python:3.10.3-slim

WORKDIR /usr/src

RUN apt-get update && apt-get clean

RUN pip install --upgrade pip
COPY ./requirements.txt .
RUN pip install -r requirements.txt

COPY . .
EXPOSE 8000