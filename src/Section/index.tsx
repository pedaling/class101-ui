import React, { PureComponent, ReactNode } from 'react';

import { HTMLDivProps } from '../interfaces/props';
import Header from './Header';

interface Props {
  title: ReactNode;
  titleStyle?: any;
  description?: string;
  to?: string;
  href?: string;
  target?: string;
  onClick?: () => void;
  children?: ReactNode;
  className?: string;
  divAttributes?: HTMLDivProps;
}

export default class Section extends PureComponent<Props> {
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
          {...titleStyle}
        />
        {children}
      </section>
    );
  }
}
