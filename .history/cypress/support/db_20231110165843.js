const mysql = require('mysql2/promise');
const pool = mysql.createPool({
    host: 'localhost',
    user: 'testuser',
    password: 'testpass',
    database: 'testdb',
    connectionLimit: 10 // maximum number of connections in the pool
});
module.exports = pool;