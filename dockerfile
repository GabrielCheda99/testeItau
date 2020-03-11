FROM node:12.7-alpine AS build
WORKDIR /usr/src/app
COPY dist/. dist/.
FROM nginx:1.17.1-alpine
COPY --from=build /usr/src/app/dist/angularTest /usr/share/nginx/html