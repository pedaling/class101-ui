import React from "react";
import { IconProps } from '../index';
export default class SvgNaver extends React.PureComponent<IconProps> {
  public static defaultProps: Partial<IconProps> = {
    fillColor: '#3E4042',
    accentColor: '#DDE0E2',
    size: 24
  };

  public render() {
    return <svg width={this.props.size} height={this.props.size} style={this.props.style} className={this.props.className} viewBox="0 0 24 24"><path fill={this.props.fillColor} fillRule="evenodd" d="M3 3h18v18H3V3zm10.431 13.117H16.5V7.883h-3.024v4.258l-2.898-4.258H7.5v8.236h3.033v-4.266l2.898 4.265z" /></svg>;
  }

}