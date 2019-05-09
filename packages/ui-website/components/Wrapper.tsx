import { GlobalStyle } from '@class101/ui';
import React from 'react';

const Wrapper = ({ children }) => (
  <>
    {children}
    <GlobalStyle />
  </>
);

export default Wrapper;
