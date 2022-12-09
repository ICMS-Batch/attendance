FROM node:16-alpine as build 
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH 
COPY package*.json ./
RUN npm install 
COPY . ./
RUN npm run build

FROM nginx:1.21.1-alpine
COPY --from=build /app/dist /var/www
RUN chmod -R 777 /var/www
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
ENTRYPOINT ["nginx","-g","daemon off;"]

