Node portion of website. Visit it here: http://ericma.net/n

MERN stack + Docker: (MongoDB, Express.js, React.js, and Nodejs)

Run `npm install` in both `backend` and `frontend` directories.


To set up the project with docker:

In project `backend` directory:
1. run `docker-compose build`
2. run `docker-compose up -d` after build

To stop all services, 
* run `docker-compose stop`
* or run `docker-compose down --volumes` to bring everything down, removing the containers entirely, with the data volume of the services

In project `frontend` directory, run `npm start` to run react app locally

Eric Ma
