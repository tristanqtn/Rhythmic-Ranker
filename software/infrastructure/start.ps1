# Start Minikube
Write-Host "Starting Minikube..."
minikube start

Start-Sleep -Seconds 5

# Check Minikube status
Write-Host "Checking Minikube status..."
minikube status

# Install Helm chart for InfluxDB
Write-Host "Installing InfluxDB using Helm..."
helm install influxdb ./helm/influx -f helm/influx/values.yaml

# Wait for InfluxDB pods to be ready
Write-Host "Waiting for InfluxDB pods to be ready..."
kubectl wait --for=condition=Ready pod influx-stateful-deployment-0 --timeout=300s

# Get pods and services
Write-Host "Getting pods and services..."
kubectl get pods
kubectl get services

Start-Sleep -Seconds 20

# Access InfluxDB service
Write-Host "Accessing InfluxDB service..."
minikube service influx-access-service
