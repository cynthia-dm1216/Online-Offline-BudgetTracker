const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');
const compression = require('compression');

const PORT = 3000;

const app = express();

app.use(logger('dev'));

app.use(compression());
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use(express.static('public'));

mongoose.connect("mongodb://localhost/budget", {useNewUrlParser: true, useFindAndModify: false});

//API routes
app.use(require('./routes/api.js'));

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
});
