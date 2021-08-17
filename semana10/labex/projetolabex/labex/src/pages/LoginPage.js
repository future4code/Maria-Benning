import React from 'react';
import styled from 'styled-components';
import { useHistory } from "react-router-dom";
import { BrowserRouter, Switch, Route } from 'react-router-dom';





const LoginPage = () => {

  const history = useHistory ()
  const goBack = () =>{
  history.goBack()
}
 


    return (
      <div>
      <h1>login</h1>
     <input placeholder="email"></input>
     <input placeholder="senha"></input>
     <button onClick={goBack}>Voltar</button>
     <button>Entrar</button>
      </div>
    );
  }


  export default LoginPage;