import pytest
import json
from backend import app

@pytest.fixture
def client():
    app.config['TESTING'] = True
    with app.test_client() as client:
        yield client

def test_index(client):
    response = client.get('/')
    assert response.status_code == 200
    assert b'<!DOCTYPE html>' in response.data

def test_stream_endpoint(client):
    response = client.get('/api/stream')
    assert response.status_code == 200
    assert 'text/event-stream' in response.content_type

def test_health_influx(client):
    response = client.get('/api/health/influx')
    data = json.loads(response.data.decode('utf-8'))
    assert response.status_code == 200
    assert data["status"] == "OK"  # Assuming the health check always returns "OK" for simplicity

def test_health_backend(client):
    response = client.get('/api/health/backend')
    data = json.loads(response.data.decode('utf-8'))
    assert response.status_code == 200
    assert data["status"] == "OK"  # Assuming the health check always returns "OK" for simplicity
