const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../src/index");

chai.use(chaiHttp);

describe("Health API", () => {
  it("GET /health/influx \t should return InfluxDB health status", async () => {
    chai
      .request(app)
      .get("/health/influx")
      .then((res) => {
        chai.expect(res).to.have.status(200);
        chai.expect(res._body.status).to.be.equal("OK");
        chai.expect(res).to.be.json;
        done();
      })
      .catch((err) => {
        throw err;
      });
  });
  it("GET /health/api \t should return API health status", async () => {
    chai
      .request(app)
      .get("/health/api")
      .then((res) => {
        chai.expect(res).to.have.status(200);
        chai.expect(res._body.status).to.be.equal("OK");
        chai.expect(res).to.be.json;
        done();
      })
      .catch((err) => {
        throw err;
      });
  });
});
