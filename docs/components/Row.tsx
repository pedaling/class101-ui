// @flow
import React from 'react';
import { Row } from '@class101/ui';

interface Props {
  /** 기본 단위 - px */
  marginTop?: number | string;
  marginBottom?: number | string;
}

export const Component = ({ marginTop, marginBottom, ...restProps }: Props) => (
  <Row marginTop={marginTop} marginBottom={marginBottom} {...restProps} />
);
