import React, { PureComponent } from 'react';

import Typography, { HeadlineTypoProps } from '.';

export default class Headline1 extends PureComponent<HeadlineTypoProps> {
  public render() {
    const { children, ...restProps } = this.props;
    return (
      <Typography md="Headline1" {...restProps}>
        {children}
      </Typography>
    );
  }
}
