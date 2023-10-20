import { styled } from 'styled-components';

export const StyledContactsList = styled.ul`
  width: 80%;
`;

export const StyledContactLi = styled.li`
  list-style: none;

  display: flex;
  text-align: center;
  align-items: flex-end;
  margin-bottom: 8px;
`;

export const StyledSpan = styled.span`
  margin-right: auto;
`;
export const StyledBtnDelete = styled.button`
  background-color: transparent;
  border: none;
`;
export const StyledUpSpan = styled.div`
  font-size: 26px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  place-items: center;
  :hover,
  :focus {
    color: ${props => props.theme.colors.black};
    font-weight: ${props => props.theme.fontWeights.bold};
    transform: scale(1.05);
  }
`;

export const StyledContacts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  max-width: 450px;
  background-color: #ffffff;
  border: 1px solid #e1e1e1;
  border-radius: 19px;
  box-shadow: -1px 15px 30px -12px black;
  padding: 24px 0;
  text-align: center;
`;
