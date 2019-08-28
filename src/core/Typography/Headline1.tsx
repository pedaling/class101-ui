import React, { PureComponent } from 'react';

import { BaseTypography, HeadlineTypoProps } from './BaseTypography';

export class Headline1 extends PureComponent<HeadlineTypoProps> {
  public render() {
    const { children, ...restProps } = this.props;
    return (
      <BaseTypography md="Headline1" {...restProps}>
        {children}
      </BaseTypography>
    );
  }
}
