import React from 'react';
import styled from '../../style';
import NaviCp from './NaviCp';

const StyledNaviWrapper = styled.nav`
  display: flex;
`;

const NaviWrapCp = () => {
  return (
    <StyledNaviWrapper>
      <NaviCp type="about" link="/" />
      <NaviCp type="work" link="/portfolio" />
      <NaviCp type="Contact" link="/contact" />
      <NaviCp type="instagram" link="/instagram" />
    </StyledNaviWrapper>
  );
};

export default NaviWrapCp;
