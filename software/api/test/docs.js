const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../src/index");

chai.use(chaiHttp);

describe("API Docs", () => {
  it("GET / \t should return the API doc home page", async () => {
    chai
      .request(app)
      .get("/")
      .then((res) => {
        chai.expect(res).to.have.status(200);
        chai.expect(res).to.have.header("content-type", "text/html"); // Ensure the response is HTML content
        done();
      })
      .catch((err) => {
        throw err;
      });
  });
  it("GET /api-docs \t should return the API detailed documentation", async () => {
    chai
      .request(app)
      .get("/api-docs")
      .then((res) => {
        chai.expect(res).to.have.status(200);
        chai.expect(res).to.have.header("content-type", "text/html"); // Ensure the response is HTML content
        done();
      })
      .catch((err) => {
        throw err;
      });
  });
});
