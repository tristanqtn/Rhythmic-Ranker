const chai = require("chai");
const chaiHttp = require("chai-http");

const { expect } = chai;

chai.use(chaiHttp);

const server = require("../src/index"); // Replace with the path to your express app

describe("Metrics API", () => {
  before(() => {
    // Setup any necessary environment, such as setting up a test database
    // For example, you might want to create a separate InfluxDB bucket for testing
    // or mock the InfluxDB client for testing purposes
  });

  after(() => {
    // Clean up any resources after the tests are completed
  });

  describe("POST /metrics", () => {
    it("should add a new metric", (done) => {
      chai
        .request(server)
        .post("/metrics")
        .send({
          sensor: "testSensor",
          measurement: 42,
        })
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.have.property("msg").to.be.a("string");
          done();
        });
    });
  });

  describe("GET /metrics", () => {
    it("should return an array of metrics", (done) => {
      chai
        .request(server)
        .get("/metrics")
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an("object");
          expect(res.body).to.have.property("status").to.equal("OK");
          expect(res.body).to.have.property("count").to.be.a("number");
          expect(res.body).to.have.property("content").to.be.an("array");
          done();
        });
    });
  });
});
