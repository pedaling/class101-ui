import { Colors, Paper } from '@class101/ui';
import React from 'react';

interface Props {
  /** 가장자리 둥근 정도 */
  borderRadius?: 1 | 2 | 3 | 4;

  /** 모바일(sm)에서 차지할 열 */
  elevation?: 1 | 2 | 3 | 4 | 5;
}

export const Component = ({ ...restProps }: Props) => (
  <Paper style={{ marginLeft: '16px', flex: '1 1 auto' }} {...restProps} />
);

export const PaperWrap = props => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'space-between',
      backgroundColor: Colors.gray000,
      padding: '24px',
    }}
  >
    {props.children}
  </div>
);
