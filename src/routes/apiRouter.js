const Router = require('express').Router;
const Tweet = require('../models/Tweet.js');
const Profile = require('../models/Profile.js');

const apiRouter = Router();

function getAllUsers (req, res) {
  Profile
    .query()
    .eager('tweets')
    .then(data => res.json(data));
}

function getAllTweets (req, res) {
  Tweet
    .query()
    // .then(data => res.json(data));
    .then(data => {
      return res.json(data).status(200);
    })
    .catch(error => {
      return res.send(error).status(500);
    });
}

function getTweetById (req, res) {
 Tweet
  .query()
  .findById(req.params.id)  //esto es igual al SELECT * FROM TableName WHERE Id = 5. por ejemplo.
  .then(tweet => {
    return res.json(tweet).status(200);
  })
  .catch(error => {
    return res.send(error).status(500);
  });
}

function createTweet (req, res) {
  Tweet
    .query()
    .insert(req.body) // igual al INSERT INTO TableName (nombre , edad ) VALUES (pot, 23)
    .then(newTweet => {
      return res.json(newTweet).status(200);
    })
    .catch(error => {
      return send(error).status(500);
    });
}

function updateTweet (req, res) {
  Tweet
    .query()
    .updateAndFetchById(req.params.id, req.body)
    .then(tweetUpdated => {
      return res.json(tweetUpdated).status(200);
    })
    .catch(error => {
      return res.send(error).status(500);
    });
  }

function deleteTweetById (req, res) {
  Tweet
    .query()
    .deleteById(req.params.id)
    .then(tweetsDeleted => {
      return res.json({
        rowsDeleted: tweetsDeleted
      }).status(200);
    })
}






apiRouter
  .get('/users', getAllUsers)

//Aquí van los endpoits que debemos crear para los tweetts
apiRouter
  .get('/tweets', getAllTweets)
  .get('/tweets/:id', getTweetById)  //esta es la forma dinámica de acceder a un endpoint, y aqui va la ruta de nuestra función que utiliza un verbo de HTTP.
  .post('/tweets', createTweet)
  .put('/tweets/:id', updateTweet)
  .delete('/tweets/:id', deleteTweetById);

module.exports = apiRouter;
