import React from 'react';
import { useHistory } from "react-router-dom";
import { useState } from "react"
import styled from 'styled-components';
import axios from 'axios';
import useForm from './hooks/useForm';



const TripPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    width: 500px;
  `



  
const CreateTripPage = () => {
 const {form, onChange, cleanFields} =  useForm({name:"", planet:"", date:"", description:"", durationInDays:"" })

 const history = useHistory()

  const goBack = () => {
    history.goBack()
  }



const criarForm = (event) =>{
  event.preventDefault()
console.log("Formulario criado", form)
cleanFields()
}

 console.log(form)
  return (

    <TripPageContainer>

      <h1>Criar Viagens</h1>
      <form onSubmit={criarForm}>
      <input
      name="name"
      value={form.name} 
      onChange={onChange}
      placeholder="Nome" pattern ="{a-z}{5}"  title={"mínimo 5 caracteres"}
      required 
      />
      

  <select
  name="planet"
  value={form.planet} 
  onChange={onChange}
  >
  <option>Escolha um planeta</option>
  <option>Mercurio</option>
  <option >Vênus</option>
  <option >Terra</option>
  <option >Marte</option>
  <option >Jupiter</option>
  <option >Saturno</option>
  <option >Urano</option>
  <option >Neturno</option>
  <option>Plutão</option>
  </select>
  
      <input 
      name="date"
      value={form.date} 
      onChange={onChange}
      type="date" 
      required 
      />
      <input 
      name="description"
      value={form.description} 
      onChange={onChange}
      placeholder="Descrição" pattern ="{a-z}{30}" title={"mínimo 30 caracteres"}
      required  
      />
      <input
      name="durationInDays"
      value={form.durationInDay} 
      onChange={onChange}
      placeholder="Duração em dias" type="number" 
      required 
      />


      <button onClick={goBack}>Voltar</button>
      <button>Criar</button>
      </form>
    </TripPageContainer>
  );
}

export default CreateTripPage;