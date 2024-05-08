import data from "../data.js";

export default function getUserController(req, res) {
  try {
    let userTweets = data.tweets.filter((tweet) => (
        tweet["content"]["body"]["title"]["author"] ==
        req.params.handler )
    );
    res.send(userTweets);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error occurred while fetching user tweets");
  }
}

export  function getCurrentUserController(req, res){
  res.send(data.currentUser)
}
