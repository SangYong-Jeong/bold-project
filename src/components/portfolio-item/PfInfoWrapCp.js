import React from 'react';
import styled from '../../style';

const Wrapper = styled.div`
  padding: 1em 3em;
  display: flex;
  margin: 0 auto 1em auto;
  width: 75%;
`;

const PfInfoLeft = styled.div`
  width: 25%;
  margin-right: 2em;
`;

const PfInfoRight = styled.div`
  width: 75%;
`;

const PfInfoWrapCp = () => {
  return (
    <Wrapper>
      <PfInfoLeft>Project</PfInfoLeft>
      <PfInfoRight>
        <div>Project name</div>
        <div>Project content</div>
      </PfInfoRight>
    </Wrapper>
  );
};

export default PfInfoWrapCp;
