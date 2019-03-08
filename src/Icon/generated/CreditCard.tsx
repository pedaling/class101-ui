import React from "react";
import { IconProps } from '../index';
export default class SvgCreditCard extends React.PureComponent<IconProps> {
  public static defaultProps: Partial<IconProps> = {
    fillColor: '#3E4042',
    size: 24
  };

  public render() {
    return <svg width={this.props.size} height={this.props.size} style={this.props.style} className={this.props.className} viewBox="0 0 24 24"><g fill={this.props.fillColor} fillRule="evenodd"><path d="M4 12v6h16v-6H4zm0-4h16V6H4v2zM3 4h18c.667 0 1 .333 1 1v14c0 .667-.333 1-1 1H3c-.667 0-1-.333-1-1V5c0-.667.333-1 1-1z" /><path d="M6 14h4v2H6z" /></g></svg>;
  }

}