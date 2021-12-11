import React from 'react';
import styled, { font, color } from '../../style';

import NaviContainerCp from '../../containers/NaviContainerCp';
import LogoCp from './LogoCp';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: ${font.kr}, ${font.serif};
  font-weight: 500;
  padding: 0 2em;
  background-color: ${color.sky};
  color: #777;
  position: fixed;
  width: 100%;
  z-index: 99;
  top: 0;
`;

const HeaderCp = () => {
  return (
    <StyledHeader>
      <LogoCp />
      <NaviContainerCp />
    </StyledHeader>
  );
};

export default HeaderCp;
