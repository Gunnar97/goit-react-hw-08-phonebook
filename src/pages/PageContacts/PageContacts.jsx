import ContactForm from 'components/ContactForm/ContactForm.jsx';
import ContactsList from 'components/ContactList/ContactList.jsx';

import FilterData from 'components/FilterData';
import React from 'react';
import { StyledBlurWrapper } from './PageContactsStyled.js';

const PageContacts = () => {
  return (
    <>
      <StyledBlurWrapper />
      <ContactForm />
      <FilterData />
      <ContactsList />
    </>
  );
};

export default PageContacts;
