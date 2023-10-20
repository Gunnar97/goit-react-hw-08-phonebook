import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const StyledHeadUser = styled.div`
  display: flex;
  gap: 30px;
  align-items: flex-start;
  justify-content: center;
`;

export const StyledUserInfo = styled.div`
  display: flex;
  gap: 5px;
`;

export const StyledUserName = styled.h3`
  color: #343434;
  font-weight: normal;
  font-family: 'Ultra', sans-serif;
  font-size: 18px;
  line-height: 42px;
  text-transform: uppercase;
  text-shadow: 0 2px white, 0 3px #777;
`;

export const StyledLogOut = styled(Link)`
  margin: 0 auto;
`;
