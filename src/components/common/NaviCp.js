import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import styled, { font } from '../../style';
import emotion from '@emotion/styled';

import NaviPortFolioItem from './NaviPortFolioItem';

const StyledWrapper = styled.div`
  font-family: ${font.en}, ${font.serif};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5em;
  position: ${(props) => (props.type === 'portfolio' ? 'relative' : 'static')};
`;

const StyledLink = styled(Link)`
  display: flex;
  padding: 0.35em 1em 0.45em 1em;
  justify-content: center;
  align-items: flex-end;
  transition: all 0.5s;
  &:hover {
    opacity: 0.5;
    color: inherit;
    text-decoration: none;
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
  const [isVisible, setIsVisible] = useState(false);

  const onMouseEnter = useCallback(() => {
    setIsVisible(true);
  }, []);

  const onMouseLeave = useCallback(() => {
    setIsVisible(false);
  }, []);

  return (
    <StyledWrapper
      type={type}
      pf={isVisible}
      onMouseEnter={type === 'portfolio' ? onMouseEnter : undefined}
      onMouseLeave={type === 'portfolio' ? onMouseLeave : undefined}
    >
      <StyledLink to={link}>
        {type === 'instagram' ? <StyledIcon /> : type}
      </StyledLink>
      {isVisible && <NaviPortFolioItem />}
    </StyledWrapper>
  );
};

export default NaviCp;
