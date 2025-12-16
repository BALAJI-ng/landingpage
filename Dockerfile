# ---- Build Angular ----
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# ---- Serve with nginx ----
FROM nginx:alpine
# Most Angular apps build to dist/<appname>. If your output is different, we’ll adjust.
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
