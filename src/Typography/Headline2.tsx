import React, { PureComponent } from 'react';

import Typography, { HeadlineTypoProps } from '.';

export default class Headline2 extends PureComponent<HeadlineTypoProps> {
  public render() {
    const { children, ...restProps } = this.props;
    return (
      <Typography md="Headline2" {...restProps}>
        {children}
      </Typography>
    );
  }
}
