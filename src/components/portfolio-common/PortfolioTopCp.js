import React from 'react';
import styled, { font, Logo } from '../../style';

const PortfolioTopWrapper = styled.div`
  text-align: center;
  margin-bottom: 10em;
`;

const PortfolioTopCp = () => {
  return (
    <PortfolioTopWrapper>
      <Logo lang={font.en}>PORTFOLIO</Logo>
    </PortfolioTopWrapper>
  );
};

export default PortfolioTopCp;
