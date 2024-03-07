#!/bin/bash

# Start Minikube
echo "Starting Minikube..."
minikube start --cpus 6 --memory 8192

sleep 5

# Check Minikube status
echo "Checking Minikube status..."
minikube status

# Install Istio
echo "Installing Istio inside K8S..."
# Verify Istioctl installation
./bin/lin/istioctl.exe version
# Label default namespace to enable Istio sidecar injection
kubectl label namespace default istio-injection=enabled
./bin/lin/istioctl.exe install -y
# Verify Istio installation
kubectl get pods -n istio-system

# Install Helm chart for InfluxDB
echo "Installing InfluxDB using Helm..."
helm install influxdb ./helm/influx -f helm/influx/values.yaml

# Wait for InfluxDB pods to be ready
echo "Waiting for InfluxDB pods to be ready..."
sleep 5
kubectl wait --for=condition=Ready pod influx-stateful-deployment-0 --namespace default --timeout=300s

# echo "Deploying addons inside K8S..."
# kubectl apply -f ./addons/

# Get pods and services
echo "Getting pods and services..."
kubectl get pods
kubectl get services -n default
kubectl get services -n istio-system

sleep 20

# Access InfluxDB service
echo "Accessing InfluxDB service..."
minikube service influx-access-service
