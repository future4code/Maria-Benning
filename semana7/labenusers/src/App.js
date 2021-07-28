import './App.css';
import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import TelaListaUser from './Components/TelaListaUser';
import TelaCadastro from './Components/TelaCadastro';




export default class App extends React.Component{
state = {
    telaAtual:"cadastro"
    
}

escolheTela = () => {
  switch(this.state.telaAtual){
    case "cadastro":
      return <TelaCadastro irParaLista={this.irParaLista}/>
      case "lista":
        return <TelaListaUser irParaCadastro={this.irParaCadastro}/>
        default: 
        return <div> Erro! Página não encontrada: </div>
  }
}

irParaCadastro = () => {
this.setState({telaAtual: "cadastro"})
}

irParaLista = () => {
  this.setState({telaAtual: "lista"})
}


  render () {
    return (
      <div>
        {this.escolheTela()}
      </div>
    )


  }
}



