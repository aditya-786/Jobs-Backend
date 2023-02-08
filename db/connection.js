const Pool = require("pg").Pool;
require('dotenv').config();

const pool = new Pool({
    user: process.env.DB_USER_NAME,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    ssl: process.env.SSL
});


module.exports = pool;