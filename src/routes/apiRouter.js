const Router = require('express').Router;

const apiRouter = Router();

function getAllUsers (req, res) {
   const db = req.app.locals.db;

   db
    .select()
    .table('users')
    .then(data => res.json(data));
}

function getAllTweets (req, res) {
  const { db } = req.app.locals;

  db
    .select()
    .table('tweets')
    .then(data => res.json(data));
}

apiRouter
  .get('/users', getAllUsers)
  .get('/tweets', getAllTweets);

module.exports = apiRouter;
