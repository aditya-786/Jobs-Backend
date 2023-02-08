const Pool = require("pg").Pool;

const pool = new Pool({
    user: "adi_7861",
    password: "jnrm3CPX9PrvsHpgDB0yak4qPURausAh",
    host: "dpg-cfhrlj02i3murcbjoqe0-a.oregon-postgres.render.com",
    port: "5432",
    database: "jobs_backend",
    ssl: true
});

module.exports = pool;