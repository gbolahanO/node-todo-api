const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/TodoApp");

const Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

// var newTodo = new Todo({
//     text: 'Cook dinner',
// });

//  otherTodo.save().then((doc) => {
//      console.log(JSON.stringify(doc, undefined, 2));
//  }, (e) => {
//      console.log('Unable to save', e);
//  });
 
 const User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    }
 });

 let user = new User({
    email: 'gbolahanolawuyi4u"gmail.com   '
 });

 user.save().then((doc) => {
     console.log('User saved', doc);
 }, (e) => {
    console.log('Unable to save user', e);
 });