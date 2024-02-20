#!/bin/bash

# Install Python dependencies
echo "Installing Python dependencies..."
poetry install

sleep 5

# Run Python backend
echo "Running Python backend..."
python backend.py
