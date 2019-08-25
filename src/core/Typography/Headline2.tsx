import React, { PureComponent } from 'react';

import { BaseTypography, HeadlineTypoProps } from './BaseTypography';

export class Headline2 extends PureComponent<HeadlineTypoProps> {
  public render() {
    const { children, ...restProps } = this.props;
    return (
      <BaseTypography md="Headline2" {...restProps}>
        {children}
      </BaseTypography>
    );
  }
}
