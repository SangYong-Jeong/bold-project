import React from 'react';
import styled from '../../style';

import PfInfoCp from '../../components/portfolio-item/PfInfoWrapCp';
import PfImgWrapCp from '../../components/portfolio-item/PfImgWrapCp';

const Wrapper = styled.div`
  padding: 3em;
`;

const PortfolioItemPage = () => {
  return (
    <Wrapper>
      <PfInfoCp />
      <PfImgWrapCp />
    </Wrapper>
  );
};

export default PortfolioItemPage;
