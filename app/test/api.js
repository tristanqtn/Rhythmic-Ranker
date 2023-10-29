const chai = require("chai");
const chaiHttp = require("chai-http");
const request = require("supertest");
const expect = require("chai").expect;

chai.use(chaiHttp);

const api_route = "http://localhost:3000/api";

//test GET home page
describe("API articles", function () {
  //test GET articles
  it("API alive at /articles", async function () {
    const response = await request(api_route).get("/articles"); //GET request
    expect(response.status).to.eql(200); //expect server to respond 200
    expect(response.type).to.eql("application/json"); //expect server to respond json format
    expect(response).to.be.json;
  });
  it("API alive at /articles/[articleID]", async function () {
    const response = await request(api_route).get("/articles"); //GET request
    expect(response.status).to.eql(200); //expect server to respond 200
    expect(response.type).to.eql("application/json"); //expect server to respond json format
    expect(response).to.be.json;
  });
  it("API responding for a specific article", async function () {
    const response = await request(api_route).get("/articles"); //GET request
    expect(response.status).to.eql(200); //expect server to respond 200
    expect(response.type).to.eql("application/json"); //expect server to respond json format
    expect(response).to.be.json;
    const dummy = response._body.articles[0];
    const response_2 = await request(api_route).get("/articles/" + dummy.id); //GET request
    expect(response_2.status).to.eql(200); //expect server to respond 200
    expect(response_2.type).to.eql("application/json"); //expect server to respond json format
    expect(response_2).to.be.json;
    expect(response_2._body.id).to.eql(dummy.id);
    expect(response_2._body.title).to.eql(dummy.title);
    expect(response_2._body.content).to.eql(dummy.content);
    expect(response_2._body.date).to.eql(dummy.date);
    expect(response_2._body.author).to.eql(dummy.author);
  });
});

describe("API profile", function () {
  //test GET profile
  it("API alive at /profile", async function () {
    const response = await request(api_route).get("/profile"); //GET request
    expect(response.status).to.eql(200); //expect server to respond 200
    expect(response.type).to.eql("application/json"); //expect server to respond json format
    expect(response).to.be.json;
  });
  it("API responding with default logged in user", async function () {
    const response = await request(api_route).get("/profile"); //GET request
    expect(response.status).to.eql(200); //expect server to respond 200
    expect(response.type).to.eql("application/json"); //expect server to respond json format
    expect(response).to.be.json;
    expect(response._body.username).to.eql("John Smith"); //default user
    expect(response._body.email).to.eql("john@smith.com"); //default user
  });
});
