const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const port = 2002;

let messages = [{ text: 'some server-located text', owner: 'Morgan' }, { text: 'some more text', owner: 'Roman' }]

let users = [{
    firstName: 'a',
    lastName: 'a',
    email: 'a@a.aaa',
    password: 'a',
    id: 0
}];

app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
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

api.get('/users/me', checkAuthenticated, (req, res) => {
    res.json(users[req.user]);

})

api.post('/users/me', checkAuthenticated, (req, res) => {
    let user = users[req.user];
    
    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;

    res.json(user);
})

auth.post('/login', (req, res) => {
    let user = users.find(user => user.email == req.body.email);

    if (!user)
        sendAuthError(res);

    if (user.password == req.body.password)
        sendToken(user, res);

    else
        sendAuthError(res);
})

auth.post('/register', (req, res) => {
    let index = users.push(req.body) - 1;

    let user = users[index];
    user.id = index;

    sendToken(user, res);
})

function sendToken(user, res) {
    let token = jwt.sign(user.id, '123');
    res.json({ firstName: user.firstName, token });
}

function sendAuthError(res) {
    return res.json({ success: false, message: 'Email or password is incorrect.' })
}

function checkAuthenticated(req, res, next) {
    if (!req.header('authorization'))
        return res.status(401).send({ success: false, message: 'Unauthorized request. Missing authentication header.' })

    const token = req.header('authorization').split(' ')[1];

    const payload = jwt.decode(token, '123');

    if (!payload)
        return res.status(401).send({ message: 'Unauthorized request. Authentication header invalid.' })

    req.user = payload;

    next();
}

app.use('/api', api);
app.use('/auth', auth);

app.listen(port, () => console.log("Server running on port: " + port));