const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
const tagsRouter = require('./routers/tags.router');
const imagesRouter = require('./routers/images.router');
const basePath = '/api';

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // needed for angular requests
app.use(express.static('build'));

/** ---------- ROUTES ---------- **/
app.use(`${basePath}/tags`, tagsRouter);
app.use(`${basePath}/images`, imagesRouter);

/** ---------- START SERVER ---------- **/
app.listen(port, function () {
    console.log('Listening on port: ', port);
});