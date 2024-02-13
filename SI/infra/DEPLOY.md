# InfluxDB Deployment in Kubernetes using Helm

## Overview

This document provides a step-by-step guide to deploying an InfluxDB instance in Kubernetes using Helm. InfluxDB is a time-series database designed to handle high write and query loads. Helm is a package manager for Kubernetes that streamlines the installation and management of Kubernetes applications.

## Prerequisites

Before proceeding, ensure the following prerequisites are met:

- Kubernetes cluster is set up and accessible.
- Helm is installed in the Kubernetes cluster.
- Basic understanding of Helm and Kubernetes concepts.

## Deployment Steps

### Step 1: Deploying the K8S instance

You're Docker instance must be running:

```bash
minikube start
```

Then check your cluster status:

```bash
minikube status
```

### Step 2: Deploying the InfluxDB using Helm

In the `./infra` folder run the following commands:

```bash
helm install influxdb ./helm/influx -f helm/influx/values.yaml
```

Wait for the deployment to complete and verify the status of the InfluxDB pods and services:

```bash
kubectl get pods
kubectl get services
```

### Step 3: Access InfluxDB Dashboard

To access the InfluxDB dashboard, you can use port forwarding:

```bash
minikube service influx-access-service
```

The InfluxDB dashboard should come up. Create a new session and bucket. Then you will be able to obtain an application token to save into the `.env` file of your application to allow it to acces the InfluxDB instance. Do not close the tunnel into the K8S to allow the application to acces the pod.

## Maintenance and Upgrades

### Upgrading InfluxDB

To upgrade InfluxDB to a newer version, use the Helm upgrade command:

```bash
helm upgrade influxdb influxdata/influxdb
```

## Troubleshooting

### Logs

To troubleshoot issues, check the logs of the InfluxDB pods:

```bash
kubectl logs <pod_name>
```

### Helm Release Status

Verify the status of the Helm release:

```bash
helm status influxdb
```

### Helm Chart Documentation

Refer to the official Helm chart documentation for additional troubleshooting guidance and advanced configuration options.

## Conclusion

By following this guide, you have successfully deployed InfluxDB in Kubernetes using Helm. Ensure to follow best practices for maintaining and securing your deployment.

## Author

- Tristan QUERTON: tristan.querton@edu.ece.fr
