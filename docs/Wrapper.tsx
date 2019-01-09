import React from 'react';
import { GlobalStyle } from '@class101/ui';

const Wrapper = ({ children }) => (
  <>
    {children}
    <GlobalStyle />
  </>
);

export default Wrapper;
