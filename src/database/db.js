const mysql = require('mysql2/promise');

// create a connection to the MySQL database
async function connect() {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'ejemplo',
    password: '123',
    database: 'ejemploregistro'
  });
  return connection;
}

// execute a SQL query on the database
async function query(sql, params) {
  const connection = await connect();
  const [results, fields] = await connection.execute(sql, params);
  connection.end();
  return results;
}

// export the query function and the connect function as an object
module.exports = {
  query,
  connect
};