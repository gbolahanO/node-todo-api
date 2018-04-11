let express = require('express');
let bodyParser = require('body-parser');

let {mongoose} = require('./server/db/mongoose');
let {Todo} = require('./server/models/todo');
let {User} = require('./server/models/user');

let app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });
    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});


app.listen(3000, () => {
    console.log('Started on port 3000');
});