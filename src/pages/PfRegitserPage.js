import React from 'react';
import styled, { PageWrapper } from '../style';

import PfRegisterCp from '../components/portfolio-item/PfRegisterCp';

const Wrapper = styled(PageWrapper)`
  width: 100%;
  background-color: rgba(225, 242, 247, 0.7);
  display: flex;
`;

const PfRegitserPage = () => {
  return (
    <Wrapper>
      <PfRegisterCp />
    </Wrapper>
  );
};

export default PfRegitserPage;
