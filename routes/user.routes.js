import { Router } from "express";
import getCurrentUserControler  from "../controler/user.controler.js";
const userRouter = Router();
userRouter.get("/user/:handler")
userRouter.get("/user",getCurrentUserControler)

export default userRouter;