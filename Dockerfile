FROM node:18.11.0 as builder
WORKDIR /app
RUN corepack enable && corepack prepare yarn@1.22.19 --activate
COPY app/package.json app/yarn.lock ./
RUN yarn --frozen-lockfile
COPY app/ ./
RUN yarn build

FROM nginx:1.22.0-alpine as runner
RUN touch /var/run/nginx.pid && \
    chown -R nginx:nginx /var/run/nginx.pid \
                         /var/cache/nginx \
                         /var/log/nginx \
                         /etc/nginx/conf.d
COPY --chown=nginx:nginx nginx/nginx.conf /etc/nginx/nginx.conf
COPY --chown=nginx:nginx nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder --chown=nginx:nginx /app/build/ /app
USER nginx
EXPOSE 5000
CMD ["nginx", "-g", "daemon off;"]
