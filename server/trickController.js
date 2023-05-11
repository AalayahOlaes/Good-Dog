const { models } = require('mongoose');
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
      Trick.find({}) // Retrieve all tricks from the database
        .then((tricks) => {
          return res.status(201).json({ tricks }); // Return an array of tricks
        })
        .catch((err) => {
          console.error(err);
          return res.status(500).json({ error: 'An error occurred while retrieving the tricks.' });
        });
    })
    .catch((err) => {
      console.error(err);
      return res.status(500).json({ error: 'An error occurred while creating the trick.' });
    });
  };

trickController.getTricks = async (req, res, next) => {
   try {
    const trickDocs = await models.Trick.find({}).exec();
    res.locals.tricks = trickDocs;
    return next();
   } catch (err) {
    return next({
        log: `trickController.getTricks: Error: ${err}`,
        status: err.status || 500,
        message: {
            err: 'Error occured in trickController.getTricks.'
        },
    });
   }
}

trickController.deleteCard = (req, res, next) => {
  console.log('im in the delete controller')
  const { id } = req.params;
  Trick.findByIdAndDelete(id, (err, docs) => {
    if (err) {
      console.log(err);
      return next();
    } else {
      console.log('Deleted: ', docs);
      return next();
    }
  })
}

module.exports = trickController;