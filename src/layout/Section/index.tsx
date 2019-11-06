import React, { PureComponent, ReactNode } from 'react';

import { HTMLDivProps } from '../../interfaces/props';
import { Header, TypographyProps } from './Header';

export type SectionTitleStyleProps = TypographyProps;

interface Props {
  title: ReactNode;
  titleStyle?: SectionTitleStyleProps;
  description?: string;
  to?: string;
  href?: string;
  target?: string;
  linkText?: string;
  onClick?: () => void;
  children?: ReactNode;
  className?: string;
  divAttributes?: HTMLDivProps;
}

export class Section extends PureComponent<Props> {
  public render() {
    const {
      title,
      titleStyle,
      description,
      to,
      href,
      target,
      onClick,
      children,
      className,
      divAttributes,
      linkText,
    } = this.props;
    return (
      <section className={className} {...divAttributes}>
        <Header
          title={title}
          to={to}
          href={href}
          target={target}
          onClick={onClick}
          description={description}
          linkText={linkText}
          typographyProps={titleStyle}
        />
        {children}
      </section>
    );
  }
}
