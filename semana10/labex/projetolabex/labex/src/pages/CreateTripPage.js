import React from 'react';
import { useHistory } from "react-router-dom";
import styled from 'styled-components';


const TripPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    width: 500px;
    

`

const CreateTripPage = () => {
  const history = useHistory()

  const goBack = () => {
    history.goBack()
  }
  return (

    <TripPageContainer>

      <h1>Criar Viagens</h1>
      <input placeholder="Nome" />
      <input placeholder="Escolha um planeta" type="" />
      <input type="date" />
      <input placeholder="Descrição" />
      <input placeholder="Duração em dias" type="number" />


      <button onClick={goBack}>Voltar</button>
      <button>Criar</button>

    </TripPageContainer>
  );
}

export default CreateTripPage;