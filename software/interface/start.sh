#!/bin/bash

# Install Python dependencies
echo "Installing Python dependencies..."
pip install -r requirements.txt --user

sleep 5

# Run Python backend
echo "Running Python backend..."
python backend.py