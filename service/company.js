const pool = require("../db/connection");
require('dotenv').config();


async function getCompanyByName(name) {
    const company = await pool.query("SELECT * from companies where name=$1",
        [name]
    );
    if (company && company.rows.length > 0) {
        return company.rows[0].id;
    }
    return null;
}

async function insertCompany(name,logo) {
    console.log(process.env);
    const company = await pool.query("INSERT INTO companies(id,name,logo,createdat,updatedat,deletedat"
        + ") VALUES(uuid_generate_v4(),$1,$2,now(),now(),null) RETURNING *",
        [name,logo]
    );
    return company;
}

async function getCompanies() {
    const companies = await pool.query("SELECT name from companies;");
    return companies;
}


module.exports = {
    getCompanyByName,
    getCompanies,
    insertCompany,
};