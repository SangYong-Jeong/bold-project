import React from 'react';
import styled, { font } from '../../style';

const StyledTopButton = styled.div`
  cursor: pointer;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  width: 60px;
  height: 75px;
  right: 100px;
  bottom: 100px;
  background-color: #1f2326;
  opacity: 0.6;
  color: #fcfcfc;
  font-family: ${font.en}, ${font.serif};
  transition: all 0.5s;
  &:hover {
    opacity: 1;
  }
`;

const StyledTopButtonContent = styled.div`
  font-size: 1.25em;
  font-weight: 500;
`;

const TopButtonCp = () => {
  return (
    <StyledTopButton>
      <StyledTopButtonContent>Back</StyledTopButtonContent>
      <StyledTopButtonContent>to</StyledTopButtonContent>
      <div className="d-flex align-items-end">
        <StyledTopButtonContent className="mr-2">Top</StyledTopButtonContent>
        <i className="fa fa-caret-up"></i>
      </div>
    </StyledTopButton>
  );
};

export default TopButtonCp;
