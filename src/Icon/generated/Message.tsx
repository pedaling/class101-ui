import React from "react";
import { IconProps } from '../index';
export default class SvgMessage extends React.PureComponent<IconProps> {
  public static defaultProps: Partial<IconProps> = {
    fillColor: '#3E4042',
    accentColor: '#DDE0E2',
    size: 24
  };

  public render() {
    return <svg width={this.props.size} height={this.props.size} style={this.props.style} className={this.props.className} viewBox="0 0 24 24"><path fill={this.props.fillColor} fillRule="evenodd" d="M20 4c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2l.01-12c0-1.1.89-2 1.99-2h16zM6.555 7.168a1 1 0 00-1.11 1.664l6 4a1 1 0 001.11 0l6-4a1 1 0 10-1.11-1.664L12 10.798l-5.445-3.63z" /></svg>;
  }

}