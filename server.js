const express = require('express');
const bodyParser = require('body-parser');

const {mongoose} = require('./server/db/mongoose');
const {Todo} = require('./server/models/todo');
const {User} = require('./server/models/user');

const app = express();

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

app.delete('/todos/:id', (req, res) => {
    let id = req.params.id;
    Todo.findByIdAndRemove(id, (err) => {
        if (err) {
            res.status(400).send(err);
        } else {
            res.send('Todo deleted');
        }
    });
});

app.patch('/todos/:id', (req, res) => {
    let todo = {};
    todo.text = req.body.text;
    todo.completed = req.body.completed;
    todo.completedAt = new Date().getTime();
    Todo.findByIdAndUpdate( req.params.id, todo, (err) => {
        if (err) {
            res.status(400).send(err);
        } else {
            res.send("Todo updated");
        }
    });
});

app.listen(3000, () => {
    console.log('Started on port 3000');
});