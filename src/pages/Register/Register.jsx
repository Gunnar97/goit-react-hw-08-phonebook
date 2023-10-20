import RegisterForm from 'components/RegisterForm/RegisterForm';
import { StyledBlurWrapper, StyledRegister } from './RegisterStyled.js';

const Register = () => {
  return (
    <StyledRegister>
      <StyledBlurWrapper />
      <RegisterForm />
    </StyledRegister>
  );
};

export default Register;
