import React from 'react';
import styled from 'styled-components';


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
    return (
      <FormContainer>
       <h1> Inscreva-se para uma Viagem</h1>
       <ButtonForm>
       <button>Voltar</button>
       <button>Enviar</button>
       </ButtonForm>
      </FormContainer>
      
    );
  }

  export default ApplicationFormPage
  
  
  