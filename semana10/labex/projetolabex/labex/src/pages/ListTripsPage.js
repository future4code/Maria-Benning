import React from 'react';
import styled from 'styled-components';

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
    return (
      
      <ListContainer>
       <h1>Lista de Viagens</h1>
       <ButtonList>
       <button>Voltar</button>
       <button>Inscreva-se</button>
       </ButtonList>
      </ListContainer>
  
    );
  }

  export default ListTripsPage;