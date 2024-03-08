# Software for Rythmic Ranker

## Overview

This application receives data in a JSON format from the connected device. This data enters the application with the Node.js API that converts it and then send it to an InfluxDB cluster. On the other side of the application a Python backend sends request to InfluxDB to produce a continuous data stream that feeds the jury's interface.

## Prerequisites

Before running the application, ensure the following prerequisites are met:

- Node.js and NPM
- Python and Poetry
- Minikube, Kubectl, Helm
- Docker

## Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/tristanqtn/Rhythmic-Ranker
   ```

   ```bash
   cd Rhythmic-Ranker
   ```

## Configuration

Ensure that your application is configured to connect to the deployed InfluxDB instance. Update the connection settings in the configuration file or environment variables `.env` as needed.

## Usage

An script automating the deployment of the whole software has been created. This script will only require the configuration of the InfluxDB cluster inside the web adminstrator page. Make sure to have the correct values inside the `.env` file concerning the InfluxDB credentials and the API endpoint. To run the scripts:

```powershell
# for Windows
./start.ps1
```

```bash
# for Linux
./start.sh
```

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
