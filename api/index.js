const express = require('express');
const bodyParser = require('body-parser');
const movieRoutes = require('./routes/movieRoutes');
const ratingRoutes = require('./routes/ratingRoutes');

const app = express();
app.use(bodyParser.json());

app.use('/api/v1', movieRoutes);
app.use('/api/v1', ratingRoutes);

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
