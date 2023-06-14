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

exports.updateRuntimeMinutes = (req, res) => {
    Movie.updateRuntimeMinutes((error) => {
        if (error) {
            console.error('Error executing SQL query: ', error);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            res.json({ message: 'Success' });
        }
    });
};

exports.getGenreMoviesWithSubtotals = (req, res) => {
    Movie.getGenreMoviesWithSubtotals((error, results) => {
      if (error) {
        console.error('Error executing SQL query: ', error);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        const output = [];
  
        results.forEach((row) => {
          if (row.primaryTitle) {
            output.push({
                Genre: row.genres,
                primaryTitle: row.primaryTitle,
                numVotes: parseInt(row.numVotes,10),
            });
          } else {
            output.push({ primaryTitle:"TOTAL", numVotes: parseInt(row.numVotes,10) });
          }
        });
        console.table(output)
        res.json(output);
      }
    });
  };