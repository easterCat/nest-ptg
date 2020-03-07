FROM node:10.16.3

RUN mkdir -p /ptg/server

# make the 'app' folder the current working directory
WORKDIR /ptg/server

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# install project dependencies
RUN npm install --no-optional

RUN npm install -g nodemon

RUN npm install -g cross-env

RUN npm install -g pm2

# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . /ptg/server

RUN npm run build

EXPOSE 6688

CMD npm run dev