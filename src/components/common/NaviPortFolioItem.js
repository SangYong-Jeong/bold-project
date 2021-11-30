import React from 'react';
import styled from '../../style';
import { Link } from 'react-router-dom';

const StyleNaviPfWrapper = styled.div`
  display: none;
  position: absolute;
  top: 57px;
  left: 24px;
  width: calc(100% - 24px);
`;

const StyleNaviPfItem = styled.div`
  padding: 0.3em 0.1em;
  border-bottom: 1px solid red;
  width: 100%;
  background-color: blueviolet;
`;

const NaviPortFolioItem = () => {
  return (
    <StyleNaviPfWrapper>
      <StyleNaviPfItem>1</StyleNaviPfItem>
      <StyleNaviPfItem>2</StyleNaviPfItem>
      <StyleNaviPfItem>3</StyleNaviPfItem>
    </StyleNaviPfWrapper>
  );
};

export default NaviPortFolioItem;
