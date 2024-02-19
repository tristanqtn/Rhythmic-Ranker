const express = require("express");
const path = require("path");
const dotenv = require("dotenv");

const { InfluxDB } = require("@influxdata/influxdb-client");
const stream = express.Router();

const envPath = path.resolve(__dirname, "..", "..", "..", ".env");
dotenv.config({ path: envPath });

const { INFLUX_URL, INFLUX_TOKEN, INFLUX_ORG, INFLUX_BUCKET } = process.env;

const influxDB = new InfluxDB({
  url: INFLUX_URL,
  token: INFLUX_TOKEN,
});

const queryApi = influxDB.getQueryApi(INFLUX_ORG);
let dataRows = [];

/**
 * This function handles GET requests for the stream API.
 * @route GET /stream
 * @group STREAM - Methods for the stream API
 * @returns {object} 200 succes - Returns an array containing all metrics in continuous stream
 * @returns {Error}  400 error - Problem occurs while reading Influx
 */
stream.get("/", (req, res) => {
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");

  // Define a function to fetch data and send it to the client
  const fetchData = () => {
    const query = `from(bucket: "${INFLUX_BUCKET}") |> range(start: -1h)`;
    queryApi.queryRows(query, {
      next(row, tableMeta) {
        const o = tableMeta.toObject(row);
        dataRows.push(o);
        // Send the accumulated data as a single JSON object every 2 seconds
        res.write(`data: ${JSON.stringify(dataRows)}\n`);
        dataRows = []; // Clear the dataRows array after sending the data
      },
      error(error) {
        console.error(error);
        res.write("Error occurred\n");
      },
      complete() {},
    });
  };

  // Fetch data initially
  fetchData();

  // Fetch data every 2 seconds
  const intervalId = setInterval(fetchData, 2000);

  // Clean up the interval when the client closes the connection
  req.on("close", () => {
    console.log("Client connection closed.");
    clearInterval(intervalId);
  });
});

module.exports = stream;
