#!/bin/bash

echo "Executing program in: $(pwd)"

# Load environment variables from .env file
echo "PLEASE CHECK ENV VARIABLES :"
cat .env

# Deploy INFLUXDB cluster in separate console window
echo "Deploying InfluxDB cluster inside K8S..."
cd infrastructure
gnome-terminal -- bash -c "./start.sh; exec bash" &
sleep 5

echo "INFLIXDB CLUSTER SHOULD BE CONFIGURED BEFORE MOVING ON !"
read -p "Press any key to continue..."

# Deploy API endpoint in separate console window
echo "Deploying api endpoint..."
cd ../api
gnome-terminal -- bash -c "npm i; npm run start; exec bash" &
sleep 5

# Deploy interface in separate console window
echo "Deploying interface..."
cd ../interface
gnome-terminal -- bash -c "poetry install; python backend.py; exec bash" &
sleep 5

echo "DEPLOYMENT COMPLETED"
