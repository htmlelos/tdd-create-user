import { Request, Response } from "express";
import userController from "./user.controller";

describe("POST /signup Controller", () => {
  it("controller should be defined", () => {
    expect(userController).toBeDefined();
  });

  it("shoud return 200 if the user is registered correctly", () => {
    const request = {};
    let resultObject = 200;
    const response: Partial<Response> = {
      sendStatus: jest.fn().mockReturnValue(200),
    };

    const expectedResult = {};

    const result = userController().signup(
      request as Request,
      response as Response
    );
    console.log("Result->", result);
    expect(result).toBe(resultObject);
  });
});
