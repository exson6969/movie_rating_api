const express = require('express');
const movieController = require('../controllers/movieController');

const router = express.Router();

router.get('/longest-duration-movies', movieController.getLongestDurationMovies);
router.post('/new-movie', movieController.createMovie);
router.post('/update-runtime-minutes', movieController.updateRuntimeMinutes);
router.get('/genre-movies-with-subtotals', movieController.getGenreMoviesWithSubtotals);

module.exports = router;