const db = require('../config/dbConfig');

class Rating {
    static getTopRatedMovies(callback) {
      const query = `
        SELECT r.tconst, m.primaryTitle, r.averageRating, m.genres
        FROM rating AS r
        JOIN movie AS m ON r.tconst = m.tconst
        WHERE r.averageRating > 6.0
        ORDER BY r.averageRating DESC
      `;
  
      db.query(query, callback);
    }
  }
  
  module.exports = Rating;