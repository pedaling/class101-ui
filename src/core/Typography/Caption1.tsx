import React, { PureComponent } from 'react';

import { BaseTypography, TypoProps } from './BaseTypography';

export class Caption1 extends PureComponent<TypoProps> {
  public render() {
    const { children, ...restProps } = this.props;
    return (
      <BaseTypography md="Caption1" {...restProps}>
        {children}
      </BaseTypography>
    );
  }
}
