import React from 'react';
import styled from 'styled-components';
import { media } from '../BreakPoints';

type Props = {
  marginTop?: number | string, 
  marginBottom?: number | string,  
};

const Row = styled.div`
  zoom: 1;
  ${props => props.marginTop && `margin-top: ${typeof props.marginTop === 'number' ? `${props.marginTop}px` : props.marginTop}`};
  ${props => props.marginBottom && `margin-bottom: ${typeof props.marginBottom === 'number' ? `${props.marginBottom}px` : props.marginBottom}`};
  margin-right: -12px;
  margin-left: -12px;
  ${media.sm`
    margin-right: -4px;
    margin-left: -4px;
  `};

  &::before, &::after {
    content: "";
    display: table;
  }

  &::after {
    clear: both;
  }
`;

export default ({
  marginTop,
  marginBottom,
  ...restProps,
}: Props) => (<Row 
  marginTop={ marginTop }
  marginBottom={  marginBottom }
  { ...restProps }
/>);