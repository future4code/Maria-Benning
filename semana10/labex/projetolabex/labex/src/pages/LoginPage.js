import React from 'react';
import styled from 'styled-components';
import { useHistory } from "react-router-dom";
import { useState } from "react"
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import axios from 'axios';




const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const history = useHistory()
  const goBack = () => {
    history.goBack()
  }


  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };


  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };


  const onSubmitLogin = () => {
    console.log(email, password)

    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/maria-benning-lovelace/login"  
    
    const body = {
      "email": email,
      "password": password
    }

    
    axios.post(url, body, {
      headers:  {
        'Content-Type': 'application/json'
      } 
    })
      .then((res) => {
        console.log("deu certo", res.data)
      })
      .catch((err) => {
        console.log("deu errado", err.response)
      })

  }

  return (
    <div>
      <h1>login</h1>
      <input placeholder="email"
        type="email"
        value={email}
        onChange={onChangeEmail}
      />
      <input placeholder="senha"
        type="password"
        value={password}
        onChange={onChangePassword}
      />

      <button onClick={goBack}>Voltar</button>
      <button onClick={onSubmitLogin}>Entrar</button>
    </div>
  );
}


export default LoginPage;