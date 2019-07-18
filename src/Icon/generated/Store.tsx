import React from "react";
import { IconProps } from '../index';
export default class SvgStore extends React.PureComponent<IconProps> {
  public static defaultProps: Partial<IconProps> = {
    fillColor: '#3E4042',
    accentColor: '#DDE0E2',
    size: 24
  };

  public render() {
    return <svg width={this.props.size} height={this.props.size} style={this.props.style} className={this.props.className} viewBox="0 0 24 24"><path fill={this.props.fillColor} fillRule="evenodd" d="M4.387 8h15.226l-1.334-4H5.721L4.387 8zM20 10H4a2 2 0 104 0h2a2 2 0 104 0h2a2 2 0 104 0zM6 14v6h12v-6a3.99 3.99 0 01-3-1.354A3.99 3.99 0 0112 14a3.99 3.99 0 01-3-1.354A3.99 3.99 0 016 14zm14-.535v7.82c0 .395-.448.715-1 .715H5c-.552 0-1-.32-1-.714v-7.821A3.998 3.998 0 012 10V9a1 1 0 01.051-.316l2-6A1 1 0 015 2h14a1 1 0 01.949.684l2 6A1 1 0 0122 9v1c0 1.48-.804 2.773-2 3.465z" /></svg>;
  }

}