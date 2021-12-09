import React from 'react';
import styled, { PageWrapper, color } from '../style';

import LoginCp from '../components/auth/LoginCp';

const Wrapper = styled(PageWrapper)`
  width: 100%;
  background-color: rgba(225, 242, 247, 0.7);
  height: calc(100vh - 144px);
  display: flex;
`;

const LoginPage = () => {
  return (
    <Wrapper>
      <LoginCp />
    </Wrapper>
  );
};

export default LoginPage;
