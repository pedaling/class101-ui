import React, { PureComponent, ReactNode } from 'react';

import { HTMLElementProps } from '../../interfaces/props';
import { Header, TypographyProps } from './Header';

export type SectionTitleStyleProps = TypographyProps;

interface Props {
  title: ReactNode;
  titleStyle?: SectionTitleStyleProps;
  description?: string;
  to?: string;
  external?: boolean;
  linkText?: string;
  onClick?: () => void;
  children?: ReactNode;
  className?: string;
  divAttributes?: HTMLElementProps;
}

export class Section extends PureComponent<Props> {
  public render() {
    const {
      title,
      titleStyle,
      description,
      to,
      external,
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
          external={external}
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
