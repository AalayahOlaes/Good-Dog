const express = require('express');
const app = express();
const path = require('path');

const mongoose = require('mongoose');
const { db, Trick } = require('./trickModel');

const bodyParser = require('body-parser');

const trickController = require('./trickController');
const PORT = 3000;



app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static(path.resolve(__dirname, '../client')));


// roots
app.get('/', (req,res) => {
    res.sendFile(path.resolve(__dirname, './client/index.html'))
})

app.get('/getTricks', trickController.getTricks, (req, res) => {
    return res.status(200).json(res.locals.tricks)
})

app.post('/createTrick',
 trickController.createTrick, 
(req, res) => {
    return res.status(200)
})

app.use((req, res) => res.status(404).send('Invalid page.'))

app.use((err, req, res, next) => {
    const defaultErr = {
        log: 'Express error handler caught unknown middleware error',
        status: 500,
        message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign({}, defaultErr. err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
    (`Server listening on port: ${PORT}`);
});

module.exports = app;