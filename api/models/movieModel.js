const db = require('../config/dbConfig');

class Movie {
    static getLongestDurationMovies(callback) {
      const query = `
        SELECT tconst, primaryTitle, runtimeMinutes, genres
        FROM movie 
        ORDER BY runtimeMinutes DESC
        LIMIT 10
      `;
  
      db.query(query, callback);
    }
  
    static createMovie(movieData, callback) {
      const { tconst, primaryTitle, runtimeMinutes, genres } = movieData;
  
      const query = `
        INSERT INTO movie (tconst, primaryTitle, runtimeMinutes, genres)
        VALUES (?, ?, ?, ?)
      `;
  
      db.query(query, [tconst, primaryTitle, runtimeMinutes, genres], callback);
    }
  }
  
  module.exports = Movie;