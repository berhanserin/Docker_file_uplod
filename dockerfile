FROM node:10

WORKDIR /home/node/fileupload

COPY ./ /home/node/fileupload

VOLUME /public

CMD yarn start

EXPOSE 3000