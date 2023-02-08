const Pool = require("pg").Pool;

const pool = new Pool({
    user: "adi_7861",
    password: "",
    host: "localhost",
    port: "5437",
    database: "jobs_backend",
});

module.exports = pool;