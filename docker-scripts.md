# Scripts

**Check recent changes on docs**

- https://docs.docker.com/engine/reference/commandline/docker/
- https://docs.docker.com/compose/reference/

## Connection check and some useful commands

To stop the project press ctl + C (or `docker-compose down` if you ran in `--detach` mode). Also, we can double check it is no longer running with the command `docker container ls`, or running the `psql` command again to make sure the connection fails.

Other useful commands for debugging are `docker-compose down -v` which clears the container volumes, and `docker-compose up --build` which rebuilds the image before starting.

When connection is open you should have access to psql. Test it with command: `psql -h 0.0.0.0 -p 5432 -d postgres -U myadmin -c "SELECT NOW()"`. You should current date
