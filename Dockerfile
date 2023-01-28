FROM node:14.17.0-alpine

ARG ENV_NAME="staging"
ENV ENV_NAME=${ENV_NAME}

# Create and change to the app directory.
WORKDIR /usr/src/app

# Copy application dependency manifests to the container image.
# A wildcard is used to ensure both package.json AND package-lock.json are copied.
# Copying this separately prevents re-running npm install on every code change.
COPY package.json ./
COPY yarn.lock ./

# Install production dependencies.
RUN yarn

# prism
COPY prisma ./
ENV DISABLE_ERD=true
RUN npx prisma generate

# Copy local code to the container image.
COPY . .
RUN yarn build

# Run the web service on container startup.
CMD [ "yarn", "start" ]
