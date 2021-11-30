import React from 'react';
import styled from '../../style';

const StyleFooterItem = styled.div`
  color: #d6f7ff;
  font-size: 1.4em;
  font-weight: 400;
`;

const FooterItemCp = ({ children }) => {
  return <StyleFooterItem>{children}</StyleFooterItem>;
};

export default FooterItemCp;
