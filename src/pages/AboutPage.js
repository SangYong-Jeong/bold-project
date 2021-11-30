import React from 'react';
import styled, { Wrapper } from '../style';
import AboutTopCp from '../components/about/AboutTopCp';

const AboutWrapper = styled(Wrapper)`
  padding-top: 6em;
  padding-bottom: 6em;
`;

const AboutPage = () => {
  return (
    <AboutWrapper>
      <AboutTopCp />
    </AboutWrapper>
  );
};

export default AboutPage;
