# Movie Rating API 
This API allow to push a csv file into MySQL database using `csv_to_sql` script and then data can be retreived from the database as needed from the `api` which have some predefined routes.

## Prerequisites

Before running the script, make sure you have the following installed:

- Node.js: [Download and install Node.js](https://nodejs.org/en/) if you haven't already.
- MySQL: Install MySQL and set up your database server.

## Getting Started

1. Clone this repository or download the script files to your local machine.

2. Go to desired directory for csv_to_sql: 

``` 
cd .\csv_to_sql 
``` 

and to hit api endpoints 
```
cd .\api
```
3. Install the required dependencies in package.json

4. Follow README of specific directory.

5. Run the script using the following command:

```
node .\index.js
```

## Future Work

In order to enhance the performance and improve the response time of the API, future work involve implementing Redis as a caching layer. Redis is an in-memory data store that can significantly speed up data retrieval compared to traditional MySQL database queries. By leveraging Redis, we can reduce the load on the MySQL database and provide faster access to frequently requested data.