const fs = require('fs');
const csv = require('csv-parser');
const db = require('../config/dbConfig');

function startCSVToSQL() {
  const schema = require('../schema/movie.json');
  const dbName = schema.databaseName
  const tableName = schema.tableName
  const filePath = schema.csvFilePath
  console.log(filePath)

  fs.createReadStream(filePath)
    .pipe(csv())
    .on('data', (row) => {
      const data = {};

      Object.keys(row).forEach((key) => {
        const column = schema.columns.find((col) => col.name === key);
        if (column) {
          data[key] = column.datatype === 'INT' ? parseInt(row[key]) : row[key];
        }
      });

      const query = DataQuery(tableName, schema.columns, data);

      db.query(query, Object.values(data), (err) => {
        if (err) {
          console.error('Error inserting data:', err);
        }
      });
    })
    .on('end', () => {
      console.log('CSV file successfully imported to the database.');
    });
}

function DataQuery(tableName, columns, row) {
  const columnNames = columns.map((column) => column.name).join(', ');
  const placeholders = columns.map(() => '?').join(', ');
  const values = columns.map((column) => {
    const value = row[column.name];
    return column.datatype === 'INT' ? parseInt(value) : value;
  });

  return `INSERT INTO ${tableName} (${columnNames}) VALUES (${placeholders})`;
}

module.exports = startCSVToSQL;
