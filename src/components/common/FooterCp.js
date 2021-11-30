import React from 'react';
import styled from '../../style';
import FooterItemCp from './FooterItemCp';

const StyledFooter = styled.div`
  background-color: black;
  padding: 1em 6em;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const FooterCp = () => {
  return (
    <StyledFooter>
      <FooterItemCp>About</FooterItemCp>
      <FooterItemCp>Work</FooterItemCp>
      <FooterItemCp>Contact</FooterItemCp>
      <FooterItemCp>Follow us</FooterItemCp>
      <FooterItemCp>ⓒ studio wip 2020</FooterItemCp>
    </StyledFooter>
  );
};

export default FooterCp;
