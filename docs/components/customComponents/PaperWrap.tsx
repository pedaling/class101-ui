import { Colors } from '@class101/ui';
import React from 'react';

export default props => (
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
