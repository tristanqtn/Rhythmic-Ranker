from flask import Flask, jsonify, Response
from influxdb_client import InfluxDBClient, Point
from influxdb_client.client.write_api import SYNCHRONOUS
import os
from dotenv import load_dotenv
import json
import time

app = Flask(__name__)

# Load environment variables from .env file
load_dotenv()

# Connect to InfluxDB
client = InfluxDBClient(url=os.getenv("INFLUX_URL"), token=os.getenv("INFLUX_TOKEN"), org=os.getenv("INFLUX_ORG"))
query_api = client.query_api()

# Function to stream data
def stream_data():
    query = 'from(bucket: "{}") |> range(start: -1h)'.format(os.getenv("INFLUXDB_BUCKET"))
    while True:
        tables = query_api.query(query)
        # Process 'tables' and format the data as needed
        data = [...]  # Process 'tables' to get data in desired format
        yield "data: {}\n\n".format(json.dumps(data))
        time.sleep(5)  # Adjust the sleep time as needed

# API endpoint to stream data
@app.route('/api/stream')
def stream():
    return Response(stream_data(), mimetype='text/event-stream')

if __name__ == '__main__':
    app.run(debug=True)
