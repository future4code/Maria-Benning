import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { StyledToolbar } from './styled';
import Button from '@material-ui/core/Button';
import { goToRecipeList, goToLogin } from '../../routes/coordinator';
import { useTheme } from '@material-ui/core';
import { useHistory } from 'react-router';





const Header = () => {
  const history = useHistory ()

  return (
    
      <AppBar position="static">
        <StyledToolbar>
          <Button onClik={() => goToRecipeList(history)}color="inherit">Cokenu</Button>
          <Button onClik={() => goToLogin(history)}color="inherit">Login</Button>
        </StyledToolbar>
      </AppBar>
      
    
  );
}

export default Header;