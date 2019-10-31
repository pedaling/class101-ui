import React, { PureComponent } from 'react';

import { BaseTypography, TypoProps } from './BaseTypography';

export class Subtitle2 extends PureComponent<TypoProps> {
  public render() {
    const { children, ...restProps } = this.props;
    return (
      <BaseTypography md="Subtitle2" {...restProps}>
        {children}
      </BaseTypography>
    );
  }
}
