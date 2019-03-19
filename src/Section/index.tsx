import React, { ReactNode } from 'react';
import styled from 'styled-components';

import { HTMLDivProps } from '../interfaces/props';
import Footer from './Footer';
import Header from './Header';

interface SectionStyleProps {
  marginTop?: number | string;
  marginBottom?: number | string;
  marginLeft?: number | string;
  marginRight?: number | string;
}

interface OwnProps {
  title: ReactNode;
  titleStyle?: any;
  description?: string;
  buttonTitle?: string;
  buttonStyle?: any;
  to?: string;
  href?: string;
  target?: string;
  onClick?: () => void;
  children?: ReactNode;
}

export type SectionProps = OwnProps & SectionStyleProps & HTMLDivProps;

const Section = styled.section<SectionStyleProps>`
  margin: ${props =>
    `${props.marginTop || 0}px ${props.marginRight || 0}px ${props.marginBottom || 0}px ${props.marginLeft || 0}`}px;
`;

export default ({
  title,
  titleStyle,
  description,
  buttonTitle,
  buttonStyle,
  to,
  href,
  target,
  onClick,
  children,
  ...restProps
}: SectionProps) => (
  <Section {...restProps}>
    {!buttonTitle ? (
      <Header
        title={title}
        to={to}
        href={href}
        target={target}
        onClick={onClick}
        description={description}
        {...titleStyle}
      />
    ) : (
      <Header title={title} description={description} {...titleStyle} />
    )}
    {children}
    {buttonTitle && (
      <Footer buttonTitle={buttonTitle} to={to} href={href} target={target} onClick={onClick} {...buttonStyle} />
    )}
  </Section>
);
