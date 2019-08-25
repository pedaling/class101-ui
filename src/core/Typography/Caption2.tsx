import React, { PureComponent } from 'react';

import { BaseTypography, TypoProps } from './BaseTypography';

export class Caption2 extends PureComponent<TypoProps> {
  public render() {
    const { children, ...restProps } = this.props;
    return (
      <BaseTypography md="Caption2" {...restProps}>
        {children}
      </BaseTypography>
    );
  }
}
