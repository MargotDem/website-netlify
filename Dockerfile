##############################
# VALIDATE NGINX CONFIG      #
##############################
FROM nginx:alpine

COPY /nginx-custom.conf /etc/nginx/conf.d/default.conf
RUN nginx -t

USER nginx

##############################
# BASE                       #
##############################
FROM node:12-alpine as base

# Create app directory
WORKDIR /home/node/app/

# Make sure to use the latest npm version (for fixes & speed improvements)
RUN npm i npm@latest -g

# Copy app sources
COPY server/ ./server/
COPY src/ ./src/
COPY static/ ./static/
COPY package*.json ./
COPY .eslintrc.js ./
COPY tsconfig.json ./
COPY gatsby-config.js ./
COPY gatsby-config.esm.js ./
COPY gatsby-node.js ./
COPY data/ ./data/
COPY .env.development ./
COPY .env.production ./

# Install app dependencies.
# The following command is necessary for the build to work since the app has been upgraded to node 11
RUN npm set unsafe-perm true

# Use npm ci instead of npm install as it's faster and better suited for CI/CD (cf https://docs.npmjs.com/cli/ci)
RUN npm ci

##############################
# BUILD                      #
##############################
FROM base as build

# Build the app
# then remove dev dependencies
# then remove app sources (only keeping resulting build)
RUN npm run build && \
    npm prune --production && \
    rm -rf src

# Set the user to use (for security purpose)
USER node

##############################
# DEVELOP                    #
##############################
FROM nginx:alpine as develop

RUN rm -rf /usr/share/nginx/html/*
RUN echo "daemon off;" >> /etc/nginx/nginx.conf

COPY --from=build /home/node/app/public /usr/share/nginx/html
COPY /403.html /usr/share/nginx/html/403.html
COPY /nginx-custom.conf /etc/nginx/conf.d/default.conf
COPY /init.sh /init.sh

RUN chmod +x /init.sh

CMD ["sh","-c","/init.sh"]

##############################
# RELEASE                    #
##############################
FROM nginx:alpine as production

RUN rm -rf /usr/share/nginx/html/*
RUN echo "daemon off;" >> /etc/nginx/nginx.conf

COPY --from=build /home/node/app/public /usr/share/nginx/html
COPY /403.html /usr/share/nginx/html/403.html
COPY /nginx-custom.conf /etc/nginx/conf.d/default.conf
COPY /init.sh /init.sh

RUN chmod +x /init.sh

CMD ["sh","-c","/init.sh"]
