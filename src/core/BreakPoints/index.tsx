import { css, InterpolationFunction, ThemedStyledProps, Interpolation, CSSObject } from 'styled-components';

export function buildMediaQuery({ minWidth, maxWidth }: { minWidth?: number; maxWidth?: number }, not?: boolean) {
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

export default buildMediaQuery;

export const SIZES = {
  sm: { maxWidth: 1023 },
  md: {}, // TODO: 태블릿 사이즈가 추가되면 수정합니다.
  lg: { minWidth: 1024 },
};

type Size = keyof typeof SIZES;

export const media = {
  sm<T extends object>(
    first: TemplateStringsArray | CSSObject | InterpolationFunction<ThemedStyledProps<T, {}>>,
    ...interpolations: Interpolation<ThemedStyledProps<T, {}>>[]
  ) {
    const mediaQuery = buildMediaQuery(SIZES.sm);
    return css<T>`
      @media ${mediaQuery} {
        ${css<T>(first, ...interpolations)};
      }
    `;
  },
  md<T extends object>(
    first: TemplateStringsArray | CSSObject | InterpolationFunction<ThemedStyledProps<T, {}>>,
    ...interpolations: Interpolation<ThemedStyledProps<T, {}>>[]
  ) {
    const mediaQuery = buildMediaQuery(SIZES.md);
    return css<T>`
      @media ${mediaQuery} {
        ${css<T>(first, ...interpolations)};
      }
    `;
  },
  lg<T extends object>(
    first: TemplateStringsArray | CSSObject | InterpolationFunction<ThemedStyledProps<T, {}>>,
    ...interpolations: Interpolation<ThemedStyledProps<T, {}>>[]
  ) {
    const mediaQuery = buildMediaQuery(SIZES.lg);
    return css<T>`
      @media ${mediaQuery} {
        ${css<T>(first, ...interpolations)};
      }
    `;
  },
};
