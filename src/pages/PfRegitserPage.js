import React from 'react';
import styled, { PageWrapper } from '../style';

import PfRegisterContainerCp from '../containers/PfRegisterContainerCp';

const Wrapper = styled(PageWrapper)`
  width: 100%;
  background-color: rgba(225, 242, 247, 0.7);
  display: flex;
`;

const PfRegitserPage = () => {
  return (
    <Wrapper>
      <PfRegisterContainerCp />
    </Wrapper>
  );
};

export default React.memo(PfRegitserPage);
