# Install Python dependencies
Write-Host "Installing Python dependencies..."
pip install -r requirements.txt --user

# Wait for 1 minute
Start-Sleep -Seconds 10

# Run Python backend
Write-Host "Running Python backend..."
python backend.py
