import React, { PureComponent } from 'react';

import Typography, { TypoProps } from '.';

export default class Body2 extends PureComponent<TypoProps> {
  public render() {
    const { children, ...restProps } = this.props;
    return (
      <Typography md="Body2" {...restProps}>
        {children}
      </Typography>
    );
  }
}
