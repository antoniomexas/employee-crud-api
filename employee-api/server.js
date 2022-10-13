/**
 * arquivo: server.js
 * descrição: arquivo responsável por toda configuração do Back End
 * data: 11/10/2022
 * autor: Antonio Mexas
 */

const app = require('.src/app');

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Aplicação sendo executada na porta:', port);
});