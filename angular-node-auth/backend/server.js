const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const port = 2002;

let messages = [{ text: 'some server-located text', owner: 'Morgan' }, { text: 'some more text', owner: 'Roman' }]

let users = [];

app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

const api = express.Router();
const auth = express.Router();

api.get('/messages', (req, res) => {
    res.json(messages)
})

api.get('/messages/:user', (req, res) => {
    let user = req.params.user;
    let result = messages.filter(messages => messages.owner == user)
    res.json(result)
})

api.post('/messages', (req, res) => {
    messages.push(req.body);
    res.json(req.body);
})

auth.post('/register', (req, res) => {
    let index = users.push(req.body) -1;

    let user = users[index];
    user.id = index;
    let token = jwt.sign(user.id, '123');
    res.json({firstName: user.firstName, token});
})

app.use('/api', api);
app.use('/auth', auth);

app.listen(port, () => console.log("Server running on port: " + port));