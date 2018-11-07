import React from 'react';
import styled from 'styled-components';
import Button from '../Button';
import { gray200, gray600, white } from '../Colors';

type Props = {
  buttonTitle: '',
};

const Footer = styled.div`
  margin-top: 24px;
`;

export default ({
  buttonTitle,
  color=gray600,
  backgroundColor=white,
  style={
    'border': `1px solid ${gray200}`,
    'font-weight': 'Bold',
  },
  ...restProps,
}: Props) => (
  <Footer>
    <Button 
      color={ color }
      backgroundColor={ backgroundColor }
      style={ style }
      { ...restProps }
      block
    >
      { buttonTitle }
    </Button>
  </Footer>
)