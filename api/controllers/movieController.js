const Movie = require('../models/movieModel');

exports.getLongestDurationMovies = (req, res) => {
  Movie.getLongestDurationMovies((error, results) => {
    if (error) {
      console.error('Error executing SQL query: ', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(results);
    }
  });
};

exports.createMovie = (req, res) => {
  const { tconst, primaryTitle, runtimeMinutes, genres } = req.body;

  Movie.createMovie({ tconst, primaryTitle, runtimeMinutes, genres }, (error) => {
    if (error) {
      console.error('Error executing SQL query: ', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json({ message: 'Success' });
    }
  });
};
