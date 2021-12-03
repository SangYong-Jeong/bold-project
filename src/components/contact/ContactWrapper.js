import React from 'react';
import styled from '../../style';
import ContactItem from './ContactItemCp';

const StyledContactWrapper = styled.div`
  width: 45%;
  margin: auto;
  padding: 3em;
  background-color: rgba(0, 0, 0, 0.3);
`;

const ContactWrapper = () => {
  return (
    <StyledContactWrapper>
      <ContactItem type="logo"></ContactItem>
      <ContactItem content="officail@studio-bold.kr"></ContactItem>
      <ContactItem content="서울특별시 광진구 능동로 209(세종대학교) "></ContactItem>
    </StyledContactWrapper>
  );
};

export default ContactWrapper;
