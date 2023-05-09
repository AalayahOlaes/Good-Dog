const { db, Trick } = require('./trickModel');

const trickController = {};

trickController.createTrick = (req, res, next) => {
    const {trickName, description, cue, difficultyLevel, reinforcement, repetitions} = req.body;

    if (!trickName || !description) {
        return next({
            log: 'Please enter the name of a trick.'
        })
    } else {
        Trick.create({
            'trickName': trickName,
            'description': description,
            'cue': cue,
            'difficultyLevel': difficultyLevel,
            'reinforcment': reinforcement,
            'repetitions': repetitions
        })
        return next();
    }
}