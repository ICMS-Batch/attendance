FROM node:16-alpine as build 
WORKDIR /app
COPY package*.json ./
RUN npm install 
COPY . ./
RUN npm run build

FROM nginx:1.21.1-alpine
COPY --from=build /app/build /var/www
RUN chmod -R 777 /var/www
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
ENTRYPOINT ["nginx","-g","daemon off;"]

