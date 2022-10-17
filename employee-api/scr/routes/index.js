/**
 * arquivo: routes/index.js
 * descrição: arquivo responsável pela chamada da API na aplicação no lado do BackEnd
 * data: 17/10/2022
 * autor: Antonio Mexas
 */

const express = require('express');

const router = express.Router();

router.get('/api', (req, res) => {
    res.status(200).send({
        sucess: 'true',
        message: 'Seja bem vindo a API Node.js + PostgreSQL + Azure',
        version: '1.0.0'
    });
});

module.exports = router;