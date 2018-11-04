import React from 'react';
import styled, { css } from 'styled-components';
import { media } from '../BreakPoints';

type Props = {
  marginTop?: number | string, 
  marginBottom?: number | string,  
};

const Grid = styled.div`
  position: relative;
  ${props => 
    props.marginTop && 
    css`margin-top: ${typeof props.marginTop === 'number' ? 
        `${props.marginTop}px` : 
        props.marginTop
      };
    `}
  ${props => 
    props.marginBottom && 
    css`margin-bottom: ${typeof props.marginBottom === 'number' ? 
        `${props.marginBottom}px` : 
        props.marginBottom
      };
    `}
  margin-left: auto;
  margin-right: auto;
  ${media.sm`
    margin-left: 24px;
    margin-right: 24px;
  `};
  ${media.lg`
    max-width: ${props => (props.maxWidthNone ? 'none' : '960px')};
  `};
`;

export default ({
  marginTop,
  marginBottom,
  ...restProps,
}: Props) => (<Grid 
  marginTop={ marginTop }
  marginBottom={  marginBottom }
  { ...restProps }
/>);