#!/bin/sh
. ./.env.local

# RM command
if [ "$1" = "-d" ]
then
  podman pod rm -f pamsite
  sudo rm -rf ./postgres-data
  exit 1
fi

podman pod create \
  --name pamsite \
  -p 5432:5432 \
  -p 8001:80

mkdir -p ./postgres-data

podman run -dt \
  --pod pamsite \
  --name pamsite-postgres \
  -v ./postgres-data:/var/lib/postgresql/data \
  -e POSTGRES_PASSWORD=${DB_PASSWORD} \
  -e POSTGRES_USER=${DB_USERNAME} \
  -e POSTGRES_DB=${DB_DATABASE} \
  docker.io/postgres:12-alpine

podman run -dt \
  --pod pamsite \
  --name pamsite-pgadmin \
  -e PGADMIN_DEFAULT_EMAIL=${PGADMIN_DEFAULT_EMAIL} \
  -e PGADMIN_DEFAULT_PASSWORD=${PGADMIN_DEFAULT_PASSWORD} \
  docker.io/dpage/pgadmin4
