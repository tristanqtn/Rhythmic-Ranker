#!/bin/bash

# Start Minikube
echo "Starting Minikube..."
minikube start

sleep 10

# Check Minikube status
echo "Checking Minikube status..."
minikube status

sleep 5

# Install Helm chart for InfluxDB
echo "Installing InfluxDB using Helm..."
helm install influxdb ./helm/influx -f helm/influx/values.yaml

# Wait for InfluxDB pods to be ready
echo "Waiting for InfluxDB pods to be ready..."
kubectl wait --for=condition=Ready pod influx-stateful-deployment-0 --timeout=300s

# Get pods and services
echo "Getting pods and services..."
kubectl get pods
kubectl get services

sleep 20

# Access InfluxDB service
echo "Accessing InfluxDB service..."
minikube service influx-access-service
