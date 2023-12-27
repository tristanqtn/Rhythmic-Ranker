# Changelog

## v1.0.0

### Added

1. Add methods get_all_keys, delete for REDIS client
2. Add API routes for:
   - DELETE /user/:username
   - GET /user/keys
3. Implement test for new REDIS client methods and API routes
4. Add a swagger generator for user API
5. Create Dockerfile for publishing Docker image of userapi

## v1.0.1

### Added

1. Create `docker-compose.yml` to orchestrate the userapi with a REDIS container
2. Create `.dockerignore` to prevent copying useless files in container
3. Create `script.sh` that will be run on every userapi container startup to check health of the container and environnement with tests and then will start the application

### Changed

1. Refactor repo architecture

### Fixed

1. Dockerfile error on container startup

## v1.0.2

### Changed

1. Binded port of user API in docker compose to match 3000
2. Improve welcome page of user API

### Fixed

1. Swagger API Docs complete API methods description
2. Remove environnement testing on container startup causing errors

## v1.0.3

### Added

1. API health endpoint
2. PUT methods
3. Tests for new PUT method and API health endpoint

### Changed

1. Improve welcome page of user API

### Fixed

1. Remove Health endpoint testing posing problems in Vagrant
