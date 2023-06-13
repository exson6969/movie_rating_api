const startCSVToSQL = require('./utils/csvToSql');

const data_file_path = "../schema/rating.json";
// Start the CSV to SQL conversion
startCSVToSQL(data_file_path);