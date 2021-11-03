import express, {Express} from 'express'
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
    database: process.env.DB_NAME
  }
});


app.get('/ping', (req, res) => {

try {
   console.log('pong')
}
catch (error) {
   console.log(error)
}
})











const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(` O Servidor está em  http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});