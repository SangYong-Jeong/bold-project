import React from 'react';
import styled, { PageWrapper } from '../style';
import ContactWrapper from '../components/contact/ContactWrapper';

const StyledPageWrapper = styled(PageWrapper)`
  height: calc(100vh - 144px);
  display: flex;
`;

const ContactPage = () => {
  return (
    <StyledPageWrapper>
      <ContactWrapper />
    </StyledPageWrapper>
  );
};

export default ContactPage;
