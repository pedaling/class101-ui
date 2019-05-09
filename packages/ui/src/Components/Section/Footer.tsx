import React from 'react';
import styled from 'styled-components';

import { Colors } from '@common';
import { Button } from '@components';

interface Props {
  buttonTitle: string;
  color?: string;
  backgroundColor?: string;
  style?: React.CSSProperties;
}

export default ({
  buttonTitle,
  color = Colors.gray600,
  backgroundColor = Colors.white,
  style = {
    border: `1px solid ${Colors.gray200}`,
    fontWeight: 'bold',
  },
  ...restProps
}: Props) => (
  <Footer>
    <Button color={color} backgroundColor={backgroundColor} style={style} {...restProps} fill>
      {buttonTitle}
    </Button>
  </Footer>
);

const Footer = styled.div`
  margin-top: 24px;
`;
