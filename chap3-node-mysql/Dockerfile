FROM node:latest
ENV APP_ROOT /usr/local/etc/app
# install node packages
WORKDIR $APP_ROOT
COPY ./app/package.json $APP_ROOT
RUN npm install && npm cache verify
# copy app
COPY ./app $APP_ROOT
EXPOSE 3000
CMD ["node", "index.js"]

