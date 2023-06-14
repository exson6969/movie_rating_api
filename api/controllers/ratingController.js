const Rating = require('../models/ratingModel');

exports.getTopRatedMovies = (req, res) => {
  Rating.getTopRatedMovies((error, results) => {
    if (error) {
      console.error('Error executing SQL query: ', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(results);
    }
  });
};
