#Version of Ubuntu
FROM ubuntu:16.04

RUN apt-get update && apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_6.x | bash -
RUN apt-get install vim
RUN apt-get update && apt-get install -y git nodejs build-essential


RUN mkdir -p /usr/src/app-backend 

WORKDIR /usr/src/app-backend

COPY package.json package.json 

RUN npm install && npm cache clean --force 

# Bundle app source
COPY . .

CMD ["npm", "run", "start"]
