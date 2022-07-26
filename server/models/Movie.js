const { Schema } = require('mongoose');

const movieSchema = new Schema({
  id: {
    type: String,
    unique: true
  },
  title: 
  {
    type: String,
    required: true
  },
  overview: {
    type: String,
    required: true,
  },
  poster_path: {
    type: String,
    required: true,
  },
  release_date: {
    type: String
  },
  vote_average: {
    type: String,
  }
},
{
  toJson: {
    getters: true
  }
});

module.exports = movieSchema;
