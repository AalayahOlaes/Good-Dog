const mongoose = require('mongoose');

const URI = 'mongodb+srv://olaesaalayah:pumpkin@cluster0.yk2fspz.mongodb.net/?retryWrites=true&w=majority'


// Connect to MongoDB
mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

// Create a connection object
const db = mongoose.connection;

// Handle connection events
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB');
});

// Define your schema and model below

const trickSchema = new mongoose.Schema({
    trickName: {type: String, required: true},
    description: String,
    cue: String, 
    difficultyLevel: Number, 
    reinforcement: String,
    Repetitions: Number,
    Variations: Mixed
});

module.exports = {
    db: db,
    Trick: mongoose.model('Trick', trickSchema)
};