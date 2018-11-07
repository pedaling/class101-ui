// @flow
import React from 'react';
import { Section } from 'class101-ui';

type Props = {
  title?: string,
  titleStyle?: any,
  subTitle?: string;
  buttonTitle?: string,
  buttonStyle?: any,
  to?: string,
  href?: string,
  target?: string,
  onClick?: () => void,
};

const Component = ({
  title,
  titleStyle,
  subTitle,
  buttonTitle,
  buttonStyle,
  to,
  href,
  target,
  onClick,
  children,
  ...restProps,
}: Props) => (
  <Section
    title={ title }
    titleStyle={ titleStyle }
    subTitle={ subTitle }
    buttonTitle={ buttonTitle }
    buttonStyle={ buttonStyle }
    to={ to }
    href={ href }
    target={ target }
    onClick={ onClick }
    { ...restProps }
  >
    { children }
  </Section>
);

export default Component;