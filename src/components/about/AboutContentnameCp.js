import React from 'react'
import styled, { font } from '../../style'

const StyledAboutContentItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  text-align: center;
  padding: 2.2em;
  .title {
    font-size: 1.5em;
    font-family: ${font.en}, sans-serif;
    font-style: italic;
    color: violet;
    margin-bottom: 1.75em;
  }
  .content-kr {
    font-size: 1.125em;
    font-family: ${font.kr}, sans-serif;
    color: #333;
    font-weight: 300;
    line-height: 1.75;
    margin-bottom: 2.5em;
  }
  .content-en {
    font-size: 1em;
    font-family: ${font.en}, sans-serif;
    color: #333;
    font-weight: 300;
    line-height: 1.75;
  }
`

const AboutContentItemCp = () => {
  return (
    <StyledAboutContentItemWrapper>
      <div className="title">
        Trendy visual communication in various categories
      </div>
      <div className="content-kr">
        브랜딩, 패키지디자인, 그래픽디자인, 편집디자인, <br /> 일러스트 등
        다양한 카테고리에서 트렌디한 비주얼 커뮤니케이션 <br /> 으로 <br /> 고객
        맞춤형 솔루션을 제안합니다.
      </div>
      <div className="content-en">
        We propose customized solutions <br /> through trendy visual
        communication in various categories <br /> such as branding, package
        design, graphic design, editorial design, and illustration.
      </div>
    </StyledAboutContentItemWrapper>
  )
}

export default AboutContentItemCp
