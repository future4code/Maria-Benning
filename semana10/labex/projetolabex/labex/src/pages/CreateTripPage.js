import React from 'react';
import { useHistory } from "react-router-dom";




const CreateTripPage = () => {
  const history = useHistory ()

  const goBack = () =>{
  history.goBack()
}
    return (

      <div>
       <h1>Criar Viagens</h1>
      <button onClick={goBack}>Voltar</button>
      <button>Criar</button>

      </div>
    );
  }
  
  export default CreateTripPage;