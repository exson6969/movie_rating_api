const db = require('../config/dbConfig');

class Rating {
  static getTopRatedMovies(callback) {
    const query = `
      SELECT m.tconst, m.primaryTitle, m.genres, AVG(r.averageRating) AS averageRating
      FROM movie AS m
      JOIN rating AS r ON m.tconst = r.tconst
      WHERE r.averageRating > 6.0
      GROUP BY m.tconst, m.primaryTitle, m.genres
      ORDER BY averageRating DESC
    `;

    db.query(query, callback);
  }
}

module.exports = Rating;
