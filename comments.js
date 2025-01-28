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

app.post('/comments', (req, res) => {
    comments.push(req.body);
    fs.writeFile(commentsPath, JSON.stringify(comments), err => {
        if (err) {
            res.status(500).send('An error occurred');
        } else {
            res.status(201).send('Comment added');
        }
    });
});

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});



