import { Request, Response } from "express";
import { parseUser } from "./user.validator";

export const userController = (request: Request, response: Response) => {
  const { body } = request;
  const parsedUser = parseUser(body);
  if (!parsedUser) return response.status(400).send();
  return response.status(200).send();
};
