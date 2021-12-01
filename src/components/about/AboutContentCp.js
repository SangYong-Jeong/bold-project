import React from 'react';
import styled from '../../style';

import AboutContentItemCp from './AboutContentnameCp';
import AboutContentImgCp from './AboutContentImgCp';

const AboutContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const AboutContentWrap = styled.div`
  width: 100%;
  display: flex;
`;

const AboutContentCp = () => {
  return (
    <AboutContentWrapper>
      <AboutContentWrap>
        <AboutContentImgCp type="1" />
        <AboutContentItemCp />
      </AboutContentWrap>
      <AboutContentWrap>
        <AboutContentItemCp />
        <AboutContentImgCp type="2" />
      </AboutContentWrap>
      <AboutContentWrap>
        <AboutContentImgCp type="3" />
        <AboutContentItemCp />
      </AboutContentWrap>
      <AboutContentWrap>
        <AboutContentItemCp />
        <AboutContentImgCp type="4" />
      </AboutContentWrap>
    </AboutContentWrapper>
  );
};

export default AboutContentCp;
