import express, { Express, Response, Request} from 'express'
import cors from 'cors'
import { AddressInfo } from "net";
import { countries } from  "./data"
import { country, CONTINENTS } from "./types";





const app: Express = express();

app.use(express.json());
app.use(cors());

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});


///////////////////////////////////// Endepoint 1 Buscar todos os países

// app.get('/countries', (req: Request, res: Response) =>{
//     const result = countries.map(country => ({
// id:country.id,
// name: country.name


//     }))
// res.status(200)
// .send(result)

// })

///////////////////////////////////// Endepoint 2 Buscar país por id


// app.get('/countries/:id', (req: Request, res:Response) => {
//     const result = countries.find((country)=> country.id === Number(req.params.id))
// if (result) {
//     res.status(200).send(result)
// }else {
// res.status(404).send("County not found")

// }})


///////////////////////////////////// Endepoint 3 Busca com filtros

    
///////////////////////////////////// Endpoint 4 - Editar país

// app.put('/countries/:id', (req: Request, res:Response)=> {



// })
       