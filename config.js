const mysql = require('mysql');
require('dotenv').config();

const connection = mysql.createConnection({
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE
})

module.exports = connection;