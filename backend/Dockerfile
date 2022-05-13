# Common build stage
FROM node:17-alpine as common-build-stage

COPY . ./app

WORKDIR /app

RUN npm install -g npm@8.10.0 && npm install

EXPOSE 5005

# Development build stage
FROM common-build-stage as development-build-stage

ENV NODE_ENV development

CMD ["npm", "run", "dev"]

# Production build stage
FROM common-build-stage as production-build-stage

ENV NODE_ENV production

CMD ["npm", "run", "start"]
