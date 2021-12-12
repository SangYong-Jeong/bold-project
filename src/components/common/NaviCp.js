import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import styled, { font } from '../../style';
import emotion from '@emotion/styled';

import NaviPortFolioItem from './NaviPortFolioItem';
import NaviUserCp from './NaviUserCp';

const StyledWrapper = styled.div`
  font-family: ${font.en}, ${font.serif};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5em;
  position: ${(props) =>
    props.type === 'portfolio' || props.type === 'User'
      ? 'relative'
      : 'static'};
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

const Logout = styled.a`
  cursor: pointer;
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

const NaviCp = ({ type, link = '/', onClick }) => {
  const [isVisible, setIsVisible] = useState(false);

  const onMouseEnter = useCallback(() => {
    setIsVisible(true);
  }, []);

  const onMouseLeave = useCallback(() => {
    setIsVisible(false);
  }, []);

  const goPage = (e) => {
    if (type === 'User') {
      e.preventDefault();
    }
  };

  return (
    <StyledWrapper
      type={type}
      pf={isVisible}
      onMouseEnter={
        type === 'portfolio' || type === 'User' ? onMouseEnter : undefined
      }
      onMouseLeave={
        type === 'portfolio' || type === 'User' ? onMouseLeave : undefined
      }
    >
      {type === 'Logout' ? (
        <Logout onClick={onClick}>{type}</Logout>
      ) : (
        <StyledLink to={link} onClick={goPage}>
          {type === 'instagram' ? <StyledIcon /> : type}
        </StyledLink>
      )}

      {type === 'portfolio' && isVisible && <NaviPortFolioItem />}
      {type === 'User' && isVisible && <NaviUserCp />}
    </StyledWrapper>
  );
};

export default NaviCp;
