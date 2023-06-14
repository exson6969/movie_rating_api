const db = require('../config/dbConfig');

class Movie {
    static getLongestDurationMovies(callback) {
        const query = `
        SELECT m.tconst, m.primaryTitle, m.runtimeMinutes, m.genres
        FROM movie AS m
        ORDER BY m.runtimeMinutes DESC
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

    static updateRuntimeMinutes(callback) {
        const query = `
        UPDATE movie
        SET runtimeMinutes = CASE
          WHEN genres = 'Documentary' THEN runtimeMinutes + 15
          WHEN genres = 'Animation' THEN runtimeMinutes + 30
          ELSE runtimeMinutes + 45
        END
      `;

        db.query(query, callback);
    }

    static getGenreMoviesWithSubtotals(callback) {
        const query = `
      SELECT m.genres, m.primaryTitle, SUM(r.numVotes) AS numVotes
      FROM movie AS m
      JOIN rating AS r ON m.tconst = r.tconst
      GROUP BY m.genres, m.primaryTitle WITH ROLLUP
    `;

        db.query(query, callback);
    }
}

module.exports = Movie;