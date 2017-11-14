const Router = require('express').Router;
const fs = require('fs-extra');

// Init router
const pageRouter = Router();

// Create routes
pageRouter
  .get('/', (req, res) => {
    res.send('<h1>Home -- View</h1>');
  });

pageRouter
  .get('/about', (req, res) => {
    res.send('<h1>About -- View</h1>');
  })

module.exports = pageRouter;
