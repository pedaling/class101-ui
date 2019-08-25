import React, { PureComponent } from 'react';

import { BaseTypography, TypoProps } from './BaseTypography';

export class Body2 extends PureComponent<TypoProps> {
  public render() {
    const { children, ...restProps } = this.props;
    return (
      <BaseTypography md="Body2" {...restProps}>
        {children}
      </BaseTypography>
    );
  }
}
