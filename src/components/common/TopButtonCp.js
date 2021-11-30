import React from 'react';
import styled from '../../style';

const StyledTopButton = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  width: 60px;
  height: 75px;
  right: 200px;
  bottom: 0;
  background-color: #1f2326;
  color: #fcfcfc;
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
