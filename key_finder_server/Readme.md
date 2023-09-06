## Run the migrations if has not been run before

```sh
dotnet ef database update
```

If the ```dotnet ef``` command is not found then

```sh
dotnet tool install --global dotnet-ef
```

## Run the server

```sh
dotnet run
```

## Requirements

- [Docker](https://docs.docker.com/install/)
- [Docker Compose](https://docs.docker.com/compose/install/)

## How to run it?

- Clone the repository
- Update env variables

```bash
cp .env.example .env
```

- Create network
```bash
docker network create traefik-proxy
```

- Update database

```bash
docker compose run app dotnet ef --startup-project api --project repository database update
```

- Run app

```bash
docker compose up
```