import React, { useState, useEffect } from 'react';
import { HomePage } from './Pages/HomePage/HomePage';
import { MatchesPages } from './Pages/MatchesPage/MatchesPage';
import styled from 'styled-components';
import { Container , ProfileImage, Profile} from './Pages/HomePage/Styled';





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



  return (
    <div>Astromatch
      <button onClick= {()=>mudaTela("homepage")}>ir Home </button>
      <button onClick={()=>mudaTela("matchespages")}>Ir matche </button>
      {escolherTela()}
    </div>
  )


}

export default App