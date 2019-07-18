import React from "react";
import { IconProps } from '../index';
export default class SvgQuote extends React.PureComponent<IconProps> {
  public static defaultProps: Partial<IconProps> = {
    fillColor: '#3E4042',
    accentColor: '#DDE0E2',
    size: 24
  };

  public render() {
    return <svg width={this.props.size} height={this.props.size} style={this.props.style} className={this.props.className} viewBox="0 0 24 24"><path fill={this.props.fillColor} fillRule="evenodd" d="M19 5h-2.667C14.111 8.805 13 11.805 13 14v.5a4.5 4.5 0 009 0 4.5 4.5 0 00-4.5-4.5H17l2-5zM8 5H5.333C3.111 8.805 2 11.805 2 14v.5a4.5 4.5 0 009 0A4.5 4.5 0 006.5 10H6l2-5z" /></svg>;
  }

}