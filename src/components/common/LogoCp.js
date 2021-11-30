import React from 'react';
import styled from '../../style';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/46ad814444893.png';

const StyledLogoImg = styled.img`
  width: 100%;
`;

const LogoCp = () => {
  return (
    <div>
      <Link to="/portfolio">
        <StyledLogoImg src={logo} alt="logo" />
      </Link>
    </div>
  );
};

export default LogoCp;
