# Docker Postgres Setup

Basic dockerized `postgres` and `pgadmin` services with room to grow.

Requires [Docker](https://www.docker.com/products/docker-desktop) and Docker Compose (comes with a standard Docker Desktop installation for Mac and Windows.)

## Running Locally

From your favorite Command Line Interface (e.g. `bash` or `powershell`), enter the command:

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

To shut everything down:

```bash
docker-compose down
```

## Logging in to `pgadmin`

The [docker-compose.yml][dc-file] file configures environment variables
for the `pgadmin` login credentials. The defaults are:

```console
PGADMIN_DEFAULT_EMAIL=pgadmin@example.com
PGADMIN_DEFAULT_PASSWORD=pgadmin
```

See the [base Docker image](https://hub.docker.com/r/dpage/pgadmin4/) for more information and configuration options.

## Connecting to the `postgres` service

The [docker-compose.yml][dc-file] file configures environment variables
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

  - *Hostname/address*: `postgres` (the name of the local service, as noted in [`docker-compose.yml`][dc-file])

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

[dc-file]: docker-compose.yml