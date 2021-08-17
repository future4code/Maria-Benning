import React from 'react';
import styled from 'styled-components';
import { useHistory } from "react-router-dom";

const FormContainer = styled.div `
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



const ButtonForm = styled.div `


`
 const ApplicationFormPage = () => {
  const history = useHistory ()
  const goBack = () =>{
  history.goBack()
}

    return (
      <FormContainer>
       <h1> Inscreva-se para uma Viagem</h1>
       <ButtonForm>
       <button onClick= {goBack}>Voltar</button>
       <button>Enviar</button>
       </ButtonForm>
      </FormContainer>
      
    );
  }

  export default ApplicationFormPage
  
  
  