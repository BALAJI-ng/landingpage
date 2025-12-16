FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:1.25-alpine
RUN mkdir -p /var/cache/nginx /var/run /var/log/nginx \
  && chmod -R 777 /var/cache/nginx /var/run /var/log/nginx
RUN sed -i 's/listen\s\+80;/listen 8080;/' /etc/nginx/conf.d/default.conf

# IMPORTANT: if your dist folder is dist/landingpage, keep this line.
COPY --from=build /app/dist/landingpage /usr/share/nginx/html

EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
