const { db, Trick } = require('./trickModel');

const trickController = {};

trickController.createTrick = (req, res) => {
    const { trickName, description, cue, difficultyLevel, reinforcement, repetitions } = req.body;

    if (!trickName || !description) {
        return res.status(400).json({ error: 'Please enter the name and description of the trick.' });
    }

    Trick.create({
        trickName,
        description,
        cue,
        difficultyLevel,
        reinforcement,
        repetitions,
    })
    .then((trick) => {
        return res.status(201).json({ trick });
    })
    .catch((err) => {
        console.error(err);
        return res.status(500).json({ error: 'An error occurred while creating the trick.' });
    });
};


module.exports = trickController;