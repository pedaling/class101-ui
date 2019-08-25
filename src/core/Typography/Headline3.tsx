import React, { PureComponent } from 'react';

import { BaseTypography, HeadlineTypoProps } from './BaseTypography';

export class Headline3 extends PureComponent<HeadlineTypoProps> {
  public render() {
    const { children, ...restProps } = this.props;
    return (
      <BaseTypography md="Headline3" {...restProps}>
        {children}
      </BaseTypography>
    );
  }
}
