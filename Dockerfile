FROM node:16.17.1-alpine
RUN apk add git 
RUN mkdir -p /var/www/offer
WORKDIR /var/www/offer
ADD . /var/www/offer
RUN npm install -g npm@8.15.0
RUN npm i -g @nestjs/cli
RUN npm install
RUN npm run proto:install 
ENTRYPOINT nest start
