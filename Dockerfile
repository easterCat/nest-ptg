FROM node:10.16.3

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

VOLUME ["/var/ptg/static"]

EXPOSE 6688

CMD npm run pm2