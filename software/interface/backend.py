from flask import Flask, render_template, Response, jsonify
from influxdb_client import InfluxDBClient
import os
from dotenv import load_dotenv
import json
import time

app = Flask(__name__)
app.start_time = time.time()


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

# Function to check InfluxDB health
def check_influxdb_health():
    try:
        ping_response = client.ready()
        if ping_response:
            return True
    except Exception as e:
        print("Error checking InfluxDB health:", str(e))
    return False

# API endpoint to check InfluxDB health
@app.route('/api/health/influx')
def influx_health():
    health_check = {
        "uptime": time.time() - app.start_time,
        "status": "OK",
        "timestamp": int(time.time())
    }
    if check_influxdb_health():
        return jsonify(health_check), 200
    else:
        health_check["status"] = "InfluxDB not healthy"
        return jsonify(health_check), 503

# API endpoint to check backend health
@app.route('/api/health/backend')
def backend_health():
    health_check = {
        "uptime": time.time() - app.start_time,
        "status": "OK",
        "timestamp": int(time.time())
    }
    return jsonify(health_check), 200

@app.route('/')
def index():
    data = stream_data()
    return render_template('./index.html', data=data)

if __name__ == '__main__':
    app.run(debug=True)
