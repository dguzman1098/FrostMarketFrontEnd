FROM node:12-alpine
# Adding build tools to make yarn install work on Apple silicon / arm64 machines
RUN apk add --no-cache python3 g++ make
WORKDIR /app
COPY package.json .
RUN npm install
COPY . ./
RUN npm run build
CMD ["npm", "start"]