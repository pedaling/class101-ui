import React from "react";
import { IconProps } from '../index';
export default class SvgLockOutline extends React.PureComponent<IconProps> {
  public static defaultProps: Partial<IconProps> = {
    fillColor: '#3E4042',
    size: 24
  };

  public render() {
    return <svg width={this.props.size} height={this.props.size} viewBox="0 0 24 24"><path fill={this.props.fillColor} fillRule="evenodd" d="M11 16.732a2 2 0 1 1 2 0V18a1 1 0 0 1-2 0v-1.268zM6 10V7a6 6 0 1 1 12 0v3h1c.667 0 1 .333 1 1v10c0 .667-.333 1-1 1H5c-.667 0-1-.333-1-1V11c0-.667.333-1 1-1h1zm2 0h8V7a4 4 0 1 0-8 0v3zm-2 2v8h12v-8H6z" /></svg>;
  }

}