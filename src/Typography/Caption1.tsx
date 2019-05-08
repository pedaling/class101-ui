import React, { PureComponent } from 'react';

import Typography, { TypoProps } from '.';

export default class Caption1 extends PureComponent<TypoProps> {
  public render() {
    const { children, ...restProps } = this.props;
    return (
      <Typography md="Caption1" {...restProps}>
        {children}
      </Typography>
    );
  }
}
