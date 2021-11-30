import React from 'react';
import styled, { PageWrapper } from '../style';

import SwiperCp from '../components/main/SwiperCp';

const MainPageWrapper = styled(PageWrapper)`
  margin-bottom: 8em;
  margin-top: 1em;
`;

const MainPage = () => {
  return (
    <MainPageWrapper>
      <SwiperCp />
    </MainPageWrapper>
  );
};

export default MainPage;
