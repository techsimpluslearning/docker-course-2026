# os - node - move package file into the image - 
# install dependencies -
# copy the rest of the files into the image -
# expose the port on which the app will run -

FROM node:21

### mkdir /app & cd /app
WORKDIR /app 

COPY package.json package-lock.json* ./
RUN npm install

COPY index.js ./

EXPOSE 3000
CMD ["node", "index.js"]

