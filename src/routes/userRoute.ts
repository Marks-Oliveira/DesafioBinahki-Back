import express from "express";
import { UserController } from "../controller/UserController";

export const userRoute = express.Router();

const userController = new UserController();

userRoute.post("/register", userController.register);


export default userRoute;