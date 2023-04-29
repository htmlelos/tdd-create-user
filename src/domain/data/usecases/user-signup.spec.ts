import request from "supertest";
import { app } from "../../../app";
import { userController } from "../../usecases/user.controller";

describe("register user", () => {
  it("must return 404 if the route does not exist", async () => {
    const response = await request(app).post("/signup");
    expect(response.statusCode).toBe(404);
  });

  describe("POST /signup endpoint bad request", () => {
    beforeAll(() => {
      app.post("/signup", userController);
    });

    it("must return 400 if the name is missing", async () => {
      const user = {
        email: "username@mail.com",
        password: "12345678Aa",
        passwordConfirmation: "12345678Aa",
      };
      const response = await request(app).post("/signup").send(user);
      expect(response.statusCode).toBe(400);
    });

    it("must return 400 if the email is missing", async () => {
      const user = {
        name: "username",
        password: "12345678Aa",
        passwordConfirmation: "12345678Aa",
      };
      const response = await request(app).post("/signup").send(user);
      expect(response.statusCode).toBe(400);
    });

    it("must return 400 if the password is missing", async () => {
      const user = {
        name: "username",
        email: "username@mail.com",
        passwordConfirmation: "12345678Aa",
      };
      const response = await request(app).post("/signup").send(user);
      expect(response.statusCode).toBe(400);
    });

    it("must return 400 if the password is missing", async () => {
      const user = {
        name: "username",
        email: "username@mail.com",
        password: "12345678Aa",
      };
      const response = await request(app).post("/signup").send(user);
      expect(response.statusCode).toBe(400);
    });

    it("must return 400 if the password and confirmation are not the same", async () => {
      const user = {
        name: "username",
        email: "username@mail.com",
        password: "12345678Aa",
        passwordConfirmation: "12345678Ab",
      };
      const response = await request(app).post("/signup").send(user);
      expect(response.statusCode).toBe(400);
    });

    it("must return 400 if the email is not valid", async () => {
      const user = {
        name: "username",
        email: "username.mail.com",
        password: "12345678Aa",
        passwordConfirmation: "12345678Aa",
      };
      const response = await request(app).post("/signup").send(user);
      expect(response.statusCode).toBe(400);
    });
  });
});
