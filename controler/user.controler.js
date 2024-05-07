import data from "./../data.js"
export default function getCurrentUserControler(req, res) {
  // console.log(data.currentUser)
  res.send(data.currentUser)
  
}