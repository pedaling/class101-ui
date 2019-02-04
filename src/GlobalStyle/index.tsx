import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @font-face {
    font-family: 'SpoqaHanSans';
    font-weight: 700;
    src: local('Spoqa Han Sans Bold'),
    url('https://cdn.rawgit.com/spoqa/spoqa-han-sans/01ff0283/Subset/SpoqaHanSans/SpoqaHanSansBold.woff2') format('woff2'),
    url('https://cdn.rawgit.com/spoqa/spoqa-han-sans/01ff0283/Subset/SpoqaHanSans/SpoqaHanSansBold.woff') format('woff'),
    url('https://cdn.rawgit.com/spoqa/spoqa-han-sans/01ff0283/Subset/SpoqaHanSans/SpoqaHanSansBold.ttf') format('truetype');
  }

  @font-face {
    font-family: 'SpoqaHanSans';
    font-weight: 400;
    src: local('Spoqa Han Sans Regular'),
    url('https://cdn.rawgit.com/spoqa/spoqa-han-sans/01ff0283/Subset/SpoqaHanSans/SpoqaHanSansRegular.woff2') format('woff2'),
    url('https://cdn.rawgit.com/spoqa/spoqa-han-sans/01ff0283/Subset/SpoqaHanSans/SpoqaHanSansRegular.woff') format('woff'),
    url('https://cdn.rawgit.com/spoqa/spoqa-han-sans/01ff0283/Subset/SpoqaHanSans/SpoqaHanSansRegular.ttf') format('truetype');
  }

  @font-face {
    font-family: 'SpoqaHanSans';
    font-weight: 300;
    src: local('Spoqa Han Sans Light'),
    url('https://cdn.rawgit.com/spoqa/spoqa-han-sans/01ff0283/Subset/SpoqaHanSans/SpoqaHanSansLight.woff2') format('woff2'),
    url('https://cdn.rawgit.com/spoqa/spoqa-han-sans/01ff0283/Subset/SpoqaHanSans/SpoqaHanSansLight.woff') format('woff'),
    url('https://cdn.rawgit.com/spoqa/spoqa-han-sans/01ff0283/Subset/SpoqaHanSans/SpoqaHanSansLight.ttf') format('truetype');
  }

  body {
    font-family: 'SpoqaHanSans', 'Sans-serif';
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  p, ul {
    padding: 0;
    margin: 0
  }
`;
