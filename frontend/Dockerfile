FROM node:20.10.0-alpine3.18
ARG NODE_ENV=prod
ENV NODE_ENV=${NODE_ENV}
RUN mkdir -p /home/frontend/app/node_modules && chown -R node:node /home/frontend/app
WORKDIR /home/frontend/app
COPY --chown=node:node package*.json ./
USER node
RUN npm install
COPY --chown=node:node . .
EXPOSE 5173
CMD [ "npm", "run", "dev"]