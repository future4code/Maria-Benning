
import dotenv from "dotenv";
import { IdGenerator } from './IdGenerator';
import { HashManager } from './hashmanager';
import { connection } from "./connection";
import { app } from './app'



dotenv.config();








app.post("/post", (req, res) => {
try {
  const{
      nome, email, senha
  } = req.body 

   if ( !nome || !email || !senha) {
    res.status(400).send("Erro")

const id=new IdGenerator().generateId()
const cipherPassword = new HashManager().generateHash(senha)
await connection("")
   }
} catch (error) {
    
}
})

















