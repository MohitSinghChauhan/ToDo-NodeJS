const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const app = express();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.set('view engine', 'ejs');


let todos = [];
app.get('/', (req, res) => {
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let today = new Date();
    let day = today.toLocaleDateString("hi-IN", options);
    res.render('index', { today: day,todos: todos })
})

app.post('/', (req, res) => {
    let todo = req.body.todo;
    todos.push(todo);
    res.redirect('/');

})







const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
});