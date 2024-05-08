
import data from "../data.js"
export default function getTweetsController(req, res) {
  // console.log(data.currentUser)
  res.send(data.tweets)
  
}
