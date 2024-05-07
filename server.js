
import express from "express";
import userRoute from "./routes/user.routes.js";
import tweetsRoute from "./routes/tweets.routes.js";
 
const app = express();

app.use("/tweets", tweetsRoute)
app.use("/", userRoute);
app.listen(5000);


