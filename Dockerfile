FROM node:14.18-alpine as build
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
RUN npm install
COPY . .
RUN npx jest
RUN npm run build

FROM node:14.18-alpine as prod
WORKDIR /app
COPY --from=build app/package.json ./
COPY --from=build app/package-lock.json ./
COPY --from=build app/build ./build
RUN npm install
CMD ["npm","start"]
EXPOSE 3000