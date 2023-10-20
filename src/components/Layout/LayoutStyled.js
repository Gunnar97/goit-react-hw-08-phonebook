import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledContainer = styled.main`
  margin: 0 auto;
`;

export const StyledHeader = styled.header``;

export const StyledNavBar = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin: auto;
  background-color: #ffffff;
  border: 1px solid #e1e1e1;
  border-radius: 19px;
  box-shadow: -1px 15px 30px -12px black;
  padding: 24px 0;
  text-align: center;
`;

export const StyledNavLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 5px;
  border-radius: 4px;
  margin: 1em 0 0.5em 0;
  color: #343434;
  font-weight: normal;
  font-family: 'Ultra', sans-serif;
  font-size: 24px;
  line-height: 42px;
  text-transform: uppercase;
  text-shadow: 0 2px white, 0 3px #777;

  &.active {
    background-color: #ffb703;
    color: #023047;
  }

  &:hover:not(.active) {
    background-color: lightblue;
    color: #023047;
  }
`;
