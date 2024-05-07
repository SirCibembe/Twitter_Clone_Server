import { Router } from "express";
import getTweetsControler from "../controler/tweets.controler.js";

 const tweetsRoute  = Router();
 tweetsRoute.get("/tweets", getTweetsControler);
 

 export default tweetsRoute;
 
