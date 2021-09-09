import React from 'react';
import logo from "../../assets/logo.png"
import SignUpForm from './SignUpForm';

import { ScreenContainer } from "./styled"
import { LogoImage } from './styled';


const SignUpPage = () => {
    return (
      <ScreenContainer>
      <LogoImage src={logo}/>
      <SignUpForm/>
    </ScreenContainer>
    )
  }
  
  export default SignUpPage;
  



  