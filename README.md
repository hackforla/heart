# HEART Project

## Project Leaders

- Marie-Aimee Brajeux (Project Lead)
- Tien Yuan (Tech Lead)

## Table of Contents

1. [About the project](#about)
2. [Quick Start Guide](#QuickStart)
3. [Detailed Start Guide](#DetailedGuide)
4. [Loging into App](#logins)
5. [Using Postgres](#Postgres)
6. [Using pgadmin](#pgadmin)

## About the Project

This project meets on Monday at the westside hacknight. We are working with a program of the City of LA's Attorney's Office which supports the Criminal Record Clearing Project by administering the Los Angeles County Homeless Court Program. HEART (Homeless Engagement and Response Team) deploys its staff to homeless connect days in the community where adults who are experiencing homelessness or are at risk of experiencing homelessness may enroll in the program. The program helps participants resolve eligible traffic and pedestrian infraction citations by engaging in services instead of paying fines and fees they cannot afford. HEART files a motion with the Los Angeles Superior Court, requesting a dismissal and/or suspension of fines, and a recall of associated warrants.

Hack for LA has been working with the program's staff to design and build a better processing system, helping to streamline in-person client intake, data processing and the filing of motions.

Find us on the Hack for LA Slack on the channel #heart, or join us at one of our meetings, every Monday night in Santa Monica.

## Installation Guide

This serves both the backend api and frontend pages for the processing system and will be used to review and process participant info. Below is a brief overview of the tech involved in this project.

- Express is serving the api and an index page
- Jest runs the tests
- Linting is setup with the airbnb style guide
- CI is setup with Travis-CI
- Some simple routes exist for a notes table
- Postgres is seeded with participant table and a citations table

## QuickStart

### Recomendations

- Latest version of Docker is required must be installed on your computer.
- Node and NPM does not have to be installed but it is highly recommended.

### Installation Instructions

1. cd into `main-app`
2. run `docker-compose build`
3. run `docker-compose up` once the obove command is finished running. This will bring up heart_node, heart_postgres, and heart_pgadmin containers and start the application.
4. Go to localhost:3000 to access main-app using user: `demo` password: `pwd123`
5. Go to localhost:8080 to access pgadmin using user: `pgadmin@example.com` password: `pgadmin`.

See "How to browse postgres using pgadmin" section below if you wish to see the db structure.

### To run tests

1. ensure your containers are up with `docker-compose up`
2. run `docker exec -it heart_node npm test`
   (This will work for now but it is slow so we are exploring other options)

## DetailedGuide

This project provides a dockerized `node` app, `postgres` and `pgadmin`.
A local database is not required to start working on this project.

To use what we've provided, you'll need the latest version of [NodeJS](https://nodejs.org/en/), [Docker](https://www.docker.com/products/docker-desktop) and Docker Compose (comes with a standard Docker Desktop installation for Mac and Windows.)

### File Structure

```bash
\design                 // contains design files
\main-app               // contains the full application
  \api                  // contains all the backend code
  \client               // contains the front-end code
  docker-compose.yml
README.md               // you are reading it
```

### Logins

#### App Login

User: demo
Password: pwd123

#### PGAdmin Login

User: pgadmin@example.com
Password: pgadmin

### Start Guide

Use your favorite Command Line Interface (e.g. `bash` or `powershell`) and change into the `main-app` directory.

Enter the commands:

```bash
 docker-compose build
 docker-compose up (after above command finishes)
```

This downloads and builds the base Docker images (if needed), and starts all services.

`node` can now be accessed from [http://localhost:3000](http://localhost:3000). It serves the main-app.

`pgadmin` can now be accessed from [http://localhost:8080](http://localhost:8080). It's a GUI for browsing postgres.

`postgres` service exposes the standard PostgreSQL port `5432`. It serves the main-app database.

### Docker Commands

_`[SERVICE]` is `node`, `postgres` or `pgadmin`_

**If one service or another is already started:**

```bash
docker-compose up [SERVICE]
```

**To stop the service(s):**

```bash
docker-compose stop [SERVICE]
```

### Postgres

#### Connecting to the `postgres` service

The default port is `5432`

The default postgres credentials are:

```console
POSTGRES_USER=postgres
POSTGRES_PASSWORD=postgres
```

#### Connecting from an application\*\*

Use the PostgreSQL connection URI:

```console
postgresql://<user>:<password>@<host>:<port>/<database>
```

With our defaults:

```console
postgresql://postgres:postgres@localhost:5432/heart
```

### Pgadmin

#### The default `pgadmin` login credentials are:\*\*

```console
PGADMIN_DEFAULT_EMAIL=pgadmin@example.com
PGADMIN_DEFAULT_PASSWORD=pgadmin
```

#### How to browse postgres using pgadmin\*\*

Go to localhost:8080 and login.

Then trom the top navbar **Object** > **Create** > **Server**.

On the **General** tab, fill in whatever _Name_ you want.

On the **Connection** tab, fill in:

- _Hostname/address_: `postgres` (the name of the local service, as noted in [docker-compose.yml](docker-compose.yml)

- _Port_: `5432` (default)

- _Maintenance database_: `postgres` (default)

- _Username_: `postgres` (from `POSTGRES_USER`)

- _Password_: `postgres` (from `POSTGRES_PASSWORD`)

The rest of the fields can be left blank. Click **Save** to connect.

In the future, the server you saved can be used again

### Local Data Persistence / How to Destroy

If the services are started and stopped as outlined above, changes made within the `postgres` database server (e.g. creating tables, inserting data) and the `pgadmin` client (e.g. server connections, preferences) will persist between restarts.

An alternative command can stop and completely remove all services and any associated local storage. \*This is **destructive\***:

```bash
docker-compose down [SERVICE]
```
