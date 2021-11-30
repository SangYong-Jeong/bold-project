import React from 'react';
import { PageWrapper } from '../style';

import SwiperCp from '../components/main/SwiperCp';
import MasonryCp from '../components/main/MasonryCp';

const MainPage = () => {
  return (
    <PageWrapper>
      <SwiperCp />
      <MasonryCp />
    </PageWrapper>
  );
};

export default MainPage;
