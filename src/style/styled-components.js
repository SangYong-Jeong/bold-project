import styled, { css } from 'styled-components';

export const PageWrapper = styled.div`
  padding: 2em 3em;
`;

export const Wrapper = styled.div``;

export const Logo = styled.div`
  font-family: ${({ lang }) => lang};
  font-size: 1.2em;
  font-weight: 500;
  letter-spacing: 0.2em;
  color: #333;
  margin-bottom: 2em;
`;
export const PortfolioWrapper = styled(Wrapper)`
  padding-top: 6em;
  padding-bottom: 6em;
  height: calc(100vh - 144px);
`;
