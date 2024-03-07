#!/bin/bash
# requires InfluxDB cluster and correct connection credentials in .env file

# Install npm dependencies
echo "Installing npm dependencies..."
npm install

echo "Testing env and API endpoint..."
npm run test

# Run npm start
echo "Running npm start..."
npm run start
