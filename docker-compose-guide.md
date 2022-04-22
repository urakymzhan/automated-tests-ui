# docker-compose.yml file

# db

image: postgres:13.1 Specifies the specific PostgreSQL version.

environment: — POSTGRES_USER — POSTGRES_PASSWORD ... Passes and renames specific env vars into the container, so it isn’t polluted with unneeded extras.

ports: — $DB_PORT:$DB_PORT Maps the container port to your local machine, using the env var we set earlier.

volumes: — ./db:/var/lib/postgresql/data Mounts a named volume from the container’s internal PostgreSQL data directory to the local machine, so it will be persisted between container restarts. Without this step the database would reset to fresh-install defaults with each restart. Also if you are following along using git, then make sure to include the data directory in your .gitignore file.

restart: always Force restart the container each time it’s spun-up, specified by the PostgreSQL Docker Hub documentation.

command: -p $DB_PORT Specifies the running port for PostgreSQL, using the env var we set earlier.

# api

depends_on: — db Allows the db and api to communicate through Docker internally. Also waits to start the api container until after the db container has started.

build: ./api Specifies the context path (including the Dockerfile and .dockerignore).
environment: — NODE_ENV — PORT=$API_PORT ... Passes specific env vars into the container, so it isn’t polluted with unneeded extras.

ports: — $API_PORT:$API_PORT Maps the container port to the local machine.

volumes: — ./api:/app Mounts a named volume from the the container’s internal /app directory to the source files. This allows the container to detect changes to files, enabling hot-reloading.

volumes: — /app/node_modules Mounts a data volume to the node_modules directory, overwriting this directory in the named volume from the previous step. This ensures we have the correct binaries for the Linux based container as opposed to the local OS. Also this saves the content of the container’s node_modules directory, so the dependencies don’t have to be re-installed with each restart.

# PROD

build: context: and build: dockerfile: Dockerfile.prod allow us to specify a custom Dockerfile name (Dockerfile.prod).

The ui_server’s ports: — 80:80 are intentionally non-dynamic because 80 is the default port for HTTP. It’s possible to change the NGINX listening port by overwriting the nginx.conf, but that’s outside the scope of this project (learn more in the NGINX Docker Hub documentation).

---

[Ref](https://medium.com/swlh/creating-and-deploying-a-full-stack-web-application-31ad5c9f3b77)
[Image Diagram](https://miro.medium.com/max/1400/1*L8fWGiJvuE52UZThCiSMuw.png)
[Psql ref](https://www.timescale.com/blog/how-to-install-psql-on-mac-ubuntu-debian-windows/)
