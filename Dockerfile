FROM node:16

ENV MONGODB_CONNECTION_PROTOCOL=mongodb+srv
ENV MONGODB_DB_NAME=gha-demo1
ENV MONGODB_CLUSTER_ADDRESS=cluster0.kvi2t2f.mongodb.net
ENV MONGODB_USERNAME=udemy
ENV MONGODB_PASSWORD=cY!*w^Dy4puUmB
ENV PORT=8000

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

CMD ["npm", "start"]