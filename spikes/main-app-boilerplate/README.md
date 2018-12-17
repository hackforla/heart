# MAIN APP BOILERPLATE
1. to start make sure you have the latest docker version and npm installed
2. cd into main-app-boilerplate/app
3. npm install
4. cd .. (to main-app-boilerplate)
5. docker-compose up
6. index page is available at localhost:3000
7. pgAdmin is available through localhost:8080 with user: pgadmin@example.com password: pgadmin


### Small overview of what I did on this:
1. express is serving up an index page
2. setup linting using the airbnb style guide
3. setup CI with Travis-CI
4. Right now I have some simple routes laid out for a notes table with a few tests written(was having issues with travis CI though)
5. Postgres is seeded with one note already in it
