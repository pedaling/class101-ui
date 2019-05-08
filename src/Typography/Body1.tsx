import React, { PureComponent } from 'react';

import Typography, { TypoProps } from '.';

export default class Body1 extends PureComponent<TypoProps> {
  public render() {
    const { children, ...restProps } = this.props;
    return (
      <Typography md="Body1" {...restProps}>
        {children}
      </Typography>
    );
  }
}
