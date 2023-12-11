const chai = require("chai");
const chaiHttp = require("chai-http");
const request = require("supertest");
const expect = require("chai").expect;

chai.use(chaiHttp);

const api_route = "http://localhost:3000/api";

describe("API metrics: GET", function () {
  it("API alive at /metrics", async function () {
    const response = await request(api_route).get("/metrics"); //GET request
    expect(response.status).to.eql(200); //expect server to respond 200
    expect(response.type).to.eql("application/json"); //expect server to respond json format
    expect(response).to.be.json;
  }).timeout(10000);
  it("API alive at /metrics/[metricID]", async function () {
    const response = await request(api_route).get("/metrics/slug"); //GET request
    expect(response.status).to.eql(200); //expect server to respond 200
    expect(response.type).to.eql("application/json"); //expect server to respond json format
    expect(response).to.be.json;
    expect(response._body.code).to.eql("401"); //default user
    expect(response._body.message).to.eql(
      "ERROR: problem occured while reading DB"
    );
  }).timeout(10000);
  it("API responding for a specific article", async function () {
    const response = await request(api_route).get("/metrics"); //GET request
    expect(response.status).to.eql(200); //expect server to respond 200
    expect(response.type).to.eql("application/json"); //expect server to respond json format
    expect(response).to.be.json;
    const dummy = response._body[0];
    const response_2 = await request(api_route).get("/metrics/" + dummy.id); //GET request
    expect(response_2.status).to.eql(200); //expect server to respond 200
    expect(response_2.type).to.eql("application/json"); //expect server to respond json format
    expect(response_2).to.be.json;
    expect(response_2._body.id).to.eql(dummy.id);
  }).timeout(10000);
});

const valid_body = {
  mesured_at: "2023-11-01T13:42:22.039Z",
  content: ["test", "test"],
  values: {
    sensor_1: [1, 2, 4, 3],
    sensor_2: null,
    sensor_3: null,
    sensor_4: null,
    sensor_5: null,
  },
};

const invalid_body = {
  content: ["test", "test"],
};

describe("API metrics: POST", function () {
  it("API (POST) inserting valid metric", async function () {
    const response = await request(api_route).post("/metrics").send(valid_body); //GET request
    expect(response.status).to.eql(200); //expect server to respond 200
    expect(response.type).to.eql("application/json"); //expect server to respond json format
    expect(response).to.be.json;
    expect(response._body.code).to.eql("200"); //default user
    expect(response._body.message).to.eql("ok"); //default user
  }).timeout(10000);

  it("API (POST) rejecting invalid metric", async function () {
    const response = await request(api_route)
      .post("/metrics")
      .send(invalid_body); //GET request
    expect(response.status).to.eql(200); //expect server to respond 200
    expect(response.type).to.eql("application/json"); //expect server to respond json format
    expect(response).to.be.json;
    expect(response._body.code).to.eql("200"); //default user
    expect(response._body.message).to.eql("ok"); //default user
  }).timeout(10000);
});
