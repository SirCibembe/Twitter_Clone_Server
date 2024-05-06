
import express from "express"

 const app = express();
 const port = 3000;


app.get("/",(req,res) =>{
    res.send("C'est n'est pas soricer le back-end")
})

app.listen(port, ()=>{
    console.log(`le serveur est demarré sur le port ${port}`)
})


