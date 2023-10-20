import React from 'react';

import {
  StyledLinkHome,
  StyledWrapper,
  StyledHomeLink,
} from './PageNotFoundStyled.js';

const PageNotFound = () => {
  return (
    <StyledWrapper>
      <h1>PageNotFound</h1>
      <StyledLinkHome>
        You can go to <StyledHomeLink to="/">Home</StyledHomeLink>
      </StyledLinkHome>
    </StyledWrapper>
  );
};

export default PageNotFound;
