import React from 'react';
import styled from '../../style';
import NaviCp from './NaviCp';

const StyledNaviWrapper = styled.nav`
  display: flex;
  align-items: flex-end;
`;

const NaviWrapCp = () => {
  return (
    <StyledNaviWrapper>
      <NaviCp type="about" link="/about" />
      <NaviCp type="portfolio" link="/portfolio" />
      <NaviCp type="Contact" link="/contact" />
      <NaviCp type="Login" link="/user/login" />
      <NaviCp type="instagram" link="//instagram.com" />
    </StyledNaviWrapper>
  );
};

export default NaviWrapCp;
