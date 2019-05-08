import React, { PureComponent } from 'react';

import Typography, { TypoProps } from '.';

export default class Subtitle1 extends PureComponent<TypoProps> {
  public render() {
    const { children, ...restProps } = this.props;
    return (
      <Typography md="Subtitle1" {...restProps}>
        {children}
      </Typography>
    );
  }
}
