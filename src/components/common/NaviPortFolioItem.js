import React from 'react';
import styled, { AnimationWrapper, color } from '../../style';
import { Link } from 'react-router-dom';

const StyleNaviPfWrapper = styled(AnimationWrapper)`
  position: absolute;
  top: 42px;
  left: 24px;
  width: calc(100% - 24px);
  transition: all 0.5s;
`;

const StyleNaviPfItem = styled.div`
  font-size: 0.75em;
  width: 100%;
  background-color: ${color.lightGrey};
`;

const StyledLink = styled(Link)`
  display: block;
  padding: 0.3em 0.1em;
  color: ${color.white};
  background-color: rgba(41, 128, 185, 0.7);
  &:hover {
    color: inherit;
    text-decoration: none;
    background-color: ${color.brown};
  }
`;

const NaviPortFolioItem = () => {
  return (
    <StyleNaviPfWrapper>
      <StyleNaviPfItem>
        <StyledLink to="/portfolio/package">Package</StyledLink>
      </StyleNaviPfItem>
      <StyleNaviPfItem>
        <StyledLink to="/portfolio/graphic">Graphic</StyledLink>
      </StyleNaviPfItem>
      <StyleNaviPfItem>
        <StyledLink to="/portfolio/illustration">illustration</StyledLink>
      </StyleNaviPfItem>
      <StyleNaviPfItem>
        <StyledLink to="/portfolio/character">Character</StyledLink>
      </StyleNaviPfItem>
    </StyleNaviPfWrapper>
  );
};

export default NaviPortFolioItem;
