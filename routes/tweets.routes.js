import { Router } from "express";
import getTweetsController from "../controllers/tweets.controller.js";

 const tweetsRoute  = Router();
 tweetsRoute.get("/", getTweetsController);
 

 export default tweetsRoute;
 
