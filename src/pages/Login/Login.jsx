import LogInForm from 'components/LoginForm/LoginForm.jsx';
import React from 'react';
import { StyledBlurWrapper, StyledLogin } from './LoginStyled';

const Login = () => {
  return (
    <StyledLogin>
      <StyledBlurWrapper />
      <LogInForm />
    </StyledLogin>
  );
};

export default Login;
