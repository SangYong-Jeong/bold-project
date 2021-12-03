import React from 'react';
import styled, { PortfolioWrapper } from '../../style';

import PortfolioTopCp from '../../components/portfolio-common/PortfolioTopCp';
import PortfolioContentCp from '../../components/portfolio-common/PortfolioContentCp';

const PortfolioCharacterPage = () => {
  return (
    <PortfolioWrapper>
      <PortfolioTopCp />
      <PortfolioContentCp />
    </PortfolioWrapper>
  );
};

export default PortfolioCharacterPage;
