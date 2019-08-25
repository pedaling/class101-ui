import React, { PureComponent } from 'react';

import { BaseTypography, TypoProps } from './BaseTypography';

export class Body1 extends PureComponent<TypoProps> {
  public render() {
    const { children, ...restProps } = this.props;
    return (
      <BaseTypography md="Body1" {...restProps}>
        {children}
      </BaseTypography>
    );
  }
}
