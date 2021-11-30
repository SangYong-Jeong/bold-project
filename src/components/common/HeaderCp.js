import React from 'react';
import styled, { font } from '../../style';

import NaviWrapCp from './NaviWrapCp';
import LogoCp from './LogoCp';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: ${font.kr}, ${font.serif};
  font-weight: 500;
  padding: 1em 2em;
`;

const HeaderCp = () => {
  return (
    <StyledHeader>
      <LogoCp />
      <NaviWrapCp />
    </StyledHeader>
  );
};

export default HeaderCp;
