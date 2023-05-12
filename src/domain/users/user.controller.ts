import { Request, Response } from "express";
const userController = () => {
  return {
    signup: (request: Request, response: Response) => {
      return response.sendStatus(200);
    },
  };
};

export default userController;
