import { GlobalStyle } from '@class101/ui';
import React from 'react';

export default ({ children }) => {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
};
