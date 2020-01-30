FROM node:12 as builder
ENV NODE_ENV=production
WORKDIR /home/node/app
COPY . .
RUN npm i
RUN npx next build

FROM node:12-alpine
ENV NODE_ENV=production
WORKDIR /home/node/app/.next
COPY --from=builder /home/node/app/.next .
WORKDIR /home/node/app
RUN npm i next react react-dom styled-components
ENTRYPOINT [ "npx", "next", "start" ]
