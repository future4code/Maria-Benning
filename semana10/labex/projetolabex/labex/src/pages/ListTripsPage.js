import React from 'react';
import styled from 'styled-components';
import { useHistory } from "react-router-dom";




const ListContainer = styled.div `
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
const ButtonList = styled.div `



`

 const  ListTripsPage = () => {
   const history = useHistory ()
  const goBack = () =>{
  history.goBack()
}

const inscricao = () => {
  history.push("/applicationform")



}

    return (
      



      <ListContainer>
       <h1>Lista de Viagens</h1>
       <ButtonList>
       <button onClick={goBack}>Voltar</button>
       <button onClick={inscricao}>Inscreva-se</button>
       </ButtonList>
      </ListContainer>
  
    );
  }

  export default ListTripsPage;