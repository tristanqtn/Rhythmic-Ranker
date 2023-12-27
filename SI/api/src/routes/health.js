const express = require("express");
const axios = require("axios");

const healthRouter = express.Router();

async function checkInfluxDBHealth() {
  try {
    const response = await axios.get(`${process.env.INFLUX_URL}/ping`);
    if (response.status === 200) {
      return response.status;
    } else {
      console.log("Unexpected response:", response.status, response.statusText);
    }
  } catch (error) {
    console.error("Error checking InfluxDB health:", error.message);
  }
}

async function checkAPIHealth() {
  try {
    const response = await axios.get("http://localhost:3000/metrics");
    if (response.status === 200) {
      return response.status;
    } else {
      console.log("Unexpected response:", response.status, response.statusText);
    }
  } catch (error) {
    console.error("Error checking InfluxDB health:", error.message);
  }
}

healthRouter
  /**
   * This function sends back the health of the INFLUXDB
   * @route GET /health
   * @group HEALTH - Methods for obtaining the current health state
   * @returns {object} 200 succes - INFLUXDB healthy
   * @returns {Error}  503 error - INFLUXDB unhealthy
   */
  .get("/influx", async (req, res, next) => {
    const healthcheck = {
      uptime: process.uptime(),
      status: "OK",
      timestamp: Date.now(),
    };

    try {
      if ((await checkInfluxDBHealth()) == 200) {
        res.status(200).send(healthcheck);
      } else {
        healthcheck.status = error;
        res.status(503).send();
      }
    } catch (error) {
      healthcheck.status = error;
      res.status(503).send();
    }
  })

  /**
   * This function sends back the health of the API
   * @route GET /health
   * @group HEALTH - Methods for obtaining the current health state
   * @returns {object} 200 succes - API healthy
   * @returns {Error}  503 error - API unhealthy
   */
  .get("/api", async (req, res, next) => {
    const healthcheck = {
      uptime: process.uptime(),
      status: "OK",
      timestamp: Date.now(),
    };

    try {
      if ((await checkAPIHealth()) == 200) {
        res.status(200).send(healthcheck);
      } else {
        healthcheck.status = error;
        res.status(503).send();
      }
    } catch (error) {
      healthcheck.status = error;
      res.status(503).send();
    }
  });

module.exports = healthRouter;
