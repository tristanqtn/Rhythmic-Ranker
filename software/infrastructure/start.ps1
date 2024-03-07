# Start Minikube
Write-Host "Starting Minikube...`n"
minikube start --cpus 6 --memory 8192

Start-Sleep -Seconds 5

# Check Minikube status
Write-Host "`nChecking Minikube status...`n"
minikube status


# Install Istio
Write-Host "`nInstalling Istio inside K8S...`n"
# Verify Istioctl installation
./bin/win/istioctl.exe version
# Label default namespace to enable Istio sidecar injection
kubectl label namespace default istio-injection=enabled
./bin/win/istioctl.exe install -y
# Verify Istio installation
kubectl get pods -n istio-system


# Install Helm chart for InfluxDB
Write-Host "`nInstalling InfluxDB using Helm...`n"
helm install influxdb ./helm/influx -f helm/influx/values.yaml

# Wait for InfluxDB pods to be ready
Write-Host "`nWaiting for InfluxDB pods to be ready...`n"
Start-Sleep -Seconds 5
kubectl wait --for=condition=Ready pod influx-stateful-deployment-0 --namespace default --timeout=300s

# Write-Host "`nDeploying addons inside K8S...`n"
# kubectl apply -f ./addons/

# Get pods and services
Write-Host "`nGetting pods and services...`n"
kubectl get pods
kubectl get services -n default
kubectl get services -n istio-system


Start-Sleep -Seconds 20

# Access InfluxDB service
Write-Host "`nAccessing InfluxDB service...`n"
minikube service influx-access-service
