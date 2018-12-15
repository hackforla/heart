# Docker Postgres Setup

Basic dockerized `postgres` and `pgadmin` services with room to grow.

Requires [Docker](https://www.docker.com/products/docker-desktop) and Docker Compose (comes with a standard Docker Desktop installation for Mac and Windows.)

## Running Locally

Use your favorite Command Line Interface (e.g. `bash` or `powershell`) and change into the local directory where the [docker-compose.yml](docker-compose.yml) file lives. Enter the command:

```bash
docker-compose up
```

This downloads and builds the base Docker images (if needed), and starts both services.

`pgadmin` can now be accessed from http://localhost:8080.

The `postgres` service exposes the standard PostgreSQL port `5432`.

Alternatively (e.g. if one service or another is already started):

```bash
docker-compose up [SERVICE]
```

Where `[SERVICE]` is `postgres` or `pgadmin`.

To stop the service(s):

```bash
docker-compose stop [SERVICE]
```

## Logging in to `pgadmin`

The [docker-compose.yml](docker-compose.yml) file configures environment variables
for the `pgadmin` login credentials. The defaults are:

```console
PGADMIN_DEFAULT_EMAIL=pgadmin@example.com
PGADMIN_DEFAULT_PASSWORD=pgadmin
```

See the [base Docker image](https://hub.docker.com/r/dpage/pgadmin4/) for more information and configuration options.

## Connecting to the `postgres` service

The [docker-compose.yml](docker-compose.yml) file configures environment variables
for the `postgres` credentials as well. The defaults are:

```console
POSTGRES_USER=postgres
POSTGRES_PASSWORD=postgres
```

**Note:** *this is the superuser account*, used for creating databases, users, etc. It is recommended for applications to use role-specific logins instead of the superuser.

### From `pgadmin`:

Log in to `pgadmin`. From the top navbar **Object** > **Create** > **Server**.

On the **General** tab, fill in whatever *Name* you want.

On the **Connection** tab, fill in:

  - *Hostname/address*: `postgres` (the name of the local service, as noted in [docker-compose.yml](docker-compose.yml)

  - *Port*: `5432` (default)

  - *Maintenance database*: `postgres` (default)

  - *Username*: `postgres` (from `POSTGRES_USER`)

  - *Password*: `postgres` (from `POSTGRES_PASSWORD`)

The rest of the fields can be left blank. Click **Save** to connect.

### From an application:

Use the PostgreSQL connection URI:

```console
postgresql://<user>:<password>@<host>:<port>/<database>
```

With our defaults:

```console
postgresql://postgres:postgres@localhost:5432/postgres
```

See the [base Docker image](https://hub.docker.com/_/postgres/) for more information and configuration options.

## Local Data Persistence

If the services are started and stopped as outlined above, changes made within the `postgres` database server (e.g. creating tables, inserting data) and the `pgadmin` client (e.g. server connections, preferences) will persist between restarts.

An alternative command stops and completely removes the services and any associated local storage. *This is **destructive***:

```bash
docker-compose down [SERVICE]
```

Where again, `[SERVICE]` can be either `postgres` or `pgadmin`, or blank to indicate both.