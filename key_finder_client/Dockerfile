FROM node:18

WORKDIR /app

RUN yarn global add pnpm

RUN groupmod -g 1001 node
RUN usermod -u 1001 -g node node

RUN chown node:node -R /app

USER node