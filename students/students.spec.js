const request = require("supertest");
const server = require("../api/server.js");

describe("students router", function() {
  it("should return status 401 without admin login", function() {
    return request(server)
      .get("/api/students")
      .then(res => {
        expect(res.status).toBe(401);
      });
  });

  it("should return JSON formatted body", function() {
    return request(server)
      .get("/api/students")
      .then(res => {
        expect(res.type).toMatch(/json/);
      });
  });
});


