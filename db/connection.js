const Pool = require("pg").Pool;
require('dotenv').config();

const pool = new Pool({
    user: process.env.DB_USER_NAME,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    ssl: process.env.DB_SSL
});

// const pool = new Pool({
//     user: 'adi_7861',
//     password: '',
//     host: 'localhost',
//     port: 5432,
//     database: 'jobs_backendd',
// })


module.exports = pool;