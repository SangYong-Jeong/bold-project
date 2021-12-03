import React from 'react';
import styled, { font } from '../../style';
import LogoCp from '../common/LogoCp';

const StyledContactItemWrapper = styled.div`
  text-align: center;
  padding: 1em;
  border: 1px solid red;
`;

const StyledContactItem = styled.div`
  font-size: 1.25em;
  font-weight: 400;
  font-family: ${font.kr};
`;

const ContactItemCp = ({ type, content }) => {
  return (
    <StyledContactItemWrapper>
      {type === 'logo' ? (
        <LogoCp width="100%" />
      ) : (
        <StyledContactItem>{content}</StyledContactItem>
      )}
    </StyledContactItemWrapper>
  );
};

export default ContactItemCp;
