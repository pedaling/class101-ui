import { css } from 'styled-components';

export type ElevationValue = 1 | 2 | 3 | 4 | 5;
export interface ElevationProps {
  /** 그림자 깊이 */
  elevation?: ElevationValue;
}

export const elevation1 = css`
  box-shadow: 0px 1px 3px rgba(41, 42, 43, 0.08), 0px 0.5px 0px rgba(0, 0, 0, 0.04);
`;

export const elevation2 = css`
  box-shadow: 0px 2px 6px rgba(41, 42, 43, 0.08), 0px 1px 0px rgba(41, 42, 43, 0.04);
`;

export const elevation3 = css`
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.01), 0px 2px 2.5px rgba(0, 0, 0, 0.02), 0px 4.5px 5px rgba(0, 0, 0, 0.03),
    0px 9px 9px rgba(0, 0, 0, 0.04);
`;

export const elevation4 = css`
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.02), 0px 6px 6px rgba(0, 0, 0, 0.03), 0px 8px 12px rgba(0, 0, 0, 0.05),
    0px 14px 18px rgba(0, 0, 0, 0.06);
`;

export const elevation5 = css`
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.02), 0px 6px 4px rgba(0, 0, 0, 0.02), 0px 9px 6px rgba(0, 0, 0, 0.03),
    0px 16px 12px rgba(0, 0, 0, 0.03), 0px 24px 24px rgba(0, 0, 0, 0.08);
`;

export const elevation6 = css`
  box-shadow: 0px 8px 6px rgba(0, 0, 0, 0.01), 0px 12px 9px rgba(0, 0, 0, 0.02), 0px 16px 12px rgba(0, 0, 0, 0.025),
    0px 26px 24px rgba(0, 0, 0, 0.06), 0px 28px 32px rgba(0, 0, 0, 0.08);
`;
