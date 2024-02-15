# Software for Rythmic Ranker

## Overview

This is a Node.js API application connected to an InfluxDB backend. The API serves as a bridge between your frontend applications or other services and the InfluxDB database, providing endpoints for data retrieval, manipulation, and storage.

## Prerequisites

Before running the API, ensure the following prerequisites are met:

- Node.js and npm are installed on your local machine.
- InfluxDB instance is deployed on Kubernetes using Helm.
- Helm and Kubernetes cluster are set up and accessible.

## Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/tristanqtn/RhythmicRanker
   ```

   ```bash
   cd RhythmicRanker
   ```

## Configuration

Ensure that your API is configured to connect to the deployed InfluxDB instance. Update the connection settings in the configuration file or environment variables as needed.

## Usage

Deployment procedure for InfluxDB: [deployment](./infrastructure/README.md)

Deployment procedure for NodeJS API: [deployment](./api/README.md)

Deployment procedure for Python Backend: [deployment](./interface/README.md)

Please respect this order to deploy the solution.

## API Endpoints

All useful API endpoints are detailed inside the application. Please refer to source [code](./api/src/index.html).

All useful interface endpoints are detailed inside the application. Please refer to source [code](./interface/backend.py).

## Connecting to InfluxDB

The API requires access to the InfluxDB instance to function properly. Ensure that the InfluxDB server is running and accessible to the API. If any connection issues arise, verify the connection settings in your API configuration.

# Contributing

Feel free to contribute to this project by opening issues or pull requests. Any feedback or contributions are highly appreciated! This project is part of an open-innovation project.

## Author

- Tristan QUERTON: tristan.querton@edu.ece.fr
