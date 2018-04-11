let express = require('express');
let bodyParser = require('body-parser');

let {mongoose} = require('./server/db/mongoose');
let {Todo} = require('./server/models/todo');
let {User} = require('./server/models/user');

let app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    let todo = new Todo({
        text: req.body.text
    });
    todo.save((err) => {
        if (err) {
            res.status(400).send(err);
        } else {    
            res.send(todo);
        }
    });
});

app.get('/todos', (req, res) => {
    Todo.find({}, (err, todo) => {
        if(err) {
            res.status(400).send(err);
        }else {
            res.send(todo);
        }
    });
});

app.get('/todos/:id', (req,res) => {
    let id = req.params.id;

    Todo.findById(id, (err, todo) => {
        if (err) {
            res.status(400).send(err);
        } else {
            res.send(todo);
        }
    })
});

app.listen(3000, () => {
    console.log('Started on port 3000');
});