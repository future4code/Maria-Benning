import express, { Express } from 'express'
import cors from 'cors'
import { AddressInfo } from "net";
import knex from "knex";
import dotenv from "dotenv";


const app: Express = express();

app.use(express.json());
app.use(cors());





dotenv.config();


export const connection = knex({
    client: "mysql",

    connection: {
        host: process.env.DB_HOST,
        port: 3306,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        multipleStatements: true
    }
});

// a. Explique como é a resposta que temos quando usamos o `raw`. 
// ele devolve diretamente a resposta do banco.

// b. Faça uma função que busque um ator pelo nome;

    app.get('/actor', async (req, res) => {

    try {
        const result = await connection.raw(`
    SELECT * FROM Actor WHERE name = "${name}"
  `)
        result.send(result)

    } catch (error:any) {
        console.log(error.message);
        res.status(500).send("An unexpected error occurred")
    }


})








// c. Faça uma função que receba um `gender` retorne a quantidade de itens na tabela Actor com esse `gender`. 
// Para atrizes, `female` e para atores `male`.






const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`O servidor estar funcionando em:  http://localhost: ${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});

