import express from "express";
import request from "supertest";

export const app = express();
app.use(express.json());

export type User = {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
};

const EMAIL_REGEX = /^[\w-]{5,}@.*$/;

export const parseUser = (user: User) => {
  const { name, email, password, passwordConfirmation } = user;
  if (!name) return null;
  if (!email) return null;
  if (!password) return null;
  if (!passwordConfirmation) return null;
  if (password !== passwordConfirmation) return null;
  if (!email.match(EMAIL_REGEX)) return null;
  return user;
};

describe("register user", () => {
  it("must return 404 if the route does not exist", async () => {
    const response = await request(app).post("/signup");
    expect(response.statusCode).toBe(404);
  });

  describe("POST /signup endpoint bad request", () => {
    beforeAll(() => {
      app.post("/signup", (request, response) => {
        const { body } = request;
        const parsedUser = parseUser(body);
        if (!parsedUser) return response.status(400).send();
        return response.status(200).send();
      });
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
  describe("POST /signup email already registered", () => {
    it("must return 403 if email is already in use ", async () => {
      const users = [
        {
          name: "username",
          email: "username@mail.com",
          password: "12345678Aa",
          passwordConfirmation: "12345678Aa",
        },
      ];
      const user = {
        name: "username",
        email: "username@mail.com",
        password: "12345678Aa",
        passwordConfirmation: "12345678Aa",
      };
      const response = await request(app).post("/signup").send(user);
      expect(response.statusCode).toBe(403);
    });
  });
});
