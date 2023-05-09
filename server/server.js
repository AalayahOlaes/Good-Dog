const express = require('express');
const app = express();
const path = require('path');

const mongoose = require('mongoose');
const { db, Trick } = require('./trickModel');


const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, '../client')));

// roots
app.post('/createTrick', (req, res) => {
    
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
    console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;