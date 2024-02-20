# Install Python dependencies
Write-Host "Installing Python dependencies..."
poetry install

Start-Sleep -Seconds 5

# Run Python backend
Write-Host "Running Python backend..."
python backend.py
