import React from 'react';
import styled from '../../style';

const StyleFooterItem = styled.div`
  color: #d6f7ff;
  font-size: 1.2em;
  font-weight: bold;
`;

const FooterItemCp = ({ children }) => {
  return <StyleFooterItem>{children}</StyleFooterItem>;
};

export default FooterItemCp;
