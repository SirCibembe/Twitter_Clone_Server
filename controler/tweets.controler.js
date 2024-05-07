import data from "./../data.js"
export default function getTweetsControler(req, res) {
  // console.log(data.currentUser)
  res.send(data.tweets)
  
}
