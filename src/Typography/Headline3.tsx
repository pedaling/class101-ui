import React, { PureComponent } from 'react';

import Typography, { HeadlineTypoProps } from '.';

export default class Headline3 extends PureComponent<HeadlineTypoProps> {
  public render() {
    const { children, ...restProps } = this.props;
    return (
      <Typography md="Headline3" {...restProps}>
        {children}
      </Typography>
    );
  }
}
