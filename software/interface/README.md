# Jury's Interface

This application provides a simple interface to display data from an InfluxDB database in real-time. It utilizes Flask for the backend, which communicates with the InfluxDB instance, and JavaScript for the frontend to update the data continuously.

## Prerequisites

Before running this application, ensure you have the following installed:

- Python 3.x
- `poetry` package manager
- InfluxDB instance running

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/tristanqtn/Rhythmic-Ranker
   ```

2. Navigate to the project directory:

   ```bash
   cd Rhythmic-Ranker/SI/interface
   ```

3. Install the required Python packages:

   ```bash
    poetry install
   ```

Create a .env file in the root directory of the project and specify the required environment variables:

```
 INFLUXDB_URL=http://localhost:8086
 INFLUXDB_TOKEN=your-token
 INFLUXDB_ORG=your-org
 INFLUXDB_BUCKET=your-bucket
```

## Usage

Don't forget to run this code in the correct venv.

```bash
poetry shell
```

Start the Flask server:

```bash
python backend.py
```

Open your web browser and navigate to http://localhost:5000.

You should see the data from your InfluxDB database displayed in real-time on the webpage.

**Configuration:**

INFLUXDB_URL: The URL of your InfluxDB instance.

INFLUXDB_TOKEN: The authentication token for accessing your InfluxDB instance.

INFLUXDB_ORG: The organization name associated with your InfluxDB instance.

INFLUXDB_BUCKET: The name of the bucket in your InfluxDB instance containing the data you want to display.

## API Routes

### CRUD Operations

**GET /api/stream**

- **Parameter:** none
- **Usage:**
  Use this method on the given path to connect to the continuous data stream, sending all data from the last hour stored in the InfluxDB.

### Other Routes

**GET /api/health/influx**

- **Parameter:** none
- **Usage:**
  Obtain the health of the INFLUX DB instance.

**GET /api/health/api**

- **Parameter:** none
- **Usage:**
  Obtain the health of the backend.

**IMPORTANT**: This application requires an InfluxDB to work perfectly. If you don't have one, you can use the one provided by using the Helm deployment in this repo.

## Automation

An automation script for the deployment of this micro service. To run it place yourself in the current directory (here `./interface`), enable a peotry shell with `poetry shell` and run the following command:

```powershell
# for Windows
./start.ps1
```

```bash
# for Linux
./start.sh
```

## Testing

Pytest has been installed as a dev dependency to cover the backend of the application with tests. You can run tests on the backend of this part of the software:

```bash
poetry shell
```

```bash
pytest
```

## Linters

Ruff has been installed as a dev dependency in order to lint the code. You can run the linter has so:

```bash
poetry shell
```

```bash
ruff check
```

## Author

- Tristan QUERTON: tristan.querton@edu.ece.fr
