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
   git clone https://github.com/tristanqtn/RhythmicRanker
   ```

2. Navigate to the project directory:

   ```bash
   cd RhythmicRanker/SI/interface
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

## Author

- Tristan QUERTON: tristan.querton@edu.ece.fr
