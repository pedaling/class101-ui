import React from "react";
import { IconProps } from '../index';
export default class SvgFullScreen extends React.PureComponent<IconProps> {
  public static defaultProps: Partial<IconProps> = {
    fillColor: '#3E4042',
    size: 24
  };

  public render() {
    return <svg width={this.props.size} height={this.props.size} viewBox="0 0 24 24"><path fill={this.props.fillColor} fillRule="evenodd" d="M4 10V4h6v2H6v4H4zm0 4h2v2.5L8.5 14l1.5 1.5L7.5 18H10v2H4v-6zm16-4h-2V7.5L15.5 10 14 8.5 16.5 6H14V4h6v6zm0 4v6h-6v-2h4v-4h2z" /></svg>;
  }

}