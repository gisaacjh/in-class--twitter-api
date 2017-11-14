const express = require('express');
const fs = require('fs-extra');

const pageRouter = require('./src/routes/pageRouter.js');
const apiRouter = require('./src/routes/apiRouter.js');

const app = express();

const PATH = `${__dirname}/src/views/home.html`;

app.use('/', pageRouter);
app.use('/api/v1', apiRouter);

// Create 404 route
app.use((req, res) => {
  res.send('<h1>404. Not found.</h1>')
});

// app.use('/', (req, res) => {
//   fs
//     .readFile(PATH, 'utf-8')
//     .then(data => {
//       res.send(data);
//     })
//   })

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {

console.log(`App listening on port ${PORT}`)

});
