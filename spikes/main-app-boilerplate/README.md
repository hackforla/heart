# MAIN APP BOILERPLATE
to start make sure you have the latest docker version and npm installed
cd into main-app-boilerplate/app
npm install
cd .. (to main-app-boilerplate)
docker-compose up
index page is available at localhost:3000
pgAdmin is available through localhost:8080 with user: pgadmin@example.com password: pgadmin


#Small overview of what I did on this:

express is serving up an index page

setup linting using the airbnb style guide

setup CI with Travis-CI

Right now I have some simple routes laid out for a notes table with a few tests written(was having issues with travis CI though)

Postgres is seeded with one note already in it
