import { GlobalStyle } from '@class101/ui';
import { createBrowserHistory } from 'history';
import React from 'react';
import { Router } from 'react-router';

const Wrapper = ({ children }) => (
  <Router history={createBrowserHistory()}>
    <>
      {children}
      <GlobalStyle />
    </>
  </Router>
);

export default Wrapper;
