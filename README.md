Node portion of website. Visit it here: http://ericma.net/n

MERN stack + Docker: (MongoDB, Express.js, React.js, and Nodejs)

# Getting Started
Run `npm install` in both `backend` and `frontend` directories.

## To set up the project without docker for local development:
1. run `npm run build-localhost` in `frontend` directory
   <br>This will build with cross-env set to `PUBLIC_URL=http://localhost:8080/`
3. run `npm run start` in `backend` directory

~~## To set up the project with docker:~~ (needs more work to get working propery with docker)
In `backend` directory:
1. run `docker-compose build`
2. run `docker-compose up -d` after build

To stop all services, 
* run `docker-compose stop`
* or run `docker-compose down --volumes` to bring everything down, removing the containers entirely, with the data volume of the services

*In project `frontend` directory, run `npm start` to run only the react app locally*

Eric Ma
