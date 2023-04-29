import express from "express";
import request from "supertest";

const app = express();

describe("register user", () => {
  it("must return 404 if the route does not exist", async () => {
    const response = await request(app).post("/signup");
    expect(response.statusCode).toBe(404);
  });
});
