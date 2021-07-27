import './App.css';
import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Tela1 from './Components/Tela1';
import Tela2 from './Components/Tela2';




export default class App extends React.Component{
  render () {
    return (
      <div>
        <Tela1/>
        <Tela2/>
      </div>
    )


  }
}



