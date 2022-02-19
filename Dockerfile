FROM node:10.24.1

# make the 'app' folder the current working directory
WORKDIR /var/ptg/server

RUN cd /var/ptg/server \ 
  && git clone https://github.com/easterCat/nest-ptg.git \ 
  && cd /var/ptg/server/nest-ptg \ 
  && npm install --no-optional \ 
  && npm install -g nodemon \
  && npm install -g cross-env \
  && npm install -g pm2 \
  && npm run build \
  && apt-get update \
  && echo y | apt-get install vim

WORKDIR /var/ptg/server/nest-ptg

EXPOSE 6688

# VOLUME [ "/var/ptg/static" ]

# pm2-runtime designed for Docker container which keeps an application in the foreground which keep the container running
CMD [ "pm2-runtime", "start","pm2.json"]
