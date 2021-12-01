import React from 'react';
import styled, { Wrapper } from '../style';

import AboutTopCp from '../components/about/AboutTopCp';
import AboutContentCp from '../components/about/AboutContentCp';

const AboutWrapper = styled(Wrapper)`
  padding-top: 6em;
  padding-bottom: 6em;
`;

const AboutPage = () => {
  return (
    <AboutWrapper>
      <AboutTopCp />
      <AboutContentCp />
    </AboutWrapper>
  );
};

export default AboutPage;
