import React from "react";
import { IconProps } from '../index';
export default class SvgCrown extends React.PureComponent<IconProps> {
  public static defaultProps: Partial<IconProps> = {
    fillColor: '#3E4042',
    accentColor: '#DDE0E2',
    size: 24
  };

  public render() {
    return <svg width={this.props.size} height={this.props.size} style={this.props.style} className={this.props.className} viewBox="0 0 24 24"><path fill={this.props.fillColor} fillRule="evenodd" d="M15.96 11.04L21 6v14H3V6l5.04 5.04L12 4l3.96 7.04z" /></svg>;
  }

}