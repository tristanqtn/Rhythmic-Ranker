from flask import Flask, render_template, Response
from influxdb_client import InfluxDBClient, Point
from influxdb_client.client.write_api import SYNCHRONOUS
import os
from dotenv import load_dotenv
import json
import time

app = Flask(__name__)

# Get the directory path of the current Python file
current_dir = os.path.dirname(os.path.abspath(__file__))

# Construct the path to the .env file in the parent directory
dotenv_path = os.path.join(current_dir, '..', '.env')

# Load environment variables from .env file
load_dotenv(dotenv_path)

# Connect to InfluxDB
client = InfluxDBClient(url=os.getenv("INFLUX_URL"), token=os.getenv("INFLUX_TOKEN"), org=os.getenv("INFLUX_ORG"))
query_api = client.query_api()

# Function to stream data
# Function to stream data
def stream_data():
    query = 'from(bucket: "{}") |> range(start: -1h)'.format(os.getenv("INFLUX_BUCKET"))
    while True:
        tables = query_api.query(query)
        data = []
        for table in tables:
            for record in table.records:
                data.append({
                    "_time": record.get_time().strftime('%Y-%m-%dT%H:%M:%SZ'),  # Convert datetime to string
                    "_value": record.get_value(),
                    "_field": record.get_field(),
                    "_measurement": record.get_measurement()
                })
        yield "data: {}\n\n".format(json.dumps(data))
        time.sleep(2)  # Adjust the sleep time as needed


# API endpoint to stream data
@app.route('/api/stream')
def stream():
    return Response(stream_data(), mimetype='text/event-stream')

@app.route('/')
def index():
    data = stream_data()
    return render_template('./index.html', data=data)

if __name__ == '__main__':
    app.run(debug=True)
