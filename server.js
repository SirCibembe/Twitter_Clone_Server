
import express from "express";
import userRoute from "./routes/user.routes.js";
import tweetsRoute from "./routes/tweets.routes.js";
import cors from "cors";
 
const app = express();
app.use(cors())
app.use("/tweets", tweetsRoute)
app.use("/", userRoute);
app.listen(5000, () => {
    console.log("server running... http://localhost:" + 5000)
});


