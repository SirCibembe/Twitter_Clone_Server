import { Router } from "express";
import getUserController, { getCurrentUserController }  from "../controllers/user.controller.js";

const userRouter = Router();
userRouter.get("/users/:handler",getUserController)
userRouter.get("/user", getCurrentUserController)

export default userRouter;