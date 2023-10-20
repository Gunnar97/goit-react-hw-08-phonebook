import { styled } from 'styled-components';

export const StyledTitle = styled.h3`
  margin: 1em 0 0.5em 0;
  color: #343434;
  font-weight: normal;
  font-family: 'Ultra', sans-serif;
  font-size: 28px;
  line-height: 42px;
  text-transform: uppercase;
  text-shadow: 0 2px white, 0 3px #777;
`;
export const StyledDesc = styled.p`
  margin-top: 10px;
  margin-bottom: 10px;
  font-weight: ${props => props.theme.fontWeights.medium};
`;
