import express from "express";
import userRouter from "./domain/users/user.router";

export const app = express();
app.use(express.json());
app.use("/", userRouter);
