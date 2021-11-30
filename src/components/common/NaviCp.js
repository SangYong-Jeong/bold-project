import React from 'react';
import { Link } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import styled, { font } from '../../style';
import emotion from '@emotion/styled';

import NaviPortFolioItem from './NaviPortFolioItem';

const StyledWrapper = styled.div`
  font-family: ${font.en}, ${font.serif};
  padding: 1em 1em 0 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5em;
  position: ${(props) => (props.type === 'portfolio' ? 'relative' : 'static')};
`;

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s;
  &:hover {
    opacity: 0.5;
  }
`;

const StyledIcon = emotion(InstagramIcon)`
  font-size: 1.4em;
  transition: all 0.5s;
  &:hover {
    opacity: 0.5
  }
`;

const NaviCp = ({ type, link }) => {
  return (
    <StyledWrapper type={type}>
      <StyledLink to={link}>
        {type === 'instagram' ? <StyledIcon /> : type}
      </StyledLink>
      {type === 'portfolio' && <NaviPortFolioItem />}
    </StyledWrapper>
  );
};

export default NaviCp;
