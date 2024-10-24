FROM node:20.18.0-alpine as base
WORKDIR /app
COPY . .
RUN npm install && npm run build

FROM nginx:1.27.2-alpine
COPY --from=base /app/app/css /usr/share/nginx/html/css
COPY ./app /usr/share/nginx/html
RUN rm -fr /usr/share/nginx/html/scss
EXPOSE 80
