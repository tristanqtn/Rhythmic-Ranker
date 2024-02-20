const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../src/index");

chai.use(chaiHttp);

describe("Metrics API", () => {
  it("POST /metrics \t should add a new metric", (done) => {
    chai
      .request(app)
      .post("/metrics")
      .send({
        sensor: "testSensor",
        measurement: 42,
      })
      .end((err, res) => {
        chai.expect(res).to.have.status(200);
        chai.expect(res.body).to.have.property("msg").to.be.a("string");
        done();
      });
  });

  it("GET /metrics \t should return an array of metrics", (done) => {
    chai
      .request(app)
      .get("/metrics")
      .end((err, res) => {
        chai.expect(res).to.have.status(200);
        chai.expect(res.body).to.be.an("object");
        chai.expect(res.body).to.have.property("status").to.equal("OK");
        chai.expect(res.body).to.have.property("count").to.be.a("number");
        chai.expect(res.body).to.have.property("content").to.be.an("array");
        done();
      });
  });
});
