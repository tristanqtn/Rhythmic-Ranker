const chai = require("chai");
const chaiHttp = require("chai-http");
const request = require("supertest");
const expect = require("chai").expect;

chai.use(chaiHttp);

const api_route = "http://localhost:3000/api";
const client_route = "http://localhost:3000";

describe("Pages responding correctly", function () {
  it("Home \t\t at /", async function () {
    const response = await request(client_route).get(""); //GET request
    expect(response.status).to.eql(200); //expect server to respond 200
    expect(response.type).to.eql("text/html"); //expect server to respond HTML format
  });
  it("Contact us \t at /contact", async function () {
    const response = await request(client_route).get("/contact"); //GET request
    expect(response.status).to.eql(200); //expect server to respond 200
    expect(response.type).to.eql("text/html"); //expect server to respond HTML format
  });
  it("Articles \t\t at /articles", async function () {
    const response = await request(client_route).get("/articles"); //GET request
    expect(response.status).to.eql(200); //expect server to respond 200
    expect(response.type).to.eql("text/html"); //expect server to respond HTML format
  });
  it("Specific Article \t at /articles/[articleID]", async function () {
    const api_response = await request(api_route).get("/articles"); //GET request
    expect(api_response.status).to.eql(200); //expect server to respond 200
    expect(api_response.type).to.eql("application/json"); //expect server to respond json format
    expect(api_response).to.be.json;

    const dummy = api_response._body.articles[0];
    const response = await request(client_route).get("/articles/" + dummy.id); //GET request
    expect(response.status).to.eql(200); //expect server to respond 200
    expect(response.type).to.eql("text/html"); //expect server to respond HTML format
  });

  it("About Us \t\t at /about", async function () {
    const response = await request(client_route).get("/about"); //GET request
    expect(response.status).to.eql(200); //expect server to respond 200
    expect(response.type).to.eql("text/html"); //expect server to respond HTML format
  });
  it("Use State \t at /use-state", async function () {
    const response = await request(client_route).get("/use-state"); //GET request
    expect(response.status).to.eql(200); //expect server to respond 200
    expect(response.type).to.eql("text/html"); //expect server to respond HTML format
  });
  it("Login Native \t at /login-native", async function () {
    const response = await request(client_route).get("/login-native"); //GET request
    expect(response.status).to.eql(200); //expect server to respond 200
    expect(response.type).to.eql("text/html"); //expect server to respond HTML format
  });
  it("Login Controlled \t at /login-controlled", async function () {
    const response = await request(client_route).get("/login-controlled"); //GET request
    expect(response.status).to.eql(200); //expect server to respond 200
    expect(response.type).to.eql("text/html"); //expect server to respond HTML format
  });
});
