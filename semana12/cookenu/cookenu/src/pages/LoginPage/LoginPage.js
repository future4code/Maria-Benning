import React from 'react';
import { LogoImage, ScreenContainer, SignUpButtonContainer } from './styled'
import logo from "../../assets/logo.png"
import { Button, TextField } from '@material-ui/core';
import LoginForm from './LoginForm';
import { useHistory } from 'react-router';
import { goToSignUp } from "../../routes/coordinator"

const LoginPage = () => {
const history = useHistory()



  return (
    <ScreenContainer>
      <LogoImage src={logo} />
      <LoginForm />
      <SignUpButtonContainer>
        <Button
        onClick={() => goToSignUp(history)}
          type={"submit"}
          fullWidth
          variant={"text"}
          color={"primary"}
        >
          Não possui conta? Cadastre-se

        </Button>
      </SignUpButtonContainer>
    </ScreenContainer>
  )
}

export default LoginPage;
