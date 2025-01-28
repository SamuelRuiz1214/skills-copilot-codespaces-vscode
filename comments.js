//create web server
const express = require('express'); //import express
const app = express(); //create an express app
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const commentsPath = path.join(__dirname, 'comments.json');
const comments = require(commentsPath);

app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/comments', (req, res) => {
    res.json(comments);
}
);

