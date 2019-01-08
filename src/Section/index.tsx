import React from 'react';
import styled from 'styled-components';

import Footer from './Footer';
import Header from './Header';

interface Props {
  title?: string;
  titleStyle?: any;
  subTitle?: string;
  buttonTitle?: string;
  buttonStyle?: any;
  to?: string;
  href?: string;
  target?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}

const Section = styled.section``;

export default ({
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
  ...restProps
}: Props) => (
  <Section {...restProps}>
    {title && !buttonTitle ? (
      <Header title={title} to={to} href={href} target={target} onClick={onClick} subTitle={subTitle} {...titleStyle} />
    ) : (
      <Header title={title} subTitle={subTitle} {...titleStyle} />
    )}
    {children}
    {buttonTitle && (
      <Footer buttonTitle={buttonTitle} to={to} href={href} target={target} onClick={onClick} {...buttonStyle} />
    )}
  </Section>
);
