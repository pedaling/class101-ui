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
  h1,h2,h3,h4,h5,h6 {
    margin: 0;
  }
`;
