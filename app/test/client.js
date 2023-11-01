const chai = require("chai");
const chaiHttp = require("chai-http");
const request = require("supertest");
const expect = require("chai").expect;

chai.use(chaiHttp);

const client_route = "http://localhost:3000";

describe("Pages responding correctly", function () {
  it("Home \t\t at /", async function () {
    const response = await request(client_route).get(""); //GET request
    expect(response.status).to.eql(200); //expect server to respond 200
    expect(response.type).to.eql("text/html"); //expect server to respond HTML format
  });
});
