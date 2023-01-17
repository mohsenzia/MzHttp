FROM node:slim
WORKDIR /home
COPY ./package*.json .
RUN npm install
COPY . .
EXPOSE 8080
CMD node index.js