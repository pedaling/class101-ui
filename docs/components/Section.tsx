// @flow
import { Section } from '@class101/ui';
import React, { ReactNode } from 'react';

interface Props {
  title?: string | ReactNode;
  titleStyle?: any;
  subTitle?: string;
  buttonTitle?: string;
  buttonStyle?: any;
  to?: string;
  href?: string;
  target?: string;
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  children: ReactNode;
  onClick?: () => void;
}

export const Component = ({ children, ...restProps }: Props) => <Section {...restProps}>{children}</Section>;
