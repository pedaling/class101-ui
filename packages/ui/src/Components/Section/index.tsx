import { HTMLDivProps } from '@common';
import React, { PureComponent, ReactNode } from 'react';

import Footer from './Footer';
import Header from './Header';

interface Props {
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
  className?: string;
  divAttributes?: HTMLDivProps;
}

export class Section extends PureComponent<Props> {
  public render() {
    const {
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
      className,
      divAttributes,
    } = this.props;
    return (
      <section className={className} {...divAttributes}>
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
      </section>
    );
  }
}
