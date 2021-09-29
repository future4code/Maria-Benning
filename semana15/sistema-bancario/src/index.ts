import express, {Express} from 'express'
import cors from 'cors'
import { AddressInfo } from "net";
import { Response, Request } from 'express';


const app: Express = express();

app.use(express.json());
app.use(cors());


type User = {
    id: number,
    cpf: number,
    name: string,
    age: number,
    birth: number
}



let users: User[]= [

{
    id: 1,
    cpf: 10771942548,
    name: "Maria",
    age: 28,
    birth:20031993
},

{
    id: 2,
    cpf: 10878942548,
    name: "Luana",
    age: 25,
    birth:20031996
},

{
    id: 3,
    cpf: 10070040048,
    name: "Marina",
    age: 17,
    birth:20032024
}]













const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`O Servidor está disponivel! http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});


  