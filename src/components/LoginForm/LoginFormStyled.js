import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 32px auto 0;
  max-width: 450px;
  background-color: #ffffff;
  border: 1px solid #e1e1e1;
  border-radius: 19px;
  box-shadow: -1px 15px 30px -12px black;
  padding: 24px 0;
  text-align: center;
`;

export const StyledInput = styled.input`
  width: 75%;
  margin-bottom: 8px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #023047;
  border-radius: 5px;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #ffb703;
  }
`;

export const StyledButton = styled.button`
  background-color: #ffb703;
  margin-top: 12px;
  color: #023047;
  border: none;
  border-radius: 6px;
  width: 35%;
  height: 40px;
  font-size: 1.2rem;
`;

export const StyledLink = styled(Link)`
  color: #ffb703;
`;

export const StyledError = styled.p`
  font-size: 0.5rem;
  margin: 0;
`;
