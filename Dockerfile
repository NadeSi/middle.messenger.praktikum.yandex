FROM node:14.15
WORKDIR /app/messenger
COPY . .
RUN npm install && npm run build
EXPOSE 3000
CMD node ./express.js


