#!/bin/bash
# requires InfluxDB cluster and correct connection credentials in .env file

# Install Python dependencies
echo "Installing Python dependencies..."
poetry install

echo "Testing env and application..."
pytest

# Run Python backend
echo "Running Python backend..."
python backend.py
