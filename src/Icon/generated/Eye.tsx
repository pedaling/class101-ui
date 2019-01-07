import React from "react";
import { IconProps } from '../index';
export default class SvgEye extends React.PureComponent<IconProps> {
  public static defaultProps: Partial<IconProps> = {
    fillColor: '#3E4042',
    size: 24
  };

  public render() {
    return <svg width={this.props.size} height={this.props.size} viewBox="0 0 24 24"><path fill={this.props.fillColor} fillRule="evenodd" d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8zm2.31 0l.104.165a17.523 17.523 0 0 0 1.92 2.467C7.334 16.765 9.572 18 12 18s4.666-1.235 6.666-3.368A17.523 17.523 0 0 0 20.69 12a17.523 17.523 0 0 0-2.025-2.632C16.666 7.235 14.428 6 12 6S7.334 7.235 5.334 9.368A17.523 17.523 0 0 0 3.31 12zM12 8a1 1 0 0 1 0 2 2 2 0 1 0 2 2 1 1 0 0 1 2 0 4 4 0 1 1-4-4z" /></svg>;
  }

}