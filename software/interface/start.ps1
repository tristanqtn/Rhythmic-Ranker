# requires InfluxDB cluster and correct connection credentials in .env file

# Install Python dependencies
Write-Host "Installing Python dependencies...`n"
poetry install


Write-Host "Testing env and application...`n"
pytest

# Run Python backend
Write-Host "`nRunning Python backend...`n"
python backend.py
