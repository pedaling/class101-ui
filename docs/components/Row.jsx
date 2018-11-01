// @flow
import React from 'react';
import { Row } from 'class101-ui';

type Props = {
  /** 기본 단위 - px */
  marginTop?: number | string, 
  marginBottom?: number | string,  
};

const Component = ({
  marginTop, 
  marginBottom,  
  ...restProps
}: Props) => (
  <Row 
    marginTop={ marginTop }
    marginBottom={  marginBottom }
    { ...restProps }
  />
);

export default Component;
