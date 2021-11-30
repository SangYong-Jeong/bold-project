import React from 'react';
import styled from '../../style';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/bold-logo.png';

const StyledLogoWrap = styled.div`
  width: 30%;
  margin-left: 1em;
  display: flex;
  align-items: flex-end;
`;

const StyledLogoImg = styled.img`
  width: 100%;
  max-width: 70px;
`;

const StyledName = styled.div`
  width: 100%;
  margin-left: 2em;
  font-size: 1.5em;
`;

const LogoCp = () => {
  return (
    <StyledLogoWrap>
      <Link to="/portfolio">
        <StyledLogoImg src={logo} alt="logo" />
      </Link>
      <StyledName>정상용</StyledName>
    </StyledLogoWrap>
  );
};

export default LogoCp;
