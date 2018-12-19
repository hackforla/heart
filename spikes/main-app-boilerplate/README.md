# Main App
**This serves both the backend api and frontend pages for the processing system and will be used to review and process participant info.**

-----
-----

**Overview**
- Express is serving the api and an index page
- Jest runs the tests
- Linting is setup with the airbnb style guide
- CI is setup with Travis-CI
- Some simple routes exist for a notes table
- Postgres is seeded with participant table and a citations table

## Quickstart Guide
**Latest version of Docker and npm must be installed on your computer.**

1. cd into `app`
2. run `npm install`
3. cd .. (back to main-app)
4. run `docker-compose up` to bring up heart_node, heart_postgres, and heart_pgadmin containers
5. Go to localhost:3000 to access main-app
6. Go to localhost:8080 to access pgadmin using user: pgadmin@example.com password: pgadmin. 

See "How to browse postgres using pgadmin" section below if you wish to see the db structure.

### To run tests
1. ensure your containers are up with `docker-compose up`
2. run `docker exec -it heart_node npm test`
(This will work for now but it is slow so we are exploring other options)

-----
-----

## Detailed Guide

This project provides a dockerized `node` app, `postgres` and `pgadmin`.
A local database is not required to start working on this project.

To use what we've provided, you'll need the latest version of [NodeJS](https://nodejs.org/en/), [Docker](https://www.docker.com/products/docker-desktop) and Docker Compose (comes with a standard Docker Desktop installation for Mac and Windows.)

### File Structure

```
\app                  // contains node app files
\docker               // contains setup for each docker container
    \node
    \pgadmin
    \postgres
docker-compose.yml    
README.md             // you're reading it
```

### Start Guide

**Step 1 - Install Node Packages**

Use your favorite Command Line Interface (e.g. `bash` or `powershell`) and change into the `app` directory.

Enter the command:
```bash
npm install
```

**Step 2 - Start Docker**

Change into the directory where the [docker-compose.yml](docker-compose.yml) file lives. Enter the command:

```bash
docker-compose up
```

This downloads and builds the base Docker images (if needed), and starts all services.

`pgadmin` can now be accessed from http://localhost:8080.

`postgres` service exposes the standard PostgreSQL port `5432`.



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

**Connecting to the `postgres` service**

The default port is `5432`

The default postgres credentials are:

```console
POSTGRES_USER=postgres
POSTGRES_PASSWORD=postgres
```

**Connecting from an application**

Use the PostgreSQL connection URI:

```console
postgresql://<user>:<password>@<host>:<port>/<database>
```

With our defaults:

```console
postgresql://postgres:postgres@localhost:5432/postgres
```

### Pgadmin

**The default `pgadmin` login credentials are:**

```console
PGADMIN_DEFAULT_EMAIL=pgadmin@example.com
PGADMIN_DEFAULT_PASSWORD=pgadmin
```

**How to browse postgres using pgadmin**

Go to localhost:8080 and login.

Then trom the top navbar **Object** > **Create** > **Server**.

On the **General** tab, fill in whatever *Name* you want.

On the **Connection** tab, fill in:

  - *Hostname/address*: `postgres` (the name of the local service, as noted in [docker-compose.yml](docker-compose.yml)

  - *Port*: `5432` (default)

  - *Maintenance database*: `postgres` (default)

  - *Username*: `postgres` (from `POSTGRES_USER`)

  - *Password*: `postgres` (from `POSTGRES_PASSWORD`)

The rest of the fields can be left blank. Click **Save** to connect.

In the future, the server you saved can be used again


### Local Data Persistence / How to Destroy

If the services are started and stopped as outlined above, changes made within the `postgres` database server (e.g. creating tables, inserting data) and the `pgadmin` client (e.g. server connections, preferences) will persist between restarts.

An alternative command can stop and completely remove all services and any associated local storage. *This is **destructive***:

```bash
docker-compose down [SERVICE]
```