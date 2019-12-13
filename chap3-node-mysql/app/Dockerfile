FROM node:latest
WORKDIR /usr/local/etc/app

COPY . /usr/local/etc/app
RUN npm install && npm cache verify

EXPOSE 3000
CMD ["node", "index.js"]
