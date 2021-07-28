import React from 'react';
import axios from 'axios';
import styled from 'styled-components';


export default class TelaCadastro extends React.Component {
state ={
    nome: "",
    email:""
}
    
handleNome = (event) =>{
    this.setState({nome:event.target.value})
}



handleEmail = (event) =>{
    this.setState({email:event.target.value})
}


salvarCadastro = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
    const body = {
   
        name: this.state.nome,
        email: this.state.email
    }

    axios.post(url,body, {
        headers: {
     Authorization: "maria-benning-lovelace"
         }
    })
    .then((res) => {
        alert("Usuário(a) casdastrado(a) com sucesso!")
        this.setState({nome:"", email:""})
    })
    .catch((err) => {
        alert(err.response.data.message)
    })
}




render () {
      return (
        <div>
          
            <button onClick={this.props.irParaLista}>Ir para página de lista</button>
            <h2>Cadastro</h2>
             <input placeholder={"Nome"}
             value={this.state.nome}
             onChange={this.handleNome}
             />

             <input placeholder={"E-mail"}
             value= {this.state.email}
             onChange={this.handleEmail}
             />

            <button onClick={this.salvarCadastro}>Salvar</button>


          </div>

         
      )
    }
}

  
  