import React from 'react';
import styled from 'styled-components';

const HomePageContainer = styled.div `
margin: 30px 0px;
    padding: 0px;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;

   
    
`

const ButtonInicio = styled.div `

  
  `


 const  HomePage = () => {
    return (
      <HomePageContainer>
       <h1>LabeX</h1>
       <ButtonInicio>
       <button>Ver Viagens</button>
       <button>Área de Admin</button>
       </ButtonInicio>
      </HomePageContainer>
    );
  }
  
  export default HomePage;