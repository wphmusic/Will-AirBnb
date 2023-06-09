const express = require('express');
const router = express.Router();

router.get('/hello/world', function(req, res) {
  res.cookie('XSRF-TOKEN', req.csrfToken());
  res.send('Hello World!');
});

module.exports = router;

// backend/app.js
const routes = require('./routes');

// ...

app.use(routes); // Connect all the routes

// backend/app.js
// ...

module.exports = app;
