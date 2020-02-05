import { css } from 'styled-components';

export type ElevationValue = 1 | 2 | 3 | 4 | 5;
export interface ElevationProps {
  /** 그림자 깊이 */
  elevation?: ElevationValue;
}

export const elevation1 = css`
  box-shadow: 0px 1px 3px rgba(41, 42, 43, 0.08), 0px 1px 0px rgba(0, 0, 0, 0.04);
`;

export const elevation2 = css`
  box-shadow: 0px 2px 6px rgba(41, 42, 43, 0.08), 0px 1px 0px rgba(41, 42, 43, 0.04);
`;

export const elevation3 = css`
  box-shadow: 0px 4px 8px rgba(41, 42, 43, 0.08), 0px 12px 16px rgba(41, 42, 43, 0.12);
`;

export const elevation4 = css`
  box-shadow: 0px 24px 32px rgba(41, 42, 43, 0.24);
`;

export const elevation5 = css`
  box-shadow: 0 24px 32px -8px rgba(41, 42, 43, 0.24);
`;
