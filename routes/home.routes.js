import  { Router } from "express";
import  { homeController } from "../controllers/home.controller";

const homeRoute = Router();
homeRoute.use("/", homeController);

export default homeRoute;