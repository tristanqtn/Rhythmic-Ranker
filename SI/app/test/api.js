const chai = require("chai");
const chaiHttp = require("chai-http");
const request = require("supertest");
const expect = require("chai").expect;

chai.use(chaiHttp);

const api_route = "http://localhost:3000/api";

//test GET home page
describe("API articles", function () {
  //test GET articles
  it("API alive at /metrics", async function () {
    const response = await request(api_route).get("/metrics"); //GET request
    expect(response.status).to.eql(200); //expect server to respond 200
    expect(response.type).to.eql("application/json"); //expect server to respond json format
    expect(response).to.be.json;
  });
  it("API alive at /metrics/[metricID]", async function () {
    const response = await request(api_route).get("/metrics/slug"); //GET request
    expect(response.status).to.eql(200); //expect server to respond 200
    expect(response.type).to.eql("application/json"); //expect server to respond json format
    expect(response).to.be.json;
  });
});
