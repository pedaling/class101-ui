import React from "react";
import { IconProps } from '../index';
export default class SvgCoupon extends React.PureComponent<IconProps> {
  public static defaultProps: Partial<IconProps> = {
    fillColor: '#3E4042',
    accentColor: '#DDE0E2',
    size: 24
  };

  public render() {
    return <svg width={this.props.size} height={this.props.size} style={this.props.style} className={this.props.className} viewBox="0 0 24 24"><path fill={this.props.fillColor} fillRule="evenodd" d="M15 18h5v-3.17a3.001 3.001 0 0 1 0-5.66V6h-5v1a1 1 0 0 1-2 0V6H4v3.17a3.001 3.001 0 0 1 0 5.66V18h9v-1a1 1 0 0 1 2 0v1zM2 10V5a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1 1 1 0 0 0 0 2 1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1 1 1 0 0 0 0-2 1 1 0 0 1-1-1zm12 0a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1z" /></svg>;
  }

}