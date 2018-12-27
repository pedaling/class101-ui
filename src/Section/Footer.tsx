import React from 'react';
import styled from 'styled-components';
import Button from '../Button';
import { gray200, gray600, white } from '../Colors';

interface Props {
  buttonTitle: string;
  color?: string;
  backgroundColor?: string;
  style?: React.CSSProperties;
}

const Footer = styled.div`
  margin-top: 24px;
`;

export default ({
  buttonTitle,
  color = gray600,
  backgroundColor = white,
  style = {
    border: `1px solid ${gray200}`,
    fontWeight: 'bold',
  },
  ...restProps
}: Props) => (
  <Footer>
    <Button color={color} backgroundColor={backgroundColor} style={style} {...restProps} block>
      {buttonTitle}
    </Button>
  </Footer>
);
