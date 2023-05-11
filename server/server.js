const express = require('express');
const app = express();
const path = require('path');

const mongoose = require('mongoose');
const { db, Trick } = require('./trickModel');

const bodyParser = require('body-parser');

const trickController = require('./trickController');
const PORT = 3000;
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static(path.resolve(__dirname, 'client')));


// roots
app.get('/', (req,res) => {
    res.sendFile(path.resolve(__dirname, './client/index.html'))
})

// app.get('/', (req,res) => {
//     res.sendFile(path.resolve(__dirname, './client/styles.css'))
// })

app.get('/api/', trickController.getTricks, (req, res) => {
    return res.status(200).json(res.locals.tricks)
})

app.post('/api/createTrick',
 trickController.createTrick, 
(req, res) => {
    return res.status(200)
})


app.delete('/api/:id', trickController.deleteCard,
(req, res) => res.sendStatus(200));

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
    (console.log(`Server listening on port: ${PORT}`));
});

module.exports = app;