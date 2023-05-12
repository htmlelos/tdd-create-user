import request from "supertest";
import { app } from "./app";

describe("register user", () => {
  it("app should be defined", () => {
    expect(app).toBeDefined();
  });
  it("must return 404 if the route does not exist", async () => {
    const response = await request(app).post("/unknown");
    expect(response.statusCode).toBe(404);
  });
});
