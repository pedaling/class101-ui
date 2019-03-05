import { Colors, Paper } from '@class101/ui';
import React from 'react';

interface Props {
  /** 가장자리 둥근 정도 */
  borderRadius?: number;

  /** 그림자 깊이 */
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
