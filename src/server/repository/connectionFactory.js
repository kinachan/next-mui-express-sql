import mysql from 'mysql2/promise';
let dbConfig;
if (process.env.NODE_ENV === 'development') {
  dbConfig = require('config/dbconfig.develop');
}
const connection = mysql.createConnection(dbConfig);
export default connection;