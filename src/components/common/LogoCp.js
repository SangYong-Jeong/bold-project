import React from 'react';
import styled, { css } from '../../style';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/bold-logo.png';

const StyledLogoWrap = styled.div`
  ${(props) =>
    props.width === '100%'
      ? css`
          margin: auto;
          width: 100%;
          padding: 2em;
        `
      : css`
          margin-left: 1em;
          width: 30%;
        `}

  display: flex;
  align-items: center;
`;

const StyledLogoImg = styled.img`
  width: 100%;
  max-width: 40px;
`;

const StyledName = styled.div`
  width: 100%;
  margin-left: 1.25em;
  font-size: 1.5em;
`;

const LogoCp = ({ width }) => {
  return (
    <StyledLogoWrap width={width}>
      <Link to="/">
        <StyledLogoImg src={logo} alt="logo" />
      </Link>
      <StyledName>정상용</StyledName>
    </StyledLogoWrap>
  );
};

export default LogoCp;
