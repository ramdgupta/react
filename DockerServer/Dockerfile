FROM node:latest

COPY . /home/app/
COPY package.json /home/app/package.json

WORKDIR /home/app/

RUN rm -rf node_modules
RUN npm install
EXPOSE  9000
CMD ["node", "index.js"]
