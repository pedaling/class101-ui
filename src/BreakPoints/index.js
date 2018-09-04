import { css } from 'styled-components';

export function buildMediaQuery({ minWidth, maxWidth }, not) {
  let query = '';

  if (minWidth) {
    query += `(min-width: ${minWidth}px)`;
  }

  if (minWidth && maxWidth) {
    query += ' and ';
  }

  if (maxWidth) {
    query += `(max-width: ${maxWidth}px)`;
  }

  if (not) {
    query = `not all and ${query}`;
  }

  return query;
}

export const SIZES = {
  sm: { minWidth: null, maxWidth: 1023 },
  md: { minWidth: null, maxWidth: null }, // TODO: 태블릿 사이즈가 추가되면 수정합니다.
  lg: { minWidth: 1024, maxWidth: null },
};

export const media = Object.keys(SIZES).reduce((acc, label) => {
  acc[label] = (...args) => {
    const mediaQuery = buildMediaQuery(SIZES[label]);
    return css`
      @media ${mediaQuery} {
        ${css(...args)}
      }
    `;
  };
  return acc;
}, {});
