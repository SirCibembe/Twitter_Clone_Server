import  { Router } from "express";
import  { homeControler } from "../controler/home.controler";

const homeRoute = Router();
homeRoute.use("/", homeControler);

export default homeRoute;