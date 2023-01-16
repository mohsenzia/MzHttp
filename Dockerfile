FROM node:14
WORKDIR /home
COPY . .
RUN npm install
CMD [ "node", "index.js" ]
EXPOSE 8080