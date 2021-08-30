import React from 'react';
import styled from 'styled-components';
import { useHistory } from "react-router-dom";






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
   const history = useHistory ()

   const goToVerViagens = () => {
   history.push("/listtrip")
   
   }


  const goToLogin = () => {
  history.push("/adminpage")
  }




   
    return (
      <HomePageContainer>
       <h1>LabeX</h1>
       <ButtonInicio>
       <button onClick={goToVerViagens}>Ver Viagens</button>
       <button onClick={goToLogin}>Área de Admin</button>
       </ButtonInicio>
      </HomePageContainer>
    );
  }
  
  export default HomePage;