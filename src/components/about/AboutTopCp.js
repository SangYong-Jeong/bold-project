import React from 'react';
import styled, { font } from '../../style';

const AboutTopWrapper = styled.div`
  text-align: center;
  margin-bottom: 10em;
`;

const AboutLogo = styled.div`
  font-family: ${font.en};
  font-size: 1.2em;
  font-weight: 500;
  letter-spacing: 0.2em;
  color: #333;
  margin-bottom: 2em;
`;

const AboutTitle = styled.div`
  font-family: ${font.kr};
  font-size: 1.35em;
  font-weight: 500;
  margin-bottom: 1.25em;
`;

const AboutContent = styled.div`
  font-family: ${font.kr};
  font-size: 1.125em;
  font-weight: 400;
`;

const AboutTopCp = () => {
  return (
    <AboutTopWrapper>
      <AboutLogo>ABOUT</AboutLogo>
      <AboutTitle>
        <div>HOLYKOOS는 크리에이티브 디자인 솔루션을 통해</div>
        <div>감탄스럽고 놀라운(HOLY) 감동을 고객에 제공합니다.</div>
      </AboutTitle>
      <AboutContent>
        <div>
          젊지만 현업 경험이 풍부하며, 독창적인 아이디어와 감각적인 그래픽을
          통해 차별화된 브랜드 가치를 제안합니다.
        </div>
        <div>
          고객의 성공적인 비즈니스를 달성하기 위한 크리에이티브 디자인 솔루션을
          제공해 드리겠습니다.
        </div>
      </AboutContent>
    </AboutTopWrapper>
  );
};

export default AboutTopCp;
