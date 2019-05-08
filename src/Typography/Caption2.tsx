import React, { PureComponent } from 'react';

import Typography, { TypoProps } from '.';

export default class Caption2 extends PureComponent<TypoProps> {
  public render() {
    const { children, ...restProps } = this.props;
    return (
      <Typography md="Caption2" {...restProps}>
        {children}
      </Typography>
    );
  }
}
