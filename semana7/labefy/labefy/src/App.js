
import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Header from './Components/Header';
import Pages from './Components/Pages';
import PlaylistCreationForm from './Components/PlaylistCreationForm';
import PlaylistManagerPage from './Components/PlaylistManagerPage';

const AppContainer = styled.div `
width: 100vw;
heigt: 100 vh;
display: flex;
flex-direction:column;

`


export default class App extends React.Component  {
  render ()  {
return (
  <AppContainer>
    <Header></Header>
    <Pages></Pages>

  <PlaylistCreationForm></PlaylistCreationForm>
  <PlaylistManagerPage></PlaylistManagerPage>
    
    </AppContainer>
)
}
}

  
  


