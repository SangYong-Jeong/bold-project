import React from 'react';
import styled, { font } from '../../style';

import testImg from '../../assets/img/22-design.jpg';
import testImg2 from '../../assets/img/23-design.jpg';
import testImg3 from '../../assets/img/24-design.jpg';
import testImg4 from '../../assets/img/27-design.jpg';

const StyledAboutContentImgWrapper = styled.div`
  width: 50%;
  img {
    width: 100%;
  }
`;

const AboutContentImgCp = ({ type }) => {
  let src = '';
  switch (type) {
    case '1':
      src = testImg;
      break;
    case '2':
      src = testImg2;
      break;
    case '3':
      src = testImg3;
      break;
    case '4':
      src = testImg4;
      break;
    default:
      break;
  }
  return (
    <StyledAboutContentImgWrapper>
      <img src={src} alt="img" />
    </StyledAboutContentImgWrapper>
  );
};

export default AboutContentImgCp;
