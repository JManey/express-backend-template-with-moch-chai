import request from "supertest";
import { expect } from "chai";

import creatServer from "server";
const app = creatServer();

describe("server checks", () => {
  it("server is created without error", (done) => {
    request(app).get("/").expect(200, done);
  });
});
