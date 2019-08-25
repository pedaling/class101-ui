import { createGlobalStyle } from 'styled-components';

import swiperStyle from './swiperDefaultStyle';

export const GlobalStyle = createGlobalStyle`
  ${swiperStyle};
  a {
    text-decoration: none;
    color: inherit;
  }
  p, ul {
    padding: 0;
    margin: 0
  }
`;
