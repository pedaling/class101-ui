import React from "react";
import { IconProps } from '../index';
export default class SvgPlay extends React.PureComponent<IconProps> {
  public static defaultProps: Partial<IconProps> = {
    fillColor: '#3E4042',
    accentColor: '#DDE0E2',
    size: 24
  };

  public render() {
    return <svg width={this.props.size} height={this.props.size} style={this.props.style} className={this.props.className} viewBox="0 0 24 24"><path fill={this.props.fillColor} fillRule="evenodd" d="M5 19.29V4.71a1 1 0 011.49-.872l12.96 7.29a1 1 0 010 1.744l-12.96 7.29A1 1 0 015 19.29z" /></svg>;
  }

}