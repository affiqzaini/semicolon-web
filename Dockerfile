#base node image
FROM node:14

#create the work direcctory in the container
WORKDIR /src/app

COPY package*.json ./
RUN npm install

COPY . .
#remove env.production and move .env staging to .env
# RUN rm -f .env.production && mv .env.staging .env
RUN npm cache clean --force

EXPOSE 8080:8080

#build production app
RUN npm run build

#start service
CMD [ "npm", "start" ]