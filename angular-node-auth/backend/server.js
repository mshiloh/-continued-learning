const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const port = 2002;

let messages = [{ text: 'some server-located text', owner: 'Morgan' }, { text: 'some more text', owner: 'Roman' }]

app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

const api = express.Router();

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

app.use('/api', api)

app.listen(port, () => console.log("Server running on port: " + port));