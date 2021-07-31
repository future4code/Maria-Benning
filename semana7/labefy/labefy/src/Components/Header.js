import React from 'react';
import axios from 'axios';
import styled from 'styled-components';


const HeaderContainer = styled.div `

heigt: 100 px;
display: flex;
align-items: center;
justify-content: space-around;
`


const ButtonsContainer = styled.div `
width: 300px;
display: flex;
justify-content: space-around;
`



export default class Header extends React.Component  {
    render ()  {
  return (
    
        <HeaderContainer>
            <h1>Labefy</h1>
            <ButtonsContainer>
<button>Cadastrar Playlist</button>
<button> Gerenciar Playlist</button>
            </ButtonsContainer>
        </HeaderContainer>
        
        
  )
  }
  }
  