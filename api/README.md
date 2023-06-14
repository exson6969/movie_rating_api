# Movie Rating API 

## Routes

The API exposes the following routes:
</br>

### 1. Get Longest Duration Movies

**URL:** `/api/v1/longest-duration-movies`

**Method:** GET

**Description:** Retrieves the top 10 movies with the longest duration.

**Response:**
- 200 OK: Returns an array of movie objects with the following properties:
  - `tconst` (string): The unique identifier of the movie.
  - `primaryTitle` (string): The primary title of the movie.
  - `runtimeMinutes` (number): The duration of the movie in minutes.
  - `genres` (string): The genres of the movie.

### 2. Add new movie

**URL:** `/api/v1/new-movie`

**Method:** POST

**Description:** This route takes JSON as input for new movie and saves it into the database. On successful save, it returns “success”


**Response:**
- 200 OK: Returns a message "Success" properties:
  - `message` (string): Success.

### 3. Get top rated movies

**URL:** `/api/v1/top-rated-movies`

**Method:** GET

**Description:** This route returns as JSON the movies with an averageRating > 6.0, in sorted order by averageRating


**Response:**
- 200 OK:  Returns an array of movie objects with the following properties:
  - `tconst` (string): The unique identifier of the movie.
  - `primaryTitle` (string): The primary title of the movie.
  - `genre` (string): The genres of the movie.
  - `averageRating` (float): The average rating of the movie.

### 4. Get movie vote with subtotal

**URL:** `/api/v1/genre-movies-with-subtotals`

**Method:** GET

**Description:** Show a list of all movies genre-wise with Subtotals of their numVotes


**Response:**
- 200 OK:  Returns an array of movie objects.

### 5. Update movies runtime 

**URL:** ` /api/v1/update-runtime-minutes`

**Method:** POST

**Description:** Increment runtimeMinutes of all Movies.

**Response:**
- 200 OK: Returns a message "Success" properties:
  - `message` (string): Success.