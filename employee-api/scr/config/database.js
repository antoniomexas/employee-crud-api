/**
 * arquivo: config/database.js
 * descrição arquivo responsável pelas connectionStrings (CosmosDB e PostgreSQL)
 * data: 18/10/2022
 * autor: Antonio Mexas
 */

const { Pool } = require('pg')
const dotenv = require('dotenv');

//Conexão com a base de dados
const pool = new Pool ({
    connectionString: process.env.DATABASE_URL
});

pool.on('error', (err, client) => {
    console.log('Unexpected error on idle client', err)
    process.exit(-1);
});

pool.on('connect', () => {
    console.log('Base de dados conectada com sucesso!');
});

module.exports = {
    query: (text, params) => pool.query(text, params),
};