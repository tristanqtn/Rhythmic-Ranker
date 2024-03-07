# requires InfluxDB cluster and correct connection credentials in .env file

# Install npm dependencies
Write-Host "Installing npm dependencies...`n"
npm install

Write-Host "Testing env and API endpoint...`n"
npm run test

# Run npm start
Write-Host "`nRunning npm start...`n"
npm run start
