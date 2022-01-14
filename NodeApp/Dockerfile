# docker build -t arunkumarshahi/connect-mongo-node-js-app .
# docker push arunkumarshahi/connect-mongo-node-js-app
FROM node:14.14.0-alpine
WORKDIR "/app"
COPY ./package.json ./
RUN npm install
COPY . .
CMD ["npm", "run", "start"]