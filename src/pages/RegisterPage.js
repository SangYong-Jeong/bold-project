import React from 'react';
import styled, { PageWrapper } from '../style';

import RegisterContainerCp from '../containers/RegisterContainerCp';

const Wrapper = styled(PageWrapper)`
  width: 100%;
  background-color: rgba(225, 242, 247, 0.7);
  height: calc(100vh - 144px);
  display: flex;
`;

const RegisterPage = () => {
  return (
    <Wrapper>
      <RegisterContainerCp />
    </Wrapper>
  );
};

export default RegisterPage;
