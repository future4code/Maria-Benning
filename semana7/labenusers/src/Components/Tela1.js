import React from 'react';
import axios from 'axios';
import styled from 'styled-components';


const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
const headers = {
 headers: {
    Authorization: "maria-benning-lovelace"
 }
}

const body = {
   body: {
        name: "string",
        email: "string"
    }

}


export default class Tela1 extends React.Component{

    state = {
        inputNome:"",
        inputEmail:""
    }



cadastrarUser = () =>{
axios.post(url,body,headers)
.then((resp) => {
    console.log(resp.data.result.list)
})
.catch((err) => {
    console.log(err.response)
})
};





    render () {
      return (
        <div>
          
            <button>Ir para página de lista</button>
             Nome: <input/>
             E-mail: <input/>
            <button>Salvar</button>


          </div>

         
      )
  
  
    }
  }
  