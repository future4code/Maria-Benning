import React, { useState, useEffect } from 'react';
import { HomePage } from './Pages/HomePage/HomePage';
import { MatchesPages } from './Pages/MatchesPage/MatchesPage';
import styled from 'styled-components';
import { Container , ProfileImage, Profile} from './Pages/HomePage/Styled';
import axios from 'axios';





const App = () => {
  const [telaAtual, setTelaAtual] = useState("homepage")



  const escolherTela = () => {
    switch (telaAtual) {
      case "homepage":
        return <HomePage />
      case "matchespages":
        return <MatchesPages />
      default:
        return <HomePage />
    }
  }

  const mudaTela = (tela) =>  {
setTelaAtual(tela)

  }

  const cleanMatches =() =>{
    const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/maria-benning-lovelace/clear"

    
    axios.put(url)

    .then((res) => {
      console.log(res.data)
      alert("Os matches foram limpados")
    })
    .catch((err) => {
      console.log(err.response)
    })
}

  return (
    <div>Astromatch
      <button onClick= {()=>mudaTela("homepage")}>ir Home </button>
      <button onClick={()=>mudaTela("matchespages")}>Ir matche </button>
      <button onClick={()=> cleanMatches()}> limpar Matches </button>
      {escolherTela()}
    </div>
  )


}

export default App